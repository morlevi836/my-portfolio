"use client";

import { skills } from "@/constant/skills";

const SkillsTags = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl md:text-4xl">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-gray-800 sm:px-6 sm:py-2 sm:text-lg"
            >
              <span className="h-4 w-4 sm:h-5 sm:w-5">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTags;
