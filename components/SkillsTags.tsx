"use client";

import { skills } from "@/constant/skills";

const SkillsTags = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-gray-800"
            >
              <span className="h-5 w-5">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTags;
