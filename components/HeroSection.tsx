"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const generateBubbles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 30, // Random size between 30px - 90px
    x: Math.random() * 100, // Random X position
    y: Math.random() * 100, // Random Y position
    duration: Math.random() * 6 + 6, // Animation duration between 6-12s
    delay: Math.random() * 5, // Random delay for staggered animations
  }));
};

const HeroSection = () => {
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      size: number;
      x: number;
      y: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    setBubbles(generateBubbles(100));
  }, []); // Generate bubbles only after initial render

  return (
    <section
      className={`relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white transition-colors duration-500 dark:from-gray-900 dark:to-gray-800`}
    >
      {/* Animated Bubbles */}
      <div className="absolute inset-0 z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ y: "100vh", opacity: 0.3 }}
            animate={{ y: "-10vh", opacity: 0.9 }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              background: `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%), transparent)`,
              opacity: 0.5, // Increased opacity
              filter: "blur(8px)", // Reduced blur for clarity
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-32 flex flex-col items-center gap-6 text-center"
      >
        <motion.div
          className="relative h-44 w-44 rounded-full p-[3px] shadow-lg" // Reduced padding
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(90deg, #ff007f, #ffcc00, #00ffcc, #007fff)",
            backgroundSize: "300% 300%",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            <img
              src="/images/profile-img.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
              draggable="false" // Prevents image dragging
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-bold drop-shadow-md"
        >
          Hello, I'm{" "}
          <span className="text-blue-200 dark:text-blue-400">Mor Levi</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-lg drop-shadow-md"
        >
          Full-Stack Developer | Crafting Scalable & Intuitive Solutions
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 flex gap-4"
        >
          <Button
            className={`rounded-full bg-blue-600 px-6 py-3 text-white shadow-md shadow-blue-900/30 transition-all duration-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600`}
            onClick={() => (window.location.href = "#projects")}
          >
            See My Projects
          </Button>
          <Button
            className={`rounded-full bg-white px-6 py-3 text-blue-700 shadow-md shadow-blue-900/30 transition-all duration-300 hover:bg-gray-100`}
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex gap-6"
        >
          <a
            href="https://github.com/morlevi836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:hover:text-blue-400"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mor-levi-73a364247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:hover:text-blue-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

// const [bubbles, setBubbles] = useState(generateBubbles(100));

// useEffect(() => {
//   const interval = setInterval(() => {
//     setBubbles(generateBubbles(50));
//   }, 1000000);
//   return () => clearInterval(interval);
// }, []);
