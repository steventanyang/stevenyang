import React, { useEffect, useRef } from "react";
import "../static/Stars.css";

export default function Stars() {
  const starsRef = useRef(null);
  
  useEffect(() => {
    if (!starsRef.current) return;
    
    // Reduce the number of stars for better performance
    const starCount = window.innerWidth < 768 ? 30 : 50; // Even fewer stars
    const container = starsRef.current;
    container.innerHTML = '';
    
    // Create stars in batches for better performance
    const createStars = (startIdx, count) => {
      if (startIdx >= starCount) return;
      
      const fragment = document.createDocumentFragment();
      const endIdx = Math.min(startIdx + count, starCount);
      
      for (let i = startIdx; i < endIdx; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Randomize star positions
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Vary star sizes but keep them small
        const size = Math.random() * 1.5 + 0.5; // Smaller stars
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Add simple animation with CSS
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
      
      // Create the next batch in the next frame
      if (endIdx < starCount) {
        requestAnimationFrame(() => createStars(endIdx, count));
      }
    };
    
    // Start creating stars in batches of 10
    createStars(0, 10);
  }, []);
  
  return <div className="stars-container" ref={starsRef}></div>;
} 