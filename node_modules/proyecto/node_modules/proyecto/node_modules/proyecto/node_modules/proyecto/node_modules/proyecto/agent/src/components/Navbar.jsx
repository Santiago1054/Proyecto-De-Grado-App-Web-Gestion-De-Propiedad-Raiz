
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

/*
        -------------------------------
        componente: Barra de navegacion
        -------------------------------
----------------------------------------------------------------------------------------------------------
La barra de navegacion tiene autentificacion de inicio sesion, pero algunas funcionalidades solo se pueden usar cuando se esta iniciado sesion de lo contrario debe iniciar sesion o registrarse primero
----------------------------------------------------------------------------------------------------------
-------------------------------------
Variable relacionada: isAuthenticated
-------------------------------------
*/
function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <nav className="w-full sticky top-0  shadow-lg shadow-blue-300 flex justify-between py-3 px-20 z-50">
            <Link to='/'>
                <h1 className="font-custom text-form text-7xl font-extrabold cursor-pointer hover:opacity-90 hover:text-blue-600">
                    + Easify ❏
                </h1>
            </Link>

            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className="font-sans text-3xl font-bold px-20 py-4 text-black">
                            ¡Hola, {user.username}! 😁
                        </li>
                        <li>
                            <Link to='/tasks/new'
                                className="flex font-sans font-extrabold bg-form shadow-md px-4 py-4 rounded-md text-backgroundColor hover:bg-blue-600 hover:text-white">
                                Agregar tarjeta
                            </Link>
                        </li>
                        <li>
                            <Link to='/'
                                className="flex font-sans font-extrabold bg-backgroundColor shadow-md px-4 py-4 rounded-md text-form hover:bg-red-600 hover:text-backgroundColor"
                                onClick={logout}>
                                Salir
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'
                                className="flex font-sans font-extrabold bg-form shadow-md px-4 py-4 rounded-md text-backgroundColor hover:bg-blue-600 hover:text-white">
                                Inicio Sesión
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="flex font-sans font-extrabold bg-form shadow-md px-4 py-4 rounded-md text-backgroundColor hover:text-white hover:bg-green-400">
                                Registrate
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}




export default Navbar