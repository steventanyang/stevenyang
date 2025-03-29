// Define theme types
export type ThemeColor = {
  background: string;
  text: string;
  navActive: string;
  navInactive: string;
};

// Theme definitions
export const themes: Record<string, ThemeColor> = {
  default: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#9CA3AF",
  },
  dark: {
    background: "#222222",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#9CA3AF",
  },
  light: {
    background: "#EEEEEE",
    text: "#000000",
    navActive: "#000000",
    navInactive: "#666666",
  },
  red: {
    background: "#5A2522",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#DDDDDD",
  },
  green: {
    background: "#2A4535",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#CCCCCC",
  },
  blue: {
    background: "#1F2F42",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#CCCCCC",
  },
  navy: {
    background: "#1A2545",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#CCCCCC",
  },
}; 