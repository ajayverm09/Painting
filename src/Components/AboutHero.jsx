import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image Collage */}
      <motion.div
        className="grid grid-cols-2 grid-rows-3 gap-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.img
          src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-1-1.jpg"
          alt="Painter holding paint bucket"
          className="row-span-2 rounded-lg object-cover w-full h-64 md:h-80 shadow-lg"
          variants={fadeSlideUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.img
          src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-2-1.jpg"
          alt="Painter rolling wall"
          className="rounded-lg object-cover w-full h-32 md:h-40 shadow-lg self-end"
          variants={fadeSlideUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.img
          src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-4.jpg"
          alt="Woman painting floor"
          className="row-span-2 rounded-lg object-cover w-full h-64 md:h-80 shadow-lg"
          variants={fadeSlideUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.img
          src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-3.jpg"
          alt="Painter smiling with paint buckets"
          className="rounded-lg object-cover w-full h-32 md:h-40 shadow-lg self-start"
          variants={fadeSlideUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
        className="space-y-6"
      >
        <motion.p
          className="text-sm text-orange-500 font-semibold uppercase mb-2 tracking-wide"
          variants={fadeSlideUp}
        >
          About Company
        </motion.p>
        <motion.h2
          className="text-4xl font-extrabold mb-6 leading-tight text-gray-900"
          variants={fadeSlideUp}
        >
          Better Painting <br /> Solution Company
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-xl"
          variants={fadeSlideUp}
        >
          Sed ut perspicis unde omnis iste natus error sit volaccu sante dolore
          lautium totam rem aperiam eaque ques abillo inventore veritatis et
          quasi architeo beate vita dicta sunte
        </motion.p>

        {/* Info Boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl"
          variants={containerVariants}
        >
          <motion.div
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-teal-800 transition-colors"
            variants={fadeSlideUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11V7a3 3 0 00-6 0v4M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-bold text-lg mb-2">Professional Painting</h3>
            <p className="text-sm">
              Sed ut perspicis unde omnis iste natus error sit volaccu sadolore
            </p>
            <span className="mt-2 text-xl font-bold">→</span>
          </motion.div>

          <motion.div
            className="bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-yellow-300 transition-colors"
            variants={fadeSlideUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <h3 className="font-bold text-lg mb-2">PDCA Certified Member</h3>
            <p className="text-sm">
              Sed ut perspicis unde omnis iste natus error sit volaccu sadolore
            </p>
            <span className="mt-2 text-xl font-bold">→</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
