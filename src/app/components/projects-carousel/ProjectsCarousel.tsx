import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import Link from "next/link";

export default function ProjectsCarousel() {
  const cards = projects.map((project, index) => (
    <Card key={project.title} card={project} index={index} layout={true} />
  ));

  return (
    <div className="w-96 h-full mt-2 sm:-mt-32 md:-mt-64">
      <Carousel items={cards} />
    </div>
  );
}

interface Project {
  category: string;
  title: string;
  src: string;
  description: string;
  code?: string;
  link?: string;
}

const ProjectContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#F5F5F7] p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
      <Image
        src={project.src}
        alt={project.title + "image"}
        height={500}
        width={500}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto mx-auto object-contain mt-4 mb-4"
      />
     <div
        className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl font-sans max-w-3xl mx-auto mb-6"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      <div className="flex justify-center space-x-4">
        {project.code && (
          <Link href={project.code} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Code</button>
          </Link>
        )}
        {project.link && (
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Visit Site</button>
          </Link>
        )}
        {!project.link && !project.code && (
          <button className=" text-black font-bold
           px-4 py-2 rounded">
            Coming Soon ...
          </button>
        )}
      </div>
    </div>
  );
};

const data: Project[] = [
  {
    category: "Typing",
    title: "Type Best Prompt",
    src: "https://media.geeksforgeeks.org/wp-content/uploads/20210818161259/ex1.png",
    description: "A multiplayer typing test competition to improve your typing speed and accuracy to craft the best prompt for LLMs.",
  },
  {
    category: "Communication",
    title: "Snip Chat",
    src: "/images/chat-app/snip-chat.png",
    description: "<ul><li>A Progressive Web App (PWA) built with Quasar, Vue.js, Firebase, Mapbox GL JS, and Vite to chat with friends.</li><br/><li>Key features include:</li><ul><li>1. Sending snaps, images, and location information.</li><li>2. Real-time notifications and service workers for enhanced engagement and offline functionality.</li><li>3. A unique feature to discover and add random users nearby.</li></ul></ul>",
    code: "https://github.com/idesofmarch00/snip-chat",
    link: "https://snip-chat.netlify.app",
  },
  {
    category: "Productivity",
    title: "SwissArmyKnife NewTab",
    src: "/images/extension/chrome-extension.png",
    description: "<ul><li>A Chrome extension that replaces your new tab page with a customizable dashboard.</li><br/><li>Designed to boost productivity, it offers features like:</li><ul><li>1. Real-time Bitcoin price and weather updates.</li><li>2. Site blocker, Pomodoro timer, and To-Do list to enhance focus.</li><li>3. Save links to read later functionality.</li></ul></ul>",
    code: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
    link: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
  },
];

interface ProjectWithContent extends Project {
  content: React.ReactNode;
}

const projects: ProjectWithContent[] = [
  {
    category: "Typing",
    title: "Type Best Prompt",
    src: "https://media.geeksforgeeks.org/wp-content/uploads/20210818161259/ex1.png",
    content: <ProjectContent project={data[0]} />,
    description: "A typing test application to improve your typing speed and accuracy.",
  },
  {
    category: "Communication",
    title: "Snip Chat",
    src: "/images/chat-app/snip-chat.png",
    content: <ProjectContent project={data[1]} />,
    description: "<ul><li>A Progressive Web App (PWA) built with Quasar, Vue.js, Firebase, Mapbox GL JS, and Vite to chat with friends.</li><br/><li>Key features include:</li><ul><li>1. Sending snaps, images, and location information.</li><li>2. Real-time notifications and service workers for enhanced engagement and offline functionality.</li><li>3. A unique feature to discover and add random users nearby.</li></ul></ul>",
    code: "https://github.com/idesofmarch00/snip-chat",
    link: "https://snip-chat.netlify.app",
  },
  {
    category: "Productivity",
    title: "SwissArmyKnife NewTab",
    src: "/images/extension/chrome-extension.png",
    content: <ProjectContent project={data[2]} />,
    description: "<ul><li>A Chrome extension that replaces your new tab page with a customizable dashboard.</li><br/><li>Designed to boost productivity, it offers features like:</li><ul><li>1. Real-time Bitcoin price and weather updates.</li><li>2. Site blocker, Pomodoro timer, and To-Do list to enhance focus.</li><li>3. Save links to read later functionality.</li></ul></ul>",
    code: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
    link: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
  },
];
