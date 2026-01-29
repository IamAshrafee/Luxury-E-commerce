import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import StorySection from './components/StorySection'
import MembershipCTA from './components/MembershipCTA'
import Footer from './components/Footer'

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
