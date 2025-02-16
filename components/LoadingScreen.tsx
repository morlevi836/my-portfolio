"use client";

import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import { Toaster } from "./ui/toaster";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Image from "next/image";

const NavBar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <Image
          src="/images/duck-loading.gif"
          alt="loading"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />

      {/* Conditionally render ReadingProgressBar and ScrollToTopButton only on the blog page */}
      {pathname.startsWith("/blog/[id]") && (
        <>
          <ReadingProgressBar />
          <ScrollToTopButton />
        </>
      )}

      <CustomCursor />

      <Toaster />

      {children}

      <Footer />
    </>
  );
}
