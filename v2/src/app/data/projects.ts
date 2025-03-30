// Define types for our project data
export type ProjectLink = {
  title: string;
  url: string;
  icon?: string; // Optional emoji icon
};

export type ProjectData = {
  title: string;
  emoji: string;
  description: string;
  videoUrl?: string;
  overview: string;
  links?: ProjectLink[];
  // For custom pages, we'll check if this is true and render a custom component
  hasCustomPage?: boolean;
};

// Project data for all projects
export const projectData: Record<string, ProjectData> = {
  marketloo: {
    title: "Marketloo",
    emoji: "📈",
    description: "Prediction market with real-time paper trading",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/marketloo.mp4", // Replace with actual video
    overview:
      "Marketloo is a prediction market platform that allows users to trade virtual assets based on real-world events and outcomes (inspired by Polymarket). It features real-time paper trading, leaderboards, and a functional orderbook system. We also deployed specialized agents to simulate market dynamics.",
    links: [
      {
        title: "Live Demo",
        url: "https://market-loo.vercel.app/",
        icon: "🔗",
      },
      {
        title: "GitHub",
        url: "https://github.com/steventanyang/market_loo",
        icon: "😺",
      },
    ],
  },
  elitecode: {
    title: "Elitecode",
    emoji: "👨‍💻",
    description: "Ultimate leetcode companion",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/elitecode.mp4", // Replace with actual video
    overview:
      "Elitecode is the 'Obsidian x Anki' for leetcode. Includes a graph visualizer on question similarity, an integrated chrome extension, + auto generated ai review w/ syntax highlighting. This project was submitted to UW Launchpoint hosted by Comma Capital.",
    links: [
      {
        title: "UW Launchpoint",
        url: "https://www.instagram.com/uwlaunchpoint/?hl=en",
        icon: "🚀",
      },
    ],
  },
  leresume: {
    title: "LeResume",
    emoji: "💵",
    description: "AI resume builder + optimizer",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/leresume.mp4", // Replace with actual video
    overview:
      "A resume builder + optimizer that uses AI to help students create and optimize their resumes. It analyzes job descriptions, suggests tailored content, and provides real-time feedback to maximize interview chances.",
    links: [
      {
        title: "Website",
        url: "https://www.leresume.ca/",
        icon: "🔗",
      },
      {
        title: "GitHub",
        url: "https://github.com/npjd/resumake",
        icon: "😺",
      },
    ],
  },
  rax: {
    title: "Rax",
    emoji: "🥊",
    description: "plugin for realapp.link, 30k+ active users",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/ufcrax.mp4", // Replace with actual video
    overview:
      "Rax is a 'levels.fyi' for realapp.link with over 30,000 active users. It allows users to track, optimize, and compare in-game investments. I've been the solo maintainer of this project since 2023.",
    links: [
      {
        title: "Live Demo",
        url: "https://ufcrax-v2.vercel.app/",
        icon: "🔗",
      },
      {
        title: "GitHub",
        url: "https://github.com/steventanyang/ufcraxV2",
        icon: "😺",
      },
    ],
  },
  // Add more projects as needed...
};
