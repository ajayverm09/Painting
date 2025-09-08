import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants for fade and slide
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  };

  // Social icon hover animation
  const socialHover = {
    scale: 1.2,
    color: '#F97316', // Tailwind orange-500 hex
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Company */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-white font-bold text-lg mb-6"
          >
            About Company
          </motion.h3>
          <p className="mb-8 leading-relaxed text-gray-400">
            Sed ut perspiciati unde omnis iste natus error sit voluptatem accusantium emque laudantium totam rem aperiam
          </p>
          <div className="flex items-center space-x-3">
            <img
              src="https://codeskdhaka.com/wp/roxce/wp-content/themes/roxce/assets/img/logo/logo-white.png"
              alt="Roxce logo"
              className="w-12 h-12"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-white font-bold text-lg mb-6"
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-2 text-gray-400">
            {[
              'Residential Interior',
              'Commercial Interior',
              'Industrial Interior',
              'Roof Servicing',
              'Color Mixing',
              'Painting & Decoration',
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, color: '#F97316' }}
                className="cursor-pointer transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-white font-bold text-lg mb-6"
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-6">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 12.414a5 5 0 10-7.071 7.071l4.243-4.243m6.414-6.414a5 5 0 00-7.071 7.071"
                    />
                  </svg>
                ),
                title: 'Locations',
                desc: '30 Main Street, New York',
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12h.01M12 12h.01M8 12h.01M21 16.5a8.38 8.38 0 01-8.5 7.5 8.38 8.38 0 01-8.5-7.5M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: 'Email Us',
                desc: 'support@gmail.com',
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h1l2 3 3-2-1-2h2l2-2 2 4 1-3 2 3v4l-2 2-3-3-3 2-3-3-2-1z"
                    />
                  </svg>
                ),
                title: 'Phone Us',
                desc: '+012 (344) 678 99',
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.li
                key={i}
                className="flex items-start space-x-3 cursor-default"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <span className="text-orange-500 mt-1">{icon}</span>
                <div>
                  <strong className="text-white">{title}</strong>
                  <p>{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-white font-bold text-lg mb-6"
          >
            Newsletter
          </motion.h3>
          <p className="mb-6 text-gray-400">
            Sed ut perspiciati unde omnis iste natus error sit voluptatem accusantium
          </p>
          <motion.form className="flex flex-col space-y-4" onSubmit={e => e.preventDefault()}>
            <motion.input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-700 text-gray-200 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              whileFocus={{ scale: 1.03, boxShadow: '0 0 8px rgba(249, 115, 22, 0.7)' }}
            />
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
              whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(249, 115, 22, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              SUBSCRIBE &rarr;
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm"
      >
        <div className="flex space-x-6 mb-4 md:mb-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="hover:text-white text-gray-400"
              whileHover={socialHover}
              whileTap={{ scale: 0.9 }}
              aria-label="social link"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        <div>
          Copyright © <strong>2023 Theme_Pure.</strong> All Rights Reserved
        </div>
      </motion.div>
    </footer>
  );
}
