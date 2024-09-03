'use client'
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
import SmallGlowingCard from './components/small-glowing-card';
import Blogs from "./components/blogs";
import Socials from "./components/socials";
import Skills from "./components/skills";
import TextReveal from "./components/text-reveal";
import ComputersCanvas from "./components/ui/computers";
import ScrollButton from "./components/scroll-button";
import PageTransition from "./components/PageTransition";
import { LinkPreview } from "./components/ui/link-preview";
import { ArrowRight } from 'lucide-react'; 
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <PageTransition>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-red-500 to-green-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />
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
      {/* desktop */}
     <div className="hidden md:flex md:flex-col md:w-full"> <Spotlight/>
      <Projects/></div>
      {/* mobile */}
      <div className="md:hidden w-96 -mt-10"> <SpotlightSmall/>
       <ProjectsCarousel/></div>

      <br id="experience" />

      {/* EXPERIENCE EDUCATION SECTION */}
      <Education/>

      {/* BLOGS SECTION */}
      <div className="-mt-12 md:mt-0 w-fit flex flex-col"> <div className="pl-4 md:pl-0"><TextReveal visible="My Technical Blog" revealed="Read my newsletter!"/></div><Blogs/>
      <div className="md:hidden w-screen mb-10 px-2">
<SmallGlowingCard
  title="Globalize Your Vue.js App"
  description="Explore steps to integrate internationalization and local Indian languages into your Vue.js application."
  linkUrl="https://sahilahmed.hashnode.dev/how-to-globalize-your-vuejs-app-with-i18n-a-step-by-step-guide"
  imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1724934196930/bde74906-a8ad-475d-a53e-9f50bb711458.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  imageAlt="Globalization in Vue.js"
  gradientColors="from-pink-600 to-pink-800"
/>

<SmallGlowingCard
  title="Firebase Cloud Messaging"
  description="Implementing Firebase Cloud Messaging in a React iOS/Android PWA."
  linkUrl="https://sahilahmed.hashnode.dev/implementing-firebase-cloud-messaging-in-a-react-ios-android-pwa-a-comprehensive-guide"
  imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1725049939952/4e71c86c-0b5b-4ef3-9815-2e8a72fcbf47.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  imageAlt="Firebase Cloud Messaging"
  gradientColors="from-neutral-600 to-neutral-800"
/>

<SmallGlowingCard
  title="React Native IDE in VS Code"
  description="Discover how this IDE simplifies mobile app development for iOS and Android, offering powerful tools for efficiency and productivity."
  linkUrl="https://sahilahmed.hashnode.dev/my-experience-using-the-react-native-ide-in-vs-code"
  imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1724961136689/17dcaa1b-3dd2-4341-8901-19ac088bbe56.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  imageAlt="React Native IDE in VS Code"
  gradientColors="from-blue-700 to-blue-900"
/>
<LinkPreview url=" https://sahilahmed.hashnode.dev/"><div className="relative flex items-center space-x-1 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-white hover:from-white hover:via-blue-500 hover:to-purple-500 transition-colors duration-300 cursor-pointer group pl-2">
  <span>Read All Posts</span>
  <ArrowRight size={20} color="white" />
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-white transition-all duration-300 group-hover:w-[30%]"></span>
</div></LinkPreview>
</div></div>
    </main>
    </PageTransition>
  );
}
