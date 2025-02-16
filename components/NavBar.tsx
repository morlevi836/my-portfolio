"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu, Code } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ScrollNavbar from "./ScrollNavbar";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { HiOutlineCode } from "react-icons/hi";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ScrollNavbar>
      <nav className="sticky top-0 z-50 cursor-none bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <HiOutlineCode />
            <span>Mor Levi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}

            {/* Resume Download Button */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
              onClick={() =>
                toast({
                  title: "Resume Downloaded Successfully!",
                })
              }
            >
              <a href="/resume/Resume - Mor Levi.pdf" download>
                Resume
              </a>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <div className="flex items-center space-x-1">
                  <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span>Dark</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />{" "}
                  <span>Light</span>
                </div>
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Resume Download Button for Mobile */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      toast({
                        title: "Resume Downloaded Successfully!",
                      });
                    }} // Close menu on click
                  >
                    <a href="/resume/Resume - Mor Levi.pdf" download>
                      Resume
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </ScrollNavbar>
  );
};

export default NavBar;
