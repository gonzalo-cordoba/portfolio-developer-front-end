"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";
import { SkillsComponent } from "./SkillsComponent";

const experiences = [
  {
    title: "Desarrollador Front-End | Landing Page Stackly",
    type: "Freelance",
    period: "Noviembre 2024-Diciembre 2024",
    description:
      "Desarrollé una landing page para una empresa especializada en infraestructura de datos financieros modernos para el sector fintech. Esta página fue diseñada para reflejar su enfoque en integrar datos de múltiples proveedores bancarios y bases de datos de fintech, con el objetivo de agilizar operaciones, reducir riesgos de fraude y mejorar la eficiencia operativa. El diseño se centró en transmitir confianza, innovación y la capacidad de la empresa para optimizar los procesos clave dentro de las fintechs.",
    technologies: ["React", "TypeScript", "Next.js", "shadcn/ui"],
  },
  {
    title: "Desarrollador Front-End | Landing Page Dot Dager",
    type: "Proyecto personal",
    period: "Noviembre 2024-Diciembre 2024",
    description:
      "Landing page para un youtuber del ambiente IT, destacando su trayectoria y mostrando sus pasiones. La página incluye secciones que detallan su contenido, intereses personales y la conexión que busca generar con su audiencia. El diseño fue creado para capturar la esencia de su marca y personalidad, con un enfoque en crear una experiencia atractiva y auténtica para sus seguidores.",
    technologies: ["React", "TypeScript", "Next.js"],
  },

  {
    title:
      "Desarrollo de Ecommerce de Productos Electrónicos como Proyecto Freelance",
    type: "Proyecto freelance privado",
    period: "Julio 2024–Septiembre 2024",
    description:
      "Diseñé y desarrollé la interfaz de usuario de una plataforma de ecommerce especializada en productos electrónicos utilizando React, TypeScript y Next.js. Integré Firebase para gestionar productos, usuarios y pedidos, además de implementar un sistema de autenticación segura con Firebase Authentication. Optimicé el rendimiento web, y aseguré una colaboración eficiente en equipo utilizando GitHub para el control de versiones, revisiones de código y gestión de pull requests.",
    technologies: ["React", "TypeScript", "Next.js", "Firebase"],
  },
  {
    title: "Desarrollo de Sistema de Venta de Tickets para Teatro Municipal",
    type: "Proyecto freelance privado",
    period: "Marzo 2024 -Julio 2024",
    description:
      "Diseñé y desarrollé la interfaz de usuario de un sistema de venta de tickets para un teatro municipal utilizando React, TypeScript, y Next.js, priorizando una experiencia fluida y eficiente. Implementé componentes estilizados y accesibles con shadcn/ui, y utilicé Zustand para gestionar el estado global de forma reactiva y sencilla. Aseguré la calidad del proyecto mediante el uso de GitHub para el control de versiones, con pull requests y revisiones de código. Además, optimicé el rendimiento aplicando buenas prácticas de desarrollo para mejorar la velocidad y eficiencia del proceso de compra.",
    technologies: ["React", "TypeScript", "Next.js", "Zustand", "Shadcn/ui"],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ExperienceComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-4xl font-extrabold tracking-tight"
      >
        Curriculum Vitae
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <section>
          <h2 className="text-2xl font-bold mb-6">Experiencia</h2>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="mb-6"
            >
              <Card className="bg-card border-border hover:bg-accent/5 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span>{experience.title}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {experience.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {/* <Button variant="ghost" className="text-sm">
                    Ver más detalles →
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        <SkillsComponent />
      </motion.div>
    </>
  );
};
