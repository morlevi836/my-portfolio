// components/AboutHero.tsx
"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-bold sm:text-5xl"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl"
        >
          Hi, I’m Mor Levi, a Full-Stack Developer with a passion for building
          scalable, user-friendly applications. Let me tell you more about my
          journey and skills.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
