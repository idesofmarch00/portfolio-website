import Image from "next/image";
import { GlareCard } from "../ui/glare-card";

export default function GlareCardDemo() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
       <Image
          className="h-full w-full absolute inset-0 object-cover"
          width={256}
          height={256}
          alt="Sahil Ahmed Profile Pic"
          src="/sahil.webp"
        />
    </GlareCard>
  );
}