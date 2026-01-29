import React, { useEffect, useRef } from 'react'
import './StorySection.css'
import craftsmanshipImg from '../../assets/images/craftsmanship.png'

const StorySection = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="story-section" id="story">
            <div className="container">
                <div className="story-grid">
                    <div className="story-content fade-in-up">
                        <h2 className="story-title">Crafted for the <br /><span className="gold-text">Exceptional</span></h2>
                        <p className="story-text">
                            Every piece in our collection is a testament to uncompromising artistry.
                            We blend centuries-old techniques with avant-garde design to create items
                            that are not just possessed, but experienced.
                        </p>
                        <p className="story-text">
                            From the clarity of our diamonds to the depth of our fragrances,
                            perfection is our only standard.
                        </p>
                    </div>
                    <div className="story-visual fade-in-up delay-200">
                        <div className="visual-block">
                            <img src={craftsmanshipImg} alt="Craftsmanship" className="story-image" />
                            <div className="glow-effect"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection
