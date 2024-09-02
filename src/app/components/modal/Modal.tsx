"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Url } from "url";
import { Card } from "../projects/Projects"

interface DescriptionComponentProps {
  description: string;
}
const DescriptionComponent: React.FC<DescriptionComponentProps> = ({ description })  => {
  // Optional: sanitize the HTML content
  // const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className="text-white text-sm"
      // Use the sanitized description if using dompurify
      // dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default function AnimatedModal({children,data}: {children: React.ReactNode,data:Card}) {
  // const images = [
  //   "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];
  return (
    <div className="flex items-center justify-center bg-black">
      <Modal>
        <ModalTrigger className="w-full h-full">
          {children}
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
              <span className="px-1 py-0.5 -mt-4 mb-2 mx-auto text-sm md:text-xl rounded-md  text-white bg-neutral-800 border-neutral-700 border font-bold text-center w-fit">
               {data.title}
              </span>
            <div className="flex justify-center items-center bg-black">
              {data.images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border  flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="pt-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto bg-black">
            <DescriptionComponent description={data.description as string} />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 -mt-4 bg-neutral-900">
          <Link
  href={data.code as Url}
  className="p-3 bg-blue-500 text-white !h-9 border border-blue-700 rounded-md text-xs w-24 text-center hover:bg-blue-600 hover:border-blue-800 transition-colors duration-300"
>
  View Code
</Link>
<Link
  href={data.link as Url}
  className="!h-9 relative inline-block px-4 py-2 text-sm text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md border border-transparent text-center hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-colors duration-300 group"
>
  <span className="relative z-10">Visit Site</span>
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
</Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

