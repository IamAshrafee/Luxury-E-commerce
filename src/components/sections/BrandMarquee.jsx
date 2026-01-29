import React from 'react'
import './BrandMarquee.css'

const BrandMarquee = () => {
    const words = ["TIMELESS", "EXCLUSIVE", "RARE", "MASTERPIECE", "ARTISTRY", "ELEGANCE", "LUXE"]

    // Duplicate the list enough times to ensure seamless scrolling
    const marqueeContent = [...words, ...words, ...words, ...words]

    return (
        <section className="brand-marquee">
            <div className="marquee-track">
                {marqueeContent.map((word, index) => (
                    <span key={index} className="marquee-item">
                        {word} <span className="separator">•</span>
                    </span>
                ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
                {marqueeContent.map((word, index) => (
                    <span key={`dup-${index}`} className="marquee-item">
                        {word} <span className="separator">•</span>
                    </span>
                ))}
            </div>
        </section>
    )
}

export default BrandMarquee
