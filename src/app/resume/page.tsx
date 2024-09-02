'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Download } from 'lucide-react';

export default function Resume() {
const [isDarkMode, setIsDarkMode] = useState(true);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

return (
  <div className={`min-h-screen relative overflow-hidden text-green-700 ${isDarkMode ? 'bg-gray-900 ' : 'bg-gray-400 '}`}>
    <div className="stars-container absolute inset-0 pointer-events-none"></div>
    <div className="container mx-auto px-4 py-8 relative z-10">
      <div className="flex justify-end mb-8 space-x-4">
        <Link href="/resume.pdf" download="Sahil_Ahmed_Resume">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <Download className="mr-2" size={18} />
            Download Resume
          </button>
        </Link>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-sm font-mono">resume.html</span>
        </div>
        <div className="p-6 font-mono text-sm h-[70vh] overflow-y-auto custom-scrollbar">
          <pre className="whitespace-pre-wrap">
{`<!DOCTYPE html>
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
</html>`}
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
);
}
