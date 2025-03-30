"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes";
import PageTransition from "../../components/PageTransition";
import { useState } from "react";
import { ThemeColors } from "../page";

// Subsection component for collapsible content
const Subsection = ({
  title,
  text,
  image,
  themeColors,
}: {
  title: string;
  text: string;
  image?: string;
  themeColors: ThemeColors;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 ml-6">
      {/* Subsection header */}
      <div
        className="flex items-center cursor-pointer mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className="text-lg font-medium m-0"
          style={{ color: themeColors.text }}
        >
          {title}
        </h3>
        <span
          className="ml-3 text-sm transition-transform duration-300"
          style={{
            color: themeColors.text,
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          ▼
        </span>
      </div>

      {/* Subsection content */}
      <div
        className="overflow-hidden transition-all duration-500 pl-6 border-l"
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          opacity: isOpen ? 1 : 0,
          borderColor: themeColors.navInactive,
        }}
      >
        <p className="mb-5 leading-relaxed" style={{ color: themeColors.text }}>
          {text}
        </p>
        {image && (
          <div className="mb-6 max-w-2xl">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="rounded-md border w-full"
              style={{ borderColor: themeColors.navInactive }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function LeCoachPage() {
  const { currentTheme } = useTheme();
  const themeColors = themes[currentTheme];

  return (
    <div
      className="flex flex-col items-center min-h-screen p-6 transition-colors duration-300"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
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
            <div className="mr-3 text-4xl">🏀</div>
            <h1
              className="text-3xl font-bold"
              style={{
                color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              }}
            >
              LeCoach
            </h1>
          </div>

          {/* Project description */}
          <p
            className="text-lg mb-10"
            style={{ color: themeColors.navInactive }}
          >
            Agentic basketball analytics platform
          </p>

          {/* Video Demo Section */}
          <div className="mb-10">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <video
                src="https://yangstevenwebsite.s3.us-east-1.amazonaws.com/lecoach.mp4"
                controls
                autoPlay
                muted
                className="w-full h-[300px] rounded-lg"
              />
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Overview
            </h2>
            <p className="text-base" style={{ color: themeColors.text }}>
              LeCoach is a comprehensive analytics platform for coaches and
              players in Canadian usports basketball. It features an agent
              system for game analysis and predictive analytics powered by 10+
              years of historical league data.
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Motivations Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Motivations
          </h2>
          <p
            className="mb-8 text-base leading-relaxed"
            style={{ color: themeColors.text }}
          >
            Over the past year, I&apos;ve been leading and expanding the data
            solutions team for the Waterloo varsity basketball program. The
            critical challenge we&apos;ve identified is the lack of a
            centralized, user-first platform for performance analysis. While
            Synergy Sports is our current solution, the platform is
            overwhelmingly complex and cluttered. The value isn&apos;t in the
            numbers themselves but rather in making them actionable. LeCoach
            would be a platform that bridges the gap between raw data and
            basketball-first minded coaches + players.
          </p>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* User Flow Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            User Flow
          </h2>

          <Subsection
            title="Games Navigation"
            text="Users can navigate through all games dating back to the 2005-06 season."
            image="/placeholder-mountains.jpg"
            themeColors={themeColors}
          />

          <Subsection
            title="Analysis Interface"
            text="The win probability graph is powered by a model trained on 1.4 million historical plays. More team metrics will be available soon (traditional stats + VORP, BPM, etc.)"
            image="/placeholder-mountains.jpg"
            themeColors={themeColors}
          />

          <Subsection
            title="Play by play tracking"
            text="View detailed play by play tracking for every game."
            image="/placeholder-mountains.jpg"
            themeColors={themeColors}
          />

          <Subsection
            title="Agent chat"
            text="Our chat system uses RAG and chains multiple specialized agents together to handle different aspects of data retrieval, analysis, and response generation."
            image="/placeholder-mountains.jpg"
            themeColors={themeColors}
          />

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* System Diagram Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            System Diagram
          </h2>
          <p
            className="mb-6 text-base leading-relaxed"
            style={{ color: themeColors.text }}
          >
            The system architecture for LeCoach integrates data collection,
            processing, and presentation layers to deliver real-time analytics
            and insights.
          </p>
          <div className="mb-8 max-w-2xl mx-auto">
            <Image
              src="/placeholder-mountains.jpg"
              alt="LeCoach System Architecture Diagram"
              width={800}
              height={450}
              className="rounded-md w-full"
            />
          </div>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Design Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Design
          </h2>
          <p
            className="mb-6 text-base leading-relaxed"
            style={{ color: themeColors.text }}
          >
            LeCoach&apos;s design prioritizes simplicity and intuitive
            navigation, with bold colors against a monochromatic background. The
            interface employs thoughtful information hierarchy to ensure key
            metrics stand out, allowing coaches to make data-driven decisions
            quickly. I was inspired by modern data apps such as Real Sports and
            Bevel.
          </p>

          {/* Design Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Image
              src="/placeholder-mountains.jpg"
              alt="Design 1"
              width={500}
              height={300}
              className="rounded-md border w-full"
              style={{ borderColor: themeColors.navInactive }}
            />
            <Image
              src="/placeholder-mountains.jpg"
              alt="Design 2"
              width={500}
              height={300}
              className="rounded-md border w-full"
              style={{ borderColor: themeColors.navInactive }}
            />
          </div>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Technical Details Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Technical Details
          </h2>

          <div className="mb-8">
            <p
              className="text-base leading-relaxed"
              style={{ color: themeColors.text }}
            >
              <strong>Frontend:</strong> Next.js, Tailwind CSS, Recharts
              <br />
              <strong>Backend:</strong> Python, FastAPI, Almebic, Docker
              <br />
              <strong>Cloud:</strong> S3, RDS, Lambda, Sagemaker
              <br />
              <strong>Other:</strong> Langchain, OpenAI, Scikit-learn
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full h-[0.5px] mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Links Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://lecoach.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-opacity-10"
              style={{
                backgroundColor: `${themeColors.navInactive}20`,
                color: themeColors.text,
              }}
            >
              <span className="mr-2 text-xl">🔗</span>
              <span>
                Live Demo{" "}
                <span className="text-sm opacity-80">(internal only)</span>
              </span>
            </a>
            <a
              href="https://github.com/warriorswbb/lecoach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-opacity-10"
              style={{
                backgroundColor: `${themeColors.navInactive}20`,
                color: themeColors.text,
              }}
            >
              <span className="mr-2 text-xl">💻</span>
              <span>GitHub Repository</span>
            </a>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
