'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail,Github, Linkedin, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

export const CustomFooter: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-4 rounded-b-none rounded-xl  pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <Link href="https://www.linkedin.com/in/sahil-ahmed-/" className="text-xl mb-4 md:mb-0">
            Looking for a passionate developer to bring your ideas to life?
          </Link>
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </motion.button>
          </Link>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="text-sm mt-4 md:mt-0">
            <p>© 2024 github.com/idesofmarch00 - All rights reserved</p>
            <p>Created by <a href="https://www.linkedin.com/in/sahil-ahmed-" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Sahil Ahmed</a></p>
          
          </div>
          
          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/idesofmarch00" icon={<Github />} label="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/sahilahmed" icon={<Linkedin />} label="LinkedIn" />
            <SocialIcon href="tel:+1234567890" icon={<Phone />} label="Phone" />
            <SocialIcon href="mailto:sahil@example.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "text-gray-400 hover:text-white transition-colors duration-300",
      "w-10 h-10 flex items-center justify-center rounded-full",
      "bg-gray-800 hover:bg-gray-700"
    )}
    aria-label={label}
  >
    {icon}
  </Link>
);

export default CustomFooter;