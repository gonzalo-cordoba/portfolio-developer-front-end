import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  { name: "PostgreSQL", logo: "/postgre.png" },
  { name: "Prisma", logo: "/prisma.svg" },
  { name: "Docker", logo: "/docker.png" },
  { name: "HTML5", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "Tailwind CSS", logo: "/tailwind.png" },
  { name: "Figma", logo: "/figma.png" },
];

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

export const SkillsComponent = () => {
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
  );
};
