"use client";

import Link from "next/link";
import { useState } from "react";
import { themes } from "../themes";

export default function Life() {
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
      {/* Navigation - fixed height to prevent shifting */}
      <nav className="flex justify-center gap-6 mt-10 mb-16 w-full h-10">
        <Link
          href="/"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;&gt;
        </Link>
        <Link
          href="/work"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;3
        </Link>
        <Link
          href="/life"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navActive }}
        >
          (:
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col w-full max-w-md">
        <h1
          className="text-2xl font-black mb-10"
          style={{
            color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
            opacity: 1,
          }}
        >
          Life
        </h1>
        
        {/* Empty content for now */}
        <p className="font-medium">Coming soon...</p>

        {/* Color Palette */}
        <div className="flex gap-3 my-10">
          <button
            className="w-8 h-8 bg-[#333333] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("dark")}
            aria-label="Dark theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#E0E0E0] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("light")}
            aria-label="Light theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#C25450] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("red")}
            aria-label="Red theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#5C8D76] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("green")}
            aria-label="Green theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#4A6B8A] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("blue")}
            aria-label="Blue theme"
          ></button>
          <button
            className="w-8 h-8 bg-[#3B5998] rounded cursor-pointer transform transition-transform hover:scale-125"
            onClick={() => setCurrentTheme("navy")}
            aria-label="Navy theme"
          ></button>
        </div>
      </main>
    </div>
  );
} 