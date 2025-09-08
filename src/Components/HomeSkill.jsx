import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Skills data
const skills = [
  {
    title: "Residential Interior",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    percent: 85,
    color: "#fb7e4c", // soft orange
  },
  {
    title: "Commercial Interior",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    percent: 67,
    color: "#27ae60", // green
  },
  {
    title: "Industrial Interior",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    percent: 83,
    color: "#7b5de8", // purple
  },
];

// Constants for radial chart
const SIZE = 80;
const STROKE_WIDTH = 8;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Animated circular progress bar
const AnimatedRadial = ({ percent, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > percent) {
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [percent]);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <svg
      width={SIZE}
      height={SIZE}
      className="block"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <circle
        stroke="#eee"
        fill="transparent"
        strokeWidth={STROKE_WIDTH}
        r={RADIUS}
        cx={SIZE / 2}
        cy={SIZE / 2}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        r={RADIUS}
        cx={SIZE / 2}
        cy={SIZE / 2}
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontWeight="700"
        fontSize="1.25rem"
        fill="#333"
      >
        {progress}%
      </text>
    </svg>
  );
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const SkillsSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-50 overflow-hidden">
      {/* Background circles */}
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(251,126,76,0.15) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          zIndex: 0,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(39,174,96,0.1) 0%, transparent 80%)",
          bottom: "5%",
          right: "10%",
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="text-[#fb7e4c] font-semibold text-sm uppercase border-l-4 pl-3 border-[#fb7e4c]"
          >
            Best Skills
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Discover Our Best <br />
            Working Skills & <br />
            Experience
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-gray-600 leading-relaxed border-l-2 border-[#fb7e4c] pl-4 max-w-lg"
          >
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound the actual teachings of the great
            explorer of the truth the master-builder of human happiness one
            rejects dislikes.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            custom={3}
            className="bg-[#fb7e4c] hover:bg-[#e56d3d] text-white font-semibold px-8 py-3 rounded shadow-md transition flex items-center gap-2"
          >
            LEARN MORE <span>→</span>
          </motion.button>
        </motion.div>

        {/* Right Skills */}
        <div className="space-y-12">
          {skills.map(({ title, description, percent, color }, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={idx + 4}
              className="flex items-center gap-6 sm:gap-8 bg-white rounded-lg p-5 sm:p-6 shadow-md hover:shadow-lg transition"
            >
              <AnimatedRadial percent={percent} color={color} />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base max-w-xs">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
