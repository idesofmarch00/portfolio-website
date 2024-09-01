"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Charles Dickens",
    url: "A Tale of Two Cities",
  },
  {
    name: "William Shakespeare",
    url: "Hamlet",
  },
  {
    name: "Edgar Allan Poe",
    url: "A Dream Within a Dream",
  },
  {

    name: "Jane Austen",
    url: "Pride and Prejudice",
  },
  {
   
    name: "Herman Melville",
    url: "Moby-Dick",
  },
];

export default function Skills() {
  return (
    <div className="pt-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
      />
    </div>
  );
}

