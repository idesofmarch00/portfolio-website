import Image from "next/image";
import Navigation from "./components/navigation";
import  Education  from "./components/education";
import Name from "./components/name";
import Designation from "./components/designation";
import Intro from "./components/intro";
import Spotlight from "./components/spotlight";
import  DP  from "./components/dp/DP";
import Projects from "./components/projects";
import Button from "./components/button"
import ProjectsCarousel from "./components/projects-carousel";
import Blogs from "./components/blogs";
import Socials from "./components/socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-start justify-between px-10 space-x-4 pt-20"><DP/> <div className="flex flex-col space-y-0"><Name/><Designation/><Intro/><Button/> <Socials/></div></div>
      <Navigation />
      <Spotlight/>
      <ProjectsCarousel/>
      <Projects/>
      <Blogs/>
      <Education/>
    </main>
  );
}
