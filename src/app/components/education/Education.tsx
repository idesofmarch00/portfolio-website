import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import TextReveal from "../text-reveal"
import { LinkPreview } from "../ui/link-preview";

/**
 * Education Component - Displays professional experience and education timeline
 * Features responsive design, image galleries, and interactive link previews
 */
export default function Education() {
  const data = [
    {
      title: "2024 - present",
      content: (
        <div>
          <div>
            <p className="text-neutral-200 text-xs md:text-xl font-bold mb-8">
              Sr. Frontend Engineer at {" "}
              <LinkPreview url="https://play.google.com/store/apps/details?id=in.myfuels.customerapp&pcampaignid=web_share" className="font-bold">
                <strong><u>MyFuels</u></strong>
              </LinkPreview>
              <br /> Gurugram, India.
            </p>
            <ul className="list-disc list-inside text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col space-y-2">
              <li>Headed the development of multiple mission-critical cross-platform iOS and Android app leveraging Expo React Native, Redux, and GraphQL with a PostgreSQL backend for customers for fuel ordering within an Agile framework.</li>
              <li>Implemented multi-language support for local Indian languages in addition to English, increasing success rates for onboarding and expanding the customer base by 55%.</li>
              <li>Built pixel-perfect and buttery smooth UI leveraging native APIs leading to 12% increase in user retention rates.</li>
              <li>Integrated payment gateways like Cashfree and Easebuzz, and third-party in-app integrations including Statiq and GlobalAssure for extended service offerings to include EV charging, assistance and other insurance solutions.</li>
            </ul>
          </div>
          {/* Image gallery for MyFuels screenshots */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/myfuels/rsa.png"
              alt="MyFuels RSA feature"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/myfuels/fuelscard.png"
              alt="MyFuels fuel cards interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/myfuels/language.png"
              alt="MyFuels multi-language support"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/myfuels/order.png"
              alt="MyFuels order interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div>
          <div>
            <p className="text-neutral-200 text-xs md:text-xl font-bold mb-8">
              Software Engineer at {" "}
              <LinkPreview url="https://play.google.com/store/apps/developer?id=Treis+Solutions+LLP&hl=en_IN" className="font-bold">
                <strong><u>FuelBuddy</u></strong>
              </LinkPreview>
              <br /> Gurugram, India.
            </p>
            <p className="text-neutral-200 text-xs md:text-lg font-bold mb-8">
              Awarded Performer of the Month of September, 2023 for delivering critical business features within tight deadlines.
            </p>
            <ul className="list-disc list-inside text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col space-y-2">
              <li>Developed scalable and high-performance responsive Progressive Web Apps (PWA) and cross-platform apps leveraging React, React Native, Redux, Vue, and GraphQL for the delivery, clients and operations teams creating a comprehensive fuel management ecosystem. This optimized workflow and resulted in a 27% boost in delivery efficiency.</li>
              <li>Integrated Mapbox for tracking location and vehicle fuel metrics on our dashboard. This streamlined delivery routes, reducing average delivery times by 50 minutes per order.</li>
              <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams based in UAE and all over India using WebSockets, which increased dispensing accuracy by 32%.</li>
              <li>Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling leading to the prevention of manual errors and reducing fuel pilferage by an estimated 5,900 liters per month.</li>
              <li>While working on-site in Dubai, UAE, developed a polymorphic codebase to abstract integrations with diverse dispenser models (Tokheim, Isoil, Veeder) to accelerate feature implementation.</li>
            </ul>
          </div>
          {/* Image gallery for FuelBuddy screenshots */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fuelbuddy/native1.png"
              alt="FuelBuddy native app interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/fillup.png"
              alt="FuelBuddy fuel fillup process"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/native4.png"
              alt="FuelBuddy driver dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/checkout.png"
              alt="FuelBuddy checkout process"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022-2023",
      content: (
        <div>
          <div>
            <p className="text-neutral-200 text-xs md:text-xl font-bold mb-8">
              Software Engineer at {" "}
              <LinkPreview url="https://www.fuelbuddy.in/" className="font-bold">
                <strong><u>FuelBuddy</u></strong>
              </LinkPreview>
              <br /> Gurugram, India.
            </p>
            <ul className="list-disc list-inside text-neutral-200 font-normal pb-4 flex flex-col space-y-2">
              <li>Developed mission-critical, scalable, high-performance Progressive Web Apps (PWA) leveraging Vue.js, Pinia, Tailwind CSS and GraphQL for delivery partners and operations team called the <LinkPreview url="https://play.google.com/store/apps/details?id=in.fuelbuddy.driver&hl=en" className="font-bold">
                <strong><u>Driver App</u></strong>
              </LinkPreview>. This optimized workflow and resulted in a 27% boost in delivery efficiency.</li>
              <li>Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views, reducing average delivery times by 50 minutes per order.</li>
              <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams, resulting in a 32% increase in dispensing accuracy.</li>
            </ul>
          </div>
          {/* Image gallery for FuelBuddy driver app */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fuelbuddy/login.png"
              alt="FuelBuddy driver login"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/map.png"
              alt="FuelBuddy map integration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/logout.png"
              alt="FuelBuddy logout interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/orders.png"
              alt="FuelBuddy orders management"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2023",
      content: (
        <div>
          <p className="text-neutral-200 md:text-xl font-bold pb-4">
            I hold a Bachelor of Technology (B.Tech) degree in Computer Science Engineering from  
            <span className="font-medium"> Jamia Hamdard University, Delhi, India</span>. 
          </p>
          <p className="text-neutral-200 md:text-sm font-normal pb-2">My coursework included an in-depth study of various key subjects essential for a strong foundation in computer science:</p>
          <ul className="list-disc pl-5 text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>
              <strong>Data Structures and Algorithms:</strong> 
              Focused on the design, implementation, and analysis of efficient data structures and algorithms, providing a solid grounding in solving complex computational problems.
            </li>
            <li>
              <strong>Object-Oriented Programming (OOP):</strong> 
              Explored the principles of OOP, including encapsulation, inheritance, and polymorphism, with a strong emphasis on coding best practices and software design patterns.
            </li>
            <li>
              <strong>Database Management Systems (DBMS):</strong> 
              Covered the concepts of database design, normalization, SQL, and the management of large-scale databases, ensuring a strong understanding of data storage and retrieval mechanisms.
            </li>
            <li>
              <strong>Computer Networks:</strong> 
              Studied the architecture, protocols, and functioning of computer networks, including topics such as TCP/IP, network security, and wireless communication.
            </li>
            <li>
              <strong>Operating Systems:</strong> 
              Focused on the design and functioning of operating systems, including process management, memory management, file systems, and system security.
            </li>
          </ul>
          {/* Image gallery for university photos */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.jamiahamdard.ac.in/LibrayInformationSystem/images/jamia1.jpeg"
              alt="Jamia Hamdard University main building"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/5a051aa2201a235324182778.jpg"
              alt="Jamia Hamdard campus view"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://jamiahamdardonline.in/assets/img/left-img.png"
              alt="Jamia Hamdard facilities"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/226/jamia-6-1690537427.webp"
              alt="Jamia Hamdard convention center"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-96 md:w-full">
      <Timeline data={data}>
        <TextReveal visible="My Work Experience" revealed="My Education"/>
      </Timeline>
    </div>
  );
}