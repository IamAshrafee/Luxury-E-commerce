import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount, toggleCart } from '../../store/cartSlice'
import './Navigation.css'

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    return (
        <nav className="navigation glass-panel">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">LUXE</Link>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
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
                    <Link to="/login" className="icon-btn" aria-label="Account">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Link>
                    <button className="icon-btn" aria-label="Cart" onClick={() => dispatch(toggleCart())}>
                        <div className="cart-icon-wrapper">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </div>
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
