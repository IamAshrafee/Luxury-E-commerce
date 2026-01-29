import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>LUXE</h3>
                        <p>Redefining luxury for the modern era.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Shop</h4>
                            <a href="#">New Arrivals</a>
                            <a href="#">Best Sellers</a>
                            <a href="#">Collections</a>
                        </div>
                        <div className="link-column">
                            <h4>Company</h4>
                            <a href="#">Our Story</a>
                            <a href="#">Sustainability</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className="link-column">
                            <h4>Support</h4>
                            <a href="#">FAQ</a>
                            <a href="#">Shipping</a>
                            <a href="#">Returns</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LUXE Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
