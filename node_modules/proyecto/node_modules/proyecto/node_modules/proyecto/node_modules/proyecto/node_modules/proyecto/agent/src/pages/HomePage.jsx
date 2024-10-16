import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <>


            <section class=" ">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="bg-backgroundColor  border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                            </svg>
                            Tutorial
                        </a>
                        <h1 class="text-form  text-3xl md:text-5xl font-extrabold mb-2">Bienvenido/a</h1>
                        <p class="text-lg font-normal text-form mb-6">Nos alegra tenerte aquí. Tu visita marca el inicio de una experiencia especial, diseñada para inspirar, conectar y crecer juntos. Esperamos que cada momento en este espacio sea significativo para ti.</p>
                        <Link to="/tasks" class=" border border-form inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-form rounded-lg bg-backgroundColor hover:bg-form hover:border-form hover:text-backgroundColor focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Comienza ahora
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-backgroundColor  border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                                </svg>
                                Design
                            </a>
                            <h2 class="text-form text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                            <p class="text-lg font-normal text-form mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                        <div class="bg-backgroundColor  border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                </svg>
                                Code
                            </a>
                            <h2 class="text-form text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                            <p class="text-lg font-normal text-form mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/04/21/22/22/background-5074889_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2017/06/13/19/24/abstract-2399765_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2022/01/13/00/05/sunset-6934166_640.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2021/02/05/20/38/abstract-5985788_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/06/08/03/55/feather-5272833_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2022/04/09/13/35/living-room-7121425_640.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2024/01/11/13/55/living-room-8501757_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2022/03/27/10/22/city-7094641_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2019/08/22/17/09/art-4423948_640.jpg" alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2021/04/22/18/50/frames-6199828_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/11/17/08/05/creative-5751722_640.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                    </div>
                </div>
            </div>


            <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 " id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                        <li className="me-2">
                            <button onClick={() => setActiveTab('about')} id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected={activeTab === 'about'} className={`inline-block p-4 rounded-ss-lg ${activeTab === 'about' ? 'text-blue-600 dark:text-blue-500' : 'hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                About
                            </button>
                        </li>
                        <li className="me-2">
                            <button onClick={() => setActiveTab('services')} id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected={activeTab === 'services'} className={`inline-block p-4 ${activeTab === 'services' ? 'text-blue-600 dark:text-blue-500' : 'hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                Services
                            </button>
                        </li>
                        <li className="me-2">
                            <button onClick={() => setActiveTab('statistics')} id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected={activeTab === 'statistics'} className={`inline-block p-4 ${activeTab === 'statistics' ? 'text-blue-600 dark:text-blue-500' : 'hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                Facts
                            </button>
                        </li>
                    </ul>
                    <div id="defaultTabContent">
                        {activeTab === 'about' && (
                            <div className="p-4 bg-white rounded-lg md:p-8 " id="about" role="tabpanel" aria-labelledby="about-tab">
                                <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 ">¡Bienvenido a Propiedad Plus, tu nueva app de administración de propiedad raíz!</h2>
                                <br />
                                <p className="mb-3 text-black ">Nos alegra tenerte con nosotros. Con Propiedad Plus, gestionar tus propiedades nunca ha sido tan fácil y eficiente. Aquí encontrarás todas las herramientas necesarias para optimizar la administración de tus bienes raíces, desde el seguimiento de arrendamientos hasta el control de mantenimiento y la gestión de inquilinos.</p>
                                <br />

                                <Link to='/tasks' className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                    Empieza ahora
                                    <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                        {activeTab === 'services' && (
                            <div className="p-4 bg-white rounded-lg md:p-8 " id="services" role="tabpanel" aria-labelledby="services-tab">
                                <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 ">Empezar es muy sencillo</h2>
                                <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="leading-tight text-black">Crea tu cuenta: Regístrate en unos pocos pasos sencillos.</span>
                                    </li>
                                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="leading-tight text-black">Agrega tus propiedades: Introduce la información de tus propiedades.</span>
                                    </li>
                                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="leading-tight text-black"> Administra</span>
                                    </li>
                                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="leading-tight text-black">Empieza a disfrutar de una administración más organizada y eficiente.</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'statistics' && (
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                                    </div>
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                                    </div>
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                                    </div>
                                </dl>
                            </div>
                        )}
                    </div>
                </div>
            </div><div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-backgroundColor dark:border-backgroundColor dark:hover:border-backgroundColor">
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
        </>
    );

}

export default HomePage;
