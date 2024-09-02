"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../ui/magnetic";

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <div className="flex flex-col justify-center items-center pt-6">
      <Magnetic>
        <a href={href} className="border-2 text-white border-white rounded-3xl w-[10.5rem] h-10 flex items-center justify-center">
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
              {text}
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{
                initial: { y: 30, opacity: 0 },
                hovered: { y: 0, opacity: 1 },
              }}
            >
              {text}
            </motion.div>
          </motion.div>
        </a>
      </Magnetic>
    </div>
  );
}

