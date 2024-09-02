import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your server or a service like EmailJS
    alert('Message sent! (This is a placeholder action)');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <motion.div 
          className="w-full md:w-1/2 p-8 rounded-xl bg-opacity-15 bg-[#acc896] backdrop-blur-sm border border-white border-opacity-20 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Name"
              />
              {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
            </div>
            <div>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <input
                {...register('phone', { 
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number"
                  }
                })}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Phone (optional)"
              />
              {errors.phone && <span className="text-red-400 text-sm">{errors.phone.message}</span>}
            </div>
            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Message"
                rows="4"
              ></textarea>
              {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
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
          <p className="mb-6">
            I'm always excited to connect with new people and discuss potential collaborations. 
            Whether you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>dummy@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (123) 456-7890</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;