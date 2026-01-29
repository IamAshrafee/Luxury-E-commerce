import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
