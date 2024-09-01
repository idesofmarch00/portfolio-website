"use client";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

// data.js
export const BtnList = [
  { name: "Git", iconUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { name: "Docker", iconUrl: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
  { name: "Google Cloud Platform", iconUrl: "https://cloud.google.com/images/products/logos/svg/gcp-logo.svg" },
  { name: "MongoDB", iconUrl: "https://www.mongodb.com/assets/images/global/favicon.ico" },
  { name: "PWA (Progressive Web Apps)", iconUrl: "https://developers.google.com/web/fundamentals/web-app-manifest/logo192.png" },
  { name: "WebSockets", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Websocket.png/800px-Websocket.png" },
  { name: "LLMs (Large Language Models)", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AI_Language_Models.png/640px-AI_Language_Models.png" },
  { name: "VS Code", iconUrl: "https://code.visualstudio.com/favicon.ico" },
  { name: "Figma", iconUrl: "https://www.figma.com/favicon.ico" }
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(16vw - 1rem)"
                  : isMedium
                  ? "calc(14vw - 1rem)"
                  : "calc(12vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.name} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => (
                  <NavButton key={btn.name} x={0} y={0} {...btn} />
                ))}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => (
                  <NavButton
                    key={btn.name}
                    x={0}
                    y={0}
                    {...btn}
                    labelDirection="left"
                  />
                ))}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
