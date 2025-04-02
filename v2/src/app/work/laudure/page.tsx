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
    <div className="mb-8 ml-2 sm:ml-6">
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
        className="overflow-hidden transition-all duration-500 pl-4 sm:pl-6 border-l-2"
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          opacity: isOpen ? 1 : 0,
          borderColor: `${themeColors.navInactive}40`,
        }}
      >
        <p
          className="mb-5 leading-relaxed text-sm sm:text-base"
          style={{ color: themeColors.text }}
        >
          {text}
        </p>
        {image && (
          <div className="mb-6 max-w-full">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="rounded-md w-full"
              style={{
                border: "none",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function LaudurePage() {
  const { currentTheme } = useTheme();
  const themeColors = themes[currentTheme];
  const [jsonOpen, setJsonOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center min-h-screen p-4 sm:p-6 transition-colors duration-300"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      <PageTransition>
        <main className="flex flex-col w-full max-w-2xl px-1 sm:px-0">
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
            <div className="mr-3 text-4xl">👨‍🍳</div>
            <h1
              className="text-3xl font-bold"
              style={{
                color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              }}
            >
              Laudure
            </h1>
          </div>

          {/* Project description */}
          <p
            className="text-lg mb-15"
            style={{ color: themeColors.navInactive }}
          >
            AI Management System for Restaurants
          </p>

          {/* Video Demo Section */}
          <div className="mb-15">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <video
                src="https://yangstevenwebsite.s3.us-east-1.amazonaws.com/laudure.mp4"
                controls
                className="w-full h-[200px] sm:h-[300px] rounded-lg"
                style={{
                  border: "none",
                  outline: "none",
                }}
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
              Laudure is a platform for fine dining restaurants. It features an
              agent system that automates reservation analysis. The platform
              answers critical questions: how much of each dish is needed today,
              when demand spikes occur, and what specific requirements each
              guest has.
            </p>
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
            <span className="font-medium">The design philosophy</span> behind
            Laudure draws inspiration from high-pressure environments like
            restaurant morning huddles and basketball timeouts. Every design
            choice answers one question:
            <span className="italic">
              {" "}
              how can we show what matters without overwhelming people with
              details?
            </span>
          </p>

          {/* User Flow Section with Dropdowns */}
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: themeColors.text }}
          >
            User Flow
          </h2>

          <Subsection
            title="Overview Page"
            text="The overview page answers how much food needs to be prepared, with everything else intentionally abstracted away. It uses a treemap visualization where box area sizes indicate relative volume needs, maximizing information density at a glance."
            image="/images/laudure_overview.png"
            themeColors={themeColors}
          />

          <Subsection
            title="Volume Page"
            text="The volume section introduces time as a critical variable, showing when dishes need to be prepared throughout the evening. An area chart was chosen over a stacked bar chart to better represent the fluid, unpredictable flow of orders."
            image="/images/laudure_volume.png"
            themeColors={themeColors}
          />

          <Subsection
            title="Timeline Page"
            text="The timeline showcases back-of-house information in one comprehensive view, answering all the 'what' questions. It features compact guest cards with agent-generated service suggestions ranked on urgency."
            image="/images/laudure_timeline.png"
            themeColors={themeColors}
          />

          <Subsection
            title="Shape System"
            text="Courses are represented with shapes: triangles for appetizers, squares for mains, and pentagons for desserts. The increasing number of sides (3→4→5) intentionally mirrors both the dining progression and the growing complexity across the interface."
            image="/images/laudure_shapes.png"
            themeColors={themeColors}
          />

          {/* Divider */}
          <div
            className="w-full h-[0.5px] my-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Agent System Section */}
          <h2
            className="text-xl font-semibold mb-6"
            style={{ color: themeColors.text }}
          >
            Agent System
          </h2>
          <p
            className="mb-8 text-base leading-relaxed"
            style={{ color: themeColors.text }}
          >
            <span className="font-medium">
              A collection of specialized AI agents
            </span>{" "}
            analyze restaurant diner data and provide insights through a
            modular, multi-agent approach.
          </p>

          <h3
            className="text-lg font-medium mb-4"
            style={{ color: themeColors.text }}
          >
            Specialized Agents
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div
              className="bg-opacity-10 p-4 sm:p-5 rounded-lg"
              style={{ backgroundColor: `${themeColors.navInactive}20` }}
            >
              <p className="font-bold mb-2" style={{ color: themeColors.text }}>
                Dietary Analysis Agent
              </p>
              <p
                className="text-sm sm:text-base"
                style={{ color: themeColors.navInactive }}
              >
                Identifies allergies and dietary restrictions
              </p>
            </div>

            <div
              className="bg-opacity-10 p-4 sm:p-5 rounded-lg"
              style={{ backgroundColor: `${themeColors.navInactive}20` }}
            >
              <p className="font-bold mb-2" style={{ color: themeColors.text }}>
                Guest Experience Agent
              </p>
              <p
                className="text-sm sm:text-base"
                style={{ color: themeColors.navInactive }}
              >
                Analyzes past impressions and preferences
              </p>
            </div>

            <div
              className="bg-opacity-10 p-4 sm:p-5 rounded-lg"
              style={{ backgroundColor: `${themeColors.navInactive}20` }}
            >
              <p className="font-bold mb-2" style={{ color: themeColors.text }}>
                Special Requests Agent
              </p>
              <p
                className="text-sm sm:text-base"
                style={{ color: themeColors.navInactive }}
              >
                Handles explicit requests and time-sensitive needs
              </p>
            </div>

            <div
              className="bg-opacity-10 p-4 sm:p-5 rounded-lg"
              style={{ backgroundColor: `${themeColors.navInactive}20` }}
            >
              <p className="font-bold mb-2" style={{ color: themeColors.text }}>
                Personalization Agent
              </p>
              <p
                className="text-sm sm:text-base"
                style={{ color: themeColors.navInactive }}
              >
                Suggests personalization and upsell opportunities
              </p>
            </div>

            <div
              className="bg-opacity-10 p-4 sm:p-5 rounded-lg md:col-span-2"
              style={{ backgroundColor: `${themeColors.navInactive}20` }}
            >
              <p className="font-bold mb-2" style={{ color: themeColors.text }}>
                Coordinator Agent
              </p>
              <p
                className="text-sm sm:text-base"
                style={{ color: themeColors.navInactive }}
              >
                Combines insights into a cohesive briefing
              </p>
            </div>
          </div>

          {/* JSON Structure Section - fix mobile overflow */}
          <h3
            className="text-lg font-medium mb-3"
            style={{ color: themeColors.text }}
          >
            Sample Agent Output Structure
          </h3>

          <div className="mb-0">
            <div
              className="flex items-center justify-between cursor-pointer p-4 rounded-md transition-colors duration-300 hover:bg-opacity-20"
              onClick={() => setJsonOpen(!jsonOpen)}
              style={{
                backgroundColor: `${themeColors.navInactive}20`,
                color: themeColors.text,
              }}
            >
              <span className="text-sm sm:text-base font-medium">
                View JSON Structure
              </span>
              <span
                className="ml-2 sm:ml-3 text-xs sm:text-sm transition-transform duration-300"
                style={{
                  transform: jsonOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                ▼
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-500 bg-opacity-5 p-2 sm:p-4 rounded-b-md"
              style={{
                maxHeight: jsonOpen ? "3000px" : "0",
                opacity: jsonOpen ? 1 : 0,
                backgroundColor: `${themeColors.navInactive}10`,
              }}
            >
              <pre
                className="text-xs sm:text-sm overflow-auto p-2 max-w-full"
                style={{
                  color: themeColors.text,
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {`"agent_analysis": {
  "agent_analysis": {
    "dietary_analysis": {
      "allergies": [
        {
          "item": "String - Allergen name",
          "severity": "String - Severity level (e.g., mild, critical)",
          "source": "String - Where this information was obtained"
        }
      ],
      "dietary_restrictions": [
        "String - Array of dietary restrictions"
      ],
      "preparation_instructions": [
        {
          "dish": "String - Name of the dish",
          "instruction": "String - Special preparation instructions"
        }
      ]
    },
    "guest_experience": {
      "past_impressions": [
        {
          "type": "String - Positive or negative",
          "aspect": "String - What aspect of dining was mentioned",
          "source": "String - Source of this impression"
        }
      ],
      "service_preferences": {
        "style": "String - Preferred service style (e.g., attentive, hands-off)",
        "evidence": "String - Evidence for this preference"
      },
      "conversation_topics": [
        {
          "topic": "String - Topic of interest",
          "context": "String - Context for this topic"
        }
      ]
    },
    "special_requests": {
      "explicit_requests": [
        {
          "request": "String - Specific request made by guest",
          "priority": "String - Priority level (high, medium, low)",
          "source": "String - Source of this request"
        }
      ],
      "service_modifications": [
        {
          "modification": "String - Service modification needed",
          "notes": "String - Additional notes about the modification"
        }
      ],
      "time_sensitive": [
        {
          "need": "String - Time-sensitive need",
          "timing": "String - When this need should be addressed"
        }
      ],
      "special_occasions": [
        {
          "occasion": "String - Special occasion being celebrated",
          "details": "String - Details about the occasion"
        }
      ]
    },
    "personalization": {
      "personalization_opportunities": [
        {
          "opportunity": "String - Opportunity to personalize experience",
          "implementation": "String - How to implement this opportunity",
          "impact": "String - Expected impact level"
        }
      ],
      "upsell_opportunities": [
        {
          "item": "String - Item that could be upsold",
          "rationale": "String - Rationale for this upsell opportunity"
        }
      ],
      "recognition_moments": [
        {
          "moment": "String - Moment for recognition",
          "approach": "String - Approach for this recognition"
        }
      ]
    }
  },
  "coordinator_summary": {
    "priority_alerts": [
      {
        "alert": "String - Alert message",
        "category": "String - Category of alert",
        "for": "String - Department responsible"
      }
    ],
    "guest_profile": {
      "dining_style": "String - Guest's dining style",
      "preferences": ["String - Array of preferences"],
      "avoid": ["String - Array of things to avoid"]
    },
    "service_recommendations": [
      {
        "recommendation": "String - Service recommendation",
        "timing": "String - When to implement",
        "owner": "String - Who is responsible"
      }
    ],
    "kitchen_notes": [
      {
        "note": "String - Note for the kitchen",
        "dish": "String - Dish this note applies to",
        "tags": ["String - Array of relevant tags"],
        "urgency": "String - Urgency level (e.g., red, orange, green)"
      }
    ]
  }
}`}
              </pre>
            </div>
          </div>

          {/* Divider above Links Section - less space above */}
          <div
            className="w-full h-[0.5px] mt-4 mb-8 opacity-50"
            style={{ backgroundColor: themeColors.navInactive }}
          ></div>

          {/* Links Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            <a
              href="https://laudure.vercel.app/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-opacity-10"
              style={{
                backgroundColor: `${themeColors.navInactive}20`,
                color: themeColors.text,
              }}
            >
              <span className="mr-2 text-lg sm:text-xl">🔗</span>
              <span className="text-sm sm:text-base">Live Demo</span>
            </a>
            <a
              href="https://github.com/steventanyang/laudure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-opacity-10"
              style={{
                backgroundColor: `${themeColors.navInactive}20`,
                color: themeColors.text,
              }}
            >
              <span className="mr-2 text-lg sm:text-xl">😺</span>
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
