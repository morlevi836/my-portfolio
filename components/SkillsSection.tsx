"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "./SkillCategory";
import { skills } from "@/constant/skills";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-bold text-gray-900 dark:text-white"
        >
          My Skills
        </motion.h2>

        {skills.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
