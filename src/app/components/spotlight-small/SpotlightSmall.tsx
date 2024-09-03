"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SpotlightSmall() {
  return (
    <div
      className={cn(
        "relative flex h-[10rem] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0"
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-44 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] sm:w-[24rem] sm:h-56"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-44 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] sm:w-[24rem] sm:h-56"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-36 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl sm:h-48"></div>
        <div className="absolute top-1/2 z-50 h-36 w-full bg-transparent opacity-10 backdrop-blur-md sm:h-48"></div>
        <div className="absolute inset-auto z-50 h-32 w-[20rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl sm:w-[24rem]"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-28 w-48 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl sm:w-64 sm:h-36"
        ></motion.div>
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[24rem] -translate-y-[6.5rem] bg-cyan-400 sm:w-[30rem] sm:-translate-y-[7rem]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-36 w-full -translate-y-[10.5rem] bg-slate-950 sm:h-44 sm:-translate-y-[12.5rem]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-64 flex-col items-center px-5 sm:-translate-y-80">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl sm:py-6 md:text-5xl"
        >
          My Projects
        </motion.h1>
      </div>
    </div>
  );
}
