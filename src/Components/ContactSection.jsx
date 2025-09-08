import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaEnvelopeOpen, FaPhoneAlt, FaChevronDown, FaRegCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in at least your name, email, and message.");
      return;
    }

    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    storedContacts.push({
      ...formData,
      date: new Date().toISOString(),
    });
    localStorage.setItem("contacts", JSON.stringify(storedContacts));

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* Left side - Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-8 bg-[#fff8f3] p-10 rounded-2xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-center text-3xl font-extrabold mb-8 text-gray-900 tracking-tight"
          variants={itemVariants}
        >
          Don’t Hesitate To Contact With Roxce
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
          <div className="relative">
            <label className="block mb-2 font-semibold text-gray-800">Your Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              placeholder="John Doe"
              required
            />
            <FaUser className="absolute right-4 top-[42px] text-gray-400" />
          </div>

          <div className="relative">
            <label className="block mb-2 font-semibold text-gray-800">Your Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              placeholder="john@example.com"
              required
            />
            <FaEnvelopeOpen className="absolute right-4 top-[42px] text-gray-400" />
          </div>

          <div className="relative">
            <label className="block mb-2 font-semibold text-gray-800">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              placeholder="+1 234 567 890"
            />
            <FaPhoneAlt className="absolute right-4 top-[42px] text-gray-400" />
          </div>

          <div className="relative">
            <label className="block mb-2 font-semibold text-gray-800">Select Services</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
            >
              <option value="">Select a service</option>
              <option value="Painting">Painting</option>
              <option value="Consulting">Consulting</option>
              <option value="Design">Design</option>
            </select>
            <FaChevronDown className="absolute right-4 top-[42px] text-gray-400 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div className="relative" variants={itemVariants}>
          <label className="block mb-2 font-semibold text-gray-800">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your message..."
            className="w-full px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-3 focus:ring-yellow-400 resize-none transition"
            required
          />
          <FaRegCommentDots className="absolute right-4 top-[130px] text-gray-400" />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-yellow-400 text-teal-900 font-extrabold py-4 rounded-lg hover:bg-yellow-500 shadow-md transition transform hover:scale-105"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {success && (
          <motion.p
            className="text-center text-green-600 font-semibold mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Thank you for contacting us! We'll get back to you soon.
          </motion.p>
        )}
      </motion.form>

      {/* Right side - Contact Info + Map */}
      <motion.div
        className="bg-teal-900 text-white p-10 rounded-2xl shadow-lg flex flex-col justify-between"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Contact Info */}
        <div>
          {[{
            icon: <FaMapMarkerAlt size={28} />,
            title: "Main Location",
            details: (
              <>
                320 Main Street, 2nd Floor,<br />
                D- Block, Paris, France
              </>
            ),
          }, {
            icon: <FaEnvelope size={28} />,
            title: "Email Address",
            details: (
              <>
                help@support.com<br />
                infopainting.net
              </>
            ),
          }, {
            icon: <FaPhone size={28} />,
            title: "Phone Number",
            details: (
              <>
                +012 (345) 678 99,<br />
                856321450 9863214025
              </>
            ),
          }].map(({ icon, title, details }, i) => (
            <div key={i} className={`flex items-start gap-6 mb-${i !== 2 ? "8" : "0"}`}>
              <div className="bg-yellow-400 rounded-full p-4 text-teal-900 shadow-md">
                {icon}
              </div>
              <div>
                <p className="mb-1 text-sm opacity-90 font-semibold">{title}</p>
                <p className="text-lg font-semibold leading-relaxed">{details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg flex-1 min-h-[280px]">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999660052401!2d2.292292615674074!3d48.85837307928724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66efde1d6a113%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1694155844739!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
