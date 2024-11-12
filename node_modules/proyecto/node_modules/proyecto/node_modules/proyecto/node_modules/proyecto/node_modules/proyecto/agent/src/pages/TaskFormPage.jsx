import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import imageCompression from 'browser-image-compression'; // Importar la librería de compresión

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const [image, setImage] = useState(null); // State to hold the uploaded image file
    const [imageUrl, setImageUrl] = useState(''); // State to hold the URL of the uploaded image
    const [docUrl, setDocUrl] = useState(''); // State to hold the URL of the uploaded image
    const [certifyUrl, setCertifyUrl] = useState(''); // State to hold the URL of the uploaded image
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log(params);
                try {
                    const task = await getTask(params.id);
                    if (task) {
                        setValue('certify', task.certify);
                        setValue('doc', task.doc);
                        setValue('imagen', task.imagen);
                        setValue('departamento', task.departamento);
                        setValue('municipio', task.municipio);
                        setValue('barrio', task.barrio);
                        setValue('direccionHogar', task.direccionHogar);
                        setValue('propietario', task.propietario);
                        setValue('propietarioNumero', task.propietarioNumero);
                        setValue('propietarioEmail', task.propietarioEmail);
                        setValue('inquilinos', task.inquilinos);
                        setValue('inquilinosNumero', task.inquilinosNumero);
                        setValue('inquilinosEmail', task.inquilinosEmail);
                        setValue('historial', task.historial);
                    } else {
                        console.error('Tarea no encontrada');
                    }
                } catch (error) {
                    console.error('Error al cargar la tarea:', error);
                }
            }
        }
        loadTask();
    }, [params.id, setValue]);

    const firebaseConfig = {
        apiKey: 'AIzaSyB_Ii86wSt5i2P7EJ1onZosytaZp6Mcv_k',
        authDomain: 'myapp-80b3c.firebaseapp.com',
        projectId: 'myapp-80b3c',
        storageBucket: 'myapp-80b3c.appspot.com',
        messagingSenderId: '338704820092',
        appId: '1:338704820092:web:b22adb0b34dc7acefb26f9',
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
                .then(() => navigate('/tasks')) // Navegar después de la actualización exitosa
                .catch((error) => console.error('Error al actualizar la tarea:', error));
        } else {
            createTask(data)
                .then(() => navigate('/tasks')) // Navegar después de la creación exitosa
                .catch((error) => console.error('Error al crear la tarea:', error));
        }
    });

    useEffect(() => {
        if (imageUrl) {
            setValue('imagen', imageUrl); // Actualiza el campo imagen con la URL obtenida de Firebase
        }
    }, [imageUrl, setValue]);

    useEffect(() => {
        if (docUrl) {
            setValue('doc', docUrl); // Actualiza el campo doc con la URL obtenida de Firebase
        }
    }, [docUrl, setValue]);

    useEffect(() => {
        if (certifyUrl) {
            setValue('certify', certifyUrl); // Actualiza el campo certify con la URL obtenida de Firebase
        }
    }, [certifyUrl, setValue]);

    return (
        <>
            <form onSubmit={onSubmit} className="bg-white w-full max-w-7xl p-10 rounded-md border scale-95">
                {/* Información de la Casa */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información de la Casa</h2>
                    <div className="grid gap-6 md:grid-cols-4">
                        <div>
                            <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-gray-900">Departamento</label>
                            <input
                                type="text"
                                {...register('departamento')}
                                id="departamento"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Risaralda"
                                autoFocus
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="municipio" className="block mb-2 text-sm font-medium text-gray-900">Municipio</label>
                            <input
                                type="text"
                                {...register('municipio')}
                                id="municipio"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Pereira"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="barrio" className="block mb-2 text-sm font-medium text-gray-900">Barrio</label>
                            <input
                                type="text"
                                {...register('barrio')}
                                id="barrio"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Poblado 2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900">Dirección</label>
                            <input
                                type="text"
                                {...register('direccionHogar')}
                                id="direccion"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="M4 C10 o Manzana 4 Casa 10"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Información del Propietario */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Propietario</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="propietario" className="block mb-2 text-sm font-medium text-gray-900">Propietario</label>
                            <input
                                type="text"
                                {...register('propietario')}
                                id="propietario"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Juan Pérez"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="propietarioNumero" className="block mb-2 text-sm font-medium text-gray-900">Número</label>
                            <input
                                type="tel"
                                {...register('propietarioNumero')}
                                id="propietarioNumero"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="3001234567"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="propietarioEmail" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                {...register('propietarioEmail')}
                                id="propietarioEmail"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="juan@ejemplo.com"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Información del Inquilino */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Inquilino</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="inquilinos" className="block mb-2 text-sm font-medium text-gray-900">Inquilino</label>
                            <input
                                type="text"
                                {...register('inquilinos')}
                                id="inquilinos"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Carlos Rodríguez"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="inquilinosNumero" className="block mb-2 text-sm font-medium text-gray-900">Número</label>
                            <input
                                type="tel"
                                {...register('inquilinosNumero')}
                                id="inquilinosNumero"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="3012345678"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="inquilinosEmail" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                {...register('inquilinosEmail')}
                                id="inquilinosEmail"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="carlos@ejemplo.com"
                                required
                            />
                        </div>
                    </div>
                </div>
                {/* Notas */}
                <div className="mb-8 text-center">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Notas</h2>
                    <textarea rows="3" placeholder="Notas" {...register('historial')} className="w-3/4 mx-auto bg-white text-black px-4 py-2 rounded-md" required></textarea>
                </div>

                {/* Archivos */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Archivos</h2>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Imagen</label>
                        <input
                            id="imagen"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Documento</label>
                        <input
                            id = "doc"
                            type="file"
                            accept="application/pdf"
                            onChange={handleDocUpload}
                            className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Certificado</label>
                        <input
                            id = "certify"
                            type="file"
                            accept="application/pdf"
                            onChange={handleCertifyUpload}
                            className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold text-sm rounded-md py-2.5"
                    >
                        {params.id ? 'Actualizar' : 'Crear'} Tarea
                    </button>
                </div>
            </form>
        </>
    );
}

export default TaskFormPage;
