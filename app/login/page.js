'use client';
import '../globals.css'
import LoginForm from '@/components/ui/LoginForm';
import { useState } from 'react';

export default function page() {
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  

  const onDataChange = (newData) => {
    // Actualizar el estado con los nuevos datos del formulario
    setFormData(newData);

    // Puedes realizar otras acciones aquí si es necesario
    console.log('Datos del formulario cambiados:', newData);
  };
  return (
    <>
      <div className="w-full h-screen absolute  md:flex  md:flex-row">
        {/* Left side with the image */}
        <div className="w-full md:w-1/2 bg-yellow-400 h-screen">
          <img
            className="w-full h-full object-cover"
            src="/ImageBGLogin.jpg"
            alt="LOG IN!"
          />
        </div>

        {/* Right side with the login form */}
        <div className="hidden md:block lg:w-1/2 bg-white h-screen pt-[10%] px-12">
          <LoginForm 
          onDataChange={onDataChange}/>
        </div>
        {/* Over with the Image in Mobile and Tablets*/}
        <div className="absolute block md:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
