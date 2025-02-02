import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you need
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-assistant h-screen w-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Toaster />
          {children}
          {/* <CustomCursor />  */}
        </ThemeProvider>
      </body>
    </html>
  );
}
