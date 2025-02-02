"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaAward,
  FaCode,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold sm:text-5xl"
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Hi, I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Mor Levi
            </span>
            , a Full-Stack Developer with a passion for building scalable,
            user-friendly applications. I specialize in{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">Node.js</span>, and I thrive in
            fast-paced, high-pressure environments. When I’m not coding, I enjoy
            mentoring others and exploring new technologies.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaUser
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Experience"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Experience
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              I’ve spent 3 years in the Israeli Air Force, leading the
              development of mission-critical systems that improved efficiency
              and streamlined workflows.
            </p>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaGraduationCap
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Education"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Education
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              B.Sc. in Computer Science from Ashkelon Academic College.
              Graduated with a GPA of 87 and developed a web-based job
              marketplace as my final project.
            </p>
          </motion.div>

          {/* Card 3: Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaAward
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Achievements"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Achievements
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              Awarded the Brigadier General Award for developing a project that
              streamlined product delivery and request management in the Air
              Force.
            </p>
          </motion.div>

          {/* Card 4: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaCode
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Skills"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Skills
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              Proficient in React, TypeScript, Node.js, MongoDB, and Figma.
              Skilled in RESTful APIs, Git, and cloud services like AWS S3.
            </p>
          </motion.div>

          {/* Card 5: Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaLightbulb
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Continuous Learning"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Continuous Learning
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              Always exploring new technologies. Recently completed a 62-hour
              web development bootcamp and diving deeper into advanced
              TypeScript.
            </p>
          </motion.div>

          {/* Card 6: Personality & Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:p-8"
          >
            <div className="mb-4 flex justify-center">
              <FaHandsHelping
                className="text-4xl text-blue-600 dark:text-blue-400"
                aria-label="Personality & Values"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
              Personality & Values
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              A collaborative team player who values adaptability, attention to
              detail, and using technology to solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
