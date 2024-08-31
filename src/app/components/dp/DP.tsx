import { GlareCard } from "../ui/glare-card";

export default function GlareCardDemo() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
       <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
    </GlareCard>
  );
}
