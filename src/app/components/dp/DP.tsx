import { GlareCard } from "../ui/glare-card";

export default function GlareCardDemo() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
       <img
          className="h-full w-full absolute inset-0 object-cover"
          src="../../sahil.jpeg"
        />
    </GlareCard>
  );
}