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
import imageCompression from 'browser-image-compression'; // Importar la librería de compresión







function TaskFormPage() {

    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()
    const [image, setImage] = useState(null); // State to hold the uploaded image file
    const [imageUrl, setImageUrl] = useState(""); // State to hold the URL of the uploaded image
    const [docUrl, setDocUrl] = useState(""); // State to hold the URL of the uploaded image
    const [certifyUrl, setCertifyUrl] = useState(""); // State to hold the URL of the uploaded image
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log(params)
                const task = await getTask(params.id)
                setValue('certify', task.certify)
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
        if (!file) return;

        try {
            // Opciones de compresión
            const opciones = {
                maxSizeMB: 1, // Tamaño máximo 1MB
                maxWidthOrHeight: 800, // Máximo 800px en el lado más largo
                useWebWorker: true, // Mejora de rendimiento
            };

            // Comprimir la imagen
            const imagenComprimida = await imageCompression(file, opciones);

            // Subir la imagen comprimida a Firebase Storage
            const storageRef = ref(storage, `images/${imagenComprimida.name}`);
            await uploadBytes(storageRef, imagenComprimida);

            // Obtener la URL de descarga de Firebase
            const url = await getDownloadURL(storageRef);
            setImageUrl(url); // Guardar la URL en el estado

            console.log('Imagen subida correctamente:', url);
        } catch (error) {
            console.error('Error al comprimir o subir la imagen:', error);
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
    const handleCertifyUpload = async (e) => {

        const file = e.target.files[0];
        setImage(file);

        // Upload image to Firebase Storage
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const certifyUrl = await getDownloadURL(storageRef);
            setCertifyUrl(certifyUrl); // Guardar la URL de la imagen en el estado imageUrl

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
    useEffect(() => {
        setValue('certify', certifyUrl);
    }, [certifyUrl, setValue]);
    return (

        <>
            <form onSubmit={onSubmit} className='bg-white w-full max-w-7xl p-10 rounded-md border scale-95'>

                {/* Información de la Casa */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información de la Casa</h2>
                    <div className="grid gap-6 md:grid-cols-4">
                        <div>
                            <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-gray-900">Departamento</label>
                            <input type="text" {...register('departamento')} id="departamento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Risaralda" autoFocus required />
                        </div>
                        <div>
                            <label htmlFor="municipio" className="block mb-2 text-sm font-medium text-gray-900">Municipio</label>
                            <input type="text" {...register('municipio')} id="municipio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pereira" required />
                        </div>
                        <div>
                            <label htmlFor="barrio" className="block mb-2 text-sm font-medium text-gray-900">Barrio</label>
                            <input type="text" {...register('barrio')} id="barrio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Poblado 2" required />
                        </div>
                        <div>
                            <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900">Dirección</label>
                            <input type="text" {...register('direccionHogar')} id="direccion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="M4 C10 o Manzana 4 Casa 10" required />
                        </div>
                    </div>
                </div>

                {/* Información del Propietario */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Propietario</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="propietario" className="block mb-2 text-sm font-medium text-gray-900">Nombre del Propietario</label>
                            <input type="text" {...register('propietario')} id="propietario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pedro Pascal" required />
                        </div>
                        <div>
                            <label htmlFor="propietarioNumero" className="block mb-2 text-sm font-medium text-gray-900">Número Telefónico</label>
                            <input type="tel" {...register('propietarioNumero')} id="propietarioNumero" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+57 32132132121" required />
                        </div>
                        <div>
                            <label htmlFor="propietarioEmail" className="block mb-2 text-sm font-medium text-gray-900">Correo Electrónico</label>
                            <input type="email" {...register('propietarioEmail')} id="propietarioEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="pedro@email.com" required />
                        </div>
                    </div>
                </div>

                {/* Información del Inquilino */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Inquilino</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="inquilinos" className="block mb-2 text-sm font-medium text-gray-900">Nombre del Inquilino</label>
                            <input type="text" {...register('inquilinos')} id="inquilinos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Jhon Córdoba" required />
                        </div>
                        <div>
                            <label htmlFor="inquilinosNumero" className="block mb-2 text-sm font-medium text-gray-900">Número Telefónico</label>
                            <input type="tel" {...register('inquilinosNumero')} id="inquilinosNumero" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+57 321321321321" required />
                        </div>
                        <div>
                            <label htmlFor="inquilinosEmail" className="block mb-2 text-sm font-medium text-gray-900">Correo Electrónico</label>
                            <input type="email" {...register('inquilinosEmail')} id="inquilinosEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="jhon@email.com" required />
                        </div>
                    </div>
                </div>

                {/* Notas */}
                <div className="mb-8 text-center">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Notas</h2>
                    <textarea rows="3" placeholder="Notas" {...register('historial')} className="w-3/4 mx-auto bg-white text-black px-4 py-2 rounded-md" required></textarea>
                </div>

                {/* Archivos Adjuntos */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Archivos Adjuntos</h2>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="imagen" className="block text-sm font-medium text-gray-900">Imagen</label>
                            <input className="block w-auto text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="imagen" type="file" onChange={handleImageUpload} />
                            <input type="image" {...register('imagen')} className='opacity-0' />
                        </div>
                        <div>
                            <label htmlFor="doc" className="block text-sm font-medium text-gray-900">Archivos</label>
                            <input className="block w-auto text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="doc" type="file" onChange={handleDocUpload} />
                            <input type="text" {...register('doc')} className='opacity-0' />
                        </div>
                        <div>
                            <label htmlFor="certify" className="block text-sm font-medium text-gray-900">Certificado de Gas</label>
                            <input className="block w-auto text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="certify" type="file" onChange={handleCertifyUpload} />
                            <input type="text" {...register('certify')} className='opacity-0' />
                        </div>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex justify-between">
                    <Link to='/tasks' className="bg-red-600 px-5 py-2 rounded-md hover:opacity-80">Volver</Link>
                    <button className="bg-green-400 text-black px-5 py-2 rounded-md hover:opacity-80">Guardar</button>
                </div>
            </form>

            <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-form dark:border-backgroundColor dark:hover:border-backgroundColor">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                    <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  hover:bg-gray-50 dark:hover:bg-white group">
                        <button data-tooltip-target="tooltip-home" type="button">
                            <svg className="w-8 h-8 mb-1 text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="sr-only">Home</span>
                        </button>
                    </Link>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>


                    <div className="flex items-center justify-center">
                        <Link to="/tasks/new" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                            <button data-tooltip-target="tooltip-new" type="button">
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                                <span className="sr-only">New item</span>
                            </button>
                        </Link>
                    </div>
                    <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <Link to="/tasks" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-white group">
                        <button data-tooltip-target="tooltip-profile" type="button">
                            <svg className="flex-shrink-0 w-8 h-8  transition duration-75  text-form dark:text-white group-hover:text-blue-600 dark:group-hover:text-form" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className="sr-only">Profile</span>
                        </button>
                    </Link>
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TaskFormPage