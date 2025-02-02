"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";

// Lazy load sections
const NavBar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});
const ExperienceSection = dynamic(
  () => import("@/components/ExperienceSection"),
  { ssr: false },
);
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  ssr: false,
});
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  ssr: false,
});
const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection"),
  {
    ssr: false,
  },
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <img
          src="/images/duck-loading.gif"
          alt="loading"
          className="object-cover"
          draggable="false"
        />
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default Home;

{
  /* <motion.div
          className="h-16 w-16 animate-spin rounded-full border-4 border-blue-400 border-t-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        /> */
}
