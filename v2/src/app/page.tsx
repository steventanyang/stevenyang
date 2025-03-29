"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define theme types
type ThemeColor = {
  background: string;
  text: string;
  navActive: string;
  navInactive: string;
};

export default function Home() {
  // Theme definitions
  const themes: Record<string, ThemeColor> = {
    default: {
      background: "#1A1A1A",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#9CA3AF",
    },
    dark: {
      background: "#333333",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#9CA3AF",
    },
    light: {
      background: "#F5F5F5",
      text: "#000000",
      navActive: "#000000",
      navInactive: "#666666",
    },
    red: {
      background: "#8B3A36",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#DDDDDD",
    },
    green: {
      background: "#3A5F4A",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#CCCCCC",
    },
    blue: {
      background: "#2F4562",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#CCCCCC",
    },
    navy: {
      background: "#293F6F",
      text: "#FFFFFF",
      navActive: "#FFFFFF",
      navInactive: "#CCCCCC",
    },
  };

  // State for current theme
  const [currentTheme, setCurrentTheme] = useState<string>("default");

  // Get current theme colors
  const themeColors = themes[currentTheme];

  return (
    <div
      className="flex flex-col items-center min-h-screen p-6 transition-colors duration-300"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      {/* Navigation */}
      <nav className="flex justify-center gap-6 my-8 w-full">
        <Link
          href="/"
          className="text-2xl font-bold transition-colors duration-300"
          style={{ color: themeColors.navActive }}
        >
          &lt;&gt;
        </Link>
        <Link
          href="/about"
          className="text-2xl font-bold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;3
        </Link>
        <Link
          href="/projects"
          className="text-2xl font-bold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          (:
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col w-full max-w-md">
        {/* Profile Section */}
        <h1 className="text-2xl font-extrabold mb-6">Steven Yang</h1>

        <div className="mb-6">
          <p className="mb-4 font-medium">
            I&apos;m studying software eng @ waterloo. I enjoy solving problems
            that blend product, design, and engineering.
          </p>
          <p className="mb-4 font-medium">
            I enjoy basketball, books, and creative self-expression.
          </p>
          <p className="font-medium">
            Check out my{" "}
            <Link
              href="/about"
              className="underline transition-colors duration-300"
              style={{ color: themeColors.text }}
            >
              work
            </Link>{" "}
            + reach out at steventanyang@gmail.com
          </p>
        </div>

        {/* Color Palette */}
        <div className="flex gap-3 mb-8">
          <button
            className="w-8 h-8 bg-[#333333] rounded cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentTheme("dark")}
            aria-label="Dark theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#E0E0E0] rounded cursor-pointer hover:ring-2 hover:ring-black transition-all"
            onClick={() => setCurrentTheme("light")}
            aria-label="Light theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#C25450] rounded cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentTheme("red")}
            aria-label="Red theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#5C8D76] rounded cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentTheme("green")}
            aria-label="Green theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#4A6B8A] rounded cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentTheme("blue")}
            aria-label="Blue theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#3B5998] rounded cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentTheme("navy")}
            aria-label="Navy theme"
          ></button>
        </div>

        {/* Placeholder Image */}
        <div className="mb-8 w-full">
          <Image
            src="/placeholder-mountains.jpg"
            alt="Mountain landscape"
            width={1200}
            height={800}
            className="rounded w-full h-auto"
          />
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8 transition-colors duration-300"
          style={{ backgroundColor: themeColors.navInactive }}
        ></div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <Link
            href="https://twitter.com/yourusername"
            className="font-medium hover:underline transition-colors duration-300"
            style={{ color: themeColors.navInactive }}
          >
            Twitter/X
          </Link>
          <Link
            href="mailto:steventanyang@gmail.com"
            className="font-medium hover:underline transition-colors duration-300"
            style={{ color: themeColors.navInactive }}
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="font-medium hover:underline transition-colors duration-300"
            style={{ color: themeColors.navInactive }}
          >
            LinkedIn
          </Link>
        </div>
      </main>
    </div>
  );
}
