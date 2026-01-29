import React, { useEffect } from 'react'
import './About.css'
import ContactCard from '../components/common/ContactCard'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const milestones = [
        { year: '2020', title: 'The Inception', description: 'Born from a desire to merge digital convenience with the tactile soul of an atelier.' },
        { year: '2022', title: 'Global Reach', description: 'Expanding our curation to 12 countries, bridging cultures through craftsmanship.' },
        { year: '2024', title: 'The Green Pledge', description: 'Committing to 100% sustainable packaging and carbon-neutral logistics.' },
        { year: '2026', title: 'Digital Renaissance', description: 'Redefining the online luxury experience with immersive storytelling.' }
    ];

    const stats = [
        { label: 'Artisans', value: '50+' },
        { label: 'Countries', value: '12' },
        { label: 'Curated Pieces', value: '10k+' },
        { label: 'Years of Legacy', value: '06' }
    ];

    return (
        <div className="about-page">
            <div className="about-bg"></div>

            <div className="container about-container">
                {/* Hero Section */}
                <header className="about-hero fade-in-up">
                    <h1 className="about-title">The <span className="gold-text">Essence</span></h1>
                    <p className="about-subtitle">Beyond commerce. A cultivation of the exceptional.</p>
                </header>

                {/* Philosophy Section */}
                <section className="philosophy-section fade-in-up delay-1">
                    <div className="philosophy-content">
                        <h2 className="section-heading">Our Philosophy</h2>
                        <div className="philosophy-text">
                            <p>Luxe is not merely a marketplace; it is a curator of moments. We believe that true luxury lies not in the price tag, but in the story behind the object—the hands that shaped it, the hours poured into it, and the heritage it carries.</p>
                            <p>In an age of mass production, we stand as a bastion for the unique. Every piece in our collection is hand-selected for its integrity, beauty, and ability to transcend trends. We are the bridge between the world's finest artisans and those who seek the extraordinary.</p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section fade-in-up delay-2">
                    <h2 className="section-heading">Our Odyssey</h2>
                    <div className="timeline">
                        <div className="timeline-line"></div>
                        {milestones.map((milestone, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <h3 className="timeline-title">{milestone.title}</h3>
                                    <p className="timeline-desc">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section fade-in-up delay-3">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="fade-in-up delay-3">
                    <ContactCard />
                </div>
            </div>
        </div>
    )
}

export default About
