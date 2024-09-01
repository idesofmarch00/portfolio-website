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
  { name: "Google Cloud Platform", iconUrl: "https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-cloud-icon-vector-PNG.png" },
  { name: "MongoDB", iconUrl: "https://www.mongodb.com/assets/images/global/favicon.ico" },
  { name: "PWA", iconUrl: "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png" },
  { name: "WebSockets", iconUrl: "https://socket.io/images/logo-dark.svg" },
  { name: "LLMs", iconUrl: "https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png" },
  { name: "VS Code", iconUrl: "https://code.visualstudio.com/favicon.ico" },
  { name: "Figma", iconUrl: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&q=75&fit=max&auto=format&dpr=2" }
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
