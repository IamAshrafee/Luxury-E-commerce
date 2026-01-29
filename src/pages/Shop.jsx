import React, { useEffect, useState } from 'react'
import './Shop.css'
import { products } from '../data/products'

const Shop = () => {
    const [sortBy, setSortBy] = useState('newest');
    const [gridCols, setGridCols] = useState(window.innerWidth < 768 ? 1 : 3);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Initial load & Resize handler
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // safe default if switching views
            if (mobile && gridCols > 2) setGridCols(1);
            if (!mobile && gridCols < 2) setGridCols(3);
        };

        handleResize(); // Set initial
        window.addEventListener('resize', handleResize);
        window.scrollTo(0, 0);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close sort dropdown when clicking outside
    useEffect(() => {
        const closeSort = (e) => {
            if (!e.target.closest('.custom-select-wrapper')) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener('click', closeSort);
        return () => document.removeEventListener('click', closeSort);
    }, []);

    // Sorting Logic
    const parsePrice = (priceStr) => Number(priceStr.replace(/[^0-9.-]+/g, ""));

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'price-low-high') return parsePrice(a.price) - parsePrice(b.price);
        if (sortBy === 'price-high-low') return parsePrice(b.price) - parsePrice(a.price);
        if (sortBy === 'newest') return new Date(b.dateAdded) - new Date(a.dateAdded);
        if (sortBy === 'popularity') return b.popularity - a.popularity;
        return 0;
    });

    const sortOptions = [
        { value: 'newest', label: 'Newest Arrivals' },
        { value: 'popularity', label: 'Popularity' },
        { value: 'price-low-high', label: 'Price: Low to High' },
        { value: 'price-high-low', label: 'Price: High to Low' }
    ];

    const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label;

    return (
        <div className="shop-page">
            <div className="shop-bg"></div>
            <div className="container shop-container">
                <header className="shop-header fade-in-up">
                    <h1 className="shop-title">The <span className="gold-text">Collection</span></h1>
                    <p className="shop-subtitle">Discover our curated selection of masterpieces.</p>
                </header>

                <div className="shop-controls fade-in-up delay-1">
                    {/* Custom Sort Dropdown */}
                    <div className="control-group">
                        <div className="custom-select-wrapper">
                            <button
                                className={`custom-trigger ${isSortOpen ? 'active' : ''}`}
                                onClick={() => setIsSortOpen(!isSortOpen)}
                            >
                                <span className="selected-label">{currentSortLabel}</span>
                                <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            <div className={`custom-options ${isSortOpen ? 'open' : ''}`}>
                                {sortOptions.map(option => (
                                    <button
                                        key={option.value}
                                        className={`option-item ${sortBy === option.value ? 'selected' : ''}`}
                                        onClick={() => {
                                            setSortBy(option.value);
                                            setIsSortOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Layout Toggles (Minimal - Icon Only) */}
                    <div className="control-group layout-controls">
                        {isMobile ? (
                            <>
                                <button
                                    className={`layout-btn ${gridCols === 1 ? 'active' : ''}`}
                                    onClick={() => setGridCols(1)}
                                    aria-label="1 Column"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                                </button>
                                <button
                                    className={`layout-btn ${gridCols === 2 ? 'active' : ''}`}
                                    onClick={() => setGridCols(2)}
                                    aria-label="2 Columns"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v18H3z" /><path d="M14 3h7v18h-7z" /></svg>
                                </button>
                            </>
                        ) : (
                            /* Desktop Controls */
                            <>
                                <button
                                    className={`layout-btn ${gridCols === 2 ? 'active' : ''}`}
                                    onClick={() => setGridCols(2)}
                                    aria-label="2 Columns"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" /></svg>
                                </button>
                                <button
                                    className={`layout-btn ${gridCols === 3 ? 'active' : ''}`}
                                    onClick={() => setGridCols(3)}
                                    aria-label="3 Columns"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="5" height="18" rx="1" /><rect x="9.5" y="3" width="5" height="18" rx="1" /><rect x="17" y="3" width="5" height="18" rx="1" /></svg>
                                </button>
                                <button
                                    className={`layout-btn ${gridCols === 4 ? 'active' : ''}`}
                                    onClick={() => setGridCols(4)}
                                    aria-label="4 Columns"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h4v18H2z" /><path d="M8 3h4v18H8z" /><path d="M14 3h4v18h-4z" /><path d="M20 3h4v18h-4z" /></svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div
                    className="product-grid"
                    key={sortBy}
                    style={{
                        '--grid-cols': gridCols,
                        animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                >
                    {sortedProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card glass-panel"
                            style={{
                                animation: 'fadeInUp 0.8s ease-out forwards',
                                opacity: 0, /* ensure hidden before animation */
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="card-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                                <div className="card-overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                            <div className="card-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop
