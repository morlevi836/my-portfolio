"use client";

import React, { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import { Toaster } from "./ui/toaster";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const ParentComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <NavBar />

      <CustomCursor />

      <Toaster />

      {children}

      <Footer />
    </>
  );
};

export default ParentComponent;
