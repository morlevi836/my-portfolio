"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setProgress(scrolled);

    // Check scroll direction
    if (scrollTop > lastScrollY) {
      // Scrolling down
      setIsScrollingUp(false);
    } else if (scrollTop < lastScrollY) {
      // Scrolling up
      setIsScrollingUp(true);
    }

    // Update last scroll position
    setLastScrollY(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 top-0 w-full transition-all duration-300 ${
        isScrollingUp && lastScrollY > 0 ? "pt-16" : "pt-0"
      }`}
    >
      <Progress value={progress} className="h-1.5 rounded-none" />
    </div>
  );
}
