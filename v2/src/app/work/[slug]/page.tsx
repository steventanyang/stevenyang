"use client";

import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes";
import PageTransition from "../../components/PageTransition";
import { useParams } from "next/navigation";

// Project data structure with more detailed content
const projectData: Record<
  string,
  {
    title: string;
    emoji: string;
    description: string;
    videoUrl?: string;
    sections?: Array<{
      title: string;
      content: React.ReactNode;
    }>;
  }
> = {
  laudure: {
    title: "Laudure",
    emoji: "👨‍🍳",
    description: "AI Management System for Restaurants",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video
    sections: [
      {
        title: "Overview",
        content: (
          <p>
            Laudure is an AI-powered management system designed specifically for
            restaurants. It streamlines operations, inventory management, and
            customer interactions through intelligent automation and data
            analysis.
          </p>
        ),
      },
      {
        title: "Technical Stack",
        content: (
          <>
            <p className="mb-4">
              Laudure was built using a modern tech stack focused on performance
              and scalability:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Frontend: React with Next.js for server-side rendering</li>
              <li>Backend: Node.js with Express and GraphQL API</li>
              <li>
                Database: PostgreSQL for relational data, Redis for caching
              </li>
              <li>
                AI/ML: TensorFlow for demand forecasting and recommendation
                engines
              </li>
              <li>DevOps: Docker, Kubernetes, and GitHub Actions for CI/CD</li>
            </ul>
          </>
        ),
      },
      {
        title: "Key Features",
        content: (
          <>
            <p className="mb-4">
              The system includes several innovative features:
            </p>
            <ul className="list-disc pl-5">
              <li>Intelligent inventory management with predictive ordering</li>
              <li>Staff scheduling optimization based on historical demand</li>
              <li>Real-time analytics dashboard for business performance</li>
              <li>
                Customer relationship management with personalized
                recommendations
              </li>
              <li>
                Integration with popular POS systems and delivery platforms
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Challenges & Solutions",
        content: (
          <p>
            One of the biggest challenges was developing an accurate demand
            forecasting model that could account for seasonal variations,
            special events, and weather conditions. We solved this by
            implementing a hybrid model combining LSTM neural networks with
            traditional statistical methods, achieving 92% prediction accuracy.
          </p>
        ),
      },
    ],
  },
  // Add more projects as needed
};

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
    sections: [
      {
        title: "Error",
        content: <p>Please check the URL or go back to the projects page.</p>,
      },
    ],
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen p-4 sm:p-6 transition-colors duration-300"
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
            className="text-sm mb-8 flex items-center"
            style={{ color: themeColors.navInactive }}
          >
            ← Back to projects
          </Link>

          {/* Project header */}
          <div className="flex items-center mb-4">
            <div className="mr-3 text-5xl">{project.emoji}</div>
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
            <div className="mb-12">
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Demo
              </h2>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] rounded-lg"
                ></iframe>
              </div>
            </div>
          )}

          {/* Technical Breakdown Sections */}
          {project.sections &&
            project.sections.map((section, index) => (
              <div key={`section-${index}`} className="mb-10">
                <h2
                  className="text-xl font-semibold mb-4"
                  style={{ color: themeColors.text }}
                >
                  {section.title}
                </h2>
                <div
                  className="prose prose-lg max-w-none"
                  style={
                    {
                      color: themeColors.text,
                      "--tw-prose-invert-headings": themeColors.text,
                      "--tw-prose-invert-body": themeColors.text,
                    } as React.CSSProperties
                  }
                >
                  {section.content}
                </div>
              </div>
            ))}
        </main>
      </PageTransition>
    </div>
  );
}
