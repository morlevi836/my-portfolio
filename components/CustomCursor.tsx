"use client";

import { useTheme } from "next-themes";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <AnimatedCursor
      innerSize={8} // Size of the inner dot
      outerSize={35} // Size of the outer circle
      color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"} // White for dark mode, black for light mode
      outerAlpha={0.2} // Opacity of the outer circle
      innerScale={0.7} // Scale of the inner dot
      outerScale={2} // Scale of the outer circle
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
        ".clickable", // Add a custom class for clickable elements
        ".hover-effect", // Add a custom class for hover effects
      ]} // Elements that trigger the hover effect
    />
  );
};

export default CustomCursor;
