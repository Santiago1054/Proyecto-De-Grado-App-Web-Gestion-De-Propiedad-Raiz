import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { useEffect } from 'react'
function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
      async function loadTask() {
            if (params.id) {
                console.log(params)
                const task = await getTask(params.id)
                setValue('departamento',task.departamento)
                setValue('municipio',task.municipio)
                setValue('barrio',task.barrio)
                setValue('direccionHogar',task.direccionHogar)
                setValue('propietario',task.propietario)
                setValue('propietarioNumero',task.propietarioNumero)
                setValue('propietarioEmail',task.propietarioEmail)
                setValue('inquilinos',task.inquilinos)
                setValue('inquilinosNumero',task.inquilinosNumero)
                setValue('inquilinosEmail',task.inquilinosEmail)
                setValue('historial',task.historial)
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            updateTask(params.id, data)
            console.log(params.id, data)
        }else{
            createTask(data)
            
        }
        navigate('/tasks')
    })
    return (
        <div className='flex h-[calc(190vh-100px)] items-center justify-center ' >
            <div className=' bg-white w-full max-w-3xl p-10 rounded-md ' >

                <form onSubmit={onSubmit}>
                <h1 className='text-2xl font-bold text-black'>Departamento</h1>
                <br/>
                    <input type="text" placeholder="Departamento"
                        {...register('departamento')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    
                    <h1 className='text-2xl font-bold text-black'>Municipio</h1>
                    <br/>
                    <input type="text" placeholder="Municipio"
                        {...register('municipio')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Barrio</h1>
                    <br/>
                    <input type="text" placeholder="Barrio"
                        {...register('barrio')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black' >Direccion de la propiedad</h1>
                    <br/>
                    <input type="text" placeholder="Direccion de la propiedad"
                        {...register('direccionHogar')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Nombre del propietario</h1>
                    <br/>
                    <input type="text" placeholder="Propietario"
                        {...register('propietario')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3 '
                        autoFocus
                    />
                    <br/>
                    
                    <h1 className='text-2xl font-bold text-black'>Numero telefonico del propietario</h1>
                    <br/>
                    <input type="text" placeholder="Numero telefonico del ropietario"
                        {...register('propietarioNumero')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3 '
                        autoFocus
                    />
                    <br/>
                     <h1 className='text-2xl font-bold text-black'>Email del propietario</h1>
                     <br/>
                    <input type="text" placeholder="Email del propietario"
                        {...register('propietarioEmail')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3 '
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Nombre del inquilino</h1>
                    <br/>
                    <input type="text" placeholder="Inquilinos"
                        {...register('inquilinos')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Numero telefonico del inquilino</h1>
                    <br/>
                     <input type="text" placeholder="Numero telefonico del inquilino"
                        {...register('inquilinosNumero')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Email del inquilino</h1>
                    <br/>
                     <input type="text" placeholder="Email del inquilino"
                        {...register('inquilinosEmail')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                        autoFocus
                    />
                    <br/>
                    <h1 className='text-2xl font-bold text-black'>Agrega notas a la publicacion</h1>
                    <br/>
                    <textarea rows="3" placeholder="Notas"
                        {...register('historial')}
                        className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                    ></textarea>
                    <br/><br/>
                    <div className="flex justify-between">
                    <Link to='/tasks' className="bg-red-600 px-5 py-2 rounded-md justify-center" >Volver</Link>
                    <button className="bg-blue-600 px-5 py-2 rounded-md justify-center">
                        Save
                    </button>
                    
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default TaskFormPage