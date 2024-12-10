"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

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
];

const skills = [
  { name: "React", logo: "/reactlogo.png" },
  { name: "TypeScript", logo: "/typescript.png" },
  { name: "JavaScript", logo: "/js.png" },
  {
    name: "Next.js",
    logo: "/nextjs.png",
  },
  { name: "Git", logo: "/git.png" },
  { name: "Node.js", logo: "/node.png" },
  { name: "Docker", logo: "/docker.png" },
  { name: "HTML5", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "Tailwind CSS", logo: "/tailwind.png" },
  { name: "Figma", logo: "/figma.png" },
];

export default function CV() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
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
                  <Button variant="ghost" className="text-sm">
                    Ver más detalles →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-2 relative">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
