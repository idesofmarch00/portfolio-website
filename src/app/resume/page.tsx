'use client'
import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import PageTransition from '../components/PageTransition';

export default function Resume() {
    const [isJsonMode, setIsJsonMode] = useState(false);
    const router = useRouter();

    const toggleMode = () => {
      setIsJsonMode(!isJsonMode);
    };

    const copyContent = () => {
      const content = isJsonMode ? JSON.stringify(resumeData, null, 2) : htmlContent;
      navigator.clipboard.writeText(content).then(() => {
        toast.success('Content copied to clipboard!');
      }).catch(() => {
        toast.error('Failed to copy content');
      });
    };

    const resumeData = {
      name: "Sahil Ahmed",
      contact: {
        phone: "+91 9354341318",
        email: "sa.idesofmarch@gmail.com",
        linkedin: "https://linkedin.com/in/sahil-ahmed-",
        github: "https://github.com/idesofmarch00",
        leetcode: "https://leetcode.com/u/NyrOsNjfL3/",
        website: "https://sahilahmed.vercel.app/"
      },
      experience: [
        {
          title: "Software Engineer",
          company: "FuelBuddy",
          period: "Aug 2022 -- Present",
          location: "Gurugram, India",
          responsibilities: [
            "Developed mission-critical, scalable, high-performance and responsive Progressive Web Apps (PWA) leveraging React, React Native, Redux, Vue, and GraphQL for the delivery and operations teams within an Agile framework, optimizing workflow and resulting in a 27% boost in delivery efficiency.",
            "Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views while adhering to established UI/UX design principles, streamlining delivery routes and reducing average delivery times by 50 minutes per order.",
            "Implemented multi-language support for local Indian languages in addition to English, expanding the driver base by 40% and increasing success rates for onboarding.",
            "Integrated real-time notification functionality and authentication using Firebase, ensuring drivers were always informed of critical updates and order changes.",
            "Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE and all over India using WebSockets, resulting in a 32% increase in dispensing accuracy.",
            "Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors by 44% and reducing fuel pilferage by an estimated 5,900 liters per month.",
            "Developed a polymorphic codebase to abstract interactions with diverse dispenser models (Tokheim, Isoil, Veeder), accelerating feature implementation and fostering efficient collaboration between India and UAE development teams."
          ]
        }
      ],
      projects: [
        {
          name: "SnipChat",
          description: "Developed a responsive Progressive Web App (PWA) utilizing Backend-as-a-Service (BaaS) to deliver a seamless chat experience with features like sending snaps, images, and location. Implemented real-time notifications and service workers to enhance engagement and ensure offline functionality. Integrated a unique feature for users to discover and add random users from their location on a map.",
          technologies: ["Quasar", "Vue.js", "Firebase", "Mapbox GL JS", "WorkBox", "Vite"],
          url: "https://musical-narwhal-4203b8.netlify.app/"
        },
        {
          name: "SwissArmyKnife NewTab",
          description: "Built a Chrome extension that replaces the new tab page with a custom interface with real-time Bitcoin price, weather updates, and other productivity tools. Implemented features like a site blocker, Pomodoro timer, To-Do list, and Save links to read later feature. Utilized many APIs for dynamic content like a random quote, joke, and background each time the user opens a new tab.",
          technologies: ["Javascript", "HTML/CSS"],
          url: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard"
        }
      ],
      skills: [
        "JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL (Postgres)", "GraphQL",
        "React", "React Native", "Next.js", "React Three Fiber (R3F)", "Framer Motion",
        "Vue.js", "Quasar", "Electron", "Node.js", "MongoDB", "Express", "Firebase",
        "Vitest", "Playwright", "Git", "Docker", "Google Cloud Platform", "VS Code",
        "WordPress", "Figma", "PWA", "LLMs", "Prompt Engineering", "Technical Proficiency",
        "Information Literacy", "Auto-didactic Skills"
      ],
      education: {
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Jamia Hamdard University",
        location: "Delhi, India",
        period: "Aug. 2019 -- April 2023"
      },
      awards: [
        {
          title: "Performer of the Month",
          date: "September 2023",
          description: "Awarded for delivering critical business features within tight deadlines"
        }
      ]
    };

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sahil Ahmed - Resume</title>
</head>
<body>
    <header>
        <h1>Sahil Ahmed</h1>
        <p>Phone: +91 9354341318</p>
        <p>Email: sa.idesofmarch@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sahil-ahmed-">https://linkedin.com/in/sahil-ahmed-</a></p>
        <p>GitHub: <a href="https://github.com/idesofmarch00">https://github.com/idesofmarch00</a></p>
        <p>LeetCode: <a href="https://leetcode.com/u/NyrOsNjfL3/">https://leetcode.com/u/NyrOsNjfL3/</a></p>
        <p>Website: <a href="https://sahilahmed.vercel.app/">https://sahilahmed.vercel.app/</a></p>
    </header>

    <section>
        <h2>Experience</h2>
        <article>
            <h3>Software Engineer</h3>
            <p>FuelBuddy | Aug 2022 -- Present | Gurugram, India</p>
            <ul>
                <li>Developed mission-critical, scalable, high-performance and responsive Progressive Web Apps (PWA) leveraging React, React Native, Redux, Vue, and GraphQL for the delivery and operations teams within an Agile framework, optimizing workflow and resulting in a 27% boost in delivery efficiency.</li>
                <li>Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views while adhering to established UI/UX design principles, streamlining delivery routes and reducing average delivery times by 50 minutes per order.</li>
                <li>Implemented multi-language support for local Indian languages in addition to English, expanding the driver base by 40% and increasing success rates for onboarding.</li>
                <li>Integrated real-time notification functionality and authentication using Firebase, ensuring drivers were always informed of critical updates and order changes.</li>
                <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE and all over India using WebSockets, resulting in a 32% increase in dispensing accuracy.</li>
                <li>Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors by 44% and reducing fuel pilferage by an estimated 5,900 liters per month.</li>
                <li>Developed a polymorphic codebase to abstract interactions with diverse dispenser models (Tokheim, Isoil, Veeder), accelerating feature implementation and fostering efficient collaboration between India and UAE development teams.</li>
            </ul>
        </article>
    </section>

    <section>
        <h2>Projects</h2>
        <article>
            <h3>SnipChat</h3>
            <p>Developed a responsive Progressive Web App (PWA) utilizing Backend-as-a-Service (BaaS) to deliver a seamless chat experience with features like sending snaps, images, and location. Implemented real-time notifications and service workers to enhance engagement and ensure offline functionality. Integrated a unique feature for users to discover and add random users from their location on a map.</p>
            <p>Technologies: Quasar, Vue.js, Firebase, Mapbox GL JS, WorkBox, Vite</p>
            <p>URL: <a href="https://musical-narwhal-4203b8.netlify.app/">https://musical-narwhal-4203b8.netlify.app/</a></p>
        </article>
        <article>
            <h3>SwissArmyKnife NewTab</h3>
            <p>Built a Chrome extension that replaces the new tab page with a custom interface with real-time Bitcoin price, weather updates, and other productivity tools. Implemented features like a site blocker, Pomodoro timer, To-Do list, and Save links to read later feature. Utilized many APIs for dynamic content like a random quote, joke, and background each time the user opens a new tab.</p>
            <p>Technologies: Javascript, HTML/CSS</p>
            <p>URL: <a href="https://github.com/idesofmarch00/SwissArmyKnife-Dashboard">https://github.com/idesofmarch00/SwissArmyKnife-Dashboard</a></p>
        </article>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>SQL (Postgres)</li>
            <li>GraphQL</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>React Three Fiber (R3F)</li>
            <li>Framer Motion</li>
            <li>Vue.js</li>
            <li>Quasar</li>
            <li>Electron</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Vitest</li>
            <li>Playwright</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Google Cloud Platform</li>
            <li>VS Code</li>
            <li>WordPress</li>
            <li>Figma</li>
            <li>PWA</li>
            <li>LLMs</li>
            <li>Prompt Engineering</li>
            <li>Technical Proficiency</li>
            <li>Information Literacy</li>
            <li>Auto-didactic Skills</li>
        </ul>
    </section>

    <section>
        <h2>Education</h2>
        <p>Bachelor of Technology in Computer Science Engineering</p>
        <p>Jamia Hamdard University | Delhi, India | Aug. 2019 -- April 2023</p>
    </section>

    <section>
        <h2>Awards</h2>
        <article>
            <h3>Performer of the Month</h3>
            <p>September 2023</p>
            <p>Awarded for delivering critical business features within tight deadlines</p>
        </article>
    </section>
</body>
</html>`;

    return (
      <PageTransition>
      <div className="pb-4 relative overflow-hidden text-green-700 bg-black">
        <Toaster />
        <div className="stars-container absolute inset-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          

          <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border border-white">
            <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2 relative">
                          <div className="cursor-pointer w-3 h-3 rounded-full bg-red-500 flex items-center justify-center" onClick={()=>{router.replace('/')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="black">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="cursor-pointer w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center" onClick={()=>{router.push('/')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="black">
                              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="cursor-pointer w-3 h-3 rounded-full bg-green-500 flex items-center justify-center" onClick={()=>{router.push('https://drive.google.com/file/d/1TsNL5ZILgE02dEl1o9lA04NPntyyoIo8/view?usp=sharing')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="black">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </div>
              <span className="ml-2 text-sm font-mono">resume.{isJsonMode ? 'json' : 'html'}</span>
             <div className='absolute right-4 flex items-center space-x-4'> <button
                onClick={toggleMode}
                className="ml-auto bg-gray-600 text-white px-2 py-1 rounded text-xs place-self-end"
              >
                {isJsonMode ? 'Switch to HTML' : 'Switch to JSON'}
              </button>
              <button
                onClick={copyContent}
                className="bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center"
              >
                <Copy size={12} className="mr-1" />
                Copy
              </button></div>
            </div>
            <div className="p-6 font-mono text-sm h-[70vh] overflow-y-auto custom-scrollbar">
              <pre className="whitespace-pre-wrap">
                {isJsonMode ? JSON.stringify(resumeData, null, 2) : htmlContent}
              </pre>
            </div>
          </div>
        </div>
        <style jsx>{`
          .stars-container {
            background: transparent;
          }
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: fall linear infinite;
            opacity: 0.7;
          }
          @keyframes fall {
            0% {
              transform: translateY(-100vh);
            }
            100% {
              transform: translateY(100vh);
            }
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}</style>
      </div>
      </PageTransition>
    );
}
