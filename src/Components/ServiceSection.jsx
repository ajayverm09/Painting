import React from "react";
import { GiPaintBrush } from "react-icons/gi";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Interior",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/services-1.jpg",
    icon: <GiPaintBrush className="text-white text-2xl" />,
  },
  {
    title: "Wood Finishing",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/services-2.jpg",
    icon: <GiPaintBrush className="text-white text-2xl" />,
  },
  {
    title: "Wall Preparation",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/services-3.jpg",
    icon: <GiPaintBrush className="text-white text-2xl" />,
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-400 to-orange-300 py-20 px-6">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <p className="text-white text-sm uppercase tracking-wide font-semibold mb-2">
          — What We Offer —
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug">
          We Help You To Make Your <br />
          <span className="text-white">Dream Painting</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={index + 1}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 p-4 rounded-md shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="pt-10 pb-6 px-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-green-500 font-semibold hover:underline text-sm"
              >
                READ MORE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
