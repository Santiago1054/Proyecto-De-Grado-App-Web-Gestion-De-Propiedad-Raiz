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
            <div className='bg-white w-full max-w-2xl p-10 rounded-md  outline outline-2 outline-blue-500 shadow-2xl shadow-sky-500'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-3xl font-bold text-black'>¡Nuevo por aquí, eh? 😎</h1>
                <br />

                <form onSubmit={onSubmit} >
                    <input type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2"
                        placeholder='Nombre de usuario'
                    />
                    {errors.username && (<p className='text-red-500'>Digita un nombre de usuario</p>)}

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
                            Registrarse
                        </button>
                    </div>
                </form>
                <br />
                <br />
                <p className='font-medium flex gap-x-2 justify-between text-black'>
                    ¿Ya tienes una cuenta? ¡Qué bien!<Link to="/login" className='font-medium text-blackcursor-pointer   hover:text-sky-500'>Iniciar Sesion</Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage