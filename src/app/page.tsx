import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components";

const projects = [
  {
    title: "Landing Page Stackly",
    description:
      "Landing page para una empresa de infraestructura de datos financieros.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    projectUrl: "#",
    technologies: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "shadcn/ui", logo: "/logos/shadcn.svg" },
    ],
  },
  {
    title: "Landing Page Dot Dager",
    description: "Landing page para un youtuber del ambiente IT.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    projectUrl: "#",
    technologies: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
    ],
  },
  {
    title: "Portfolio Personal",
    description: "Mi portfolio personal mostrando mis proyectos y habilidades.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    projectUrl: "#",
    technologies: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      { name: "Framer", logo: "/logos/framer.svg" },
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
