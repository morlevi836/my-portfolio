"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js.",
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com",
  },
  {
    title: "Project 2",
    description:
      "A responsive portfolio website using Next.js and Tailwind CSS.",
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "An interactive 3D visualization using Three.js.",
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50"
            >
              <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
