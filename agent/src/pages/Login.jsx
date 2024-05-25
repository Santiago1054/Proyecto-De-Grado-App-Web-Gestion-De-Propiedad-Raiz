import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function LoginPage() {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { signin, errors: signinErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })
    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center '>
            <div className='bg-white max-w-md w-full p-10 rounded-md'>
                {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-2xl font-bold text-black'>Login</h1>
                <br/>
                <form onSubmit={onSubmit} >
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Email'
                    />
                    {errors.email && (<p className='text-red-500'>Email is required</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Password'
                    />
                    {errors.password && (<p className='text-red-500'>Password is required</p>)}
                    <br/>
                    <br/>
                    
                    <div className='flex justify-center'>
                    <button type="submit" className="bg-blue-600 px-5 py-2 rounded-md justify-center">
                        Login
                    </button>
                    </div>
                </form>
                <br/>
                <br/>
                <p className='flex gap-x-2 justify-between text-black'>
                    Don't hava an account? <Link to="/register" className='text-sky-600'>Sign up</Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage