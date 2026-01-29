import React from 'react'
import './Hero.css'
import heroBg from '../../../assets/images/hero_bg.png'

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>

            <div className="hero-content container">
                <div className="hero-text-block">
                    <span className="hero-eyebrow fade-in">Est. 2024</span>
                    <h1 className="hero-title">
                        <span className="reveal-text delay-1">Redefining</span><br />
                        <span className="reveal-text highlight delay-2">Absolute Luxury</span>
                    </h1>
                    <p className="hero-subtitle fade-in delay-3">
                        Where timeless elegance meets liquid gold perfection.
                        Experience the art of exceptional living.
                    </p>

                    <div className="hero-actions fade-in delay-4">
                        <button className="cta-button primary">Explore Collection</button>
                        <button className="cta-button secondary">View Lookbook</button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator fade-in delay-5">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
