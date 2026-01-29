import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import { products } from '../data/products'

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shop-page">
            <div className="shop-bg"></div>
            <div className="container shop-container">
                <header className="shop-header fade-in-up">
                    <h1 className="shop-title">The <span className="gold-text">Collection</span></h1>
                    <p className="shop-subtitle">Discover our curated selection of masterpieces.</p>
                </header>

                <div className="product-grid fade-in-up delay-1">
                    {products.map((product) => (
                        <div key={product.id} className="product-card glass-panel">
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
