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
      cursorRef.current.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
    }
  });

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <div ref={cursorRef} className="hidden lg:block fixed top-0 left-0 z-50 pointer-events-none">
      <svg width="80" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lightGradient" cx="0" cy="0" r="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C0C0C0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <g transform="rotate(60, 40, 40) translate(0, -5) skew(-10)">
          {/* Circle of light */}
          <circle cx="10" cy="10" r="10" fill="url(#lightGradient)" />
          {/* Wand */}
          <path 
            d="M10 10L70 70" 
            stroke="#FFD700"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default CustomCursor;