import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import TextReveal from "../text-reveal"
import { LinkPreview } from "../ui/link-preview";

export default function Education() {
  const data = [
    {
      title: "2023 - present",
      content: (
        <div>
  <div>
  <p className="text-neutral-200 text-xs md:text-xl font-bold mb-8">
         Software Engineer at {" "}<LinkPreview url="https://www.fuelbuddy.in/" className="font-bold">
          FuelBuddy
        </LinkPreview>
        <br /> Gurugram, India.
       </p>
          <p className=" text-neutral-200 text-xs md:text-lg font-bold mb-8">
            Awarded Performer of the Month of September , 2023 for delivering critical business features within tight deadlines.
          </p>
          <ul className="list-disc list-inside text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col space-y-2">
            <li>Developing customer facing fuel delivery app using React, React Native, Redux, Urql and Google Maps.</li>
            <li>Implemented multi-language support for local Indian languages in addition to English, expanding the driver base by 40% and increasing success rates for onboarding.</li>
            <li>Integrated real-time notification functionality and authentication using Firebase, ensuring drivers were always informed of critical updates and order changes.</li>
            <li>Engineered real-time dispenser stats fetching, e-lock control mechanisms, and RFID-based vehicle identification for precise asset fueling, leading to the prevention of manual errors by 44% and reducing fuel pilferage.</li>
          </ul>
        </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fuelbuddy/native1.webp"
              alt="startup template"
              width={500}
              height={1000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/fillup.png"
              alt="startup template"
              width={500}
              height={1000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/native4.webp"
              alt="startup template"
              width={500}
              height={1000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/checkout.png"
              alt="startup template"
              width={1000}
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
         Software Engineer at {" "}<LinkPreview url="https://www.bing.com/search?q=fuelbuddy&cvid=d57f070018204d5a953ac1f6662648b5&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQRRg8MgYICBBFGEHSAQgyNDg0ajBqNKgCCLACAQ&FORM=ANAB01&PC=U531/" className="font-bold">
          FuelBuddy
        </LinkPreview>
        <br /> Gurugram, India.
       </p>
        <ul className="list-disc list-inside text-neutral-200 font-normal pb-4 flex flex-col space-y-2">
          <li>Developed mission-critical, scalable, high-performance Progressive Web Apps (PWA) leveraging Vue.js, Pinia,Tailwind CSS and GraphQL for delivery partners and operations team called the <strong><LinkPreview url="https://play.google.com/store/apps/details?id=in.fuelbuddy.driver&hl=en" className="font-bold">
          Driver App
        </LinkPreview></strong>. This optimized workflow and resulted in a 27% boost in delivery efficiency.</li>
          <li>Integrated Mapbox and UI libraries for designing intuitive location tracking and order visualization views, reducing average delivery times by 50 minutes per order.</li>
          <li>Spearheaded the front-end development of an automated fuel dispensing system in remote partnership with the IoT and operations teams, resulting in a 32% increase in dispensing accuracy.</li>
        </ul>
      </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fuelbuddy/login.png"
              alt="hero template"
              width={5000}
              height={5000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/map.webp"
              alt="feature template"
              width={5000}
              height={5000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/logout.png"
              alt="bento template"
              width={5000}
              height={5000}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/fuelbuddy/orders.png"
              alt="cards template"
              width={5000}
              height={5000}
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
  </li>
  <li>
    <strong>Object-Oriented Programming (OOP):</strong> 
  </li>
  <li>
    <strong>Database Management Systems (DBMS):</strong> 
  </li>
  <li>
    <strong>Computer Networks:</strong> 
  </li>
  <li>
    <strong>Operating Systems:</strong> 
  </li>
</ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.jamiahamdard.ac.in/LibrayInformationSystem/images/jamia1.jpeg"
              alt="jamia hamdard cse"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/5a051aa2201a235324182778.jpg"
              alt="jamia hamdard logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://jamiahamdardonline.in/assets/img/left-img.png"
              alt="jamia hamdard library"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/226/jamia-6-1690537427.webp"
              alt="convention center"
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
    <div className="w-full">
      <Timeline data={data} >
      <TextReveal visible="My Work Experience" revealed="My Education"/>
      </Timeline>
    </div>
  );
}
