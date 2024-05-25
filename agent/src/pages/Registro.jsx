import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const { singup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        singup(values)

    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-white w-full max-w-2xl p-10 rounded-md'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-2xl font-bold text-black'>Register</h1>
                <br/>
                
                <form onSubmit={onSubmit} >
                    <input type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Username'
                    />
                    {errors.username && (<p className='text-red-500'>Username is required</p>)}

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
                        Register
                    </button>
                    </div>
                </form>
                <br/>
                <br/>
                <p className='flex gap-x-2 justify-between text-black'>
                    Already have an account? <Link to="/login" className='text-sky-600'>Login</Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage