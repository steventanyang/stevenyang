"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./context/ThemeContext";
import { themes } from "./themes";
import PageTransition from "./components/PageTransition";

export default function Home() {
  // Use the global theme context
  const { currentTheme, setCurrentTheme } = useTheme();

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
          style={{
            color: themeColors.navActive,
            textShadow:
              currentTheme !== "light"
                ? "0 0 10px rgba(255,255,255,0.5)"
                : "none",
          }}
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
          style={{ color: themeColors.navInactive }}
        >
          (:
        </Link>
      </nav>

      {/* Main Content with transition */}
      <PageTransition>
        <main className="flex flex-col w-full max-w-md">
          {/* Profile Section - reducing boldness */}
          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Steven Yang
          </h1>

          <div className="mb-10">
            <p className="mb-6 font-medium" style={{ color: themeColors.text }}>
              I&apos;m studying software eng @ waterloo. I enjoy solving
              problems that blend product, design, and engineering.
            </p>
            <p className="mb-6 font-medium" style={{ color: themeColors.text }}>
              I enjoy basketball, books, and creative self-expression.
            </p>
            <p className="font-medium" style={{ color: themeColors.text }}>
              Check out my{" "}
              <Link
                href="/work"
                className="underline transition-colors duration-300"
                style={{ color: themeColors.text }}
              >
                work
              </Link>{" "}
              + reach out at steventanyang@gmail.com
            </p>
          </div>

          {/* Color Palette - only shown on home page */}
          <div className="flex gap-3 mb-10">
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
              className="w-8 h-8 bg-[#66A2BB] rounded cursor-pointer transform transition-transform hover:scale-125"
              onClick={() => setCurrentTheme("blue")}
              aria-label="Blue theme"
            ></button>
            <button
              className="w-8 h-8 bg-[#777DAE] rounded cursor-pointer transform transition-transform hover:scale-125"
              onClick={() => setCurrentTheme("navy")}
              aria-label="Navy theme"
            ></button>
          </div>

          {/* Placeholder Image - reduced height */}
          <div className="mb-10 w-full">
            <Image
              src={`/${currentTheme}.jpg`}
              alt="Themed landscape"
              width={1200}
              height={400}
              className="rounded w-full h-auto max-h-[200px] object-cover"
              onError={(e) => {
                // Fallback to placeholder if theme image doesn't exist
                e.currentTarget.src = "/placeholder-mountains.jpg";
              }}
            />
          </div>

          {/* Divider - making it more subtle */}
          <div
            className="w-full h-[0.5px] mb-8 transition-colors duration-300 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Social Links - smaller, underlined, and closer together */}
          <div className="flex flex-col gap-2">
            <Link
              href="https://twitter.com/yourusername"
              className="text-sm font-medium underline transition-colors duration-300"
              style={{ color: themeColors.navInactive }}
            >
              Twitter/X
            </Link>
            <Link
              href="mailto:steventanyang@gmail.com"
              className="text-sm font-medium underline transition-colors duration-300"
              style={{ color: themeColors.navInactive }}
            >
              Email
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="text-sm font-medium underline transition-colors duration-300"
              style={{ color: themeColors.navInactive }}
            >
              LinkedIn
            </Link>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
