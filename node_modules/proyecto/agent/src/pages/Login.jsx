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
            <div className='bg-custom-gradient-two max-w-xl w-full p-10 rounded-md'>
                {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-3xl font-bold text-black'>Bienvenido 😁🎉🎉</h1>
                <br />
                <form onSubmit={onSubmit} >
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Correo'
                    />
                    {errors.email && (<p className='text-red-500'>Email is required</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Contraseña'
                    />
                    {errors.password && (<p className='text-red-500'>Password is required</p>)}
                    <br />
                    <br />

                    <div className='flex justify-center'>
                        <button type="submit" className="font-medium bg-custom-gradient text-white px-5 py-2 rounded-md justify-center cursor-pointer   hover:opacity-80 delay-60">
                            Ingresar
                        </button>
                    </div>
                </form>
                <br />
                <br />
                <p className='font-medium flex gap-x-2 justify-between text-black'>
                    ¿¡No te has registrado!? ¡Qué estás esperando! 😱<Link to="/register" className='font-medium text-black cursor-pointer   hover:text-sky-500'>Registrate aqui</Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage