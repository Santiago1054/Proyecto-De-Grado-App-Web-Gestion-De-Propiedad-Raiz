import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [activeTab, setActiveTab] = useState('about');

    return (
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
        </div>
    );
}

export default HomePage;
