import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "./blogData";
import BlogCard from "./BlogCard";

const categories = [
  "Tips & Tricks",
  "Painting Ideas",
  "DIY Projects",
  "Product Reviews",
  "Interior Design",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* LEFT: Blog Cards */}
        <motion.div className="lg:col-span-3" variants={fadeSlideUp}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 text-center md:text-left">
            <motion.div variants={fadeSlideUp}>
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                Latest from the Blog
              </p>
              <motion.h2
                className="text-4xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                🎨 Recent & Insightful Reads
              </motion.h2>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <motion.div
            className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
          >
            {blogData.slice(0, 6).map((post, idx) => (
              <motion.div key={post.id} variants={fadeSlideUp}>
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Sidebar */}
        <motion.aside className="space-y-12" variants={fadeSlideUp}>
          {/* Recent Posts */}
          <motion.div variants={fadeSlideUp}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">🆕 Recent Posts</h3>
            <ul className="space-y-4">
              {blogData.slice(0, 5).map((post) => (
                <motion.li
                  key={post.id}
                  className="flex items-start gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex gap-3 hover:bg-gray-100 p-2 rounded-md transition"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {post.title}
                      </p>
                      <span className="text-xs text-gray-500 mt-1">{post.date}</span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={fadeSlideUp}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">📂 Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5, color: "#2563EB" }} // Tailwind's blue-600 color
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-700"
                  >
                    ➤ {cat}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.aside>
      </motion.div>
    </section>
  );
};

export default BlogSection;
