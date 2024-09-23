
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
    const { isAuthenticated, logout, user } = useAuth()
    return (
        <nav className="bg-custom-gradient my-2  flex justify-between py-7 px-20 rounded-lg shadow-lg shadow-black ">
            <Link to='/' value>
                <h1 className=" italic text-white text-2xl shadow-lg shadow-white font-bold  px-9  py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" >Pagina principal</h1>
            </Link>

            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    /*
        ----------------------------------------------------
        Barra de navegacion cuando el usuario este logueado
        ----------------------------------------------------
----------------------------------------------------------------------------------------------------------
Cuando el usuario esta logueado tendra acceso a mas herramientas como agregar mas componentes, cerrar sesion etc.
----------------------------------------------------------------------------------------------------------

-------------------------------------
componentes relacionados: 
________________________________________________________________________________________________________

<Link to='/tasks/new'
    className="bg-custom-gradient-two shadow-md shadow-black px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60">
    Agregar tarjeta
</Link>

________________________________________________________________________________________________________

<li>
    <Link to='/' className="bg-white shadow-md shadow-black px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60" onClick={() => {
    logout()
            }}>
     Salir
    </Link>
</li>
________________________________________________________________________________________________________

-------------------------------------
*/
                    <>
                        <li className=' font-sans text-2xl font-bold px-20 py-0  '>
                            ¡Hola, {user.username}! ¡Qué gusto verte!  😁
                        </li>
                        <li>
                            <Link to='/tasks/new'
                                className="bg-custom-gradient-two shadow-md shadow-black px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60">
                                Agregar tarjeta
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="bg-white shadow-md shadow-black px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60" onClick={() => {
                                logout()
                            }}>
                                Salir
                            </Link>
                        </li>

                    </>
                ) : (
                    /*
       ----------------------------------------------------
        Barra de navegacion cuando el usuario no este logueado
        ----------------------------------------------------
----------------------------------------------------------------------------------------------------------
La barra de navegacion tiene autentificacion de inicio sesion, pero algunas funcionalidades solo se pueden usar cuando se esta iniciado sesion de lo contrario debe iniciar sesion o registrarse primero
----------------------------------------------------------------------------------------------------------

*/
                    <>
                        <li>
                            <Link to='/login'
                                className="font-medium bg-custom-gradient-two px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60">
                                Inicio Sesion
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="font-medium bg-white px-3 py-2 rounded-sm text-black cursor-pointer   hover:opacity-80 delay-60">
                                Registrate
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>

    )
}

export default Navbar