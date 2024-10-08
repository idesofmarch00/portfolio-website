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
        className="h-72 pt-2 font-bold text-white max-w-xl leading-relaxed mx-auto text-xl"
      > 
with over 
        <Highlight className="text-white">
        2 years of experience
        </Highlight>and a knack for building<Highlight className="text-white">scalable, 
        high-performance user-centric web and mobile applications</Highlight>.
         I take pride in writing <Highlight className="text-white">clean, high-quality code</Highlight> that solves real-world problems.
         <br />
         On days when my eyes and fingers need a break from the screens and keyboard , you&apos;ll find me immersed in <Highlight className="text-white">literature, 
         kicking a football around, or indulging in good food.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
