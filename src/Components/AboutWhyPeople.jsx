import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/why-icon-1-1.png",
    title: "PDCA Certified Member",
    description:
      "Perspicis unde omnis iste natus error sit volaccu san dolore lautium totam rem aperiam eaque ques",
  },
  {
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/why-icon-2.png",
    title: "Flexible Schedule Options.",
    description:
      "Perspicis unde omnis iste natus error sit volaccu san dolore lautium totam rem aperiam eaque ques",
  },
  {
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/why-icon-3.png",
    title: "Eco Friendly & Clean Area",
    description:
      "Perspicis unde omnis iste natus error sit volaccu san dolore lautium totam rem aperiam eaque ques",
  },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyPeopleLove = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          className="rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/why-1-1.jpg"
            alt="Painter holding roller"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.p
            className="text-sm text-orange-500 font-semibold uppercase mb-2 tracking-wide"
            variants={fadeSlideUp}
          >
            What We Do
          </motion.p>

          <motion.h2
            className="text-4xl font-extrabold mb-6 leading-tight text-gray-900"
            variants={fadeSlideUp}
          >
            Why People’s Loves <br /> Our Solutions
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-12 max-w-xl"
            variants={fadeSlideUp}
          >
            Sed ut perspicis unde omnis iste natus error sit volaccu sante dolore
            lautium totam rem aperiam eaque ques abillo inventore veritatis et
            quasi architeo beate vita dicta sunte
          </motion.p>

          {/* Features List */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {features.map(({ icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 rounded-lg p-4 cursor-pointer hover:bg-orange-50 transition-colors"
                variants={fadeSlideUp}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPeopleLove;
