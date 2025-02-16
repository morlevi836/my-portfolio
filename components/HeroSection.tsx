"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 text-black transition-colors duration-500 dark:bg-gray-900 dark:text-white sm:px-12">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/light-background4.webp"
          alt="Background"
          fill
          className="object-cover opacity-50 dark:hidden"
        />
        <Image
          src="/images/dark-background7.webp"
          alt="Background"
          fill
          className="hidden object-cover opacity-50 dark:block"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-16 flex flex-col items-center gap-4 text-center sm:gap-6"
      >
        <motion.div
          className="relative h-32 w-32 rounded-full p-[3px] shadow-lg sm:h-44 sm:w-44"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(90deg, #ff007f, #ffcc00, #00ffcc, #007fff)",
            backgroundSize: "300% 300%",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/profile-img.jpg"
              alt="Profile"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl font-bold drop-shadow-md sm:text-4xl"
        >
          Hello, I&#39;m{" "}
          <span className="text-blue-600 dark:text-blue-400">Mor Levi</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-2 max-w-md text-base drop-shadow-md sm:mt-4 sm:max-w-2xl sm:text-lg"
        >
          A passionate Full-Stack Developer with expertise in building scalable,
          user-friendly applications. I specialize in turning ideas into reality
          through clean, efficient, and maintainable code.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-6"
        >
          <Button className="rounded-full bg-blue-600 px-5 py-2 text-white shadow-md hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 sm:px-6 sm:py-3">
            <Link href="/projects">View My Work</Link>
          </Button>

          <Button className="rounded-full bg-white px-5 py-2 text-blue-700 shadow-md hover:bg-gray-100 sm:px-6 sm:py-3">
            <Link href="/contact">Let&#39;s Connect</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 flex gap-6 sm:mt-6"
        >
          <a
            href="https://github.com/morlevi836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mor-levi-73a364247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
