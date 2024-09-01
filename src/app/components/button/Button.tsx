"use client";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Magnetic from "../ui/magnetic";

export default function Button() {
  return (
    <div className="flex flex-col justify-center items-center"><Magnetic>
    <div className=" border-2 text-white border-white rounded-3xl w-[10.5rem] h-12 flex items-center justify-center">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="h-fit relative overflow-hidden cursor-pointer"
      >
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: -30 },
          }}
        >
          Download resume
        </motion.div>
        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { y: 30, opacity: 0 },
            hovered: { y: 0, opacity: 1 },
          }}
        >
          Download resume
        </motion.div>
      </motion.div>
    </div>
  </Magnetic></div>
    
  );
}
