'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Phone, Mail, FileText, ContactRound, Download, Rss, Menu, X } from 'lucide-react';

const CustomHeader: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/contact', icon: ContactRound, label: 'Contact' },
    { label: 'Blog', icon: Rss, path: 'https://sahilahmed.hashnode.dev/' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);

  const drawerVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-gray-950 rounded-xl rounded-t-none text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <nav className="hidden md:block">
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
                    <span>{item.label}</span>
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
        <div className="flex items-center space-x-3 md:space-x-4">
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
            className="relative inline-flex items-center px-2 md:px-4 py-2 rounded-md text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-orange-300 to-white opacity-75 animate-pulse"></span>
            <span className="relative flex items-center">
              <Download className="h-5 w-5" />
              <span className="hidden md:inline ml-2">Download Resume</span>
            </span>
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-gray-950 p-4"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button onClick={toggleDrawer} className="absolute top-4 right-4 text-white">
                <X className="h-6 w-6" />
              </button>
              <ul className="mt-12 space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.path} passHref>
                      <motion.div
                        className={`flex items-center p-2 rounded-md ${
                          pathname === item.path ? 'bg-gray-800' : 'hover:bg-gray-800'
                        }`}
                        onClick={toggleDrawer}
                      >
                        <item.icon className="h-5 w-5 mr-2" />
                        <span>{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CustomHeader;