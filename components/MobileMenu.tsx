"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-4 md:hidden">
      <ThemeToggle />

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg bg-gray-200 p-2 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute right-6 top-16 rounded-md bg-white text-gray-900 shadow-lg dark:bg-gray-800 dark:text-white md:hidden">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen((prev) => !prev)}
                className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
