import React, { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <div className="contact-bg"></div>
            <div className="container contact-container">
                <div className="contact-card glass-panel">
                    <div className="contact-info">
                        <h2 className="contact-title">Private <span className="gold-text">Concierge</span></h2>
                        <p className="contact-desc">
                            Our dedicated team is at your disposal for any inquiries,
                            appointments, or bespoke requests. Experience the
                            luxury of personalized service.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <h3>Maison Luxe</h3>
                                <p>12 Avenue Montaigne,<br />75008 Paris, France</p>
                            </div>
                            <div className="detail-item">
                                <h3>Direct Line</h3>
                                <p>+33 1 42 68 89 00</p>
                            </div>
                            <div className="detail-item">
                                <h3>Email</h3>
                                <p>concierge@luxe.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" className="select-field">
                                <option>General Inquiry</option>
                                <option>Book Appointment</option>
                                <option>Private Viewing</option>
                                <option>Order Support</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" required placeholder="How may we assist you?"></textarea>
                        </div>
                        <button type="submit" className="cta-button primary">Send Request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
