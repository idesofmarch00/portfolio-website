"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "LinkedIn",
    image:
      "/path/to/linkedin-logo.png",
    link: "https://www.linkedin.com/in/sahil-ahmed-/",
  },
  {
    id: 2,
    name: "GitHub",
    image:
      "/path/to/github-logo.png",
    link: "https://github.com/idesofmarch00",
  },
  {
    id: 3,
    name: "LeetCode",
    image:
      "/path/to/leetcode-logo.png",
    link: "https://leetcode.com/u/NyrOsNjfL3/",
  },
  {
    id: 4,
    name: "HackerRank",
    image:
      "/path/to/hackerrank-logo.png",
    link: "https://www.hackerrank.com/profile/sa_idesofmarch",
  },
  {
    id: 5,
    name: "Hashnode",
    image:
      "/path/to/hashnode-logo.png",
    link: "https://sahilahmed.hashnode.dev/",
  },
  {
    id: 6,
    name: "Resume",
    image:
      "/path/to/resume-logo.png",
    link: "/resume",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-row items-center justify-center pt-6 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
