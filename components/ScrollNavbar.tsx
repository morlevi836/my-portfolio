"use client";

import { useState, useEffect } from "react";

const ScrollNavbar = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        // Show navbar when scrolling up or at the top
        setVisible(true);
      } else {
        // Hide navbar when scrolling down
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 top-0 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } z-50 bg-gray-50 shadow-md dark:bg-gray-900 dark:text-white`}
    >
      {children}
    </div>
  );
};

export default ScrollNavbar;
