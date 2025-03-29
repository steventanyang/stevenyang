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
  laudure: {
    title: "Laudure",
    emoji: "👨‍🍳",
    description: "AI Management System for Restaurants",
    videoUrl: "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/laudure.mp4", // Replace with actual video
    overview:
      "Laudure is an AI-powered management system designed specifically for restaurants. It streamlines operations, inventory management, and customer interactions through intelligent automation and data analysis.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/username/laudure",
        icon: "💻",
      },
      { title: "Live Demo", url: "https://laudure.example.com", icon: "🔗" },
      {
        title: "Documentation",
        url: "https://docs.laudure.example.com",
        icon: "📚",
      },
    ],
    hasCustomPage: true,
  },
  lecoach: {
    title: "LeCoach",
    emoji: "🏀",
    description: "Agentic basketball analytics platform",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/lecoach.mp4", // Convert to MP4
    overview:
      "LeCoach is an AI-powered basketball analytics platform that helps coaches and players analyze game footage, track performance metrics, and generate personalized training recommendations.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/username/lecoach",
        icon: "💻",
      },
      { title: "Live Demo", url: "https://lecoach.example.com", icon: "🔗" },
    ],
    hasCustomPage: true,
  },
  marketloo: {
    title: "Marketloo",
    emoji: "📈",
    description: "Prediction market with real-time paper trading",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/marketloo.mp4", // Replace with actual video
    overview:
      "Marketloo is a prediction market platform that allows users to trade virtual assets based on real-world events and outcomes. It features real-time paper trading, leaderboards, and comprehensive analytics.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/username/marketloo",
        icon: "💻",
      },
      { title: "Try It Out", url: "https://marketloo.example.com", icon: "🚀" },
    ],
  },
  elitecode: {
    title: "Elitecode",
    emoji: "👨‍💻",
    description: "Ultimate leetcode companion",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/elitecode.mp4", // Replace with actual video
    overview:
      "Elitecode is a comprehensive companion tool for technical interview preparation. It provides optimized learning paths, AI-powered code reviews, and personalized practice recommendations to help users master coding challenges.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/username/elitecode",
        icon: "💻",
      },
      { title: "Try It Out", url: "https://elitecode.example.com", icon: "🚀" },
    ],
  },
  leresume: {
    title: "LeResume",
    emoji: "💵",
    description: "AI resume builder + optimizer",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/leresume.mp4", // Replace with actual video
    overview:
      "LeResume uses AI to help job seekers create and optimize their resumes. It analyzes job descriptions, suggests tailored content, and provides real-time feedback to maximize interview chances.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/username/leresume",
        icon: "💻",
      },
      { title: "Try It Out", url: "https://leresume.example.com", icon: "🚀" },
    ],
  },
  rax: {
    title: "Rax",
    emoji: "🥊",
    description: "plugin for realapp.link, 30k+ active users",
    videoUrl:
      "https://yangstevenwebsite.s3.us-east-1.amazonaws.com/rax.mp4", // Replace with actual video
    overview:
      "Rax is a popular plugin for realapp.link with over 30,000 active users. It enhances the platform with advanced analytics, custom visualizations, and automated reporting features.",
    links: [
      {
        title: "Plugin Page",
        url: "https://realapp.link/plugins/raxx",
        icon: "🔌",
      },
      {
        title: "User Guide",
        url: "https://docs.realapp.link/plugins/raxx",
        icon: "📖",
      },
    ],
  },
  // Add more projects as needed...
};
