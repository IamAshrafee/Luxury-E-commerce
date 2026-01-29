import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="navigation glass-panel">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">LUXE</Link>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><a href="#collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</a></li>
                    <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
                <div className="nav-actions">
                    <button className="icon-btn" aria-label="Search">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Cart">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                    <button
                        className="icon-btn mobile-menu-btn"
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
