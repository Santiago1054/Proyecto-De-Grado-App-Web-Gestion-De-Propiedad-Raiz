import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { setDoc } from "firebase/firestore";







function TaskFormPage() {

    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()
    const [image, setImage] = useState(null); // State to hold the uploaded image file
    const [imageUrl, setImageUrl] = useState(""); // State to hold the URL of the uploaded image
    const [docUrl, setDocUrl] = useState(""); // State to hold the URL of the uploaded image
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log(params)
                const task = await getTask(params.id)
                setValue('doc', task.doc)
                setValue('imagen', task.imagen)
                setValue('departamento', task.departamento)
                setValue('municipio', task.municipio)
                setValue('barrio', task.barrio)
                setValue('direccionHogar', task.direccionHogar)
                setValue('propietario', task.propietario)
                setValue('propietarioNumero', task.propietarioNumero)
                setValue('propietarioEmail', task.propietarioEmail)
                setValue('inquilinos', task.inquilinos)
                setValue('inquilinosNumero', task.inquilinosNumero)
                setValue('inquilinosEmail', task.inquilinosEmail)
                setValue('historial', task.historial)
            }
        }
        loadTask()
    }, [])
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyB_Ii86wSt5i2P7EJ1onZosytaZp6Mcv_k",
        authDomain: "myapp-80b3c.firebaseapp.com",
        projectId: "myapp-80b3c",
        storageBucket: "myapp-80b3c.appspot.com",
        messagingSenderId: "338704820092",
        appId: "1:338704820092:web:b22adb0b34dc7acefb26f9"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();

    const storage = getStorage();

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];
        setImage(file);

        // Upload image to Firebase Storage
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);
            setImageUrl(imageUrl); // Guardar la URL de la imagen en el estado imageUrl

        }
    };
    const handleDocUpload = async (e) => {

        const file = e.target.files[0];
        setImage(file);

        // Upload image to Firebase Storage
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const docUrl = await getDownloadURL(storageRef);
            setDocUrl(docUrl); // Guardar la URL de la imagen en el estado imageUrl

        }
    };
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data)
            console.log(params.id, data)
        } else {
            createTask(data)

        }
        navigate('/tasks')
    })

    useEffect(() => {
        setValue('imagen', imageUrl);
    }, [imageUrl, setValue]);
    useEffect(() => {
        setValue('doc', docUrl);
    }, [docUrl, setValue]);
    return (

        <form onSubmit={onSubmit} className='bg-white w-full max-w-4xl p-10 rounded-md border'>
            <div class="grid gap-6 mb-6 md:grid-cols-2 ">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                    <input type="text" {...register('departamento')} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipio</label>
                    <input type="text" {...register('municipio')} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barrio</label>
                    <input type="text" {...register('barrio')} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                    <input type="text" {...register('direccionHogar')} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Direccion" required />
                </div>
                <div>
                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Propietario</label>
                    <input type="text" {...register('propietario')} id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                </div>
                <div>
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero telefonico del propietario</label>
                    <input type="tel" {...register('propietarioNumero')} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div>
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo del propietario</label>
                    <input type="text" {...register('propietarioEmail')} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />

                </div>
                <div>
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Inquilino</label>
                    <input type="text" {...register('inquilinos')} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div>
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero telefonico del inquilino</label>
                    <input type="tel" {...register('inquilinosNumero')} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
                <div>
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">correo del inquilino</label>
                    <input type="text" {...register('inquilinosEmail')} id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                </div>
            </div>



            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">

                </div>
                <textarea rows="3" placeholder="Notas"
                    {...register('historial')}
                    className='w-full bg-white text-black px-4 py-2 rounded-md my-3'
                ></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Upload Image</label>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Imagen</label>
                <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={handleImageUpload}></input>

                <input type="text" {...register('imagen')} className='opacity-0' />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Upload File</label>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Archivos</label>
                <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={handleDocUpload}></input>

                <input type="text" {...register('doc')} className='opacity-0' />
            </div>
            <div className="flex justify-between">
                <Link to='/tasks' className="bg-red-600 px-5 py-2 rounded-md justify-center cursor-pointer   hover:opacity-80 delay-60" >Back</Link>
                <button className="bg-green-400 text-black px-5 py-2 rounded-md justify-center cursor-pointer   hover:opacity-80 delay-60">
                    Save
                </button>

            </div>
        </form>



    )
}
export default TaskFormPage