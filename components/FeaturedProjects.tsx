"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "A modern web application built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Next.js"],
    link: "#",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "An e-commerce platform with seamless user experience.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A portfolio website showcasing creative work.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    image: "/images/project3.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold sm:text-5xl"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full transition-transform hover:scale-105">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
