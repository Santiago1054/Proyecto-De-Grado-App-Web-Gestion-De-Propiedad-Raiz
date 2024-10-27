import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <>

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-3xl text-center">El <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">control</span> empieza con una buena <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">gestión.</span></h1>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center"> con <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">+ EASIFY ❏</span>,  ¡simplificas!</h1>
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





        </>
    );

}

export default HomePage;
