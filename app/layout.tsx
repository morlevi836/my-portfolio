import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mor Levi",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/icons/favicon.ico",
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
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LoadingScreen>{children}</LoadingScreen>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
