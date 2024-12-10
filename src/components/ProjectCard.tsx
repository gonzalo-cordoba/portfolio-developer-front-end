"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io5";

interface Technology {
  name: string;
  logo: string | LucideIcon | JSX.Element;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  technologies: Technology[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden flex flex-col h-full">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-4 mt-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-8 h-8 relative mb-1">
                  {typeof tech.logo === "string" ? (
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={32}
                      height={32}
                      objectFit="contain"
                    />
                  ) : typeof tech.logo === "function" ? (
                    <tech.logo className="w-8 h-8" />
                  ) : (
                    tech.logo
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button asChild variant="default" className="flex-1">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
