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
            <div className='bg-white max-w-xl w-full p-10 rounded-md outline outline-2 outline-blue-500 shadow-2xl shadow-sky-500'>
                {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-3xl font-bold text-form'>Bienvenido </h1>
                <br />
                <form onSubmit={onSubmit} >
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Correo'
                    />
                    {errors.email && (<p className='text-red-500'>Digita una dirección de correo electrónico.</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Contraseña'
                    />
                    {errors.password && (<p className='text-red-500'>Digita una contraseña</p>)}
                    <br />
                    <br />

                    <div className='flex justify-center'>
                        <button type="submit" className="font-extrabold  text-form px-5 py-2 rounded-md justify-center border border-form cursor-pointer   hover:bg-form hover:text-white duration-200">
                            Ingresar
                        </button>
                    </div>
                </form>
                <br />
                <br />
                <h6 className='font-medium flex  justify-between text-form'>
                    ¿¡No te has registrado!? ¡Qué estás esperando! <Link to="/register" className='font-medium text-black cursor-pointer   hover:text-sky-500'>Registrate aqui</Link>
                </h6>
            </div>
        </div>
    )
}
export default LoginPage