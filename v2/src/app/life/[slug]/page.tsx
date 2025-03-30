"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes";
import PageTransition from "../../components/PageTransition";
import { useParams } from "next/navigation";
import MarkdownRenderer from '../../components/MarkdownRenderer';

export default function WritingPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Use the global theme context
  const { currentTheme } = useTheme();

  // Get current theme colors
  const themeColors = themes[currentTheme];

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/writing/${slug}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const text = await response.text();
        
        // Extract title from first line if it's a heading
        const lines = text.split('\n');
        if (lines[0].startsWith('# ')) {
          setTitle(lines[0].substring(2));
          setContent(lines.slice(1).join('\n'));
        } else {
          setTitle('');
          setContent(text);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching markdown:', error);
        setContent('# Content Not Found\n\nSorry, the requested content could not be loaded.');
        setIsLoading(false);
      }
    }

    fetchContent();
  }, [slug]);

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
            href="/life"
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

          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6 mb-6"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            </div>
          ) : (
            <>
              {title && (
                <h1
                  className="text-3xl font-bold mb-6"
                  style={{
                    color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
                  }}
                >
                  {title}
                </h1>
              )}
              <MarkdownRenderer content={content} themeColors={themeColors} />
            </>
          )}
        </main>
      </PageTransition>
    </div>
  );
} 