import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="liquid-orb"></div>
                <div className="liquid-orb orb-2"></div>
            </div>
            <div className="hero-content container">
                <h1 className="hero-title">
                    <span className="reveal-text">Redefining</span><br />
                    <span className="reveal-text highlight">Luxury</span>
                </h1>
                <p className="hero-subtitle">
                    Experience the essence of timeless elegance and modern craftsmanship.
                </p>
                <button className="cta-button">Explore Collection</button>
            </div>
        </section>
    )
}

export default Hero
