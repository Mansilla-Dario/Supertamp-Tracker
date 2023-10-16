"use client";
import React, { useState, useEffect } from "react";
import CheckinBtn from "./checkinBtn";
import CheckoutBtn from "./checkoutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NuevoIngresoBtn from "./nuevoIngresoBtn";
import NuevoEgresoBtn from "./nuevoEgresoBtn";
import { Button } from "@/components/ui/button";

export default function ReceptionistSidebar() {
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    // Lógica para gestionar el tiempo de sesión
    const intervalId = setInterval(() => {
      setSessionTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  return (
    <div className="bg-gray-100 p-4 border-r border-gray-200 h-screen">
      <section className="mb-6 w-full flex justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
      <section className="mb-3 w-full flex justify-center">
        <CheckinBtn />
      </section>

      <section className="mb-3 w-full flex justify-center">
        <CheckoutBtn />
      </section>

      <section className="mb-3 w-full flex justify-center">
        <NuevoIngresoBtn />
      </section>

      <section className="mb-3 w-full flex justify-center">
        <NuevoEgresoBtn />
      </section>

      <section className="mb-3 w-full flex  flex-col justify-center">
        <Button variant="outline" className="min-w-[150px] bg-red-500 text-white">
          Cerrar la Sesión
        </Button>
      </section>

      <div className="mt-4 flex flex-col items-center justify-center">
        <h3 className="text-sm font-bold mb-2">TIEMPO DE SESION</h3>
        <p>{formatTime(sessionTime)}</p>
      </div>
    </div>
  );
}
