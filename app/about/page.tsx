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

        {/* Call-to-Action */}
        {/* <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 text-center dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Let’s Build Something Amazing Together
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's collaborate and bring your ideas to
              life.
            </p>
            <Button
              asChild
              className="rounded-full bg-blue-600 px-8 py-3 text-white shadow-md shadow-blue-900/30 transition-all duration-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div> */}
      </main>
    </>
  );
}
