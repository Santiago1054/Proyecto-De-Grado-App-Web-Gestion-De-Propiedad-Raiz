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
                    <div className="">
                        <form onSubmit={handleChange} className="w-96 mx-96 ">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input value={inputValue} onChange={handleChange} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>
                        </form>
                    </div>





                </>
            ) : (
                <>

                </>
            )}
        </ul>


    )
}
function TaskCard({ task }) {


    if (results == "") {

        const { deleteTask } = useTasks()
        return (



            <>
                <div className="max-w-8xl bg-custom-gradient-two  border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer opacity-50   hover:opacity-100 delay-60">
                    <a href="#">
                        <img className="rounded-t-lg" src={task.imagen} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className=" font-serif mb-2 text-8xl font-bold tracking-tight text-gray-900 dark:text-white">{task.municipio + ', ' + task.departamento}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" font-sans mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{task.barrio + ', ' + task.direccionHogar}</h5>
                        </a>
                        <a href="#">
                            <h5 className=" mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="font-serif mb-3 font-normal text-2xl text-black  text-justify">{task.historial}</p>
                        <div>
                            <a href={task.doc} target="_blank" rel="noopener noreferrer">
                                <h5 className=" font-serif mb-2 text-2xl font-bold tracking-tight text-blue-400 dark:text-white underline">{'Descargar documento:'}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                            </a>
                            <a href="#">
                                <h5 className=" font-serif mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{'Fecha de creacion: ' + new Date(task.createdAt).toLocaleString()}</h5>
                            </a>
                            <br></br>
                            <a href="#">
                                <h5 className=" font-serif mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">{'Última modificación: ' + new Date(task.updatedAt).toLocaleString()}</h5>
                            </a>




                        </div>
                        <br></br>
                        <br></br>
                        <div className="flex justify-between items-center">
                            <Link to={`/tasks/${task._id}`} className="inline-flex items-center px-5 py-4 text-lg font-medium  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Actualizar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </Link>

                            <button className="inline-flex items-center px-5 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-lg hover:opacity-70 " onClick={() => {
                                deleteTask(task._id);
                            }}>
                                Borrar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div></>

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
                <div className="max-w-7xl bg-custom-gradient-two border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer opacity-50   hover:opacity-100 delay-60">
                    <a href="#">
                        <img className="rounded-t-lg" src={task.imagen} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-8xl font-bold tracking-tight text-gray-900 dark:text-white">{task.municipio + ', ' + task.departamento}</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{task.barrio + ', ' + task.direccionHogar}</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{'Propietario: ' + task.propietario}</h5>
                        </a>

                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{'Telefono: ' + task.propietarioNumero}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{'Correo: ' + task.propietarioEmail}</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{'Inquilino: ' + task.inquilinos}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{'Telefono: ' + task.inquilinosNumero}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{'Correo: ' + task.inquilinosEmail}</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{'Fecha de creacion: ' + new Date(task.createdAt).toLocaleString()}</h5>
                        </a>
                        <br></br>
                        <a href="#">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{'Última modificación: ' + new Date(task.updatedAt).toLocaleString()}</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{'___________________________________________________________________________________________________________ '}</h5>
                        </a>
                        <br></br>
                        <p className="mb-3 font-normal text-2xl text-gray-900 dark:text-gray-400 text-justify">{task.historial}</p>
                        <div>


                        </div>
                        <br></br>
                        <br></br>
                        <div className="flex justify-between items-center">
                            <Link to={`/tasks/${task._id}`} className="inline-flex items-center px-5 py-4 text-lg font-medium  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Actualizar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </Link>

                            <button className="inline-flex items-center px-5 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-lg hover:opacity-70 " onClick={() => {
                                deleteTask(task._id);
                            }}>
                                Borrar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div></>

        )
    }
}
export default TaskCard
