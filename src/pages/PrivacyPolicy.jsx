import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'
import ContactCard from '../components/common/ContactCard'

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <div className="privacy-bg"></div>
            <div className="container privacy-container">
                <div className="policy-content fade-in-up">
                    <header className="policy-header">
                        <p className="last-updated">Last Updated: January 29, 2026</p>
                        <h1 className="policy-title">Privacy & <span className="gold-text">Policy</span></h1>
                        <p className="policy-subtitle">
                            Your trust is our ultimate luxury. We are committed to protecting
                            your personal information with the highest standards of security.
                        </p>
                    </header>

                    <div className="policy-sections">
                        <section className="policy-section">
                            <h2>Personal Information</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Collection & Usage.</strong> We collect personal information such as your name,
                                    email address, and contact details solely to provide you with our bespoke services.
                                    This data allows us to personalize your experience and manage your conciergerie requests.
                                </p>
                                <p>
                                    We do not sell, rent, or trade your personal information to third parties. Your data
                                    is stored securely and accessed only by authorized personnel.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Cookies & Tracking</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Enhancing Experience.</strong> We use cookies to remember your preferences
                                    and provide a seamless browsing experience. These small data files allow our digital
                                    boutique to recognize your device and tailor content to your interests.
                                </p>
                                <p>
                                    You have the option to disable cookies through your browser settings, though this may
                                    limit certain functionalities of our platform.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Shopping Information</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Secure Transactions.</strong> All transaction data is encrypted using
                                    industry-standard SSL technology. We do not store your complete payment details
                                    on our servers; they are processed directly by our secure payment partners.
                                </p>
                                <p>
                                    Your order history is maintained to assist with future inquiries, returns, and
                                    warranty services unless you request its deletion.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Marketing Usages</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Exclusive Communications.</strong> With your consent, we may send you
                                    invitations to private viewings, updates on new collections, and special offers.
                                </p>
                                <p>
                                    You maintain full control over your communication preferences and may opt out
                                    of marketing correspondence at any time via the unsubscribe link in our emails
                                    or by contacting our concierge.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
