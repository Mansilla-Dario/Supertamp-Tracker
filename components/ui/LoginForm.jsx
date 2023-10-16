"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm({ onDataChange }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${formData.username}, Contraseña: ${formData.password}`);
    // Enviar los datos a la función onDataChange si es necesario
    onDataChange(formData);
  };

  return (
    <>
      <Card className="w-[350px] bg-white bg-opacity-80 backdrop-blur-lg ">
        <CardHeader>
          <CardTitle>Logueate Parce!!!</CardTitle>
          <CardDescription>
            Mete tu usuario y contraseña para echarle cabeza e iniciar sesión!!!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Ingresa tu usuario"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Button type="submit" className="mt-3">Iniciar Sesión!!!</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </>
  );
}
