"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { nombre: "", email: "", mensaje: "" };

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({ nombre: "", email: "", mensaje: "" });
      // Aquí puedes agregar la lógica para enviar el formulario
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contáctame</CardTitle>
            <CardDescription>
              ¿Tienes alguna pregunta o propuesta? No dudes en escribirme.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-sm font-medium">
                  Nombre
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-xs">{errors.nombre}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[100px]"
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-xs">{errors.mensaje}</p>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Enviar mensaje
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Conéctate conmigo
              </CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <a
                href="https://github.com/gonzalo-cordoba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gonzalocordob/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Sobre mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Soy un desarrollador web apasionado por crear soluciones
                innovadoras y eficientes. Siempre estoy buscando nuevos desafíos
                y oportunidades para aprender y crecer en el mundo del
                desarrollo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
