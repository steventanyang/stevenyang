"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import PageTransition from "../components/PageTransition";

// Define types for our writing data
type Writing = {
  title: string;
  description: string;
  slug?: string; // Optional slug for individual writing pages
  link?: string; // Optional external link
};

export type ThemeColors = {
  background: string;
  text: string;
  navActive: string;
  navInactive: string;
};

// Writing data array - add new pieces at the top
const writings: Writing[] = [
  {
    title: "pushing 20",
    description: "goals heading into 2026",
    slug: "pushing-20",
  },
  {
    title: "tatum legacy run",
    description: "2025 nba playoff predictions",
    slug: "tatum-legacy-run",
  },
];

// Writing Item Component
const WritingItem = ({
  writing,
  themeColors,
}: {
  writing: Writing;
  themeColors: ThemeColors;
}) => {
  // Wrapper component - handles external links, internal routes, or no link
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (writing.link) {
      // External link
      return (
        <a
          href={writing.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer mb-8 block"
        >
          {children}
        </a>
      );
    } else if (writing.slug) {
      // Internal route
      return (
        <Link
          href={`/life/${writing.slug}`}
          className="group cursor-pointer mb-8 block"
        >
          {children}
        </Link>
      );
    } else {
      // No link
      return <div className="group cursor-pointer mb-8">{children}</div>;
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-col">
        <div className="mb-1">
          <span
            className="text-base sm:text-lg font-medium relative inline-block"
            style={{ color: themeColors.text }}
          >
            {writing.title}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div>
          <span
            className="text-sm sm:text-base"
            style={{ color: themeColors.navInactive }}
          >
            {writing.description}
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

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
      {/* Navigation with consistent spacing */}
      <nav className="flex justify-center gap-6 mt-8 mb-14 w-full h-10">
        <Link
          href="/"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;3
        </Link>
        <Link
          href="/work"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;&gt;
        </Link>
        <Link
          href="/life"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{
            color: themeColors.navActive,
            textShadow:
              currentTheme !== "light"
                ? "0 0 10px rgba(255,255,255,0.5)"
                : "none",
          }}
        >
          (:
        </Link>
      </nav>

      {/* Main Content with transition */}
      <PageTransition>
        <main className="flex flex-col w-full max-w-2xl">
          <h1
            className="text-2xl font-bold mb-4"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Writing
          </h1>

          <p className="mb-16" style={{ color: themeColors.navInactive }}>
            Personal reflections + pieces of writing that I&apos;ve decided to
            share.
          </p>

          {/* Writing Section - mapped from data */}
          <div className="mb-16">
            {writings.map((writing, index) => (
              <WritingItem
                key={`writing-${index}`}
                writing={writing}
                themeColors={themeColors}
              />
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
