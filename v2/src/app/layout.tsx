import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';

// Initialize Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'] // Starting from medium (500) weight
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
