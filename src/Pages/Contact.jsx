import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../Components/ContactSection";

const Contact = () => {
  return (
    <div>
      <motion.div
        className="relative h-64 flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/page-title-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content on top of overlay */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl font-extrabold mb-2">Contact</h1>
          <p className="text-sm md:text-base opacity-80">
            Home &nbsp;&lt;&lt;&nbsp; Contact
          </p>
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <ContactSection />
      </motion.section>
    </div>
  );
};

export default Contact;
