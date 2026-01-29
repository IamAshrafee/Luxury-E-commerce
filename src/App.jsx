import React from 'react'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import ProductShowcase from './components/sections/ProductShowcase'
import StorySection from './components/sections/StorySection'
import MembershipCTA from './components/sections/MembershipCTA'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <StorySection />
      <MembershipCTA />
      <Footer />
    </div>
  )
}

export default App
