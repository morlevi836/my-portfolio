import Link from "next/link";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavBarClient from "./NavBar.client"; // Import the client component

const NavBarServer = () => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 cursor-none bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Mor Levi
        </Link>

        {/* Pass navItems to the client component */}
        <NavBarClient navItems={navItems} />
      </div>
    </nav>
  );
};

export default NavBarServer;
