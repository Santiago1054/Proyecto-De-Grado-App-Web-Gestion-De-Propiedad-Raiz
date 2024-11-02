
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
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    

    {/*Esta funcionalidad permite abrir el modal para eliminar una tarjeta/propiedad    */ }
    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };
    {/*Esta funcionalidad permite cerrar el modal para eliminar una tarjeta/propiedad    */ }
    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
    };
    const confirmDelete = () => {
        logout()
        setIsDeleteModalOpen(false)
        
    } 
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
                                Agregar propiedad
                            </Link>
                        </li>
                        <li>

                            {/*Este boton abre el modal para eliminar */}
                            <button name="Modal para Eliminar"
                                className="flex font-sans font-extrabold bg-backgroundColor shadow-md px-4 py-4 rounded-md text-form hover:bg-red-600 hover:text-backgroundColor"
                                onClick={handleDeleteClick}>
                                
                                    Salir
                                
                            </button>




                            {/* Modal de confirmación de eliminación */}
                            {
                                isDeleteModalOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                            <br />
                                            <h2 className="text-2xl font-bold text-black text-center">
                                                ¿Estás seguro de que deseas salir? 🥺😭
                                            </h2>
                                            <br />
                                            

                                           

                                            <div className="mt-4 flex justify-end space-x-3 ">
                                                <button
                                                    className="text-lg px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                                    onClick={cancelDelete}
                                                >
                                                    Cancelar
                                                </button>
                                                <Link to='/'
                                                    className="flex font-sans font-extrabold bg-backgroundColor shadow-md px-4 py-4 rounded-md text-form hover:bg-red-600 hover:text-backgroundColor"
                                                    onClick={confirmDelete}>
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