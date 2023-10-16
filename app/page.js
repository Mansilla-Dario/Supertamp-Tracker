'use client'
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation';


const rolList = ['jefe-recepcion', 'administrador', 'contador', 'gerente', 'gerente-general'];

export default function IndexPage() {
  const [userState, setUserState] = useState({
    isAuthenticated: true,
    rol: rolList[0],
    ubicacion: '',
  });


  useEffect(() => {
    // Redirigir a la página de inicio de sesión si el usuario no está autenticado
    if (!userState.isAuthenticated) {
      redirect('/login')
    }else{
      redirect("/dashboard");
    }
  }, [userState.isAuthenticated]);

  return null; // O cualquier otro contenido que quieras renderizar mientras se redirige
}
