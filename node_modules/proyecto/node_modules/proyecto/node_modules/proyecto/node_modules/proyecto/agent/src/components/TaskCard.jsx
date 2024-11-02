import { useTasks } from "../context/TaskContext"
import { Link } from 'react-router-dom'
import { useState } from "react"

import { useAuth } from "../context/AuthContext"
import { useGlobalContext } from "../context/GlobalContext";



function ResetButton() {
    const { setResults } = useGlobalContext();

    const resetResults = () => {
        setResults(""); // Reinicia el valor de `results`
        console.log("Valor reiniciado en el contexto.");
    };

    return (
        <button name="Boton ver todo"
            type="button"
            onClick={resetResults}
            className=" py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-form rounded-lg border border-backgroundColor  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-backgroundColor dark:border-backgroundColor dark:hover:text-form dark:hover:bg-backgroundColor ">
            Ver todas las tarjetas
        </button>
    );
}



function TaskDirection({ task }) {
    const { setResults } = useGlobalContext();

    const handleClick = () => {
        setResults(task.direccionHogar); // Guarda el valor en el contexto
        console.log("Valor guardado en el contexto:", task.direccionHogar);
    };
    return (
        <li>
            <button type="button" onClick={handleClick} className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white duration-200">{task.municipio + ': ' + task.barrio + ', ' + task.direccionHogar}</button>
        </li>
    );



}
export function TaskFilter({ }) {
    const { isAuthenticated } = useAuth()
    const { tasks } = useTasks()
    const { results } = useGlobalContext(); // Accede al valor en el contexto

    // Estado para controlar el dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleReset = () => {
        results = ""
        console.log(results)
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (

        <>
            {/* Si el usuario esta autenticado muestre el siguientre fragmento */}

            {
                isAuthenticated ? (

                    /* Este es el sidebar que se puede ver en la pagina despues de iniciar sesion*/

                    <aside name="side bar"
                        id="cta-button-sidebar"
                        className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                        aria-label="Sidebar">
                        <div className="h-full px-3 py-4  overflow-y-auto bg-blue-600 ">
                            <ul className="space-y-2 font-medium">

                                {/*Al hacer click en este elemento, lleva al usuario a la pagina principal/home page */}
                                <li name="pagina principal">
                                    <Link to="/" className="flex items-center p-2  scale-95 text-backgroundColor rounded-lg hover:bg-backgroundColor duration-200 hover:text-form group hover:scale-100  ">
                                        <a href="" className="flex items-center p-3  rounded-lg">
                                            <svg className="lex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            <span className="ms-3">Página principal</span>
                                        </a>
                                    </Link>
                                </li>

                                {/*Al hacer click en este elemento, lleva al usuario a su espacio de trabajo */}
                                <li name="Propiedades">
                                    <Link to="/tasks" className="flex items-center p-2  scale-95 text-backgroundColor rounded-lg hover:bg-backgroundColor duration-200 hover:text-form group hover:scale-100">
                                        <a href="" className="flex items-center p-3  rounded-lg">
                                            <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap ">Propiedades</span>
                                            
                                        </a>
                                    </Link>
                                </li>


                                <li name="Nueva propiedad">
                                    <Link to="/tasks/new" className="flex items-center p-2  scale-95 text-backgroundColor rounded-lg hover:bg-backgroundColor duration-200 hover:text-form group hover:scale-100">
                                        <a href="" className="flex items-center p-3  rounded-lg">
                                            <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap ">Agregar propiedad</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <br></br>

                            {/*Este elemento es un conjunto de elementos que estan ralacionados con los filtros*/}
                            <div name="Contenedor de filtros"
                                className="w-full max-w-sm  bg-form outline outline-2 rounded-lg shadow-md shadow-white  ">
                                <div className="flex flex-col items-center pb-10 ">
                                    <br></br>

                                    {/*Busca la direccion de la casa*/}
                                    <form name="form de los filtros" className="w-44 mx-96 ">
                                        <h5 className="mb-1 text-lg font-bold text-backgroundColor  font-sans ">Filtros por dirección</h5>

                                        <br></br>

                                        {/*Este elemento permite abrir y cerrar el drop down*/}
                                        <div name="Drop down" onClick={toggleDropdown}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                            Propiedades
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </div>

                                        {/*Si el drop down esta abierto muestra esto*/}
                                        {isDropdownOpen && (
                                            <>
                                                <br></br>
                                                <br></br>
                                                <div name="contenedor de cada opcion" className="custom-scrollbar flex z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-h-60 overflow-y-auto">
                                                    <ul className="py-2 text-sm text-gray-700">
                                                        {tasks.map(task => (
                                                            <TaskDirection task={task} key={task._id} />
                                                        ))}
                                                    </ul>
                                                </div>


                                            </>
                                        )}
                                        <br></br>
                                        <br></br>
                                        {/*Este elemento permite reiniciar el valor de la variable global results a un string vacio, lo que permite ver todas las propiedades creadas*/}






                                        <div className="flex justify-center">
                                            <ResetButton />
                                        </div>
                                        <br></br>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </aside>
                ) : (
                    <>

                    </>
                )
            }
        </>


    )
}

function TaskCard({ task }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const { user } = useAuth();
    const { results } = useGlobalContext(); // Accede al valor en el contexto
    {/*Esta funcionalidad permite abrir el modal para eliminar una tarjeta/propiedad    */ }
    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };
    {/*Esta funcionalidad permite cerrar el modal para eliminar una tarjeta/propiedad    */ }
    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
    };
    {/*Esta funcionalidad permite abrir el modal para ver mas informacion sobre una tarjeta/propiedad    */ }
    const openDetailModal = () => {
        setIsDetailModalOpen(true);
    };
    {/*Esta funcionalidad permite cerrar el modal para ver mas informacion sobre una tarjeta/propiedad     */ }
    const closeDetailModal = () => {
        setIsDetailModalOpen(false);
    };
    {/*Esta condicional permite mostrar todas las tarjetas*/ }
    {/*
            Si results es igual a un string vacio ("")

                Entonces
                
                    muestra el siguiente componente
        */}

    if (results == "") {
        const { deleteTask } = useTasks()
        return (
            <>
                {/*Este elemento es la base de la tarjeta/propiedad*/}
                <div name="Base de la tarjeta/propiedad"
                    className="w-auto h-auto max-w-8xl bg-white rounded-lg hover:outline hover:outline-sky-400 hover:outline-2 hover:shadow-2xl hover:shadow-blue-400 hover:bg-white duration-200">

                    {/*Este elemento muestra la imagen que le asigno el usuario*/}
                    <img name="imagen"
                        className="rounded-t-lg w-full h-fit aspect-video" src={task.imagen} alt="" />

                    {/* Botón para abrir el modal de detalles */}
                    <button name="ver detalles"
                        className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-form  hover:scale-105 duration-200"
                        onClick={openDetailModal}
                    >
                        Ver Detalles

                    </button>

                    {/*Este elemento muestra informacion referente a la propiedad*/}
                    <div name="contenido de la  tarjeta"
                        className="p-2">
                        <h5 className="font-extrabold mb-2 text-4xl tracking-tight text-form text-justify px-10">{task.municipio + ', ' + task.departamento}</h5>
                        <h5 className="font-sans mb-2 text-1xl font-bold tracking-tight text-form text-justify px-10">{task.barrio + ', ' + task.direccionHogar}</h5>

                        {/*inicio de la Separacion*/}
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 px-10" />
                        {/*fin de la Separacion*/}

                        <h5 className=" font-sans mb-3 font-semibold text-2xl text-form  text-justify px-10">Fecha de creación: </h5>
                        <h5 className=" font-sans mb-3 font-semibold text-1xl text-form  text-justify px-10">{new Date(task.createdAt).toLocaleString()}</h5>

                        <br></br>
                        <h5 className=" font-sans mb-3 font-semibold text-2xl text-form  text-justify px-10 ">Última modificación: </h5>
                        <h5 className=" font-sans mb-3 font-semibold text-1xl text-form  text-justify px-10 ">{new Date(task.updatedAt).toLocaleString()}</h5>

                        <br></br>
                        <br></br>

                        <div name="botones para operar cada tarjeta"
                            className="flex justify-between items-center px-10 ">

                            {/*Este elemento permite ir al formulario de actualizacion*/}
                            <Link name="actualizar"
                                to={`/tasks/${task._id}`}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Actualizar
                                </span>
                            </Link>

                            {/*Este boton abre el modal para eliminar */}
                            <button name="Modal para Eliminar"
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                onClick={handleDeleteClick}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Eliminar
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* Modal de confirmación de eliminación */}
                    {isDeleteModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                <br />
                                <h2 className="text-2xl font-bold text-black text-center">
                                    ¿Estás seguro de que deseas eliminar esta casa?
                                </h2>
                                <br />
                                <h2 className="text-xl font-semibold text-gray-800 text-center">
                                    {task.municipio + ', ' + task.departamento}
                                </h2>
                                <h2 className="text-lg font-semibold text-gray-800 text-center">
                                    {task.barrio + ', ' + task.direccionHogar}
                                </h2>
                                <br />

                                <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div>
                                        <span class="font-medium">¡IMPORTANTE!!</span> Esta acción no se puede deshacer.
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-end space-x-3 ">
                                    <button
                                        className="text-lg px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        onClick={cancelDelete}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                        onClick={() => {
                                            deleteTask(task._id);
                                        }}>

                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal de vista completa */}
                    {isDetailModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-form rounded-lg shadow-lg p-4 w-full max-w-5xl h-auto overflow-y-hidden">
                                <div className="max-h-[70vh] custom-scrollbar bg-pink-200">

                                    <img src="dog.png" alt="" className="relative top-14  " style={{ width: '500px', height: 'auto' }} />

                                    <div className="bg-form h-80">
                                        <br />
                                        <br />
                                        <br />
                                        <h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-7xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-yellow-500">¡Hola, {user.username}!  </span> </h1><h1 class="mb-4 text-5xl font-extrabold text-white md:text-5xl lg:text-5xl text-center">¡Descubre todo lo que esta propiedad tiene para ofrecerte!</h1>
                                    </div>

                                    <div className="bg-modal h-auto">
                                        <br />
                                        <br />

                                        <h5 className="font-extrabold  mb-2 text-8xl tracking-tight text-white text-justify px-10">
                                            {task.municipio + ', ' + task.departamento}
                                        </h5>

                                        <h5 className="font-sans mb-2 text-4xl font-bold tracking-tight text-white text-justify px-10">
                                            {task.barrio + ', ' + task.direccionHogar}
                                        </h5>

                                        <h5 className="font-sans mb-2 text-2xl font-normal tracking-tight text-white text-justify px-10">
                                            {task.propietario}
                                        </h5>

                                        <hr className="h-px my-8 bg-white border-0 px-10" />

                                        {/* Descripción */}

                                        <h1 className="font-sans font-extrabold mb-2 text-6xl tracking-semibold text-white text-justify px-10">
                                            Descripción
                                        </h1>

                                        <br />

                                        <p className="font-sans mb-3 font-light text-2xl text-white text-justify px-10">
                                            {task.historial}
                                        </p>

                                        <br />

                                        <h1 className="underline font-sans font-extrabold mb-2 text-5xl tracking-tight text-white text-justify px-10">
                                            Propietario
                                        </h1>
                                        <br />

                                        <h1 className="font-sans font-bold mb-2 text-2xl tracking-tight text-white text-justify px-10">
                                            {task.propietario}
                                        </h1>

                                        <br />

                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Número: ' + task.propietarioNumero}
                                        </h1>

                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Correo: ' + task.propietarioEmail}
                                        </h1>
                                        <hr className="h-px my-8 bg-gray-200 border-0  px-10" />

                                        {/* Inquilino */}
                                        <h1 className="underline font-sans font-extrabold mb-2 text-5xl tracking-tight text-white text-justify px-10">
                                            Inquilino
                                        </h1>
                                        <br />
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-white text-justify px-10">
                                            {task.inquilinos}
                                        </h1>
                                        <br />
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Número: ' + task.inquilinosNumero}
                                        </h1>
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Correo: ' + task.inquilinosEmail}
                                        </h1>
                                        <br></br>

                                        <div className="flex justify-center">
                                            <img className="rounded-t-lg max-w-5xl h-fit aspect-video " src={task.imagen} alt="" />
                                        </div>
                                        <br></br>
                                        <h1 className="font-sans font-extrabold mb-2 text-4xl  tracking-tight text-white text-justify px-10">
                                            Documento asignado
                                        </h1>
                                        <br></br>

                                        <div className="  mb-2 text-5xl tracking-tight px-10 rounded-lg flex justify-center">
                                            <iframe name="Documento asignado "

                                                src={task.doc}
                                                width="90%"
                                                height="640"
                                                title="Vista previa del documento"
                                                style={{
                                                    border: "solid",
                                                    borderRadius: "2%",
                                                    imageRendering: 'auto',
                                                    willChange: 'transform',
                                                    backfaceVisibility: 'hidden',
                                                    filter: 'none',
                                                    margin: "0 auto", // Asegura que el iframe tenga un margen automático
                                                }}
                                            />
                                        </div>

                                        <br></br>

                                        <h1 className="font-sans font-extrabold mb-2 text-5xl  tracking-tight text-white text-justify px-10">
                                            Certificado del gas
                                        </h1>

                                        <br></br>

                                        <div className="mb-2 text-5xl tracking-tight px-10 rounded-lg flex justify-center">
                                            <iframe name="Certificado del gas "
                                                src={task.certify}
                                                width="90%"
                                                height="640"
                                                title="Vista previa del documento"
                                                style={{
                                                    border: "solid",
                                                    borderRadius: "2%",
                                                    imageRendering: 'auto',
                                                    willChange: 'transform',
                                                    backfaceVisibility: 'hidden',
                                                    filter: 'none',
                                                    margin: "0 auto", // Asegura que el iframe tenga un margen automático
                                                }}
                                            />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>

                                {/* Botón de cerrar */}
                                <div className="mt-4 flex justify-end">
                                    <button name="cerrar modal de detalles"
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        onClick={closeDetailModal}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-form dark:border-backgroundColor dark:hover:border-backgroundColor">
                    <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  hover:bg-gray-50 dark:hover:bg-white group">
                            <button data-tooltip-target="tooltip-home" type="button">
                                <svg className="w-8 h-8 mb-1 text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                <span className="sr-only">Home</span>
                            </button>
                        </Link>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <div className="flex items-center justify-center">
                            <Link to="/tasks/new" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <button data-tooltip-target="tooltip-new" type="button">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                    <span className="sr-only">New item</span>
                                </button>
                            </Link>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Create new item
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Link to="/tasks" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-white group">
                            <button data-tooltip-target="tooltip-profile" type="button">
                                <svg className="flex-shrink-0 w-8 h-8  transition duration-75  text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="sr-only">Profile</span>
                            </button>
                        </Link>
                        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Profile
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>



            </>

        )
    } else if (task.direccionHogar.toLowerCase() == results.toLowerCase()) {
        const { deleteTask } = useTasks()
        return (

            <>
                {/*Este elemento es la base de la tarjeta/propiedad*/}
                <div name="Base de la tarjeta/propiedad"
                    className="w-auto h-auto max-w-8xl bg-white rounded-lg hover:outline hover:outline-sky-400 hover:outline-2 hover:shadow-2xl hover:shadow-blue-400 hover:bg-white duration-200">

                    {/*Este elemento muestra la imagen que le asigno el usuario*/}
                    <img name="imagen"
                        className="rounded-t-lg w-full h-fit aspect-video" src={task.imagen} alt="" />

                    {/* Botón para abrir el modal de detalles */}
                    <button name="ver detalles"
                        className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-form  hover:scale-105 duration-200"
                        onClick={openDetailModal}
                    >
                        Ver Detalles

                    </button>

                    {/*Este elemento muestra informacion referente a la propiedad*/}
                    <div name="contenido de la  tarjeta"
                        className="p-2">
                        <h5 className="font-extrabold mb-2 text-4xl tracking-tight text-form text-justify px-10">{task.municipio + ', ' + task.departamento}</h5>
                        <h5 className="font-sans mb-2 text-1xl font-bold tracking-tight text-form text-justify px-10">{task.barrio + ', ' + task.direccionHogar}</h5>

                        {/*inicio de la Separacion*/}
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 px-10" />
                        {/*fin de la Separacion*/}

                        <h5 className=" font-sans mb-3 font-semibold text-2xl text-form  text-justify px-10">Fecha de creación: </h5>
                        <h5 className=" font-sans mb-3 font-semibold text-1xl text-form  text-justify px-10">{new Date(task.createdAt).toLocaleString()}</h5>

                        <br></br>
                        <h5 className=" font-sans mb-3 font-semibold text-2xl text-form  text-justify px-10 ">Última modificación: </h5>
                        <h5 className=" font-sans mb-3 font-semibold text-1xl text-form  text-justify px-10 ">{new Date(task.updatedAt).toLocaleString()}</h5>

                        <br></br>
                        <br></br>

                        <div name="botones para operar cada tarjeta"
                            className="flex justify-between items-center px-10 ">

                            {/*Este elemento permite ir al formulario de actualizacion*/}
                            <Link name="actualizar"
                                to={`/tasks/${task._id}`}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Actualizar
                                </span>
                            </Link>

                            {/*Este boton abre el modal para eliminar */}
                            <button name="Modal para Eliminar"
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                onClick={handleDeleteClick}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Eliminar
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* Modal de confirmación de eliminación */}
                    {isDeleteModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                <br />
                                <h2 className="text-2xl font-bold text-black text-center">
                                    ¿Estás seguro de que deseas eliminar esta casa?
                                </h2>
                                <br />
                                <h2 className="text-xl font-semibold text-gray-800 text-center">
                                    {task.municipio + ', ' + task.departamento}
                                </h2>
                                <h2 className="text-lg font-semibold text-gray-800 text-center">
                                    {task.barrio + ', ' + task.direccionHogar}
                                </h2>
                                <br />

                                <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div>
                                        <span class="font-medium">¡IMPORTANTE!!</span> Esta acción no se puede deshacer.
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-end space-x-3 ">
                                    <button
                                        className="text-lg px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        onClick={cancelDelete}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                        onClick={() => {
                                            deleteTask(task._id);
                                        }}>

                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal de vista completa */}
                    {isDetailModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-form rounded-lg shadow-lg p-4 w-full max-w-5xl h-auto overflow-y-hidden">
                                <div className="max-h-[70vh] overflow-y-auto bg-pink-200">

                                    <img src="dog.png" alt="" className="relative top-14  " style={{ width: '500px', height: 'auto' }} />

                                    <div className="bg-form h-80">
                                        <br />
                                        <br />
                                        <br />
                                        <h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-7xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-yellow-500">¡Hola, {user.username}!  </span> </h1><h1 class="mb-4 text-5xl font-extrabold text-white md:text-5xl lg:text-5xl text-center">¡Descubre todo lo que esta propiedad tiene para ofrecerte!</h1>
                                    </div>

                                    <div className="bg-modal h-auto">
                                        <br />
                                        <br />

                                        <h5 className="font-extrabold  mb-2 text-8xl tracking-tight text-white text-justify px-10">
                                            {task.municipio + ', ' + task.departamento}
                                        </h5>

                                        <h5 className="font-sans mb-2 text-4xl font-bold tracking-tight text-white text-justify px-10">
                                            {task.barrio + ', ' + task.direccionHogar}
                                        </h5>

                                        <h5 className="font-sans mb-2 text-2xl font-normal tracking-tight text-white text-justify px-10">
                                            {task.propietario}
                                        </h5>

                                        <hr className="h-px my-8 bg-white border-0 px-10" />

                                        {/* Descripción */}

                                        <h1 className="font-sans font-extrabold mb-2 text-6xl tracking-semibold text-white text-justify px-10">
                                            Descripción
                                        </h1>

                                        <br />

                                        <p className="font-sans mb-3 font-light text-2xl text-white text-justify px-10">
                                            {task.historial}
                                        </p>

                                        <br />

                                        <h1 className="underline font-sans font-extrabold mb-2 text-5xl tracking-tight text-white text-justify px-10">
                                            Propietario
                                        </h1>
                                        <br />

                                        <h1 className="font-sans font-bold mb-2 text-2xl tracking-tight text-white text-justify px-10">
                                            {task.propietario}
                                        </h1>

                                        <br />

                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Número: ' + task.propietarioNumero}
                                        </h1>

                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Correo: ' + task.propietarioEmail}
                                        </h1>
                                        <hr className="h-px my-8 bg-gray-200 border-0  px-10" />

                                        {/* Inquilino */}
                                        <h1 className="underline font-sans font-extrabold mb-2 text-5xl tracking-tight text-white text-justify px-10">
                                            Inquilino
                                        </h1>
                                        <br />
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-white text-justify px-10">
                                            {task.inquilinos}
                                        </h1>
                                        <br />
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Número: ' + task.inquilinosNumero}
                                        </h1>
                                        <h1 className="font-sans font-extrabold mb-2 text-2xl tracking-tight text-blue-600 text-justify px-10">
                                            {'Correo: ' + task.inquilinosEmail}
                                        </h1>
                                        <br></br>

                                        <div className="flex justify-center">
                                            <img className="rounded-t-lg max-w-5xl h-fit aspect-video " src={task.imagen} alt="" />
                                        </div>
                                        <br></br>
                                        <h1 className="font-sans font-extrabold mb-2 text-4xl  tracking-tight text-white text-justify px-10">
                                            Documento asignado
                                        </h1>
                                        <br></br>

                                        <div className="  mb-2 text-5xl tracking-tight px-10 rounded-lg flex justify-center">
                                            <iframe name="Documento asignado "

                                                src={task.doc}
                                                width="90%"
                                                height="640"
                                                title="Vista previa del documento"
                                                style={{
                                                    border: "solid",
                                                    borderRadius: "2%",
                                                    imageRendering: 'auto',
                                                    willChange: 'transform',
                                                    backfaceVisibility: 'hidden',
                                                    filter: 'none',
                                                    margin: "0 auto", // Asegura que el iframe tenga un margen automático
                                                }}
                                            />
                                        </div>

                                        <br></br>

                                        <h1 className="font-sans font-extrabold mb-2 text-5xl  tracking-tight text-white text-justify px-10">
                                            Certificado del gas
                                        </h1>

                                        <br></br>

                                        <div className="mb-2 text-5xl tracking-tight px-10 rounded-lg flex justify-center">
                                            <iframe name="Certificado del gas "
                                                src={task.certify}
                                                width="90%"
                                                height="640"
                                                title="Vista previa del documento"
                                                style={{
                                                    border: "solid",
                                                    borderRadius: "2%",
                                                    imageRendering: 'auto',
                                                    willChange: 'transform',
                                                    backfaceVisibility: 'hidden',
                                                    filter: 'none',
                                                    margin: "0 auto", // Asegura que el iframe tenga un margen automático
                                                }}
                                            />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>

                                {/* Botón de cerrar */}
                                <div className="mt-4 flex justify-end">
                                    <button name="cerrar modal de detalles"
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        onClick={closeDetailModal}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-form dark:border-backgroundColor dark:hover:border-backgroundColor">
                    <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  hover:bg-gray-50 dark:hover:bg-white group">
                            <button data-tooltip-target="tooltip-home" type="button">
                                <svg className="w-8 h-8 mb-1 text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                <span className="sr-only">Home</span>
                            </button>
                        </Link>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <div className="flex items-center justify-center">
                            <Link to="/tasks/new" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <button data-tooltip-target="tooltip-new" type="button">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                    <span className="sr-only">New item</span>
                                </button>
                            </Link>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Create new item
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Link to="/tasks" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-white group">
                            <button data-tooltip-target="tooltip-profile" type="button">
                                <svg className="flex-shrink-0 w-8 h-8  transition duration-75  text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="sr-only">Profile</span>
                            </button>
                        </Link>
                        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Profile
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>



            </>

        )
    }
}
export default TaskCard
