import { GlareCard } from "../ui/glare-card";
import Image from "next/image";

export default function GlareCardDemo() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
       <Image
          className="h-full w-full absolute inset-0 object-cover"
          src="/sahil.webp"
          height={100}
          width={100}
          alt="Sahil Ahmed"
        />
    </GlareCard>
  );
}