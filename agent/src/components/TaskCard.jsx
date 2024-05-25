import { useTasks } from "../context/TaskContext"
import { Link } from 'react-router-dom'
function TaskCard({ task }) {
    const { deleteTask } = useTasks()
    return (
        
        <div className='static h-[calc(120vh-100px)] items-center justify-center ' >
            <div className="bg-white max-w-md w-full p-10 rounded-md" >

                <header className="flex justify-between">



                </header>
                <h1 className="text-4xl font-bold text-black">{task.municipio + ', ' + task.departamento}</h1>
                <h1 className="text-1xl font-bold text-black">{task.barrio + ', ' + task.direccionHogar}</h1>
                <br></br>
                <h1 className="text-2xl font-bold text-black ">{'Propietario: '}
                </h1>
                <h1 className="text-2xl text-black">{task.propietario}</h1>
                <br></br>
                <h1 className="text-1xl text-blue-600 justify-center font-bold">{'Contacto: '+task.propietarioNumero+' '+task.propietarioEmail}</h1>
                
                <br></br>
                <h1 className="text-2xl font-bold text-black">{'Inquilino: '}</h1>
                <h1 className="text-2xl text-black">{task.inquilinos}</h1>
                <br></br>
                <h1 className="text-1xl text-blue-600 font-bold justify-center">{'Contacto: '+task.inquilinosNumero+' '+task.inquilinosEmail}</h1>
                <br></br>
                <h1 className="text-2xl font-bold text-black">{'Notas: '}</h1>
                <div className="flex bg-zinc-800 text-1xl max-w-md w-full p-12 rounded-md items-center justify-center ">
                <p className="text-1xl text-white   text-justify font-sans">{task.historial}</p>
                </div>
                <br></br>
                <h1 className="text-1xl font-bold text-black">{'Creada el: '}</h1>
                <p className="text-1xl font-bold text-black">{new Date(task.createdAt).toLocaleString()}</p>
                <br></br>
                <h1 className="text-1xl font-bold text-black">{'Ultima Modificacion: '}</h1>
                <p className="text-1xl font-bold text-black">{new Date(task.updatedAt).toLocaleString()}</p>
                <br></br>
                <div className="flex justify-between items-center">
                    <div >

                        <button className="bg-red-600 px-5 py-2 rounded-sm" onClick={() => {
                            deleteTask(task._id)
                        }}

                        >Eliminar</button>
                    </div>
                    <div>
                        <Link to={`/tasks/${task._id}`} className="bg-indigo-500 px-5 py-2 rounded-sm">Editar Propiedad</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default TaskCard