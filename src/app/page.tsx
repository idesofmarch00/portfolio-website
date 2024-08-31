import Image from "next/image";
import Navigation from "./components/navigation";
import  Experiences  from "./components/experiences";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <Experiences/>
    </main>
  );
}
