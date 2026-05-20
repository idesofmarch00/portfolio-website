"use client";

import React, { useRef, useCallback } from 'react';
import { useMotionValue, useSpring, motion, useAnimationFrame } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    },
    [mouseX, mouseY]
  );

  useAnimationFrame(() => {
    if (cursorRef.current) {
      const x = cursorX.get();
      const y = cursorY.get();
      // Aligns the tip of the stick (cx=4, cy=4) exactly with the mouse coordinate (x, y)
      cursorRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    }
  });

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <div ref={cursorRef} className="hidden lg:block fixed top-0 left-0 z-[999999] pointer-events-none">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant white stick / wand (angled 45 degrees, sleek and modern) */}
        <line 
          x1="4" 
          y1="4" 
          x2="28" 
          y2="28" 
          stroke="#FFFFFF" 
          strokeWidth="3" 
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.6))" }}
        />
        {/* Glowing white tip at the active hot spot */}
        <circle 
          cx="4" 
          cy="4" 
          r="3" 
          fill="#FFFFFF" 
          style={{ filter: "drop-shadow(0px 0px 6px #FFFFFF)" }}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;