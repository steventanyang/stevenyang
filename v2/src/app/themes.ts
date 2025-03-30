// Define theme types
export type ThemeColor = {
  background: string;
  text: string;
  navActive: string;
  navInactive: string;
};

// Theme definitions with darker backgrounds
export const themes: Record<string, ThemeColor> = {
  default: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#9CA3AF",
  },
  dark: {
    background: "#1A1A1A",
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
    background: "#4A2727",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  green: {
    background: "#212E1A",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  blue: {
    background: "#1A282E",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  navy: {
    background: "#1F2136",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
};
