import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
      },
    }),
  };

  return (
    <div className="w-full bg-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Main Image */}
          <img
            src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-1.jpg"
            alt="Painter"
            className="w-full border-8 border-green-800 border-t-0 border-r-0 h-auto z-10 relative rounded-md"
          />

          {/* Circular Image Overlay */}
          <motion.div
            className="absolute -bottom-8 left-12 transform translate-x-3/4 lg:left-20 lg:bottom-25 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-2.jpg"
              alt="Pouring Paint"
              className="w-48 sm:w-64 h-48 sm:h-64 rounded-full border-8 border-white object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.p
            className="text-orange-500 font-semibold mb-2"
            variants={fadeIn}
            custom={0}
          >
            About Us
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
            variants={fadeIn}
            custom={1}
          >
            Explore About <br /> Painting Services <br /> Success History
          </motion.h2>

          <motion.h4
            className="text-md sm:text-lg font-bold text-gray-800 mb-4"
            variants={fadeIn}
            custom={2}
          >
            Accusantium doloremq laudantium totam remesd aperiam eaque quae abillo inventore
          </motion.h4>

          <motion.p
            className="text-gray-500 leading-relaxed mb-8"
            variants={fadeIn}
            custom={3}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremq laudantium totam rem aperiam eaque quae ab
            illo inventore veritatis et quasi architecto beatae vita dicta
            sunt explicabo. Nemo enim ipsam voluptatem.
          </motion.p>

          {/* Profile and Signature */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4"
            variants={fadeIn}
            custom={4}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-author.jpg"
                alt="CEO"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900">Jose E. Swisher</p>
                <p className="text-orange-500 text-sm font-semibold">
                  CEO & Founder
                </p>
              </div>
            </div>
            <img
              src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/about-author-signature.png"
              alt="Signature"
              className="h-10 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout;
