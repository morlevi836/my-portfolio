"use client";

import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaAward } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="pt-32">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">About Me</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Hi, I&#39;m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Mor Levi
            </span>
            , a Full-Stack Developer with a passion for building scalable,
            user-friendly applications. I specialize in{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">Node.js</span>, and I thrive in
            fast-paced, high-pressure environments. When I&#39;m not coding, I
            enjoy mentoring others and exploring new technologies.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 z-0 h-full w-1 -translate-x-1/2 transform bg-gray-200 dark:bg-gray-700" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 flex items-center justify-between"
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I&#39;ve spent 3 years in the Israeli Air Force, leading the
                  development of mission-critical systems that improved
                  efficiency and streamlined workflows.
                </p>
              </div>
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg dark:bg-blue-400">
                <FaUser className="text-2xl" />
              </div>
              <div className="w-1/2 pl-8" />
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 flex items-center justify-between"
            >
              <div className="w-1/2 pr-8" />
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg dark:bg-blue-400">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-2xl font-semibold">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Sc. in Computer Science from Ashkelon Academic College.
                  Graduated with a GPA of 87 and developed a web-based job
                  marketplace as my final project.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-10 flex items-center justify-between"
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold">Achievements</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Awarded the Brigadier General Award for developing a project
                  that streamlined product delivery and request management in
                  the Air Force.
                </p>
              </div>
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg dark:bg-blue-400">
                <FaAward className="text-2xl" />
              </div>
              <div className="w-1/2 pl-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
