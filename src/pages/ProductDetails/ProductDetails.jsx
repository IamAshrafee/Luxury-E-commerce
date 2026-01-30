import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { products } from '../../data/products';
import AccordionItem from '../../components/common/AccordionItem';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeSection, setActiveSection] = useState('description');
    const [openFaqId, setOpenFaqId] = useState(null);

    // Review State
    const [sortBy, setSortBy] = useState('newest');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [visibleReviews, setVisibleReviews] = useState(5);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setActiveImage(foundProduct.images ? foundProduct.images[0] : foundProduct.image);

            if (foundProduct.colors && foundProduct.colors.length > 0) {
                setSelectedColor(foundProduct.colors[0]);
            }
            if (foundProduct.sizes && foundProduct.sizes.length > 0) {
                setSelectedSize(foundProduct.sizes[0]);
            }
        } else {
            console.warn("Product not found");
        }
        window.scrollTo(0, 0);
    }, [id]);

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

    const handleAddToCart = () => {
        if (!product) return;
        const itemToAdd = {
            ...product,
            selectedColor,
            selectedSize,
            quantity
        };
        for (let i = 0; i < quantity; i++) {
            dispatch(addToCart(itemToAdd));
        }
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/cart');
    };

    const toggleFaq = (idx) => {
        setOpenFaqId(openFaqId === idx ? null : idx);
    };

    if (!product) return <div className="loading-state">Loading...</div>;

    const renderStars = (rating) => {
        return "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
    };

    // Calculate Rating Stats
    const totalReviews = product.reviews ? product.reviews.length : 0;
    const avgRating = totalReviews > 0
        ? (product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
        : 0;

    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    if (product.reviews) {
        product.reviews.forEach(r => {
            const rounded = Math.round(r.rating);
            if (ratingCounts[rounded] !== undefined) ratingCounts[rounded]++;
        });
    }

    // Sort Reviews
    let sortedReviews = product.reviews ? [...product.reviews] : [];
    if (sortBy === 'newest') {
        sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'highest') {
        sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'lowest') {
        sortedReviews.sort((a, b) => a.rating - b.rating);
    }

    const reviewsToShow = sortedReviews.slice(0, visibleReviews);

    const sortOptions = [
        { value: 'newest', label: 'Newest First' },
        { value: 'highest', label: 'Highest Rated' },
        { value: 'lowest', label: 'Lowest Rated' }
    ];

    return (
        <div className={`product-details-page section-${activeSection}`}>
            <div className="details-container">
                {/* Left: Gallery */}
                <div className="gallery-section">
                    <div className="main-image-wrapper glass-panel">
                        <img src={activeImage} alt={product.name} className="main-image" />
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div className="thumbnails-track">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    className={`thumbnail-btn ${activeImage === img ? 'active' : ''}`}
                                    onClick={() => setActiveImage(img)}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Info */}
                <div className="product-info-section">
                    <div className="product-header">
                        <div className="product-breadcrumbs">Shop / {product.category}</div>
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-price">{product.price}</p>
                    </div>

                    <div className="product-description-short">
                        <p>{product.description}</p>
                    </div>

                    <div className="product-options">
                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="option-group">
                                <span className="option-label">Color</span>
                                <div className="color-options">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setSelectedColor(color)}
                                            aria-label={`Select color ${color}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sizes */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="option-group">
                                <span className="option-label">Size: {selectedSize}</span>
                                <div className="size-options">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            className={`size-chip ${selectedSize === size ? 'active' : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="option-group">
                            <span className="option-label">Quantity</span>
                            <div className="quantity-control glass-panel">
                                <button
                                    className="qty-btn"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >−</button>
                                <span className="qty-value">{quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => setQuantity(quantity + 1)}
                                >+</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button className="action-btn add-to-cart" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="action-btn buy-now" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Content Section */}
            <div className="details-content-wrapper">
                <nav className="details-nav">
                    <button
                        className={`nav-link ${activeSection === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveSection('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveSection('reviews')}
                    >
                        Reviews
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                        onClick={() => setActiveSection('faq')}
                    >
                        FAQ
                    </button>
                </nav>

                <div className="details-content-area animate-tab-content" key={activeSection}>
                    {activeSection === 'description' && (
                        <div className="content-section description-layout">
                            <div className="desc-header">
                                <h2>The Narrative</h2>
                                <p className="desc-lead">"Designed for those who seek perfection in every detail."</p>
                            </div>
                            <div className="desc-body">
                                <p className="drop-cap">{product.description}</p>
                                <p>This piece represents the pinnacle of the Luxe collection. Meticulously crafted by master artisans, it combines heritage techniques with modern aesthetics. Whether it's the sourcing of rare materials or the precision of the assembly, no compromise has been made.</p>
                                <ul className="features-list">
                                    <li>Hand-finished details ensuring uniqueness.</li>
                                    <li>Sustainably sourced premium materials.</li>
                                    <li>Timeless design that defies trends.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeSection === 'reviews' && (
                        <div className="content-section reviews-layout-hub">
                            {/* Review Summary Header */}
                            <div className="review-hub-header">
                                <div className="rating-overview">
                                    <div className="rating-score-box">
                                        <span className="rating-number">{avgRating}</span>
                                        <div className="rating-stars">{renderStars(avgRating)}</div>
                                        <span className="rating-count">{totalReviews} Reviews</span>
                                    </div>
                                    <div className="rating-bars">
                                        {[5, 4, 3, 2, 1].map(num => (
                                            <div key={num} className="rating-bar-row">
                                                <span className="bar-label">{num} ★</span>
                                                <div className="bar-track">
                                                    <div
                                                        className="bar-fill"
                                                        style={{ width: `${totalReviews > 0 ? (ratingCounts[num] / totalReviews) * 100 : 0}%` }}
                                                    ></div>
                                                </div>
                                                <span className="bar-count">{ratingCounts[num]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="review-actions-bar">
                                    <div className="custom-select-wrapper">
                                        <button
                                            className={`custom-trigger ${isSortOpen ? 'active' : ''}`}
                                            onClick={() => setIsSortOpen(!isSortOpen)}
                                        >
                                            <span>{sortOptions.find(o => o.value === sortBy)?.label}</span>
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
                                    <button className="write-review-btn-hub">Write a Review</button>
                                </div>
                            </div>

                            {/* Reviews List */}
                            <div className="reviews-hub-list">
                                {reviewsToShow.length > 0 ? (
                                    reviewsToShow.map(review => (
                                        <div key={review.id} className="hub-review-card fade-in-up">
                                            <div className="hub-card-header">
                                                <div className="hub-user-meta">
                                                    <span className="hub-user-name">{review.user}</span>
                                                    <span className="hub-verified-badge">Verified Buyer</span>
                                                </div>
                                                <span className="hub-review-date">{review.date}</span>
                                            </div>
                                            <div className="hub-rating-stars">{renderStars(review.rating)}</div>
                                            <p className="hub-review-text">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="no-reviews-hub">
                                        <p>No reviews match your criteria.</p>
                                    </div>
                                )}
                            </div>

                            {/* Load More */}
                            {visibleReviews < sortedReviews.length && (
                                <div className="load-more-container">
                                    <button
                                        className="load-more-btn"
                                        onClick={() => setVisibleReviews(prev => prev + 5)}
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeSection === 'faq' && (
                        <div className="content-section faq-layout">
                            <div className="faq-container">
                                {product.faq && product.faq.length > 0 ? (
                                    product.faq.map((item, i) => (
                                        <AccordionItem
                                            key={i}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openFaqId === i}
                                            onClick={() => toggleFaq(i)}
                                        />
                                    ))
                                ) : (
                                    <p className="no-faq">No frequently asked questions for this item.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
