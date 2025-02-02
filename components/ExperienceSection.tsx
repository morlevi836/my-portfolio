"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    date: "August 2023 - Present",
    title: "Full-Stack Developer",
    company: "Israeli Air Force",
    description:
      "Led development of a classified project to optimize workflow and improve product delivery for internal customers. Overcame challenges during war, balancing new project development with maintaining existing systems and additional military duties.",
  },
  {
    date: "October 2020 - August 2023",
    title: "Computer Science Student",
    company: "Ashkelon Academic College",
    description:
      "Graduated with a B.Sc. in Computer Science. Developed a web-based job marketplace platform as a final project, featuring user authentication, real-time job listings, and search functionality using React, Node.js, Express, and MongoDB.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300 dark:bg-gray-700"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-8 flex w-full items-center justify-between ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 shadow-lg dark:bg-blue-500">
                <FaBriefcase className="text-white" />
              </div>

              {/* Experience Card */}
              <div
                className={`w-[45%] rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {experience.date}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {experience.company}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

// {
//   date: "June 2019 - August 2020",
//   title: "Software Development Intern",
//   company: "Tech Startup",
//   description:
//     "Worked on frontend and backend development for a SaaS platform. Gained experience in React, Node.js, and cloud services like AWS.",
// },
