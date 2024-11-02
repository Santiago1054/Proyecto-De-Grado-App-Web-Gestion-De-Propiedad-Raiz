import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
import { Link } from "react-router-dom"
function TasksPage() {
    const { getTasks, tasks } = useTasks()
    useEffect(() => {
        getTasks()
    }, [])


    if (tasks.length == 0) return (<><Link to='/tasks/new' className=' '><h1 className=" text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-2xl  text-center">¡Bienvenido a tu espacio de <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600"> trabajo! </span>,</h1><h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-2xl text-center">¡Este es tu rincón para organizarlo todo a tu manera!<br /> ¡Vamos a darle vida a esas ideas!</h1></Link>
    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
        <video
            src="tutorial.mp4"
            width="70%"
            height="auto"
            controls
            
            
            
            style={{
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Sombra opcional
                transition: 'transform 0.2s', // Transición para efectos de hover
            }}
            
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Efecto al salir el mouse
        >
            Tu navegador no soporta la etiqueta de video.
        </video>
    </div>
    </>)
    return <>
        <br /> <div><h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl text-center"> ¡Bienvenido a tu espacio de trabajo! </h1><h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-7xl lg:text-4xl text-center">¡Aquí puedes<span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600"> agregar</span>,<span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-red-600"> eliminar</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-green-600">actualizar </span>todo lo que necesites de tus propiedades!</h1></div><br /><div className="m-24"><div className="grid grid-cols-2 gap-4 gap-y-15">
            {tasks.map(task => (

                <TaskCard task={task} key={task._id} />

            ))}
        </div></div></>


}
export default TasksPage