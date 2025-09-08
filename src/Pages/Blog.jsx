import React from "react";
import { motion } from "framer-motion";
import BlogSection from "../Components/BlogSection";

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

const Blog = () => {
  return (
    <div>
      <motion.div
        className="relative h-64 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-12"
        style={{
          backgroundImage:
            "url('https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/page-title-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content on top of overlay */}
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          variants={fadeSlideUp}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight"
            variants={fadeSlideUp}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base opacity-80"
            variants={fadeSlideUp}
          >
            Home &nbsp;&lt;&lt;&nbsp; Blog
          </motion.p>
        </motion.div>
      </motion.div>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlideUp}
        >
          <BlogSection />
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
