import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Painting",
    description:
      "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque.",
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/fea-1.png",
  },
  {
    title: "Commercial Painting",
    description:
      "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque.",
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/fea-2.png",
  },
  {
    title: "Industrial Painting",
    description:
      "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque.",
    icon: "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/fea-3.png",
  },
];

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

const HomeWhatWeDo = () => {
  return (
    <section className="bg-[#F0F0F0] py-20 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            className="text-orange-500 font-semibold uppercase tracking-wide"
            variants={fadeInUp}
            custom={0}
          >
            What We Do
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
            variants={fadeInUp}
            custom={1}
          >
            Bring Us To Make <br /> Your Dream Painting
          </motion.h2>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5 p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                custom={index + 2}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/features-bg.jpg"
            alt="Painter at work"
            className="w-full h-[60vh] md:h-[80vh] object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
