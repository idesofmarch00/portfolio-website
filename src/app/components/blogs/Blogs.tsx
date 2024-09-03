"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { LinkPreview } from "../ui/link-preview";
import { ArrowRight } from 'lucide-react'; 

export default function Blogs() {
  return (
    <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pb-20">
      <WobbleCard
  containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative flex items-center"
>
  <Image
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724934196930/bde74906-a8ad-475d-a53e-9f50bb711458.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    width={500}
    height={500}
    alt="Globalization in Vue.js"
    className="absolute left-20 bottom-14 -translate-x-1/4 lg:-translate-x-1/2 object-contain rounded-2xl"
  />
  <div className="relative max-w-md ml-80">
    <p className="text-left text-base text-white">
      Explore the steps to integrate <strong>internationalization and local Indian languages</strong> into your Vue.js application, making it accessible to a global audience with ease.
    </p>
    <a
      href="https://sahilahmed.hashnode.dev/how-to-globalize-your-vuejs-app-with-i18n-a-step-by-step-guide"
      className="mt-6 inline-block text-left text-neutral-200 underline hover:text-white"
    >
      Read the full article
    </a>
  </div>
</WobbleCard>

      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] border border-neutral-600 rounded-2xl overflow-hidden">
    <Image
      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725049939952/4e71c86c-0b5b-4ef3-9815-2e8a72fcbf47.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
      width={200}
      height={150}
      alt="Firebase Cloud Messaging"
      className="w-96 rounded-xl scale-125 mb-20"
    />
    <div className="absolute bottom-0 left-0 w-full bg-neutral-800 p-4 text-white">
      <h1 className="text-lg font-semibold">Firebase Cloud Messaging Push Notifications</h1>
      <a
        href="https://sahilahmed.hashnode.dev/implementing-firebase-cloud-messaging-in-a-react-ios-android-pwa-a-comprehensive-guide"
        className="mt-2 block text-base underline text-gray-400 hover:text-white hover:font-bold"
      >
        Read the full article
      </a>
  </div>
</WobbleCard>

      <WobbleCard
  containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative"
  // link=""
>
  <div className="relative max-w-md p-6">
    {/* <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      My Experience Using the React Native IDE in VS Code
    </h2> */}
    <p className=" text-left text-lg text-neutral-200 pr-20">
      Discover how this IDE as an extension in <strong>VS Code</strong> simplifies <strong>mobile app development for iOS and Android</strong>, offering powerful tools for efficiency and productivity.
    </p>
    <a
      href="https://sahilahmed.hashnode.dev/my-experience-using-the-react-native-ide-in-vs-code"
      className="mt-6 inline-block text-left text-neutral-200 underline"
    >
             Read the full article
    </a>
    <Image
      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724961136689/17dcaa1b-3dd2-4341-8901-19ac088bbe56.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
      width={500}
      height={500}
      alt="linear demo image"
      className="absolute top-1/2 -right-[30rem] scale-125 transform -translate-y-1/2 object-contain rounded-2xl"
    />
  </div>
</WobbleCard>


      <LinkPreview url=" https://sahilahmed.hashnode.dev/"><div className="relative flex items-center space-x-1 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-white hover:from-white hover:via-blue-500 hover:to-purple-500 transition-colors duration-300 cursor-pointer group">
  <span>Read All Posts</span>
  <ArrowRight size={20} color="white" />
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-white transition-all duration-300 group-hover:w-1/3"></span>
</div></LinkPreview>
    </div>
  );
}
