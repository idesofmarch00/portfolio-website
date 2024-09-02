'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, FileText,ContactRound, Download } from 'lucide-react';

const CustomHeader: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/contact', icon: ContactRound, label: 'Contact' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} passHref>
                  <motion.div
                    className={`relative px-3 py-2 rounded-md transition duration-300 ${
                      pathname === item.path
                        ? 'border border-gradient-to-r from-gold-400 to-silver-400 text-white'
                        : 'hover:border hover:border-gradient-to-r hover:from-gold-400 hover:to-silver-400 hover:text-yellow-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="hidden sm:inline">{item.label}</span>
                    <item.icon className="h-5 w-5 sm:hidden" />
                    {pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-silver-400"
                        layoutId="underline"
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <motion.a
            href="tel:+11234567890"
            className="text-white hover:text-blue-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Phone className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="mailto:dummy@gmail.com"
            className="text-white hover:text-blue-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Sahil_Ahmed_Resume.pdf"
            className="relative inline-flex items-center px-4 py-2 rounded-md text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-orange-300 to-white opacity-75 animate-pulse"></span>
            <span className="relative flex items-center">
              <Download className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Download Resume</span>
            </span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;