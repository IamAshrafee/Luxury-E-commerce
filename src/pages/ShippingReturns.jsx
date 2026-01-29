import React, { useEffect } from 'react'
import './ShippingReturns.css'

const ShippingReturns = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shipping-page">
            <div className="shipping-bg"></div>
            <div className="container shipping-container">
                <div className="policy-content fade-in-up">
                    <header className="policy-header">
                        <h1 className="policy-title">Shipping & <span className="gold-text">Returns</span></h1>
                        <p className="policy-subtitle">
                            Our commitment to exceptional service extends to how we deliver your
                            treasures and handle your requests.
                        </p>
                    </header>

                    <div className="policy-sections">
                        <section className="policy-section">
                            <h2>Shipping Policy</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>Complimentary Global Delivery.</strong> We are pleased to offer complimentary
                                    express shipping on all orders worldwide. Each piece is insured and
                                    requires a signature upon delivery to ensure its safety.
                                </p>
                                <p>
                                    <strong>Processing Time.</strong> Please allow 1-2 business days for us to
                                    prepare your order. Personalized or bespoke items may require additional
                                    time, which will be communicated by our concierge.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Returns & Exchanges</h2>
                            <div className="policy-text">
                                <p>
                                    <strong>30-Day Return Window.</strong> We accept returns or exchanges within
                                    30 days of delivery, provided the item is in its original, pristine condition
                                    with all packaging and certificates of authenticity included.
                                </p>
                                <p>
                                    <strong>Complimentary Returns.</strong> We provide a pre-paid shipping label for
                                    all returns. Simply contact our concierge to initiate the process.
                                </p>
                            </div>
                        </section>

                        <div className="divider"></div>

                        <section className="policy-section">
                            <h2>Refunds</h2>
                            <div className="policy-text">
                                <p>
                                    Upon receipt and inspection of your return, we will process your refund
                                    to the original payment method within 5-7 business days. You will receive
                                    a confirmation email once the process is complete.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingReturns
