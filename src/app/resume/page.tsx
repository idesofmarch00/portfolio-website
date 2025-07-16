'use client'
import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import PageTransition from '../components/PageTransition';

/**
 * Resume Component - Interactive resume viewer with JSON/HTML toggle
 * Features copy functionality, terminal-style UI, and dynamic content switching
 * Implements YAGNI principle by providing only essential features
 */
export default function Resume() {
    const [isJsonMode, setIsJsonMode] = useState(false);
    const router = useRouter();

    /**
     * Toggle between JSON and HTML display modes
     * Follows KISS principle with simple state management
     */
    const toggleMode = () => {
      setIsJsonMode(!isJsonMode);
    };

    /**
     * Copy resume content to clipboard with proper error handling
     * Implements security best practices with user feedback
     */
    const copyContent = () => {
      const content = isJsonMode ? JSON.stringify(resumeData, null, 2) : htmlContent;
      navigator.clipboard.writeText(content).then(() => {
        toast.success('Content copied to clipboard!');
      }).catch(() => {
        toast.error('Failed to copy content');
      });
    };

    // Resume data structure following DRY principle - single source of truth
    const resumeData = {
      name: "Sahil Ahmed",
      contact: {
        phone: "+91 9871138380",
        email: "sahilahmed.y2k@gmail.com",
        linkedin: "https://linkedin.com/in/sahil-ahmed-",
        github: "https://github.com/idesofmarch00",
        leetcode: "https://leetcode.com/u/NyrOsNjfL3/",
        website: "https://sahilahmed.vercel.app/"
      },
      experience: [
        {
          title: "Sr. Frontend Engineer",
          company: "MyFuels",
          period: "2024 -- Present",
          location: "Gurugram, India",
          responsibilities: [
            "Headed the development of multiple mission-critical cross-platform iOS and Android app leveraging Expo React Native, Redux, and GraphQL with a PostgreSQL backend for customers for fuel ordering within an Agile framework.",
            "Implemented multi-language support for local Indian languages in addition to English, increasing success rates for onboarding and expanding the customer base by 55%.",
            "Built pixel-perfect and buttery smooth UI leveraging native APIs leading to 12% increase in user retention rates.",
            "Integrated payment gateways like Cashfree and Easebuzz, and third-party in-app integrations including Statiq and GlobalAssure for extended service offerings to include EV charging, assistance and other insurance solutions."
          ]
        },
        {
          title: "Software Engineer",
          company: "FuelBuddy",
          period: "2023 -- 2024",
          location: "Gurugram, India",
          responsibilities: [
            "Developed scalable and high-performance responsive Progressive Web Apps (PWA) and cross-platform apps leveraging React, React Native, Redux, Vue, and GraphQL for the delivery, clients and operations teams creating a comprehensive fuel management ecosystem. This optimized workflow and resulted in a 27% boost in delivery efficiency.",
            "Integrated Mapbox for tracking location and vehicle fuel metrics on our dashboard. This streamlined delivery routes, reducing average delivery times by 50 minutes per order.",
            "Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE and all over India using WebSockets, which increased dispensing accuracy by 32%.",
            "Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors and reducing fuel pilferage by an estimated 5,900 liters per month.",
            "While working on-site in Dubai, UAE, developed a polymorphic codebase to abstract integrations with diverse dispenser models (Tokheim, Isoil, Veeder) to accelerate feature implementation."
          ]
        },
        {
          title: "Software Engineer",
          company: "FuelBuddy",
          period: "Aug 2022 -- 2023",
          location: "Gurugram, India",
          responsibilities: [
            "Developed mission-critical, scalable, high-performance and responsive Progressive Web Apps (PWA) leveraging React, React Native, Redux, Vue, and GraphQL for the delivery and operations teams within an Agile framework, optimizing workflow and resulting in a 27% boost in delivery efficiency.",
            "Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views while adhering to established UI/UX design principles, streamlining delivery routes and reducing average delivery times by 50 minutes per order.",
            "Implemented multi-language support for local Indian languages in addition to English, expanding the driver base by 40% and increasing success rates for onboarding.",
            "Integrated real-time notification functionality and authentication using Firebase, ensuring drivers were always informed of critical updates and order changes.",
            "Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams, resulting in a 32% increase in dispensing accuracy."
          ]
        }
      ],
      projects: [
        {
          name: "SnipChat",
          description: "Developed a responsive Progressive Web App (PWA) utilizing Backend-as-a-Service (BaaS) to deliver a seamless chat experience with features like sending snaps, images, and location. Implemented real-time notifications and service workers to enhance engagement and ensure offline functionality, addressing connectivity challenges.",
          technologies: ["Quasar", "Vue.js", "Firebase", "Mapbox GL JS", "WorkBox", "Vite"],
          url: "https://musical-narwhal-4203b8.netlify.app/"
        },
        {
          name: "SwissArmyKnife NewTab",
          description: "Built a Chrome extension that replaces the new tab page with a custom interface with real-time Bitcoin price, weather updates, and other productivity tools utilizing many APIs including CoinGecko and OpenWeatherMap, for dynamic content like a random quote time the user opens a new tab.",
          technologies: ["Javascript", "HTML/CSS"],
          url: "https://github.com/idesofmarch00/SwissArmyKnife-Dashboard"
        }
      ],
      skills: {
        languages: ["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL (Postgres)", "NoSQL", "GraphQL"],
        frameworks: ["React", "React Native", "Next.js", "Redux", "Zustand", "React Three Fiber (R3F)", "Framer Motion", "Vue.js", "TailwindCSS", "Material UI", "Quasar", "Electron", "Node.js", "MongoDB", "Express", "Firebase", "Jest", "Playwright", "TanStack"],
        tools: ["Git", "Docker", "Vite", "webpack", "GCP", "REST", "Cursor", "WordPress", "ESLint", "npm", "Figma", "LLMs"]
      },
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

    // HTML content generation following clean code principles
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sahil Ahmed - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px; }
        .job-title { font-weight: bold; font-size: 16px; }
        .company-info { font-style: italic; color: #666; margin-bottom: 10px; }
        .skills-category { font-weight: bold; margin-top: 10px; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin-bottom: 5px; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Sahil Ahmed</h1>
        <p>Phone: +91 9871138380 | Email: sahilahmed.y2k@gmail.com</p>
        <p>
            <a href="https://linkedin.com/in/sahil-ahmed-">LinkedIn</a> | 
            <a href="https://github.com/idesofmarch00">GitHub</a> | 
            <a href="https://leetcode.com/u/NyrOsNjfL3/">LeetCode</a> | 
            <a href="https://sahilahmed.vercel.app/">Website</a>
        </p>
    </div>

    <div class="section">
        <div class="section-title">Experience</div>
        
        <div style="margin-bottom: 20px;">
            <div class="job-title">Sr. Frontend Engineer</div>
            <div class="company-info">MyFuels | 2024 -- Present | Gurugram, India</div>
            <ul>
                <li>Headed the development of multiple mission-critical cross-platform iOS and Android app leveraging Expo React Native, Redux, and GraphQL with a PostgreSQL backend for customers for fuel ordering within an Agile framework.</li>
                <li>Implemented multi-language support for local Indian languages in addition to English, increasing success rates for onboarding and expanding the customer base by 55%.</li>
                <li>Built pixel-perfect and buttery smooth UI leveraging native APIs leading to 12% increase in user retention rates.</li>
                <li>Integrated payment gateways like Cashfree and Easebuzz, and third-party in-app integrations including Statiq and GlobalAssure for extended service offerings to include EV charging, assistance and other insurance solutions.</li>
            </ul>
        </div>

        <div style="margin-bottom: 20px;">
            <div class="job-title">Software Engineer</div>
            <div class="company-info">FuelBuddy | 2023 -- 2024 | Gurugram, India</div>
            <ul>
                <li>Developed scalable and high-performance responsive Progressive Web Apps (PWA) and cross-platform apps leveraging React, React Native, Redux, Vue, and GraphQL for the delivery, clients and operations teams creating a comprehensive fuel management ecosystem. This optimized workflow and resulted in a 27% boost in delivery efficiency.</li>
                <li>Integrated Mapbox for tracking location and vehicle fuel metrics on our dashboard. This streamlined delivery routes, reducing average delivery times by 50 minutes per order.</li>
                <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE and all over India using WebSockets, which increased dispensing accuracy by 32%.</li>
                <li>Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors and reducing fuel pilferage by an estimated 5,900 liters per month.</li>
                <li>While working on-site in Dubai, UAE, developed a polymorphic codebase to abstract integrations with diverse dispenser models (Tokheim, Isoil, Veeder) to accelerate feature implementation.</li>
            </ul>
        </div>

        <div style="margin-bottom: 20px;">
            <div class="job-title">Software Engineer</div>
            <div class="company-info">FuelBuddy | Aug 2022 -- 2023 | Gurugram, India</div>
            <ul>
                <li>Developed mission-critical, scalable, high-performance and responsive Progressive Web Apps (PWA) leveraging React, React Native, Redux, Vue, and GraphQL for the delivery and operations teams within an Agile framework, optimizing workflow and resulting in a 27% boost in delivery efficiency.</li>
                <li>Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views while adhering to established UI/UX design principles, streamlining delivery routes and reducing average delivery times by 50 minutes per order.</li>
                <li>Implemented multi-language support for local Indian languages in addition to English, expanding the driver base by 40% and increasing success rates for onboarding.</li>
                <li>Integrated real-time notification functionality and authentication using Firebase, ensuring drivers were always informed of critical updates and order changes.</li>
                <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams, resulting in a 32% increase in dispensing accuracy.</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Projects</div>
        
        <div style="margin-bottom: 15px;">
            <div class="job-title">SnipChat</div>
            <p>Developed a responsive Progressive Web App (PWA) utilizing Backend-as-a-Service (BaaS) to deliver a seamless chat experience with features like sending snaps, images, and location. Implemented real-time notifications and service workers to enhance engagement and ensure offline functionality, addressing connectivity challenges.</p>
            <p><strong>Technologies:</strong> Quasar, Vue.js, Firebase, Mapbox GL JS, WorkBox, Vite</p>
            <p><strong>URL:</strong> <a href="https://musical-narwhal-4203b8.netlify.app/">https://musical-narwhal-4203b8.netlify.app/</a></p>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div class="job-title">SwissArmyKnife NewTab</div>
            <p>Built a Chrome extension that replaces the new tab page with a custom interface with real-time Bitcoin price, weather updates, and other productivity tools utilizing many APIs including CoinGecko and OpenWeatherMap, for dynamic content like a random quote time the user opens a new tab.</p>
            <p><strong>Technologies:</strong> Javascript, HTML/CSS</p>
            <p><strong>URL:</strong> <a href="https://github.com/idesofmarch00/SwissArmyKnife-Dashboard">https://github.com/idesofmarch00/SwissArmyKnife-Dashboard</a></p>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        
        <div class="skills-category">Languages:</div>
        <p>JavaScript, TypeScript, HTML/CSS, Python, SQL (Postgres), NoSQL, GraphQL</p>
        
        <div class="skills-category">Frameworks & Libraries:</div>
        <p>React, React Native, Next.js, Redux, Zustand, React Three Fiber (R3F), Framer Motion, Vue.js, TailwindCSS, Material UI, Quasar, Electron, Node.js, MongoDB, Express, Firebase, Jest, Playwright, TanStack</p>
        
        <div class="skills-category">Tools & Technologies:</div>
        <p>Git, Docker, Vite, webpack, GCP, REST, Cursor, WordPress, ESLint, npm, Figma, LLMs</p>
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        <div class="job-title">Bachelor of Technology in Computer Science Engineering</div>
        <div class="company-info">Jamia Hamdard University | Delhi, India | Aug. 2019 -- April 2023</div>
    </div>

    <div class="section">
        <div class="section-title">Awards</div>
        <div class="job-title">Performer of the Month</div>
        <div class="company-info">September 2023</div>
        <p>Awarded for delivering critical business features within tight deadlines</p>
    </div>
</body>
</html>`;

    return (
      <PageTransition>
        <div className="pb-4 relative overflow-hidden text-green-700 bg-black">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
              },
            }}
          />
          
          {/* Animated stars background */}
          <div className="stars-container absolute inset-0 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border border-white">
              
              {/* Terminal-style header with window controls */}
              <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2 relative">
                {/* Window control buttons with proper accessibility */}
                <button 
                  className="cursor-pointer w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                  onClick={() => router.replace('/')}
                  aria-label="Close window"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button 
                  className="cursor-pointer w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                  onClick={() => router.back()}
                  aria-label="Minimize window"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button 
                  className="cursor-pointer w-3 h-3 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
                  onClick={() => window.open('https://drive.google.com/file/d/1j4x6xJqSF2KGemqWvj-5M-HEpkZPCQy-/view?usp=drive_link', '_blank')}
                  aria-label="Open in new window"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* File name indicator */}
                <span className="invisible sm:visible ml-2 text-sm font-mono text-gray-300">
                  resume.{isJsonMode ? 'json' : 'html'}
                </span>
                
                {/* Action buttons */}
                <div className='absolute right-4 flex items-center space-x-4'>
                  <button
                    onClick={toggleMode}
                    className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition-colors"
                  >
                    {isJsonMode ? 'Switch to HTML' : 'Switch to JSON'}
                  </button>
                  
                  <button
                    onClick={copyContent}
                    className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                    aria-label="Copy content to clipboard"
                  >
                    <Copy size={12} className="mr-1" />
                    Copy
                  </button>
                </div>
              </div>
              
              {/* Resume content area with optimized scrolling */}
              <div className="p-6 font-mono text-sm h-[70vh] overflow-y-auto custom-scrollbar">
                <pre className="whitespace-pre-wrap text-green-400">
                  {isJsonMode ? JSON.stringify(resumeData, null, 2) : htmlContent}
                </pre>
              </div>
            </div>
          </div>
          
          {/* Optimized CSS animations for performance */}
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
            
            /* Custom scrollbar with accessibility considerations */
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #2d3748;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #4a5568;
              border-radius: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #718096;
            }
            
            /* Focus styles for accessibility */
            button:focus {
              outline: 2px solid #4299e1;
              outline-offset: 2px;
            }
          `}</style>
        </div>
      </PageTransition>
    );
}