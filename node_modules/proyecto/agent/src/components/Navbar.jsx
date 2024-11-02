
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

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
    const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

    {/*handleLogOutClick permite abrir el modal para cerrar sesion */ }
    const handleLogOutClick = () => {
        setIsLogOutModalOpen(true);
    };

    {/*cancelLogOut permite cerrar el modal*/ }
    const cancelLogOut = () => {
        setIsLogOutModalOpen(false);
    };

    {/*confirmLogOut permite confirmar la accion y cerrar el modal*/ }
    const confirmLogOut = () => {
        logout()
        setIsLogOutModalOpen(false)

    };

    return (
        <nav name="Barra de navegacion"
            className="w-full sticky top-0  shadow-lg shadow-blue-300 flex justify-between py-3 px-20 z-50">

            {/*Nombre de la pagina ubicado a la izquierda del Navbar*/}
            <Link name="Logo Easify"
                to='/'>
                <h1 className="font-custom text-form text-7xl font-extrabold cursor-pointer hover:opacity-90 hover:text-blue-600">
                    + Easify ❏
                </h1>
            </Link>

            <ul className="flex gap-x-2">
                {/*Si isAuthenticated (esta Autenticado) va a mostrar los siguientes elementos solo si el usuario tiene una cuenta e inicio sesion */}
                {isAuthenticated ? (
                    <>
                        <li className="font-sans text-3xl font-bold px-20 py-4 text-black">
                            ¡Hola, {user.username}! 😁
                        </li>
                        <li>
                            {/*Agregar propiedad: como su nombre lo dice es para crear una nueva propiedad dentro del espacio de trabajo, este lo redirige a la ruta /tasks/new que es el formulario*/}
                            <Link name="Agregar propiedad"
                                to='/tasks/new'
                                className="flex font-sans font-extrabold bg-form shadow-md px-4 py-4 rounded-md text-backgroundColor hover:bg-blue-600 hover:text-white">
                                Agregar propiedad
                            </Link>
                        </li>
                        <li>
                            {/*Este boton abre el modal para cerrar sesion*/}
                            <button name="Modal para cerrar sesion"
                                className="flex font-sans font-extrabold bg-backgroundColor shadow-md px-4 py-4 rounded-md text-form hover:bg-red-600 hover:text-backgroundColor"
                                onClick={handleLogOutClick}>

                                Salir

                            </button>

                            {/* Modal de confirmación */}
                            {isLogOutModalOpen && (
                                <div name="cerrar sesion"
                                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                        <br />
                                        <h2 className="text-2xl font-bold text-black text-center">
                                            ¿Estás seguro de que deseas salir? 🥺😭
                                        </h2>
                                        <br />
                                        <div className="mt-4 flex justify-end space-x-3 ">
                                            <button
                                                className="text-lg px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                                onClick={cancelLogOut}
                                            >
                                                Cancelar
                                            </button>
                                            <Link to='/'
                                                className="flex font-sans font-extrabold bg-backgroundColor shadow-md px-4 py-4 rounded-md text-form hover:bg-red-600 hover:text-backgroundColor"
                                                onClick={confirmLogOut}>
                                                Confirmar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </li>
                    </>
                ) : (
                    <>
                        {/*Si isAuthenticated (no esta Autenticado) va a mostrar los siguientes elementos solo si el usuario no tiene una cuenta o no a iniciado sesion */}
                        <li>
                            <Link name="Inicio Sesión"
                                to='/login'
                                className="flex font-sans font-extrabold bg-form shadow-md px-4 py-4 rounded-md text-backgroundColor hover:bg-blue-600 hover:text-white">
                                Inicio Sesión
                            </Link>
                        </li>
                        <li>
                            <Link name="Registrate"
                                to='/register'
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