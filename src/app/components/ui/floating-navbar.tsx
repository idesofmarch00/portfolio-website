"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const getGradientColor = (path: string) => {
    switch (path) {
      case "/":
        return "from-transparent via-blue-500 to-transparent";
      case "/resume":
        return "from-transparent via-green-500 to-transparent";
      case "/contact":
        return "from-transparent via-purple-500 to-transparent";
      default:
        return "from-transparent via-blue-500 to-transparent";
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-80 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 group",
              pathname === navItem.link ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 border-transparent border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2]  dark:text-white px-4 py-2 rounded-full" : ""
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span className={cn(
              "absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r h-px opacity-0 group-hover:opacity-100 transition-opacity",
              getGradientColor(navItem.link),
              pathname === navItem.link ? "opacity-100 " : ""
            )} />
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
