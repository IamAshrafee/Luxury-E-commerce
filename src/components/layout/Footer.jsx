import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <h3 className="footer-logo">LUXE</h3>
                        <p className="footer-tagline">Redefining absolute luxury<br />for the modern era.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram" className="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav-grid">
                        <div className="nav-column">
                            <h4>Collections</h4>
                            <a href="#">New Arrivals</a>
                            <a href="#">Best Sellers</a>
                            <a href="#">Watches</a>
                            <a href="#">Jewelry</a>
                        </div>
                        <div className="nav-column">
                            <h4>Maison</h4>
                            <a href="#">Our Heritage</a>
                            <a href="#">Craftsmanship</a>
                            <a href="#">Sustainability</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className="nav-column">
                            <h4>Client Care</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/shipping-returns">Shipping & Returns</Link>
                            <a href="#">Size Guide</a>
                            <a href="#">FAQ</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} LUXE Inc.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
