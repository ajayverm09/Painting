import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Cory Anderson",
    role: "CEO & Founder",
    text:
      "On the other hand denoune with righteou indignant and dislike menar so beguiled demoralized echarms of pleasure of the moment so blinded by desire that systems.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Mark Wood",
    role: "Envato Author",
    text:
      "On the other hand denoune with righteou indignant and dislike menar so beguiled demoralized echarms of pleasure of the moment so blinded by desire that systems.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/83.jpg",
    name: "Joss Butler",
    role: "Web Developer",
    text:
      "On the other hand denoune with righteou indignant and dislike menar so beguiled demoralized echarms of pleasure of the moment so blinded by desire that systems.",
  },
];

// Animation Variants (fade up)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeTestimonial = () => (
  <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
    <div className="text-center mb-12 space-y-2">
      <motion.p
        className="text-orange-500 font-semibold uppercase tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        Testimonial
      </motion.p>
      <motion.h1
        className="text-3xl font-bold leading-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        What Our Clients Say
        <br />
        About Roxce
      </motion.h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {testimonials.map(({ img, name, role, text }, idx) => (
        <motion.div
          key={idx}
          className="relative bg-[#fcfbf8] rounded-lg p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={idx + 2}
          whileHover={{ scale: 1.03 }}
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-12 rotate-180 border-8 border-orange-400 rounded-b-full border-t-0 border-l-0 border-r-0" />
          <img
            src={img}
            alt={name}
            className="mx-auto rounded-full w-24 h-24 object-cover relative z-10"
          />
          <p className="mt-6 text-gray-600 leading-relaxed">{text}</p>
          <div className="mt-6">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-orange-500 font-semibold">{role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default HomeTestimonial;
