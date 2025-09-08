import React from 'react';
import { motion } from 'framer-motion';

// Animation variant for cards
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const BlogCard = ({ image, date, category, title, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariant}
      className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300" />
        <div className="absolute bottom-3 right-3 bg-orange-400 text-white font-bold rounded-md px-4 py-2 text-center shadow-md">
          <div className="text-2xl leading-none">{date.day}</div>
          <div className="uppercase text-xs leading-none">{date.month}</div>
        </div>
      </div>
      <div className="p-5">
        <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md uppercase">
          {category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <a href="#" className="inline-flex items-center mt-4 text-orange-400 font-semibold hover:underline">
          Read More
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const HomeBlogSection = () => {
  const blogPosts = [
    {
      image: 'https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/blog-big-1-1.jpg',
      date: { day: '28', month: 'Nov' },
      category: 'ROXCE',
      title: 'How To Build A Vue Survey App Using Firebase Authentication And Database',
    },
    {
      image: 'https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/blog-big-3.jpg',
      date: { day: '29', month: 'Nov' },
      category: 'ROXCE',
      title: 'Explore the Most Used Painting Styles by Professionals Today',
    },
    {
      image: 'https://codeskdhaka.com/wp/roxce/wp-content/uploads/2021/11/blog-big-5.jpg',
      date: { day: '29', month: 'Nov' },
      category: 'ROXCE',
      title: 'Painting Is The Practice Of Applying Paint, Pigment, Color Or Other Medium',
    },
  ];

  return (
    <section className="bg-[#fbf7f1] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-orange-400 font-bold mb-2 text-lg inline-block border-b-2 border-orange-400"
        >
          News & Blog
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight"
        >
          Our Latest News Blog
          <br />
          Articles & Tips
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogPosts.map((post, idx) => (
          <BlogCard
            key={idx}
            image={post.image}
            date={post.date}
            category={post.category}
            title={post.title}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBlogSection;
