"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function Intro() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="p-4 h-24 font-bold text-neutral-700 dark:text-white max-w-xl leading-relaxed lg:leading-snug text-center mx-auto"
      > with
        <Highlight className="text-black dark:text-white">
          2
        </Highlight>years of experience 
        writing highly
        <Highlight className="text-black dark:text-white">
          scalable
        </Highlight>
        and
        <Highlight className="text-black dark:text-white">
          maintainable clean code
        </Highlight>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Love to
        <Highlight className="text-black dark:text-white" >
          read
        </Highlight>Lorem ipsum dolor sit and play
        <Highlight className="text-black dark:text-white">
          football
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
