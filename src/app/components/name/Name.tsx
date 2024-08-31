import React from "react";
import FlipWords from "../ui/flip-words";

export default function Name() {
  const words = ["FrontEnd Engineer","Web Developer","Software Engineer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        My Name is Sahil Ahmed , I am a
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
