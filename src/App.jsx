import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

import Contact from './pages/Contact'
import ShippingReturns from './pages/ShippingReturns'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
