import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {


    return (
        <>

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-3xl text-center">El <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">control</span> empieza con una buena <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">gestión.</span></h1>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center"> con <span class="font-custom text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">+ EASIFY </span>,  ¡simplificas!</h1>
            <br />
            <div class=" grid grid-cols-2 md:grid-cols-4 gap-4 scale-75 ">
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
    );

}

export default HomePage;
