"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Technology {
  name: string;
  logo: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: Technology[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
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
        <CardContent>
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
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
