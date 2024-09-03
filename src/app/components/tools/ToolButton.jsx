import React from "react";
import Link from "next/link";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const ToolLink = motion(Link);

const ToolButton = ({
  x,
  y,
  name,
  iconUrl,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <div
              variants={item}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={name}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                <img src={iconUrl} alt={name} className="w-6 h-6" />
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {name}
                </span>
              </span>
            </div>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <div
              variants={item}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={name}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                <img src={iconUrl} alt={name} className="w-6 h-6" />
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {name}
                </span>
              </span>
            </div>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default ToolButton;
