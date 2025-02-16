// app/about/page.tsx

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const SkillsTags = dynamic(() => import("@/components/SkillsTags"));

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        {/* About Me Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsTags />
      </main>
    </>
  );
}
