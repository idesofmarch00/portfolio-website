import Tools from "./components/tools";
import  Education  from "./components/education";
import Name from "./components/name";
import Designation from "./components/designation";
import Intro from "./components/intro";
import Spotlight from "./components/spotlight";
import SpotlightSmall from "./components/spotlight-small"
import  DP  from "./components/dp/DP";
import Projects from "./components/projects";
import Button from "./components/button"
import ProjectsCarousel from "./components/projects-carousel";
import Blogs from "./components/blogs";
import Socials from "./components/socials";
import Skills from "./components/skills";
import TextReveal from "./components/text-reveal";
import Experience from "./components/experience";
import ComputersCanvas from "./components/ui/computers";
import ScrollButton from "./components/scroll-button";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
    <main className="flex min-h-screen flex-col items-center justify-between bg-black px-32">
      <ScrollButton/>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start px-4 md:px-10 space-y-4 md:space-y-0 md:space-x-4 pt-4 bg-black">
  <div className="md:hidden -mb-6 md:mb-0 flex flex-col items-center space-y-2">
    <Name />
    <Designation />
  </div>
  
  <div className="md:hidden">
    <Socials />
  </div>
  
  <div className="flex flex-col items-center md:items-start md:w-2/5">
    <DP />
    <div className="hidden md:block mt-4">
      <Socials />
    </div>
  </div>
  
  <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:w-3/5">
    <div className="hidden md:block">
      <Name />
      <Designation />
    </div>
    
    <div className="text-center md:text-left w-full">
      <Intro />
    </div>
    
    <div className="flex flex-row w-full items-center justify-center space-x-4 pt-28 md:pt-0 mt-4 md:mt-0">
      <Button text="Experience" href="#experience" />
      <Button text="Projects" href="#projects" />
    </div>
  </div>
</div>

      <br />

      {/* SKILLS SECTION */}
      <TextReveal visible="My Skills and Tech Stack" revealed=""/>
      <Skills/>
      {/* desktop */}
      <div className="hidden md:flex items-center justify-between"><Tools />
      <div className="text-white pl-24 h-96 -mt-20">
        <p className="font-bold text-lg">With a focus on creating 3D visual experiences using the latest web technologies, I bring solid expertise in HTML , CSS , TypeScript and JavaScript. My tech stack includes frameworks and libraries like React, React Native, Node.js, Vue.js, Framer Motion and R3F, alongside tools such as VS Code, Git, and Docker.</p>
      <ComputersCanvas />
      </div>
      </div>
    {/* mobile */}
      <div className="pt-20 md:hidden">
      <div className="flex flex-col items-center text-white -mt-20">
        <p className="font-bold mx-10">With a focus on creating 3D visual experiences using the latest web technologies, I bring solid expertise in HTML , CSS , TypeScript and JavaScript.</p>
        <p className="font-bold mx-10">My tech stack includes frameworks and libraries like React, React Native, Node.js, Vue.js, Framer Motion and R3F, alongside tools such as VS Code, Git, and Docker.</p>
      <div className="w-96 -mt-10"><ComputersCanvas /></div>
      </div>
      </div>

      <br id="projects" />

      {/* PROJECTS SECTION */}
     <div className="hidden md:flex md:flex-col md:w-full"> <Spotlight/>
      <Projects/></div>

      <div className="md:hidden w-96 -mt-10"> <SpotlightSmall/>
       <ProjectsCarousel/></div>

      <br />
      <br />
      <br id="experience" />

      {/* EXPERIENCE EDUCATION SECTION */}
      {/* <Experience/> */}
      <Education/>

      <br />

      {/* BLOGS SECTION */}
      <TextReveal visible="My Technical Blog" revealed="Read my newsletter!"/>
      <Blogs/>
    </main>
    </PageTransition>
  );
}
