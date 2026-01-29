import React, { useState, useEffect } from 'react'
import './FAQ.css'

const faqData = [
    {
        category: "Ordering & Payment",
        items: [
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For bespoke orders, wire transfer options are available upon request."
            },
            {
                question: "Can I modify my order after placing it?",
                answer: "Due to our commitment to prompt processing, we can only modify orders within 1 hour of placement. Please contact our concierge immediately for assistance."
            }
        ]
    },
    {
        category: "Shipping & Delivery",
        items: [
            {
                question: "Do you ship internationally?",
                answer: "Yes, Maison Luxe offers complimentary express shipping to over 50 countries worldwide. All international shipments are fully insured and require a signature upon delivery."
            },
            {
                question: "How can I track my package?",
                answer: "Once your order is dispatched, you will receive a shipping confirmation email containing your tracking number and a link to monitor your delivery's progress."
            }
        ]
    },
    {
        category: "Product Care",
        items: [
            {
                question: "How should I care for my leather goods?",
                answer: "We recommend keeping leather items away from direct sunlight and moisture. Clean with a soft, dry cloth. For deep cleaning, please consult a professional leather specialist."
            },
            {
                question: "Do you offer repair services?",
                answer: "Maison Luxe offers a lifetime repair service for manufacturing defects. For wear and tear, our atelier provides restoration services for a nominal fee."
            }
        ]
    }
];

const FAQ = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="faq-bg"></div>
            <div className="container faq-container">
                <header className="faq-header fade-in-up">
                    <h1 className="faq-title">Frequently Asked <span className="gold-text">Questions</span></h1>
                    <p className="faq-subtitle">
                        Curated answers to your most common inquiries.
                    </p>
                </header>

                <div className="faq-content fade-in-up delay-1">
                    {faqData.map((section, sIndex) => (
                        <div key={sIndex} className="faq-section">
                            <h2 className="section-title">{section.category}</h2>
                            <div className="accordion-group">
                                {section.items.map((item, iIndex) => {
                                    const uniqueIndex = `${sIndex}-${iIndex}`;
                                    const isOpen = openIndex === uniqueIndex;

                                    return (
                                        <div
                                            key={uniqueIndex}
                                            className={`accordion-item ${isOpen ? 'active' : ''}`}
                                            onClick={() => toggleAccordion(uniqueIndex)}
                                        >
                                            <div className="accordion-header">
                                                <span className="accordion-question">{item.question}</span>
                                                <span className="accordion-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div
                                                className={`accordion-body ${isOpen ? 'open' : ''}`}
                                            >
                                                <div className="accordion-content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
