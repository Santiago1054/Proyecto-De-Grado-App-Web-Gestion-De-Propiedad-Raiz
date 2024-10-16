
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
        <nav className=" w-full bg-form my- border border-backgroundColor  flex justify-between py-7 px-20 rounded-md shadow-lg shadow-black ">
            <Link to='/' value>
                <h1 className="font-custom bg-backgroundColor text-form text-3xl border border-backgroundColor  font-extrabold  px-9  py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" >Pagina principal</h1>
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
                        <li className=' font-custom text-2xl font-extrabold px-20 py-0 text-backgroundColor '>
                            ¡Hola, {user.username}! ¡Qué gusto verte!  😁
                        </li>
                        <li>
                            <Link to='/tasks/new'
                                className="font-custom font-extrabold bg-form  shadow-md shadow-black px-4 py-4 rounded-md text-backgroundColor border border-backgroundColor cursor-pointer   hover:bg-blue-600 hover:text-white">
                                Agregar tarjeta
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className=" font-custom  font-extrabold bg-backgroundColor shadow-md shadow-black px-4 py-4 rounded-md text-form  border border-backgroundColor cursor-pointer    hover:bg-red-600 hover:text-backgroundColor hover:border-backgroundColor" onClick={() => {
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
                                className="font-custom font-extrabold bg-form  shadow-md shadow-black px-4 py-4 rounded-md text-backgroundColor border border-backgroundColor cursor-pointer   hover:bg-backgroundColor hover:text-form">
                                Inicio Sesion
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="font-custom font-extrabold bg-form  shadow-md shadow-black px-4 py-4 rounded-md text-backgroundColor border border-backgroundColor cursor-pointer   hover:bg-green-400 hover:text-backgroundColor">
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