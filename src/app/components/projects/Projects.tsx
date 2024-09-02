import Link from "next/link"
import { FocusCards } from "../../components/ui/focus-cards";
import { ArrowRight } from 'lucide-react'; 

const ColorfulLink = () => {
  return (
    <Link href="https://github.com/idesofmarch00" passHref className="relative">
      <div className="flex items-center space-x-1 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-colors duration-300 cursor-pointer group">
        <span>View All My Projects</span>
        <ArrowRight size={20} color="white" /> 
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover:w-[85%]"></span>
      </div>
    </Link>
  );
};

export default function Projects() {
  const cards = [
    {
      title: "Type Best Prompt",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Snip Chat",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SwissArmyKnife NewTab",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <><FocusCards cards={cards} /><ColorfulLink/></>;
}
