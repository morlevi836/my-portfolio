"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import {
  FaSearch,
  FaSort,
  FaTh,
  FaList,
  FaArrowUp,
  FaArrowDown,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

// Sample projects data
const projects: {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}[] = [
  // {
  //   id: 1,
  //   title: "Project 1",
  //   description: "A modern web application built with React and Tailwind CSS.",
  //   tags: ["React", "Tailwind CSS", "Next.js"],
  //   link: "#",
  //   image: "/images/dark-background7.webp",
  // },
  // {
  //   id: 2,
  //   title: "Project 2",
  //   description: "An e-commerce platform with seamless user experience.",
  //   tags: ["Node.js", "Express", "MongoDB"],
  //   link: "#",
  //   image: "/images/dark-background7.webp",
  // },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   description: "A portfolio website showcasing creative work.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   link: "#",
  //   image: "/images/dark-background7.webp",
  // },
  // // Add more projects here
];

// All unique tags
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

const ProjectsSection = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects based on selected tags and search query
  const filteredProjects = projects
    .filter((project) =>
      selectedTags.length > 0
        ? selectedTags.some((tag) => project.tags.includes(tag))
        : true,
    )
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(0, currentPage * projectsPerPage);

  // Toggle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Load more projects
  const loadMoreProjects = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <section id="projects" className="pb-24 pt-32">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold sm:text-5xl"
        >
          My Projects
        </motion.h2>

        {/* Controls: Search, Tags, Sort, View Toggle */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 dark:bg-gray-900"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                onClick={() => handleTagClick(tag)}
                className="shrink-0 rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Sort and View Toggle */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-full sm:w-auto">
                  <FaSort className="mr-2" />
                  {sortBy === "newest" && "Newest"}
                  {sortBy === "oldest" && "Oldest"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("newest")}>
                  <FaArrowDown className="mr-2" />
                  Newest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("oldest")}>
                  <FaArrowUp className="mr-2" />
                  Oldest
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Toggle */}
            <Toggle
              pressed={isGridView}
              onPressedChange={() => setIsGridView(!isGridView)}
              className="w-full sm:w-auto"
            >
              {isGridView ? (
                <FaList className="mr-2" />
              ) : (
                <FaTh className="mr-2" />
              )}
              {isGridView ? "List View" : "Grid View"}
            </Toggle>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`grid gap-8 ${
            isGridView
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-transform hover:scale-105">
                  <CardHeader>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-300">
              {searchQuery || selectedTags.length > 0
                ? "No projects match your search."
                : "Projects will be coming soon!"}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredProjects.length < projects.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={loadMoreProjects}>Load More</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
