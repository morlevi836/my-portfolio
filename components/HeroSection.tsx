"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white text-black transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/light-background4.webp" // Replace with your light mode image
          alt="Background"
          fill
          className="object-cover opacity-50 dark:hidden"
        />
        <Image
          src="/images/dark-background7.webp" // Replace with your dark mode image
          alt="Background"
          fill
          className="hidden object-cover opacity-50 dark:block"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-20 flex flex-col items-center gap-6 px-4 text-center"
      >
        <motion.div
          className="relative h-44 w-44 rounded-full p-[3px] shadow-lg"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
              draggable="false"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl font-bold drop-shadow-md"
        >
          Hello, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Mor Levi</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 max-w-2xl text-lg drop-shadow-md"
        >
          A passionate Full-Stack Developer with expertise in building scalable,
          user-friendly applications. I specialize in turning ideas into reality
          through clean, efficient, and maintainable code.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex gap-4"
        >
          <Button className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-md hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 py-3 text-blue-700 shadow-md hover:bg-gray-100">
            <Link href="/contact">Let’s Connect</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex gap-6"
        >
          <a
            href="https://github.com/morlevi836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mor-levi-73a364247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
