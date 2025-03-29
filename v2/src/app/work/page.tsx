"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import PageTransition from "../components/PageTransition";

export default function Work() {
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
          style={{
            color: themeColors.navActive,
            textShadow:
              currentTheme !== "light"
                ? "0 0 10px rgba(255,255,255,0.5)"
                : "none",
          }}
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
          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Experience
          </h1>

          {/* Experience Section */}
          <div className="mb-16">
            {/* Experience Item with hover effect */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🦷</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      -
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      S25
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-base min-w-[250px]"
                      style={{ color: themeColors.navInactive }}
                    >
                      Product Engineering
                    </span>
                    <span
                      className="text-base whitespace-nowrap"
                      style={{ color: themeColors.navInactive }}
                    >
                      San Francisco
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunlife with hover effect */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">☀️</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      Sunlife
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      W25
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-base min-w-[250px]"
                      style={{ color: themeColors.navInactive }}
                    >
                      GenAI Infra / DevOps
                    </span>
                    <span
                      className="text-base whitespace-nowrap"
                      style={{ color: themeColors.navInactive }}
                    >
                      Toronto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stadium Live with hover effect */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🏟️</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      Stadium Live
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      S24
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-base min-w-[250px]"
                      style={{ color: themeColors.navInactive }}
                    >
                      Full Stack Engineer
                    </span>
                    <span
                      className="text-base whitespace-nowrap"
                      style={{ color: themeColors.navInactive }}
                    >
                      Toronto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Projects
          </h1>

          {/* Projects Section */}
          <div className="mb-16">
            {/* LeCoach with hover effect */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🏀</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      LeCoach
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      Agentic basketball analytics platform
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketloo */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">📈</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      marketloo
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      Financial market analysis tool
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* elitecode */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">👨‍💻</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      elitecode
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      Competitive programming platform
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LeResume */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">💵</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      LeResume
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      AI-powered resume builder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ufc rax */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🥊</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      ufc rax
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      UFC fight prediction and analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* milwaukee bucks hackathon 2024 */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🏀</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      milwaukee bucks hackathon 2024
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      Basketball analytics competition project
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LeGM */}
            <div className="group cursor-pointer mb-10">
              <div className="flex items-center">
                <div className="mr-4 text-4xl">🧠</div>
                <div className="flex-grow">
                  <div className="mb-1">
                    <span
                      className="text-lg font-medium relative inline-block"
                      style={{ color: themeColors.text }}
                    >
                      LeGM
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-base"
                      style={{ color: themeColors.navInactive }}
                    >
                      AI-powered sports team management simulator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
