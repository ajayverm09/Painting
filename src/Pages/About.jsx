import React from "react";
import { motion } from "framer-motion";
import AboutHero from "../Components/AboutHero";
import AboutFeatures from "../Components/AboutFeature";
import WhyPeopleLove from "../Components/AboutWhyPeople";
import AboutTeam from "../Components/AboutTeam";

const bannerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <>
      {/* Banner with background image */}
      <motion.div
        className="relative h-64 flex flex-col justify-center items-center text-white px-4 md:px-0"
        style={{
          backgroundImage:
            "url('https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/page-title-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content on top of overlay */}
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
            About
          </h1>
          <p className="text-sm md:text-base opacity-80 drop-shadow-md">
            Home &nbsp;&lt;&lt;&nbsp; About Us
          </p>
        </motion.div>
      </motion.div>

      {/* About content section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-20 md:space-y-32">
        {/* Animate each section on scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <AboutHero />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <AboutFeatures />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <WhyPeopleLove />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <AboutTeam />
        </motion.div>
      </section>
    </>
  );
};

export default About;
