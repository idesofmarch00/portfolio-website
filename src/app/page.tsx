import Image from "next/image";
import Navigation from "./components/navigation";
import  Education  from "./components/education";
import Name from "./components/name";
import Designation from "./components/designation";
import Intro from "./components/intro";
import Spotlight from "./components/spotlight";
import  DP  from "./components/dp/DP";
import Projects from "./components/projects";
import ProjectsCarousel from "./components/projects-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center justify-between px-10 space-x-4 pt-20"><DP/> <div className="flex flex-col"><Name/><Designation/><Intro/></div></div>
      <Navigation />
      <Spotlight/>
      <ProjectsCarousel/>
      <Projects/>
      <Education/>
    </main>
  );
}
