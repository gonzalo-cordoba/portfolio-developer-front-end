import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiFramer,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "Stackly- Landing Page",
    description:
      "Desarrollé una landing page para una empresa especializada en infraestructura de datos financieros modernos para el sector fintech. Esta página fue diseñada para reflejar su enfoque en integrar datos de múltiples proveedores bancarios y bases de datos de fintech, con el objetivo de agilizar operaciones, reducir riesgos de fraude y mejorar la eficiencia operativa. El diseño se centró en transmitir confianza, innovación y la capacidad de la empresa para optimizar los procesos clave dentro de las fintechs.",
    imageUrl: "/stackly.webp",
    projectUrl: "https://landing-stackl.vercel.app/",
    githubUrl: "https://github.com/gonzalo-cordoba/landing-stackly",
    technologies: [
      { name: "React", logo: <IoLogoReact /> },
      { name: "TypeScript", logo: <BiLogoTypescript /> },
      { name: "Next.js", logo: <SiNextdotjs /> },
      { name: "shadcn/ui", logo: <SiShadcnui /> },
    ],
  },
  {
    title: "Landing Page Dot Dager",
    description:
      "Landing page para un youtuber del ambiente IT, destacando su trayectoria y mostrando sus pasiones. La página incluye secciones que detallan su contenido, intereses personales y la conexión que busca generar con su audiencia. El diseño fue creado para capturar la esencia de su marca y personalidad, con un enfoque en crear una experiencia atractiva y auténtica para sus seguidores.",
    imageUrl: "/dager-landing.webp",
    projectUrl: "https://dager-landing-serious.vercel.app/",
    githubUrl: "https://github.com/gonzalo-cordoba/dager-landing-serious",
    technologies: [
      { name: "React", logo: <IoLogoReact /> },
      { name: "TypeScript", logo: <BiLogoTypescript /> },
      { name: "Next.js", logo: <SiNextdotjs /> },
    ],
  },
  {
    title: "Portfolio Personal",
    description: "Mi portfolio personal mostrando mis proyectos y habilidades.",
    imageUrl: "/portfolio.webp",
    projectUrl: "#",
    githubUrl:
      "https://github.com/gonzalo-cordoba/portfolio-developer-front-end",
    technologies: [
      { name: "React", logo: <IoLogoReact /> },
      { name: "TypeScript", logo: <BiLogoTypescript /> },
      { name: "Next.js", logo: <SiNextdotjs /> },
      { name: "Tailwind", logo: <SiTailwindcss /> },
      { name: "Framer", logo: <SiFramer /> },
    ],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-32 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-8 relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E03AQES7mIbBslr5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626736649555?e=1739404800&v=beta&t=ufaA4AIA_Eh8bhzhRTfFaLd_gGe8hMvRBJ3aexboHyQ"
              alt="Gonzalo Cordoba | Frontend Developer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Gonzalo Cordoba
          </h1>
          <p className="mb-4 text-2xl font-bold">Frontend Developer</p>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Soy un desarrollador front-end especializado en construir interfaces
            web modernas y atractivas. Con experiencia en React, TypeScript,
            HTML, CSS, y Next.js, me apasiona transformar ideas en experiencias
            de usuario intuitivas y eficientes. Además, domino Git para
            colaborar en proyectos de manera ágil y efectiva.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#projects">Ver Proyectos</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-32">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
