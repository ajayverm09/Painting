import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaFolderOpen, FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import blogData from "./blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Convert id to number for correct matching
  const post = blogData.find((item) => item.id === Number(id));

  // Message form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [success]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Post Not Found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">
          Back to Blog List
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Save message to localStorage
    const storedMessages = JSON.parse(localStorage.getItem("blogMessages")) || [];
    storedMessages.push({
      postId: post.id,
      name,
      email,
      message,
      date: new Date().toISOString(),
    });
    localStorage.setItem("blogMessages", JSON.stringify(storedMessages));

    // Clear form and show success
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  return (
    <article className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <h1 className="absolute bottom-6 left-6 text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg max-w-3/4">
          {post.title}
        </h1>
      </div>

      {/* Post Meta */}
      <div className="flex flex-wrap justify-between items-center mb-8 text-gray-600 text-sm md:text-base space-x-4">
        <span className="flex items-center gap-1">
          <FaCalendarAlt className="text-blue-600" /> <time dateTime={post.date}>{post.date}</time>
        </span>
        <span className="flex items-center gap-1">
          <FaUser className="text-blue-600" /> {post.author || "Admin"}
        </span>
        <span className="flex items-center gap-1">
          <FaFolderOpen className="text-blue-600" /> {post.category}
        </span>
        <button
          onClick={() => navigate(-1)}
          className="ml-auto text-blue-600 hover:underline flex items-center gap-1"
          aria-label="Go back"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Content */}
      <div className="prose max-w-none prose-indigo prose-lg mb-12">
        <p>{post.content || "Full article content goes here. Enjoy our expert tips and advice to make your painting project a success!"}</p>

        <h2>Why This Matters</h2>
        <p>
          Painting your home is a way to express your personality and improve your environment. Getting it right will save you time and money.
        </p>

        <h3>Helpful Tips</h3>
        <ul>
          <li>Prep your surfaces carefully for a smooth finish.</li>
          <li>Choose non-toxic, eco-friendly paints for safety.</li>
          <li>Use quality brushes and rollers.</li>
          <li>Take your time between coats.</li>
        </ul>

        <p>
          Explore more insightful articles on our{" "}
          <Link to="/blog" className="text-blue-600 hover:underline">
            blog
          </Link>
          .
        </p>
      </div>

      {/* Leave a Message Form */}
      <section className="border-t pt-8">
        <h3 className="text-2xl font-semibold mb-6">💬 Leave a Message</h3>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your thoughts or questions here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            <FaPaperPlane /> Send Message
          </button>

          {success && (
            <p className="text-green-600 mt-4 font-medium">
              Thank you for your message! We'll get back to you soon.
            </p>
          )}
        </form>
      </section>
    </article>
  );
};

export default BlogDetail;
