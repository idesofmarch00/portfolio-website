'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000); // 1 second transition

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const curtainVariants = {
    initial: { scaleX: 1 },
    exit: { scaleX: 0 },
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-black origin-center"
            initial="initial"
            exit="exit"
            variants={curtainVariants}
            transition={{
              duration: 0.6, // Fast transition
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }} // Slight delay to allow curtain to open
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
