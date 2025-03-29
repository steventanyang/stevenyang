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
    background: "#3A1512",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  green: {
    background: "#1A2C22",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  blue: {
    background: "#121E2C",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
  navy: {
    background: "#0F1525",
    text: "#FFFFFF",
    navActive: "#FFFFFF",
    navInactive: "#AAAAAA",
  },
};
