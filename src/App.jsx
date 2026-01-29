import React, { useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import ProductShowcase from './components/sections/ProductShowcase'
import StorySection from './components/sections/StorySection'
import TheEdit from './components/sections/TheEdit'
import Newsletter from './components/sections/Newsletter'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <StorySection />
      <TheEdit />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
