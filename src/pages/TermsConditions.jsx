import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsConditions.css'
import ContactCard from '../components/common/ContactCard'

const TermsConditions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="terms-bg"></div>
            <div className="container terms-container">
                <div className="policy-content fade-in-up">
                    <header className="policy-header">
                        <p className="last-updated">Last Updated: January 29, 2026</p>
                        <h1 className="policy-title">Terms & <span className="gold-text">Conditions</span></h1>
                        <p className="policy-subtitle">
                            Please review the terms that govern your use of our digital boutique
                            and the purchase of our luxury goods.
                        </p>
                    </header>

                    <div className="policy-sections">
                        <section className="policy-section">
                            <h2>Introduction</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Agreement to Terms.</strong> By accessing or using the Maison Luxe platform,
                                    you agree to be bound by these Terms & Conditions. If you do not agree to these terms,
                                    please refrain from using our services.
                                </p>
                                <p>
                                    These terms apply to all visitors, users, and others who wish to access or use the Service.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Intellectual Property</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Rights & Ownership.</strong> The Service and its original content, features,
                                    and functionality are and will remain the exclusive property of Maison Luxe and its licensors.
                                    The Service is protected by copyright, trademark, and other laws of both the detailed jurisdiction
                                    and foreign countries.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Limitation of Liability</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Disclaimer.</strong> In no event shall Maison Luxe, nor its directors, employees,
                                    partners, agents, suppliers, or affiliates, be liable for any indirect, incidental,
                                    special, consequential or punitive damages, including without limitation, loss of profits,
                                    data, use, goodwill, or other intangible losses.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Governing Law</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Jurisdiction.</strong> These Terms shall be governed and construed in accordance
                                    with the laws of France, without regard to its conflict of law provisions.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <div className="divider"></div>

                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsConditions
