import React from "react";
import FlipWords from "../ui/flip-words";

export default function Designation() {
  const words = ["Sr. FrontEnd Engineer", "App Developer", "Full Stack Engineer", "Software Engineer", "Web Developer", "AI Engineer"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-lg mx-auto font-normal text-neutral-400">
        I am a
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
