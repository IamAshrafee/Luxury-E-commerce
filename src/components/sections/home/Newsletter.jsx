import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <section className="newsletter" id="newsletter">
            <div className="newsletter-bg"></div>
            <div className="container newsletter-container">
                <div className="newsletter-content glass-panel">
                    <h2>Unlock Exclusive <span className="gold-text">Privileges</span></h2>
                    <p>Subscribe to our newsletter for early access to new arrivals, curated deals, and private events.</p>

                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" className="input-field" required />
                        <button type="submit" className="submit-btn">Subscribe</button>
                    </form>
                    <p className="disclaimer">Join 10,000+ discerning members.</p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
