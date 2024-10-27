import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
import { Link } from "react-router-dom"
function TasksPage() {
    const { getTasks, tasks } = useTasks()
    useEffect(() => {
        getTasks()
    }, [])


    if (tasks.length == 0) return (<Link to='/tasks/new' className=' '><h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl  text-center">¡Bienvenido a tu espacio de <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600"> trabajo! </span>, <br /></h1><h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-4xl text-center">¡Este es tu rincón para organizarlo todo a tu manera!<br /> ¡Vamos a darle vida a esas ideas!</h1></Link>)
    return <>
    <br /><h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl text-center"> ¡Bienvenido a tu espacio de trabajo! </h1><h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-4xl text-center">¡Aquí puedes<span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600"> agregar</span>,<span class="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-red-600"> eliminar</span> y <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-green-600">actualizar </span>todo lo que necesites!</h1><br /><div className="m-24"><div className="grid grid-cols-3 gap-4 gap-y-20  ">

                    {tasks.map(task => (

                        <TaskCard task={task} key={task._id} />

                    ))}
                </div></div></>


}
export default TasksPage