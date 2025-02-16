"use client";

import { useTheme } from "next-themes";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) return null; // Don't render cursor on mobile

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".clickable",
        ".hover-effect",
      ]}
    />
  );
};

export default CustomCursor;
