import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="navigation glass-panel">
            <div className="nav-container">
                <div className="logo">
                    <a href="#">LUXE</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#collections">Collections</a></li>
                    <li><a href="#story">Story</a></li>
                    <li><a href="#membership">Membership</a></li>
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
                </div>
            </div>
        </nav>
    )
}

export default Navigation
