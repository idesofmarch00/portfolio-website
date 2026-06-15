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
        website: "https://sahilahmed.vercel.app/",
        blog: "https://sahilahmed.hashnode.dev/"
      },
      experience: [
        {
          title: "Sr. FrontEnd Engineer",
          company: "MyFuels",
          period: "Jan 2025 -- Present",
          location: "NCR, India / Dubai, UAE",
          responsibilities: [
            "Headed the end-to-end development of multiple mission-critical cross-platform iOS and Android apps leveraging Expo React Native, Redux, with a REST/Hasura GraphQL and PostgresSQL backend within an Agile framework for the customers to order fuel.",
            "Implemented multi-language support for local Indian languages, increasing success rates for onboarding and expanding the customer base by 55%.",
            "Built pixel-perfect, high-performance UI leveraging native APIs and integrated multiple payment gateways (Cashfree, Easebuzz) alongside third-party service offerings (Statiq EV charging, GlobalAssure insurance, Zoho Support), driving a 35% increase in ancillary product adoption and a 18% uplift in average order value through seamless in-app cross-sell flows."
          ]
        },
        {
          title: "Software Engineer",
          company: "FuelBuddy",
          period: "2023 -- 2024",
          location: "NCR, India / Dubai, UAE",
          responsibilities: [
            "Developed scalable and high-performance and responsive Progressive Web Apps (PWA) and cross-platform apps leveraging React, React Native, Redux, Vue, Electron.js and GraphQL for the delivery, clients and operations teams creating a comprehensive fuel management ecosystem. This optimised workflow and resulted in a 27% reduction in support tickets and manual interventions.",
            "Integrated Mapbox for tracking location and vehicle fuel metrics on our dashboard. This streamlined delivery routes, reducing average delivery times by 50 minutes per order.",
            "Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE using WebSockets, which increased dispensing accuracy by 32%.",
            "Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors and reducing fuel pilferage by an estimated 5,900 liters per month. While working on-site in Dubai, UAE, developed a polymorphic codebase to abstract integrations with diverse dispenser models (Tokheim, Isoil, Veeder) to accelerate feature implementation."
          ]
        }
      ],
      projects: [
        {
          name: "Madrasa - Mobile Islamic Lifestyle App",
          description: "Orchestrated custom native platform bridges utilizing iOS WidgetKit/ActivityKit (Dynamic Island) and Android AppWidgets to share offline-first state, keeping background sync delta payloads under 12KB per sync and maintaining a p95 local data write latency under 5ms. Engineered a persistent background audio system and a gamified personalization shop utilizing RevenueCat and Google AdMob, boosting average user session duration by 45 seconds while achieving a 99.9% crash-free user rate.",
          technologies: ["TypeScript", "React Native", "Zustand", "Firebase", "Swift", "Kotlin"],
          url: "https://drive.google.com/file/d/19IMRwpcrw0L-WNWhuWIaOg2JHUAX1M09/view"
        },
        {
          name: "SideKick",
          description: "Developed an offline-first micromobility app for large campuses (securing 100+ active downloads) which integrated Kalman filtering and Douglas-Peucker algorithms for high-precision GPS trajectory smoothing, compressing 600 raw coordinates to under 200 points per ride session while extending active tracking battery life by 15–20 minutes, alongside a custom canvas engine for Strava-style photo watermarking.",
          technologies: ["TypeScript", "Expo", "Zustand", "Firebase"],
          url: "https://play.google.com/store/apps/details?id=in.sidekick"
        }
      ],
      skills: {
        frameworks: ["Next.js", "Vue.js", "Node.js", "MongoDB", "Express", "Jest", "Playwright", "TanStack", "Prisma", "Redis", "React", "React Native", "Zustand", "Redux", "Expo", "Framer", "TailwindCSS", "Material UI", "Quasar", "Electron", "Firebase"],
        tools: ["Git", "Docker", "Vite", "AWS", "GCP", "Cursor", "WordPress", "ESLint", "npm", "XCode", "Claude", "Jira", "Slack", "Figma", "REST"],
        other: ["Prompt Engineering", "Agentic Coding", "System Design", "LLD", "HLD", "Full Stack", "CI/CD", "TDD", "FDE", "Figma"]
      },
      education: {
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Jamia Hamdard University (CGPA: 8.6)",
        location: "Delhi, India",
        period: "Aug 2019 -- Apr 2023"
      },
      awards: [
        {
          title: "Performer of the Month (Sep '23)",
          description: "Awarded for delivering critical business features within tight deadlines."
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
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; color: #333; }
        .header { text-align: center; margin-bottom: 25px; }
        .header h1 { margin: 0; font-size: 28px; color: #1a365d; }
        .header h2 { margin: 5px 0 15px 0; font-size: 20px; color: #4a5568; font-weight: normal; }
        .contact-info { font-size: 14px; margin-bottom: 20px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 16px; font-weight: bold; border-bottom: 2px solid #1a365d; padding-bottom: 3px; margin-bottom: 12px; color: #1a365d; text-transform: uppercase; }
        .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; margin-bottom: 2px; }
        .item-sub { display: flex; justify-content: space-between; font-style: italic; font-size: 13px; color: #4a5568; margin-bottom: 6px; }
        .skills-category { font-weight: bold; font-size: 13px; margin-top: 6px; }
        ul { margin: 5px 0 10px 0; padding-left: 15px; }
        li { margin-bottom: 4px; font-size: 13px; }
        a { color: #1a365d; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Sahil Ahmed</h1>
        <h2>Senior Front-End Engineer</h2>
        <div class="contact-info">
            +91 9871138380 | <a href="mailto:sahilahmed.y2k@gmail.com">sahilahmed.y2k@gmail.com</a> | <a href="https://sahilahmed.vercel.app/">Website</a> | <a href="https://www.linkedin.com/in/sahil-ahmed-/">LinkedIn</a> | <a href="https://github.com/idesofmarch00">GitHub</a> | <a href="https://sahilahmed.hashnode.dev/">Blog</a>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Summary</div>
        <p style="margin: 0; font-size: 13px;">High-impact Senior Front-End Engineer specializing in high-performance hybrid mobile and responsive web applications driven by modern agentic engineering workflows. Proven track record of optimizing low-latency IoT systems.</p>
    </div>

    <div class="section">
        <div class="section-title">Experience</div>
        
        <div style="margin-bottom: 15px;">
            <div class="item-header">
                <span>Sr. FrontEnd Engineer</span>
                <span>Jan 2025 -- Present</span>
            </div>
            <div class="item-sub">
                <span>MyFuels</span>
                <span>NCR, India / Dubai, UAE</span>
            </div>
            <ul>
                <li>Headed the end-to-end development of multiple mission-critical cross-platform iOS and Android apps leveraging Expo React Native, Redux, with a REST/Hasura GraphQL and PostgresSQL backend within an Agile framework for the customers to order fuel.</li>
                <li>Implemented multi-language support for local Indian languages, increasing success rates for onboarding and expanding the customer base by 55%.</li>
                <li>Built pixel-perfect, high-performance UI leveraging native APIs and integrated multiple payment gateways (Cashfree, Easebuzz) alongside third-party service offerings (Statiq EV charging, GlobalAssure insurance, Zoho Support), driving a 35% increase in ancillary product adoption and a 18% uplift in average order value through seamless in-app cross-sell flows.</li>
            </ul>
        </div>

        <div style="margin-bottom: 15px;">
            <div class="item-header">
                <span>Software Engineer</span>
                <span>2023 -- 2024</span>
            </div>
            <div class="item-sub">
                <span>FuelBuddy</span>
                <span>NCR, India / Dubai, UAE</span>
            </div>
            <ul>
                <li>Developed scalable and high-performance and responsive Progressive Web Apps (PWA) and cross-platform apps leveraging React, React Native, Redux, Vue, Electron.js and GraphQL for the delivery, clients and operations teams creating a comprehensive fuel management ecosystem. This optimised workflow and resulted in a 27% reduction in support tickets and manual interventions.</li>
                <li>Integrated Mapbox for tracking location and vehicle fuel metrics on our dashboard. This streamlined delivery routes, reducing average delivery times by 50 minutes per order.</li>
                <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE using WebSockets, which increased dispensing accuracy by 32%.</li>
                <li>Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors and reducing fuel pilferage by an estimated 5,900 liters per month. While working on-site in Dubai, UAE, developed a polymorphic codebase to abstract integrations with diverse dispenser models (Tokheim, Isoil, Veeder) to accelerate feature implementation.</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Projects</div>
        
        <div style="margin-bottom: 12px;">
            <div class="item-header">
                <span>Madrasa - Mobile Islamic Lifestyle App</span>
                <span><a href="https://drive.google.com/file/d/19IMRwpcrw0L-WNWhuWIaOg2JHUAX1M09/view">Demo Link</a></span>
            </div>
            <div style="font-size: 12px; color: #4a5568; margin-bottom: 4px;">TypeScript, React Native, Zustand, Firebase, Swift, Kotlin</div>
            <ul>
                <li>Orchestrated custom native platform bridges utilizing iOS WidgetKit/ActivityKit (Dynamic Island) and Android AppWidgets to share offline-first state, keeping background sync delta payloads under 12KB per sync and maintaining a p95 local data write latency under 5ms.</li>
                <li>Engineered a persistent background audio system and a gamified personalization shop utilizing RevenueCat and Google AdMob, boosting average user session duration by 45 seconds while achieving a 99.9% crash-free user rate.</li>
            </ul>
        </div>
        
        <div style="margin-bottom: 12px;">
            <div class="item-header">
                <span>SideKick</span>
                <span><a href="https://play.google.com/store/apps/details?id=in.sidekick">Google Play Link</a></span>
            </div>
            <div style="font-size: 12px; color: #4a5568; margin-bottom: 4px;">TypeScript, Expo, Zustand, Firebase</div>
            <ul>
                <li>Developed an offline-first micromobility app for large campuses (securing 100+ active downloads) which integrated Kalman filtering and Douglas-Peucker algorithms for high-precision GPS trajectory smoothing, compressing 600 raw coordinates to under 200 points per ride session while extending active tracking battery life by 15--20 minutes, alongside a custom canvas engine for Strava-style photo watermarking.</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div style="font-size: 13px; line-height: 1.5;">
            <div><span class="skills-category">Frameworks & Libraries:</span> Next.js, Vue.js, Node.js, MongoDB, Express, Jest, Playwright, TanStack, Prisma, Redis, React, React Native, Zustand, Redux, Expo, Framer, TailwindCSS, Material UI, Quasar, Electron, Firebase</div>
            <div><span class="skills-category">Tools & Technologies:</span> Git, Docker, Vite, AWS, GCP, Cursor, WordPress, ESLint, npm, XCode, Claude, Jira, Slack, Figma, REST</div>
            <div><span class="skills-category">Other Skills:</span> Prompt Engineering, Agentic Coding, System Design, LLD, HLD, Full Stack, CI/CD, TDD, FDE, Figma</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Awards</div>
        <ul>
            <li><strong>Performer of the Month (Sep '23):</strong> Awarded for delivering critical business features within tight deadlines.</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        <div class="item-header">
            <span>Bachelor of Technology in Computer Science Engineering</span>
            <span>Aug 2019 -- Apr 2023</span>
        </div>
        <div class="item-sub">
            <span>Jamia Hamdard University (CGPA: 8.6)</span>
            <span>Delhi, India</span>
        </div>
        <ul>
            <li>Developed foundational and advanced programming logic alongside practical engineering skills through intensive coursework in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), Operating Systems, Database Management Systems (DBMS), Computer Networks, Artificial Intelligence and Machine Learning (AI/ML).</li>
        </ul>
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