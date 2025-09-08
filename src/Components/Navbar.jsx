import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { stiffness: 50, type: 'spring', damping: 20 } },
    exit: { opacity: 0, x: '100%', transition: { ease: 'easeInOut', duration: 0.3 } },
  };

  const linkHover = {
    scale: 1.1,
    color: '#F97316', // Tailwind orange-500 hex
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://codeskdhaka.com/wp/roxce/wp-content/themes/roxce/assets/img/logo/logo.png"
            alt="Roxce Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-semibold">
          {menuItems.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <motion.li
                key={name}
                whileHover={linkHover}
                className={`relative cursor-pointer ${
                  isActive
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'hover:text-orange-500'
                }`}
              >
                <Link to={path} className="py-2 block">
                  {name}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Desktop Social + Grid */}
        <div className="hidden md:flex items-center space-x-5">
          <motion.div className="flex space-x-3" initial="rest" whileHover="hover" animate="rest">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                className="p-2 bg-orange-50 rounded-md text-orange-500 cursor-pointer text-sm shadow-sm"
                variants={{
                  rest: { scale: 1, color: '#F97316' },
                  hover: { scale: 1.2, color: '#EA580C' }, // darker orange on hover
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>

          {/* Grid icon */}
          <div className="grid grid-cols-3 gap-1 ml-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-orange-400 rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-orange-500 hover:text-orange-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 left-0 bg-white bg-opacity-95 backdrop-blur-md z-40 flex flex-col p-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col space-y-8 text-2xl font-semibold text-gray-900">
              {menuItems.map(({ name, path }) => {
                const isActive = location.pathname === path;
                return (
                  <motion.li
                    key={name}
                    whileHover={{ scale: 1.1, color: '#F97316' }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`cursor-pointer ${
                      isActive
                        ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                        : ''
                    }`}
                  >
                    <Link to={path}>{name}</Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Social Icons */}
            <motion.div className="mt-auto flex space-x-6 justify-center text-orange-500">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="p-3 bg-orange-50 rounded-full shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.3, color: '#EA580C' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
