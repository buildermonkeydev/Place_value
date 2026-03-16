"use client"

import React, { useEffect, useRef } from 'react';

interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrame: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1; // Speed of scroll
      
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      if (scrollElement) {
        scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Duplicate items for seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div 
        ref={scrollRef}
        className="flex items-center whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {marqueeItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-[#35bfff] text-xl md:text-2xl font-bold mx-4">
              {item}
            </span>
            <span className="text-[#FF6B35] text-2xl mx-2">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;