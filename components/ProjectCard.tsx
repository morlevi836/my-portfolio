"use client"; // Mark this component as client-side only

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-50">
            <motion.p
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="text-lg font-semibold text-white"
            >
              View Project
            </motion.p>
          </div>
        </div>
        <div className="bg-white p-6 dark:bg-gray-800">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}
