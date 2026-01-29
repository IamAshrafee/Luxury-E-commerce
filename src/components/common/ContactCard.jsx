import React from 'react'
import { Link } from 'react-router-dom'
import './ContactCard.css'

const ContactCard = () => {
    return (
        <section className="contact-card-section">
            <h2>Have questions?</h2>
            <p>
                If you have any inquiries regarding our practices or wish to exercise your rights,
                our dedicated concierge team is at your disposal.
            </p>
            <Link to="/contact" className="contact-card-link">
                Contact Concierge
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
        </section>
    )
}

export default ContactCard
