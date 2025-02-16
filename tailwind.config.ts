import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundLight: "var(--backgroundLight)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
