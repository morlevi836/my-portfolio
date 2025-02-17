"use client";

import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Button } from "./ui/button";

const Footer = () => {
  const footerItems = [
    { label: "About Me", href: "/about" },
    { label: "My Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Me", href: "/contact" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 py-8 md:py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold md:text-xl">Why Hire Me?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              I’m a results-driven developer with a proven track record of
              delivering high-quality solutions. Let’s discuss how I can add
              value to your team.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold md:text-xl">Quick Links</h3>
            <ul className="space-y-2">
              {footerItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 md:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold md:text-xl">Get in Touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
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
                <FaEnvelope className="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/mor-levi-73a364247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaLinkedin className="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a
                href="https://github.com/morlevi836"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaGithub className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold md:text-xl">Download My Resume</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
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
              }}
            >
              <a href="/resume/Resume - Mor Levi.pdf" download>
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
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            &copy; {new Date().getFullYear()} Mor Levi. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="mr-2 text-sm md:text-base">Back to Top</span>
            <FaArrowUp className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
