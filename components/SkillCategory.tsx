"use client";

import { motion } from "framer-motion";
import React from "react";

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <div className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex transform flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-700 dark:hover:shadow-2xl"
          >
            {skill.icon}
            <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}
