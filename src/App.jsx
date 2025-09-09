import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Blog from './Pages/Blog'
import BlogDetail from './Components/BlogDetail'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTOp'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App
