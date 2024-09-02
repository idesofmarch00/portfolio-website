'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import PageTransition from '../components/PageTransition';
import GlobeCard from "../components/globe-card";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error('Failed to send email:', error);
        toast.error('Failed to send message. Please try again.');
      }
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:dummy@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+11234567890';
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Toaster />
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <motion.div 
          className="w-full md:w-1/2 p-8 rounded-xl bg-opacity-15 bg-[#acc896] backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Name"
              />
              {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
            </div>
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Phone (optional)"
              />
              {errors.phone && <span className="text-red-400 text-sm">{errors.phone}</span>}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Message"
                rows={4}
              ></textarea>
              {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right side content */}
        <motion.div 
          className="w-full md:w-1/2 p-8 rounded-xl bg-opacity-15 bg-[#acc896] backdrop-blur-sm border border-white border-opacity-20 shadow-lg text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
         
      <GlobeCard/>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
};

export default ContactPage;

import '../lib/emailjs-init';
