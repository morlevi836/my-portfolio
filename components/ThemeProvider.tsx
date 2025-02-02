// components/ThemeProvider.tsx
"use client"; // Mark this as a Client Component

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <NextThemesProvider
      attribute="class" // Use class-based theming
      defaultTheme="light" // Default to system theme
      enableSystem // Enable system theme detection
      disableTransitionOnChange // Disable transition when changing themes
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
