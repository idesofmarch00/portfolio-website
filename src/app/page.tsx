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
import Skills from "./components/skills";
import TextReveal from "./components/text-reveal";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black px-32">
      <div className="flex justify-between items-start px-10 space-x-4 pt-20 bg-black">
      <div className="flex flex-col w-1/2"><DP/><Socials/></div>
      <div className="flex flex-col space-y-0"><Name/><Designation/><Intro/><Button/></div>
      </div>
      <br />
      <TextReveal visible="My Skills and Tech Stack" revealed=""/>
      <Skills/>
      <Navigation />
      <br />
      <Spotlight/>
      <ProjectsCarousel/>
      <Projects/>
      <Experience/>
      <Education/>
      <br />
      <TextReveal visible="My Technical Blog" revealed="Read my newsletter!"/>
      <Blogs/>
    </main>
  );
}
