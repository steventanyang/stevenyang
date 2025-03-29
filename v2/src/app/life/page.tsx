"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import PageTransition from '../components/PageTransition';

export default function Life() {
  // Use the global theme context
  const { currentTheme } = useTheme();

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
      {/* Navigation - reduced vertical spacing */}
      <nav className="flex justify-center gap-6 mt-8 mb-14 w-full h-10">
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

      {/* Main Content with transition */}
      <PageTransition>
        <main className="flex flex-col w-full max-w-md">
          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Life
          </h1>
          
          {/* Empty content for now */}
          <p className="font-medium">Coming soon...</p>
        </main>
      </PageTransition>
    </div>
  );
} 