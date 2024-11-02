import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {


    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-3xl text-center">El <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">control</span> empieza con una buena <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">gestión.</span></h1>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center"> con <span className="font-custom text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-blue-600">+ EASIFY </span>,  ¡simplificas!</h1>
            <br />
            <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '' }}>
        <video
            src="easify.mp4"
            width="70%"
            height="auto"
            controls
            autoPlay
            loop
            muted // El video comenzará en mute
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



        </>
    );

}

export default HomePage;
