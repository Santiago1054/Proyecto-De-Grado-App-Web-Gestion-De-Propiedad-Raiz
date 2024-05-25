import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
function TasksPage() {
    const { getTasks, tasks } = useTasks()
    useEffect(() => {
        getTasks()
    }, [])
    if (tasks.length == 0) return (<h1 className='flex h-[calc(100vh-100px)] items-center justify-center'>No hay propiedades a administrar</h1>)
    return  <div className="m-4"><div className="grid grid-cols-3 gap-3 gap-y-40">
        {
            tasks.map(task => (
                <TaskCard task={task} key={task._id} />
            ))
        }
    </div></div>
}
export default TasksPage