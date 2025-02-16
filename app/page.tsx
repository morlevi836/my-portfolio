"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});

const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects"),
  {
    ssr: false,
  },
);

const Home = () => {
  return (
    <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
