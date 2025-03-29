"use client";

import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate visibility for color changes, but still animate position
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-transform duration-700 ease-in-out ${
        isVisible 
          ? 'translate-y-0' 
          : '-translate-y-4'
      }`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
} 