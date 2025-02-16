"use client";

import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Button } from "./ui/button";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Why Hire Me?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I’m a results-driven developer with a proven track record of
              delivering high-quality solutions. Let’s discuss how I can add
              value to your team.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  My Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interested in working together? Reach out to me via email or
              connect on LinkedIn.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:morlevimail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mor-levi-73a364247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/morlevi836"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Download My Resume</h3>

            <p className="text-gray-600 dark:text-gray-400">
              Want to learn more about my professional background? Download my
              resume for a detailed overview.
            </p>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
              onClick={() => {
                toast({
                  title: "Resume Downloaded Successfully!",
                });
              }} // Close menu on click
            >
              <a
                href="/resume/Resume - Mor Levi.pdf"
                download
                // className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                onClick={() =>
                  toast({
                    title: "Resume Downloaded Successfully!",
                  })
                }
              >
                <LuDownload className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright Notice */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Mor Levi. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="mr-2">Back to Top</span>
            <FaArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
