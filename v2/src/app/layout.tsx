import type { Metadata } from "next";
import { Inter, Courier_Prime, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"], // Starting from medium (500) weight
});

// Initialize Courier Prime font
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Regular and bold weights
  variable: "--font-courier-prime",
});

// Initialize JetBrains Mono font for titles
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800"], // Regular, bold, and extra bold weights
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Steven Yang",
  description: "Personal website of Steven Yang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${courierPrime.variable} ${jetbrainsMono.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
