"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../ui/link-preview";

export default function Experience() {
  return (
    <div className="flex justify-center items-center w-full flex-col px-4 py-10">
      <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">Worked on  {" "}
        <LinkPreview url="https://play.google.com/store/apps/details?id=in.fuelbuddy.driver&hl=en_IN" className="font-bold">
          Driver App
        </LinkPreview> 
        {" "} and {" "}
        <LinkPreview url="https://www.fuelbuddy.in/" className="font-bold">
          Customer App
        </LinkPreview>  {" "}
       in React , React Native and Vue.js
       {/* https://play.google.com/store/apps/details?id=in.fuelbuddy.driver&hl=en_IN */}
      </p>
    </div>
  );
}
