import Image from "next/image";
import Navigation from "./components/navigation";
import  Experiences  from "./components/experiences";
import Name from "./components/name";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro/>
      {/* <Name/> */}
      {/* <Navigation /> */}
      {/* <Experiences/> */}
    </main>
  );
}
