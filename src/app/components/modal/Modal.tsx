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
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="w-full h-full">
          {children}
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
              <span className="px-1 py-0.5 -mt-4 mb-2 mx-auto text-sm md:text-xl rounded-md bg-gray-100 text-white dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 font-bold text-center w-fit">
               {data.title}
              </span>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
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
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
            <div className="pt-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <DescriptionComponent description={data.description as string} />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Link href={data.code as Url} className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 text-center">
              View Code
            </Link>
            <Link href={data.link as Url} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 text-center">
              Visit Site
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

