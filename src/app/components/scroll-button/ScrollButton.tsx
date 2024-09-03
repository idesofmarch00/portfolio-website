'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButton: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const currentScrollTop = currentScrollPos || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      setScrollPosition(currentScrollTop);

      // Check if at the top or bottom of the document
      if (currentScrollTop === 0 || currentScrollTop + windowHeight >= documentHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Determine scroll direction
      setIsScrollingUp(currentScrollPos < prevScrollPos);

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isScrollingUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };
  

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed z-[1000] ${
            isScrollingUp ? 'top-4 right-4' : 'bottom-4 right-4'
          } bg-accent text-black p-3 rounded-full shadow-lg`}
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
          >
            {isScrollingUp ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
