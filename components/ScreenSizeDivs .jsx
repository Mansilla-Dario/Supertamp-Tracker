'use client'
import React, { useEffect, useState } from 'react';

const ScreenSizeIndicator = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('sm');
      } else if (width < 768) {
        setScreenSize('md');
      } else if (width < 1024) {
        setScreenSize('lg');
      } else {
        setScreenSize('xl');
      }
    };

    // Actualizar el tamaño de la pantalla al cargar y al cambiar el tamaño de la ventana
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className={`bg-yellow-400 p-4 text-center font-bold text-white ${screenSize}`}>
      Tamaño de Pantalla: {screenSize.toUpperCase()}
    </div>
  );
};

export default ScreenSizeIndicator;
