import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openVideo = () => setIsModalOpen(true);
  const closeVideo = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🎬 Video Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/contact-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <button
          onClick={openVideo}
          className="relative z-10 bg-red-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition"
        >
          ▶ Watch Video
        </button>
      </motion.div>

      {/* 🟧 Contact Section */}
      <section className="bg-orange-400 text-white flex flex-col md:flex-row items-start px-6 md:px-24 py-16 md:py-24 gap-10">
        {/* Left Side (Form) */}
        <motion.div
          className="md:w-1/2 max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.p custom={0} variants={fadeInUp} className="font-semibold uppercase mb-2 tracking-widest">
            Get In Touch
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeInUp}
            className="font-extrabold text-4xl md:text-5xl mb-10 leading-tight"
          >
            Don’t Hesitate, <br /> Feel Free To Contact Us
          </motion.h2>

          <form className="space-y-6">
            <motion.div custom={2} variants={fadeInUp} className="relative">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-transparent border border-white border-opacity-40 rounded px-4 py-4 pr-10 placeholder-white font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
              />
            </motion.div>

            <motion.div custom={3} variants={fadeInUp} className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border border-white border-opacity-40 rounded px-4 py-4 pr-10 placeholder-white font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
              />
            </motion.div>

            <motion.div custom={4} variants={fadeInUp}>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-transparent border border-white border-opacity-40 rounded px-4 py-4 placeholder-white font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="bg-white bg-opacity-30 text-orange-400 font-bold uppercase px-8 py-4 rounded hover:bg-opacity-50 transition"
              custom={5}
              variants={fadeInUp}
            >
              SEND MESSAGE →
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side (Images) */}
        <motion.div
          className="hidden md:flex flex-col space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={6}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/contact-1.jpg"
            alt="Woman painting"
            className="w-72 rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/contact-2.jpg"
            alt="Man and woman painting"
            className="w-72 rounded-lg shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

      {/* 📽️ Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-3xl px-4">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/hykNESPD4TM?autoplay=1&mute=1"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500 focus:outline-none"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomeContactSection;
