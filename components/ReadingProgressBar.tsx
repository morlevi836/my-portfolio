"use client";

import { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(scrolled);

      // Check scroll direction
      if (scrollTop > lastScrollY.current) {
        setIsScrollingUp(false);
      } else if (scrollTop < lastScrollY.current) {
        setIsScrollingUp(true);
      }

      lastScrollY.current = scrollTop;
    };

    const handleScroll = () => requestAnimationFrame(updateProgress);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full transition-all duration-300 ${
        isScrollingUp && lastScrollY.current > 0 ? "pt-16" : "pt-0"
      }`}
    >
      <Progress value={progress} className="h-1.5 rounded-none" />
    </div>
  );
}
