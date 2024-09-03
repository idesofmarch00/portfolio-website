"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconNews, IconUser } from "@tabler/icons-react";
export default function FloatingNavHeader() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 mx-2 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "/resume",
      icon: <IconUser className="h-6 w-6 mx-2 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-6 w-6 mx-2 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Blog",
      link: "https://sahilahmed.hashnode.dev/",
      icon: (
        <IconNews className="h-6 w-6 mx-2 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="hidden sm:visible relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
