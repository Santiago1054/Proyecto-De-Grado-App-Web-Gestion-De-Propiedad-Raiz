import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
import { Link } from "react-router-dom"
import { TaskFilter } from "../components/TaskCard"
function TasksPage() {
    const { getTasks, tasks } = useTasks()
    useEffect(() => {
        getTasks()
    }, [])


    if (tasks.length == 0) return (<Link to='/tasks/new' className=' font-sans text-2xl font-bold flex h-[calc(100vh-300px)] items-center justify-center cursor-pointer   hover:opacity-80 delay-60'>¡Oops 😱! Parece que no tienes propiedades aún. ¡Vamos a arreglar eso!  crea una nueva con estilo!🎉🎉.</Link>)
    return <div className="m-24"><div className="grid grid-rows-3 gap-3 gap-y-20 ">

        {
            tasks.map(task => (

                <TaskCard task={task} key={task._id} />

            ))
        }
    </div></div>


}
export default TasksPage