import Link from "next/link"
import { FocusCards } from "../../components/ui/focus-cards";
import { ArrowRight } from 'lucide-react'; 
import { Url } from "url";

const ColorfulLink = () => {
  return (
    <Link href="https://github.com/idesofmarch00" passHref className="relative pt-4">
      <div className="flex items-center space-x-1 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-colors duration-300 cursor-pointer group">
        <span>View All My Projects</span>
        <ArrowRight size={20} color="white" /> 
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover:w-[85%]"></span>
      </div>
    </Link>
  );
};

export type Card = {
  title: string;
  src: string;
  active: boolean;
  link?: Url | string;
  code?: Url | string;
  description?: string;
  images: string[];
};

export default function Projects() {
  const cards : Card[] = [
    {
      title: "Type Best Prompt",
      active: false,
      images : [],
      // src: "https://beebom.com/wp-content/uploads/2021/04/typings-website.jpg",
      src : "https://media.geeksforgeeks.org/wp-content/uploads/20210818161259/ex1.png",
      // src: "https://i.dailymail.co.uk/i/pix/2015/12/02/09/2EFB73F300000578-3342394-The_typing_test_screenshot_shown_above_only_takes_a_minute_and_c-a-12_1449049506497.jpg",
    },
    {
      title: "Snip Chat",
      active : true,
      code: "https://github.com/idesofmarch00/snip-chat",
      link: "https://snip-chat.netlify.app",
        images : [
    "/images/chat-app/splash.png",
    "/images/chat-app/chat.jpg",
    "/images/chat-app/users.png",
    "/images/chat-app/map.jpeg",
    "/images/chat-app/drawer.png"
  ],
      src: "/images/chat-app/snip-chat.png",
        "description": "<ul><li>A Progressive Web App (PWA) built with Quasar, Vue.js, Firebase, Mapbox GL JS, and Vite to chat with friends.</li><br/><li>Key features include:</li><ul><li>1. Sending snaps, images, and location information.</li><li>2. Real-time notifications and service workers for enhanced engagement and offline functionality.</li><li>3. A unique feature to discover and add random users nearby.</li></ul></ul>"
    },
    {
      title: "SwissArmyKnife NewTab",
      link: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
      code: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard",
      active : true,
      images : [
        "/images/extension/links.png",
       "/images/extension/chrome-extension.png",
       "/images/extension/focus.png",
       "/images/extension/blocked.png",
       "/images/extension/settings.png",
      ],
      src: "/images/extension/chrome-extension.png",
        "description": "<ul><li>A Chrome extension that replaces your new tab page with a customizable dashboard.</li><br/><li>Designed to boost productivity, it offers features like:</li><ul><li>1. Real-time Bitcoin price and weather updates.</li><li>2. Site blocker, Pomodoro timer, and To-Do list to enhance focus.</li><li>3. Save links to read later functionality.</li></ul></ul>"
      }
  ];

  return <><FocusCards cards={cards} /><ColorfulLink/></>;
}
