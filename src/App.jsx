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
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProductDetails from './pages/ProductDetails/ProductDetails'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/dashboard/Dashboard'

import CartSidebar from './components/cart/CartSidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/product/:id" element={<ProductDetails />} />
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
