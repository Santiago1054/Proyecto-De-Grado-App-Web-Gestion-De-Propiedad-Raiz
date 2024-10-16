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

        <>
        <form onSubmit={onSubmit} className='bg-white w-full max-w-24xl p-10 rounded-md border'>
            <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Departamento</label>
                    <input type="text" {...register('departamento')} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Risaralda" required />
                </div>
                <div>
                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Municipio</label>
                    <input type="text" {...register('municipio')} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pereira" required />
                </div>
                <div>
                    <label for="company" className="block mb-2 text-sm font-medium text-gray-900 ">Barrio</label>
                    <input type="text" {...register('barrio')} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Poblado 2" required />
                </div>
                <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Direccion</label>
                    <input type="text" {...register('direccionHogar')} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="M4 C10 o Manzana 4 Casa 10" required />
                </div>
                <div>
                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del Propietario</label>
                    <input type="text" {...register('propietario')} id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pedro pascal" required />
                </div>
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Numero telefonico del propietario</label>
                    <input type="tel" {...register('propietarioNumero')} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+57 32132132121" required />
                </div>
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Correo del propietario</label>
                    <input type="text" {...register('propietarioEmail')} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pedro@email.com" required />

                </div>
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre del Inquilino</label>
                    <input type="text" {...register('inquilinos')} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jhon cordoba" required />
                </div>
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Numero telefonico del inquilino</label>
                    <input type="tel" {...register('inquilinosNumero')} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+57 321321321321" required />
                </div>
                <div>
                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">correo del inquilino</label>
                    <input type="text" {...register('inquilinosEmail')} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhon@email.com" required />
                </div>
            </div>



            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">

                </div>
                <textarea rows="3" placeholder="Notas"
                    {...register('historial')}
                    className='w-full bg-white text-black px-4 py-2 rounded-md my-3' required
                ></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Upload Image</label>

                <label className="block mb-2 text-sm font-medium text-gray-900 " for="large_size">Imagen</label>
                <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={handleImageUpload} required></input>

                <input type="text" {...register('imagen')} className='opacity-0' required />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Upload File</label>

                <label className="block mb-2 text-sm font-medium text-gray-900 " for="large_size">Archivos</label>
                <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={handleDocUpload} required></input>

                <input type="text" {...register('doc')} className='opacity-0' required />
            </div>
            <div className="flex justify-between">
                <Link to='/tasks' className="bg-red-600 px-5 py-2 rounded-md justify-center cursor-pointer   hover:opacity-80 delay-60">Back</Link>
                <button className="bg-green-400 text-black px-5 py-2 rounded-md justify-center cursor-pointer   hover:opacity-80 delay-60">
                    Save
                </button>

            </div>
        </form>
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

                            


                        </div>

                    </aside>
        </>
    )
}
export default TaskFormPage