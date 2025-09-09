import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/download-2.jpeg",
  "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/download-3.jpeg",
  "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/download-4.jpeg",
  "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/download-5.jpeg",
  "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/download-6.jpeg",
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const HomeProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const openSlider = (index) => {
    setSlideIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Blur background when popup is open */}
      <div className={`${isOpen ? "blur-md scale-[0.97]" : ""} transition-all duration-500`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            >
              <motion.img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-48 sm:h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-lg font-bold">
                  Painting Outside In House
                </h3>
                <p className="text-white text-sm font-semibold">
                  Color Painting Services
                </p>
              </motion.div>

              {/* + Button */}
              <button
                onClick={() => openSlider(idx)}
                className="absolute top-3 right-3 w-8 h-8 border border-white rounded-full text-white flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-80 transition"
                aria-label="Open gallery"
              >
                +
              </button>
            </div>
          ))}

          <div className="col-span-full grid grid-cols-2 gap-6">
            {images.slice(3).map((img, idx) => (
              <div
                key={idx + 3}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
              >
                <motion.img
                  src={img}
                  alt={`Project ${idx + 4}`}
                  className="w-full h-48 sm:h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-lg font-bold">
                    Painting Outside In House
                  </h3>
                  <p className="text-white text-sm font-semibold">
                    Color Painting Services
                  </p>
                </motion.div>
                <button
                  onClick={() => openSlider(idx + 3)}
                  className="absolute top-3 right-3 w-8 h-8 border border-white rounded-full text-white flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-80 transition"
                  aria-label="Open gallery"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Swiper */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Close gallery"
            >
              &times;
            </button>
            <Swiper
              initialSlide={slideIndex}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="rounded-lg max-w-4xl"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <motion.img
                    src={img}
                    alt={`Project large ${idx + 1}`}
                    className="w-full h-[600px] object-contain rounded-md mx-auto"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeProject;
