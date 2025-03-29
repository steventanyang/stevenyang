"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import PageTransition from "../components/PageTransition";

// Define types for our data
type Experience = {
  emoji: string;
  company: string;
  role: string;
  term: string;
  location: string;
  link?: string; // Optional link URL
};

type Project = {
  emoji: string;
  name: string;
  description: string;
  link?: string; // Optional external link URL
  slug?: string; // Optional internal route slug
};

export type ThemeColors = {
  background: string;
  text: string;
  navActive: string;
  navInactive: string;
};

// Experience data array - add new experiences at the top
const experiences: Experience[] = [
  {
    emoji: "🦷",
    company: "-",
    role: "Product Engineering",
    term: "S25",
    location: "San Francisco",
  },
  {
    emoji: "☀️",
    company: "Sunlife",
    role: "GenAI Infra / DevOps",
    term: "W25",
    location: "Toronto",
  },
  {
    emoji: "🏟️",
    company: "Stadium Live",
    role: "Full Stack Engineer",
    term: "S24",
    location: "Toronto",
  },
];

// Projects data array - add new projects at the top
const projects: Project[] = [
  {
    emoji: "👨‍🍳",
    name: "Laudure",
    description: "AI Management System for Restaurants",
    slug: "laudure",
  },
  {
    emoji: "🏀",
    name: "LeCoach",
    description: "Agentic basketball analytics platform",
    slug: "lecoach",
  },
  {
    emoji: "📈",
    name: "Marketloo",
    description: "Prediction market with real-time paper trading + agents",
    slug: "marketloo",
  },
  {
    emoji: "👨‍💻",
    name: "Elitecode",
    description: "Ultimate leetcode companion",
    slug: "elitecode",
  },
  {
    emoji: "💵",
    name: "LeResume",
    description: "AI resume builder + optimizer",
    slug: "leresume",
  },
  {
    emoji: "🥊",
    name: "Rax",
    description: "plugin for realapp.link, 30k+ active users",
    slug: "rax",
  },
];

// Experience Item Component
const ExperienceItem = ({
  experience,
  themeColors,
}: {
  experience: Experience;
  themeColors: ThemeColors;
}) => {
  // Wrapper component - either a div or an anchor based on whether there's a link
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    experience.link ? (
      <a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group cursor-pointer mb-8 block"
      >
        {children}
      </a>
    ) : (
      <div className="group cursor-pointer mb-8">{children}</div>
    );

  return (
    <Wrapper>
      <div className="flex items-center">
        <div className="mr-3 text-3xl sm:text-4xl">{experience.emoji}</div>
        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-center mb-1">
            <span
              className="text-base sm:text-lg font-medium relative inline-block mr-2"
              style={{ color: themeColors.text }}
            >
              {experience.company}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
            <span
              className="text-sm sm:text-base whitespace-nowrap"
              style={{ color: themeColors.navInactive }}
            >
              {experience.term}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span
              className="text-sm sm:text-base truncate mr-2"
              style={{ color: themeColors.navInactive }}
            >
              {experience.role}
            </span>
            <span
              className="text-sm sm:text-base whitespace-nowrap"
              style={{ color: themeColors.navInactive }}
            >
              {experience.location}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// Project Item Component
const ProjectItem = ({
  project,
  themeColors,
}: {
  project: Project;
  themeColors: ThemeColors;
}) => {
  // Wrapper component - handles external links, internal routes, or no link
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (project.link) {
      // External link
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer mb-8 block"
        >
          {children}
        </a>
      );
    } else if (project.slug) {
      // Internal route
      return (
        <Link
          href={`/work/${project.slug}`}
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
      <div className="flex items-center">
        <div className="mr-3 text-3xl sm:text-4xl">{project.emoji}</div>
        <div className="flex-grow min-w-0">
          <div className="mb-1">
            <span
              className="text-base sm:text-lg font-medium relative inline-block"
              style={{ color: themeColors.text }}
            >
              {project.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </div>
          <div>
            <span
              className="text-sm sm:text-base"
              style={{ color: themeColors.navInactive }}
            >
              {project.description}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

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
      {/* Navigation with consistent spacing */}
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
        <main className="flex flex-col w-full max-w-2xl">
          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Experience
          </h1>

          {/* Experience Section - mapped from data */}
          <div className="mb-16">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={`exp-${index}`}
                experience={exp}
                themeColors={themeColors}
              />
            ))}
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

          {/* Projects Section - mapped from data */}
          <div className="mb-16">
            {projects.map((proj, index) => (
              <ProjectItem
                key={`proj-${index}`}
                project={proj}
                themeColors={themeColors}
              />
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
