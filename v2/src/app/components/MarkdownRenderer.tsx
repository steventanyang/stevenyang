"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeColors } from "../work/page";

interface MarkdownRendererProps {
  content: string;
  themeColors: ThemeColors;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  themeColors,
}) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => (
          <h1
            className="text-3xl font-bold mt-8 mb-4"
            style={{
              color: themeColors.text,
              fontFamily: "var(--font-title)",
            }}
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-2xl font-semibold font-mono mt-6 mb-3"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="text-xl font-medium font-mono mt-5 mb-2"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p
            className="mb-4 leading-relaxed font-mono"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a
            className="underline hover:opacity-80 transition-opacity font-mono"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul
            className="list-disc pl-6 mb-4 font-mono"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="list-decimal pl-6 mb-4 font-mono"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        li: ({ ...props }) => (
          <li
            className="mb-1 font-mono"
            style={{ color: themeColors.text }}
            {...props}
          />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 pl-4 italic my-4 font-mono"
            style={{
              borderColor: themeColors.navInactive,
              color: themeColors.navInactive,
            }}
            {...props}
          />
        ),
        code: ({
          inline,
          className,
          children,
          ...props
        }: React.ComponentPropsWithoutRef<"code"> & {
          inline?: boolean;
          className?: string;
        }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              // @ts-expect-error - The type definitions for react-syntax-highlighter have compatibility issues
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              className="rounded my-4"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code
              className={`font-mono ${
                inline
                  ? "bg-opacity-20 px-1 py-0.5 rounded"
                  : "block p-4 rounded my-4"
              }`}
              style={{ backgroundColor: `${themeColors.navInactive}40` }}
              {...props}
            >
              {children}
            </code>
          );
        },
        hr: ({ ...props }) => (
          <hr
            className="my-8 opacity-50"
            style={{ borderColor: themeColors.navInactive }}
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
