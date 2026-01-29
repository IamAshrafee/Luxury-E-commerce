import React from 'react'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import ProductShowcase from './components/sections/ProductShowcase'
import StorySection from './components/sections/StorySection'
import BrandMarquee from './components/sections/BrandMarquee'
import Newsletter from './components/sections/Newsletter'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <StorySection />
      <BrandMarquee />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
