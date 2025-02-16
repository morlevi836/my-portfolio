import dynamic from "next/dynamic";

const ProjectsSection = dynamic(
  () => import("@/components/projects/ProjectsSection"),
);

export default function ProjectsPage() {
  return (
    <>
      <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <ProjectsSection />
      </main>
    </>
  );
}
