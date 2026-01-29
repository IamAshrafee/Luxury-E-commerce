import React from 'react'
import Hero from '../components/sections/home/Hero'
import ProductShowcase from '../components/sections/home/ProductShowcase'
import StorySection from '../components/sections/home/StorySection'
import TheEdit from '../components/sections/home/TheEdit'
import Newsletter from '../components/sections/home/Newsletter'

const Home = () => {
    return (
        <main>
            <Hero />
            <ProductShowcase />
            <StorySection />
            <TheEdit />
            <Newsletter />
        </main>
    )
}

export default Home
