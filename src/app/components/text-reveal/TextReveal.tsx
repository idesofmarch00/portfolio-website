"use client";
import React from "react";
import {
  TextRevealCard,
} from "../ui/text-reveal-card";

export default function TextReveal({visible
  ,revealed}:{visible:string,
    revealed:string}) {
  return (
      <TextRevealCard
        text={visible}
        revealText={revealed}
      >
      </TextRevealCard>
  );
}
