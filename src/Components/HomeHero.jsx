import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const HomeHero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/slider-1.jpg",
    "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/slider-2.jpg",
    "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/slider-3.jpg",
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full h-screen">
      {/* Custom Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full px-4 flex justify-between text-white text-3xl sm:text-4xl font-bold">
        <button ref={prevRef} className="hover:text-green-400 transition">
          &lt;
        </button>
        <button ref={nextRef} className="hover:text-green-400 transition">
          &gt;
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
                <motion.span
                  className="text-sm md:text-base font-semibold mb-4 border-y border-white px-3 py-1"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  25 Years Of Experience
                </motion.span>

                <motion.h1
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  Painting Service <br /> Company
                </motion.h1>

                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded text-sm sm:text-base">
                    GET STARTED →
                  </button>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded text-sm sm:text-base">
                    OUR SERVICES →
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;
