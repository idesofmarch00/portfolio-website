"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Linkedin",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Github",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Leetcode",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Hackerrank",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Hashnode",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Resume",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

// const people = [
//   { name: "Hashnode", link: "/", icon: "hashnode", id: 1,designation : ""  },
//   { name: "Leetcode", link: "/projects", icon: "leetcode", id: 2,designation : "" },
//   { name: "Haackerrank", link: "/contact", icon: "hackerrank", id: 3,designation : "" },
//   {
//     name: "Github",
//     link: "https://www.github.com/codebucks27",
//     icon: "github",
//     id: 4,designation : "",
//   },
//   {
//     name: "LinkedIn",
//     link: "https://www.linkedin.com/in/codebucks",
//     icon: "linkedin",
//     id: 5,designation : "",
//   },
//   {
//     name: "Resume",
//     link: "/resume.pdf",
//     icon: "resume",
//     id: 6,designation : "",
//   },
// ]

export default function Socials() {
  return (
    <div className="flex flex-row items-center justify-center pt-16 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
