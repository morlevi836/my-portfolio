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
import Image from "next/image";

const featuredProjects: {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}[] = [
  // {
  //   id: 1,
  //   title: "Project 1",
  //   description: "A modern web application built with React and Tailwind CSS.",
  //   tags: ["React", "Tailwind CSS", "Next.js"],
  //   link: "#",
  //   image: "/images/project1.jpg",
  // },
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
        {featuredProjects.length > 0 ? (
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="h-48 w-full rounded-t-lg object-cover"
                      draggable="false"
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
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="text-xl">No featured projects at the moment.</p>
            <p className="mt-2">Check back soon for updates!</p>
          </div>
        )}

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
