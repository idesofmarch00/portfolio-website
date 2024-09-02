"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "LinkedIn",
    image:
      "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/in/sahil-ahmed-/",
  },
  {
    id: 2,
    name: "GitHub",
    image:
      "https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png",
    link: "https://github.com/idesofmarch00",
  },
  {
    id: 3,
    name: "LeetCode",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508",
    link: "https://leetcode.com/u/NyrOsNjfL3/",
  },
  {
    id: 4,
    name: "HackerRank",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "https://www.hackerrank.com/profile/sa_idesofmarch",
  },
  {
    id: 5,
    name: "Hashnode",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png",
    link: "https://sahilahmed.hashnode.dev/",
  },
  {
    id: 6,
    name: "Resume",
    image:
      "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
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
