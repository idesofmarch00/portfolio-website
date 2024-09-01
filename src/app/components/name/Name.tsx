"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "My",
    },
    {
      text: "name",
    },
    {
      text: "is",
    },
    {
      text: "Sahil",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Ahmed",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
   
      <TypewriterEffectSmooth words={words} />
  );
}
