import Image from "next/image";
import Tools from "./components/tools";
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
import GlobeCard from "./components/globe-card";
import ComputersCanvas from "./components/ui/computers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black px-32">
      {/* HERO SECTION */}
      <div className="flex justify-between items-start px-10 space-x-4 pt-20 bg-black">
      <div className="flex flex-col w-1/2"><DP/><Socials/></div>
      <div className="flex flex-col space-y-0"><Name/><Designation/><Intro/><div className="flex items-center justify-center space-x-6"><Button text="Download Resume"/><Button text="Contact Me"/></div></div>
      </div>

      <br />

      {/* SKILLS SECTION */}
      <TextReveal visible="My Skills and Tech Stack" revealed=""/>
      <Skills/>
      <div className="flex items-center justify-between"><Tools />
      <div className="text-white pl-24 h-96 -mt-20">
        <p className="font-bold text-lg">With a focus on creating 3D visual experiences using the latest web technologies, I bring solid expertise in HTML , CSS , TypeScript and JavaScript.My tech stack includes frameworks and libraries like React, React Native, Node.js, Vue.js, Framer Motion and R3F, alongside tools such as VS Code, Git, and Docker.</p>
      {/* <GlobeCard/> */}
      <ComputersCanvas />
      </div>
      </div>

      <br />

      {/* PROJECTS SECTION */}
      <Spotlight/>
      {/* <ProjectsCarousel/> */}
      <Projects/>

      {/* EXPERIENCE EDUCATION SECTION */}
      <Experience/>
      <Education/>

      <br />

      {/* BLOGS SECTION */}
      <TextReveal visible="My Technical Blog" revealed="Read my newsletter!"/>
      <Blogs/>
    </main>
  );
}
