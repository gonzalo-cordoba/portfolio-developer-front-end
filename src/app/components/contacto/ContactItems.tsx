import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export const ContactItems = () => {
  return (
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
            Soy un desarrollador web apasionado por crear soluciones innovadoras
            y eficientes. Siempre estoy buscando nuevos desafíos y oportunidades
            para aprender y crecer en el mundo del desarrollo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
