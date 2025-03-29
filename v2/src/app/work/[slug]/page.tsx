"use client";

import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes";
import PageTransition from "../../components/PageTransition";
import { useParams } from "next/navigation";
import { projectData } from "../../data/projects";

// Define types for our project data
// Project data for all projects

export default function ProjectPage() {
  // Get the slug from the URL
  const params = useParams();
  const slug = params.slug as string;

  // Use the global theme context
  const { currentTheme } = useTheme();

  // Get current theme colors
  const themeColors = themes[currentTheme];

  // Get project data or use fallback
  const project = projectData[slug] || {
    title: "Project Not Found",
    emoji: "❓",
    description: "This project doesn't exist or hasn't been added yet.",
    overview: "Please check the URL or go back to the projects page.",
    links: [],
  };

  // If this project has a custom page, we would render that here
  // For now, we'll just use the default template for all projects

  return (
    <div
      className="flex flex-col items-center min-h-screen p-6 transition-colors duration-300"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      {/* Main Content with transition */}
      <PageTransition>
        <main className="flex flex-col w-full max-w-2xl">
          {/* Back button */}
          <Link
            href="/work"
            className="text-base font-medium mb-8 flex items-center hover:opacity-80 transition-opacity"
            style={{ color: themeColors.text }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Project header */}
          <div className="flex items-center mb-4">
            <div className="mr-3 text-4xl">{project.emoji}</div>
            <h1
              className="text-3xl font-bold"
              style={{
                color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              }}
            >
              {project.title}
            </h1>
          </div>

          {/* Project description */}
          <p
            className="text-lg mb-10"
            style={{ color: themeColors.navInactive }}
          >
            {project.description}
          </p>

          {/* Video Demo Section */}
          {project.videoUrl && (
            <div className="mb-10">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  muted
                  className="w-full h-[300px] rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Overview Section */}
          <div className="mb-8">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Overview
            </h2>
            <p className="text-base" style={{ color: themeColors.text }}>
              {project.overview}
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Links Section */}
          {project.links && project.links.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={`link-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-opacity-10"
                    style={{
                      backgroundColor: `${themeColors.navInactive}20`,
                      color: themeColors.text,
                    }}
                  >
                    {link.icon && (
                      <span className="mr-2 text-xl">{link.icon}</span>
                    )}
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </main>
      </PageTransition>
    </div>
  );
}
