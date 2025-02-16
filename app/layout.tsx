import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio built with Next.js and TypeScript",
  icons: {
    icon: "/icons/favicon.ico", // Path to your favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${assistant.variable} h-screen w-screen overflow-x-hidden font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <LoadingScreen>{children}</LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
