import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt, FaRegComments } from "react-icons/fa";

const BlogCard = ({ id, image, date, author, comments, title, excerpt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      {/* Blog Image */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* Blog Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex flex-wrap text-sm text-gray-500 items-center gap-6 mb-4 font-medium">
          <div className="flex items-center gap-2 text-orange-500">
            <FaCalendarAlt />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegComments />
            <span>{comments}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-800 leading-tight mb-4">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 leading-relaxed">{excerpt}</p>

        {/* Read More Button */}
        <Link
          to={`/blog/${id}`}
          className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition duration-200"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
