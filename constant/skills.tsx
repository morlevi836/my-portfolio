"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiZod,
  SiReacthookform,
  SiShadcnui,
  SiMui,
  SiDaisyui,
  SiRocketdotchat,
  SiCplusplus,
  SiAdobexd,
  SiNextdotjs,
  SiChakraui,
  SiTypeorm,
  SiPrisma,
  SiTailwindcss,
  SiMongoose,
  SiPostman,
  SiDocker,
} from "react-icons/si";
import { LuLogs } from "react-icons/lu";
import { DiMysql } from "react-icons/di";

export const allAkills = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <FaJs style={{ color: "#f7df1e" }} className="text-5xl" />, // Yellow
      },
      {
        name: "Java",
        icon: <FaJava style={{ color: "#007396" }} className="text-5xl" />, // Red
      },
      {
        name: "Python",
        icon: <FaPython style={{ color: "#3776ab" }} className="text-5xl" />, // Blue
      },
      {
        name: "C++",
        icon: <SiCplusplus style={{ color: "#00599c" }} className="text-5xl" />, // Purple
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 style={{ color: "#e34f26" }} className="text-5xl" />, // Orange
      },
      {
        name: "CSS",
        icon: <FaCss3Alt style={{ color: "#1572b6" }} className="text-5xl" />, // Blue
      },
      {
        name: "TypeScript",
        icon: (
          <SiTypescript style={{ color: "#3178c6" }} className="text-5xl" />
        ), // Blue
      },
      {
        name: "React.js",
        icon: <FaReact style={{ color: "#61dafb" }} className="text-5xl" />, // Cyan
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs style={{ color: "#000000" }} className="text-5xl" />, // Black
      },
    ],
  },
  {
    title: "Forms & Validation",
    skills: [
      {
        name: "Zod",
        icon: <SiZod style={{ color: "#8a2be2" }} className="text-5xl" />, // Purple
      },
      {
        name: "React Hook Form",
        icon: (
          <SiReacthookform style={{ color: "#ec5990" }} className="text-5xl" />
        ), // Red
      },
    ],
  },
  {
    title: "State Management",
    skills: [
      {
        name: "Zustand",
        icon: <FaReact style={{ color: "#6b7280" }} className="text-5xl" />, // Gray
      },
      {
        name: "React Query",
        icon: <FaReact style={{ color: "#ff4154" }} className="text-5xl" />, // Red
      },
    ],
  },
  {
    title: "UI Frameworks & Components",
    skills: [
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss style={{ color: "#38b2ac" }} className="text-5xl" />
        ), // Teal
      },
      {
        name: "Material-UI",
        icon: <SiMui style={{ color: "#0081cb" }} className="text-5xl" />, // Blue
      },
      {
        name: "ShadCN UI",
        icon: <SiShadcnui style={{ color: "#000000" }} className="text-5xl" />, // Black
      },
      {
        name: "DaisyUI",
        icon: <SiDaisyui style={{ color: "#5a67d8" }} className="text-5xl" />, // Indigo
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui style={{ color: "#319795" }} className="text-5xl" />, // Teal
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs style={{ color: "#68a063" }} className="text-5xl" />, // Green
      },
      {
        name: "NestJS",
        icon: <SiNestjs style={{ color: "#e0234e" }} className="text-5xl" />, // Red
      },
      {
        name: "Express.js",
        icon: <SiExpress style={{ color: "#000000" }} className="text-5xl" />, // Black
      },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb style={{ color: "#47a248" }} className="text-5xl" />, // Green
      },
      {
        name: "Mongoose",
        icon: <SiMongoose style={{ color: "#880000" }} className="text-5xl" />, // Red
      },
      {
        name: "MySQL",
        icon: <DiMysql style={{ color: "#4479a1" }} className="text-5xl" />, // Blue
      },
      {
        name: "PostgreSQL",
        icon: (
          <SiPostgresql style={{ color: "#336791" }} className="text-5xl" />
        ), // Blue
      },
      {
        name: "TypeORM",
        icon: <SiTypeorm style={{ color: "#e535ab" }} className="text-5xl" />, // Pink
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma style={{ color: "#2d3748" }} className="text-5xl" />, // Gray
      },
    ],
  },
  {
    title: "Logging & Debugging",
    skills: [
      {
        name: "Winston",
        icon: <LuLogs style={{ color: "#4caf50" }} className="text-5xl" />, // Green
      },
      {
        name: "Morgan",
        icon: <LuLogs style={{ color: "#4caf50" }} className="text-5xl" />, // Green
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt style={{ color: "#f5455c" }} className="text-5xl" />, // Red
      },
      {
        name: "Github",
        icon: <FaGithub style={{ color: "#000000" }} className="text-5xl" />, // Black
      },
      {
        name: "Postman",
        icon: <SiPostman style={{ color: "#f05032" }} className="text-5xl" />, // Orange
      },
      {
        name: "Adobe XD",
        icon: <SiAdobexd style={{ color: "#ff61f6" }} className="text-5xl" />, // Pink
      },
      {
        name: "Figma",
        icon: <FaFigma style={{ color: "#a259ff" }} className="text-5xl" />, // Purple
      },
    ],
  },
  {
    title: "Services",
    skills: [
      {
        name: "Rocket.Chat",
        icon: (
          <SiRocketdotchat style={{ color: "#f5455c" }} className="text-5xl" />
        ), // Red
      },
      {
        name: "AWS S3",
        icon: <FaAws style={{ color: "#ff9900" }} className="text-5xl" />, // Orange
      },
    ],
  },
  // {
  //   title: "Soft Skills",
  //   skills: [
  //     {
  //       name: "Problem Solving",
  //       icon: (
  //         <MdOutlinePsychology
  //           style={{ color: "#3b82f6" }}
  //           className="text-5xl"
  //         />
  //       ), // Blue
  //     },
  //     {
  //       name: "Teamwork",
  //       icon: <MdPeople style={{ color: "#10b981" }} className="text-5xl" />, // Green
  //     },
  //     {
  //       name: "Adaptability",
  //       icon: (
  //         <MdOutlinePsychology
  //           style={{ color: "#8b5cf6" }}
  //           className="text-5xl"
  //         />
  //       ), // Purple
  //     },
  //     {
  //       name: "Attention to Detail",
  //       icon: (
  //         <MdVisibility style={{ color: "#f59e0b" }} className="text-5xl" />
  //       ), // Yellow
  //     },
  //     {
  //       name: "Time Management",
  //       icon: <MdTimeline style={{ color: "#ef4444" }} className="text-5xl" />, // Red
  //     },
  //     {
  //       name: "Work Ethic",
  //       icon: <MdWork style={{ color: "#6366f1" }} className="text-5xl" />, // Indigo
  //     },
  //     {
  //       name: "Critical Thinking",
  //       icon: <MdLightbulb style={{ color: "#f97316" }} className="text-5xl" />, // Orange
  //     },
  //     {
  //       name: "Communication",
  //       icon: <MdPeople style={{ color: "#14b8a6" }} className="text-5xl" />, // Teal
  //     },
  //   ],
  // },
];

export const skills = [
  {
    name: "JavaScript",
    icon: <FaJs style={{ color: "#f7df1e" }} />, // Yellow
  },
  {
    name: "Java",
    icon: <FaJava style={{ color: "#007396" }} />, // Red
  },
  {
    name: "Python",
    icon: <FaPython style={{ color: "#3776ab" }} />, // Blue
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#00599c" }} />, // Purple
  },
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "#e34f26" }} />, // Orange
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ color: "#1572b6" }} />, // Blue
  },
  {
    name: "TypeScript",
    icon: <SiTypescript style={{ color: "#3178c6" }} />, // Blue
  },
  {
    name: "React.js",
    icon: <FaReact style={{ color: "#61dafb" }} />, // Cyan
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs style={{ color: "#000000" }} />, // Black
  },
  {
    name: "Zod",
    icon: <SiZod style={{ color: "#8a2be2" }} />, // Purple
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform style={{ color: "#ec5990" }} />, // Red
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss style={{ color: "#38b2ac" }} />, // Teal
  },
  {
    name: "Material-UI",
    icon: <SiMui style={{ color: "#0081cb" }} />, // Blue
  },
  {
    name: "ShadCN UI",
    icon: <SiShadcnui style={{ color: "#000000" }} />, // Black
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui style={{ color: "#5a67d8" }} />, // Indigo
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui style={{ color: "#319795" }} />, // Teal
  },
  {
    name: "Node.js",
    icon: <FaNodeJs style={{ color: "#68a063" }} />, // Green
  },
  {
    name: "NestJS",
    icon: <SiNestjs style={{ color: "#e0234e" }} />, // Red
  },
  {
    name: "Express.js",
    icon: <SiExpress style={{ color: "#000000" }} />, // Black
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47a248" }} />, // Green
  },
  {
    name: "Mongoose",
    icon: <SiMongoose style={{ color: "#880000" }} />, // Red
  },
  {
    name: "MySQL",
    icon: <DiMysql style={{ color: "#4479a1" }} />, // Blue
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql style={{ color: "#336791" }} />, // Blue
  },
  {
    name: "TypeORM",
    icon: <SiTypeorm style={{ color: "#e535ab" }} />, // Pink
  },
  {
    name: "Prisma ORM",
    icon: <SiPrisma style={{ color: "#2d3748" }} />, // Gray
  },
  {
    name: "Git",
    icon: <FaGitAlt style={{ color: "#f5455c" }} />, // Red
  },
  {
    name: "Github",
    icon: <FaGithub style={{ color: "#000000" }} />, // Black
  },
  {
    name: "Postman",
    icon: <SiPostman style={{ color: "#f05032" }} />, // Orange
  },
  {
    name: "Docker",
    icon: <SiDocker style={{ color: "#336791" }} />, // Orange
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd style={{ color: "#ff61f6" }} />, // Pink
  },
  {
    name: "Figma",
    icon: <FaFigma style={{ color: "#a259ff" }} />, // Purple
  },
  {
    name: "Rocket.Chat",
    icon: <SiRocketdotchat style={{ color: "#f5455c" }} />, // Red
  },
  {
    name: "AWS S3",
    icon: <FaAws style={{ color: "#ff9900" }} />, // Orange
  },
];
