import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Paul Starling",
    role: "Commercial Painter",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michel Jhon Menda",
    role: "Web Developer",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Somalia XD Silova",
    role: "Web Designer",
    image:
      "https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/12/team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // Add yourself here
];

// Social Icon SVGs
const socialIcons = {
  facebook: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.49v-9.294H9.692v-3.622h3.123V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.767v2.318h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
    </svg>
  ),
  twitter: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.95.565-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.735.199-1.518.232-2.224.084.623 1.951 2.444 3.376 4.6 3.416-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.394 4.768 2.209 7.548 2.209 9.142 0 14.307-7.721 13.995-14.646.961-.695 1.8-1.562 2.46-2.549z" />
    </svg>
  ),
  instagram: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
      ></rect>
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      ></path>
      <line
        stroke="currentColor"
        strokeWidth="2"
        x1="17.5"
        y1="6.5"
        x2="17.51"
        y2="6.5"
      ></line>
    </svg>
  ),
  linkedin: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.04-1.852-3.04-1.853 0-2.136 1.447-2.136 2.942v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.267 2.37 4.267 5.452v6.289zM5.337 7.433a2.07 2.07 0 1 1 0-4.138 2.07 2.07 0 0 1 0 4.138zm1.777 13.019H3.56V9h3.554v11.452z" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutTeam = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={headingVariants}
      >
        Our Team
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map(({ name, role, image, social }, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-6 cursor-pointer hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600 mb-4">{role}</p>
            <div className="flex justify-center gap-4">
              <a
                href={social.facebook}
                aria-label="Facebook"
                className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                {socialIcons.facebook}
              </a>
              <a
                href={social.twitter}
                aria-label="Twitter"
                className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                {socialIcons.twitter}
              </a>
              <a
                href={social.instagram}
                aria-label="Instagram"
                className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                {socialIcons.instagram}
              </a>
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                {socialIcons.linkedin}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
