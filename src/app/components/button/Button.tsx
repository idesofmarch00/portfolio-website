"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Button() {
  return (
    <div className="m-40 pt-6 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        Download Resume
      </HoverBorderGradient>
    </div>
  );
}
