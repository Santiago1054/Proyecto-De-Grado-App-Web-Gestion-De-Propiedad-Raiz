import { useTasks } from "../context/TaskContext"
import mongoose from 'mongoose';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import TasksPage from "../pages/TasksPage"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import { connectDB } from "../../../src/db";
var results

export function TaskFilter({ task }) {
    /*
    ---------------------
    Buscador de tarjetas
    ---------------------
    */
    const { isAuthenticated, logout, user } = useAuth()
    const { tasks } = useTasks()

    // Crea la instancia de navigate
    const navigate = useNavigate();
    //---------------------------------------------------------------

    // Estado para almacenar el valor del input
    const [inputValue, setInputValue] = useState("");

    //---------------------------------------------------------------
    // Guarda el valor en una variable local 
    results = inputValue;
    console.log('hit:', inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value); // Actualiza el estado con el valor del input

        console.log('Value saved in variable Cha:', results, event.target.value);
        // Puedes usar la variable aquí o en otros lugares

        console.log(results)

        navigate(`/`); // Cambia la ruta según sea necesario
        // Navega a la segunda ruta después de un breve retraso

        setTimeout(() => {
            navigate(`/tasks`);
        }, 0.5); // Ajusta el tiempo de retraso según sea necesario

        console.log('hit:', results);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        results = inputValue; // Guarda el valor en una variable local
        console.log('Value saved in variable Sub:', inputValue);
        // Puedes usar la variable aquí o en otros lugares
    }

    return (
        <ul className=" gap-x-2 flex justify-between py-7 px-20">
            {isAuthenticated ? (

                <>
                    <aside id="cta-button-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div class="h-full px-3 py-4  overflow-y-auto bg-form border border-backgroundColor ">
                            <ul class="space-y-2 font-medium">
                                <li>
                                    <Link to="/" className="flex items-center p-2  text-backgroundColor rounded-lg   dark:hover:bg-backgroundColor dark:hover:text-form group">
                                    
                                        <a href="" class="flex items-center p-3  rounded-lg">
                                            <svg class="lex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            <span class="ms-3">Pagina pricipal</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tasks" className="flex items-center p-2  text-backgroundColor rounded-lg   dark:hover:bg-backgroundColor dark:hover:text-form group">
                                        <a href="" class="flex items-center p-3  rounded-lg">
                                            <svg class="flex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span class="flex-1 ms-3 whitespace-nowrap ">Propiedades</span>
                                            <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                        </a>
                                    </Link>
                                </li>



                                <li>
                                    <Link to="/tasks/new" className="flex items-center p-2  text-backgroundColor rounded-lg   dark:hover:bg-backgroundColor dark:hover:text-form group">
                                        <a href="" class="flex items-center p-3  rounded-lg">
                                            <svg class="flex-shrink-0 w-5 h-5  transition duration-75 dark:hover:text-form " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span class="flex-1 ms-3 whitespace-nowrap ">Agregar tarjeta</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <br></br>

                            <div class="w-full max-w-sm bg-form border border-backgroundColor rounded-lg shadow  dark:border-backgroundColor">
                                <div class="flex justify-end px-4 pt-4 ">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span class="sr-only">Open dropdown</span>

                                    </button>

                                    <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul class="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-backgroundColor">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-backgroundColor">Export Data</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-backgroundColor">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center pb-10 bg-form">
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2024/03/07/17/02/man-8618931_640.jpg" alt="Bonnie image" />
                                    <h5 class="mb-1 text-xl font-medium text-backgroundColor ">Bonnie Green</h5>
                                    <span class="text-sm text-backgroundColor ">Bienvenido  {user.username}</span>

                                    <br></br>
                                    <form onSubmit={handleChange} className="w-44 mx-96 ">
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input value={inputValue} onChange={handleChange} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Risaralda" />


                                        </div>
                                        <br></br>
                                        <a href="#" class=" py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-form rounded-lg border border-backgroundColor  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-backgroundColor dark:border-backgroundColor dark:hover:text-form dark:hover:bg-backgroundColor ">Volver hasta arriba </a>
                                    </form>




                                </div>

                            </div>


                        </div>

                    </aside>


                </>
            ) : (
                <>

                </>
            )}
        </ul>


    )
}
function TaskCard({ task }) {
    const { isAuthenticated, logout, user } = useAuth()

    if (results == "") {

        const { deleteTask } = useTasks()
        return (



            <>
                <div className="max-w-8xl bg-custom-gradient-two  border border-backgroundColor rounded-lg shadow  cursor-pointer opacity-50   hover:opacity-100 delay-60  ">
                    <a href="#">
                        <img className="rounded-t-lg" src={task.imagen} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className=" font-custom font-extrabold mb-2 text-8xl  tracking-tight text-backgroundColor ">{task.municipio + ', ' + task.departamento}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" font-sans mb-2 text-3xl font-bold tracking-tight text-backgroundColor ">{task.barrio + ', ' + task.direccionHogar}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" mb-2 text-3xl font-bold tracking-tight text-backgroundColor ">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="font-custom mb-3 font-bold text-2xl text-backgroundColor  text-justify px-10">{task.historial}</p>\
                        <br></br>
                        <div>
                            <a href={task.doc} target="_blank" rel="noopener noreferrer">
                                <h5 className=" font-custom px-10 mb-2 text-3xl font-extrabold tracking-tight text-blue-400  underline">{'Click para descargar contrato u documento asignado'}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" mb-2 text-3xl font-bold tracking-tight text-backgroundColor ">{'___________________________________________________________________________________________________________ '}</h5>
                            </a>
                            <a href="#">
                                <h5 className=" font-custom mb-2 text-2xl tracking-tight text-backgroundColor ">{'Fecha de creacion: ' + new Date(task.createdAt).toLocaleString()}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" font-custom mb-2 text-2xl  tracking-tight text-backgroundColor ">{'Última modificación: ' + new Date(task.updatedAt).toLocaleString()}</h5>
                            </a>




                        </div>
                        <br></br>
                        <br></br>
                        <div className="flex justify-between items-center">
                            <Link to={`/tasks/${task._id}`} className=" font-custom inline-flex items-center px-5 py-4 text-lg font-medium  text-center text-backgroundColor border border-backgroundColor  rounded-lg dark:hover:bg-backgroundColor dark:hover:text-white">
                                Actualizar/Editar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </Link>

                            <button className="inline-flex items-center px-5 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-lg hover:opacity-70 " onClick={() => {
                                deleteTask(task._id);
                            }}>
                                Eliminar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                
                <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-backgroundColor dark:border-backgroundColor dark:hover:border-backgroundColor">
                    <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
                        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  hover:bg-gray-50 dark:hover:bg-form group">
                            <button data-tooltip-target="tooltip-home" type="button">
                                <svg class="w-8 h-8 mb-1 text-form dark:text-form group-hover:text-blue-600 dark:group-hover:text-backgroundColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                <span class="sr-only">Home</span>
                            </button>
                        </Link>
                        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <div class="flex items-center justify-center">
                            <Link to="/tasks/new" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <button data-tooltip-target="tooltip-new" type="button">
                                    <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                    <span class="sr-only">New item</span>
                                </button>
                            </Link>
                        </div>
                        <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Create new item
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Link to="/tasks" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-form group">
                            <button data-tooltip-target="tooltip-profile" type="button">
                                <svg class="flex-shrink-0 w-8 h-8  transition duration-75  text-form dark:text-form group-hover:text-blue-600 dark:group-hover:text-backgroundColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span class="sr-only">Profile</span>
                            </button>
                        </Link>
                        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Profile
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>



            </>

        )
    } else if (
        task.departamento.toLowerCase() == results.toLowerCase() ||
        task.barrio.toLowerCase() == results.toLowerCase() ||
        task.propietario.toLowerCase() == results.toLowerCase() ||
        task.inquilinos.toLowerCase() == results.toLowerCase() ||
        task.municipio.toLowerCase() == results.toLowerCase() ||
        task.direccionHogar.toLowerCase() == results.toLowerCase() ||
        task.propietarioEmail.toLowerCase() == results.toLowerCase() ||
        task.inquilinosEmail.toLowerCase() == results.toLowerCase()
    ) {
        const { deleteTask } = useTasks()
        return (

            <>
                <div className="max-w-8xl bg-custom-gradient-two border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer opacity-50   hover:opacity-100 delay-60  ">
                    <a href="#">
                        <img className="rounded-t-lg" src={task.imagen} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className=" font-custom font-extrabold mb-2 text-8xl  tracking-tight text-black ">{task.municipio + ', ' + task.departamento}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" font-sans mb-2 text-3xl font-bold tracking-tight text-black ">{task.barrio + ', ' + task.direccionHogar}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" mb-2 text-3xl font-bold tracking-tight text-black ">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="font-custom mb-3 font-bold text-2xl text-black  text-justify px-10">{task.historial}</p>\
                        <br></br>
                        <div>
                            <a href={task.doc} target="_blank" rel="noopener noreferrer">
                                <h5 className=" font-custom px-10 mb-2 text-3xl font-extrabold tracking-tight text-blue-400  underline">{'Click para descargar contrato u documento asignado'}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" mb-2 text-3xl font-bold tracking-tight text-black ">{'___________________________________________________________________________________________________________ '}</h5>
                            </a>
                            <a href="#">
                                <h5 className=" font-custom mb-2 text-2xl tracking-tight text-black ">{'Fecha de creacion: ' + new Date(task.createdAt).toLocaleString()}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" font-custom mb-2 text-2xl  tracking-tight text-black ">{'Última modificación: ' + new Date(task.updatedAt).toLocaleString()}</h5>
                            </a>




                        </div>
                        <br></br>
                        <br></br>
                        <div className="flex justify-between items-center">
                            <Link to={`/tasks/${task._id}`} className=" font-custom inline-flex items-center px-5 py-4 text-lg font-medium  text-center text-backgroundColor border border-backgroundColor  rounded-lg dark:hover:bg-backgroundColor dark:hover:text-white">
                                Actualizar/Editar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </Link>

                            <button className="inline-flex items-center px-5 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-lg hover:opacity-70 " onClick={() => {
                                deleteTask(task._id);
                            }}>
                                Eliminar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-backgroundColor dark:border-backgroundColor dark:hover:border-backgroundColor">
                    <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
                        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  hover:bg-gray-50 dark:hover:bg-form group">
                            <button data-tooltip-target="tooltip-home" type="button">
                                <svg class="w-8 h-8 mb-1 text-form dark:text-form group-hover:text-blue-600 dark:group-hover:text-backgroundColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                <span class="sr-only">Home</span>
                            </button>
                        </Link>
                        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <div class="flex items-center justify-center">
                            <Link to="/tasks/new" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <button data-tooltip-target="tooltip-new" type="button">
                                    <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                    <span class="sr-only">New item</span>
                                </button>
                            </Link>
                        </div>
                        <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Create new item
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Link to="/tasks" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-form group">
                            <button data-tooltip-target="tooltip-profile" type="button">
                                <svg class="flex-shrink-0 w-8 h-8  transition duration-75  text-form dark:text-form group-hover:text-blue-600 dark:group-hover:text-backgroundColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span class="sr-only">Profile</span>
                            </button>
                        </Link>
                        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Profile
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>




            </>

        )
    }
}
export default TaskCard
