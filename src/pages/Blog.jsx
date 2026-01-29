import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

import { blogPosts } from '../data/blogPosts'

const Blog = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');

    // Extract unique categories (ignoring Feature status for now, just all available)
    const categories = [...new Set(blogPosts.map(post => post.category))];

    // Filter logic
    // We typically want to show "Recent" posts (excluding featured) when filtering? 
    // Or if a user selects a category, should it show the Featured post if it matches?
    // Let's stick to filtering the 'grid' list for now. 
    // Ideally, if a category is selected, maybe we shouldn't segregate "Featured" vs "Recent" 
    // but the current design calls for a Featured Hero. Let's keep the hero static as "Featured" 
    // and filter the list below.

    // Original slice was (1) to skip featured.
    // If 'All', use blogPosts.slice(1).
    // If category selected, filter ALL posts (including potentially the featured one if it matches?) 
    // or just the recent ones? 
    // UX Decision: Let's filter from the *entire* pool for the grid if a category is picked? 
    // Or just the recent pool. 
    // Let's filter the *entire* pool effectively, but exclude the currently displayed Featured One 
    // if we are in "All" mode. 
    // Actually simpler: Just filter `blogPosts.slice(1)` for the list. 
    // Wait, if I want to see "Lifestyle" posts, I expect to see ALL of them.
    // Let's just filter `blogPosts.slice(1)` for now to preserve the layout structure.

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);
    const filteredPosts = activeCategory === 'All'
        ? recentPosts
        : recentPosts.filter(post => post.category === activeCategory);

    return (
        <div className="blog-page">
            <div className="blog-bg"></div>

            <div className="container blog-container">
                <header className="blog-header fade-in-up">
                    <h1 className="blog-title">Luxe <span className="gold-text">Journal</span></h1>
                    <p className="blog-subtitle">
                        Stories of craftsmanship, culture, and the art of living well.
                    </p>
                </header>

                <section className="featured-section fade-in-up delay-1">
                    <div className="featured-card">
                        <div className="featured-image-wrapper">
                            <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
                            <div className="featured-overlay"></div>
                        </div>
                        <div className="featured-content">
                            <div className="meta-group">
                                <span className="category-tag">{featuredPost.category}</span>
                                <span className="meta-date">{featuredPost.date}</span>
                            </div>
                            <h2 className="featured-title">{featuredPost.title}</h2>
                            <p className="featured-excerpt">{featuredPost.excerpt}</p>
                            <Link to={`/blog/${featuredPost.id}`} className="read-more-link">
                                Read Article
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="recent-posts-section fade-in-up delay-2">
                    <h3 className="section-heading">Recent Stories</h3>

                    <div className="category-filter">
                        <button
                            className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('All')}
                        >
                            All
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="blog-grid">
                        {filteredPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                                <div className="card-image-wrapper">
                                    <img src={post.image} alt={post.title} className="card-image" />
                                    <div className="card-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <div className="card-meta">
                                        <span className="card-category">{post.category}</span>
                                        <span className="card-date">{post.date}</span>
                                    </div>
                                    <h4 className="card-title">{post.title}</h4>
                                    <span className="read-more-text">Read Story</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="newsletter-section fade-in-up delay-3">
                    <div className="newsletter-box">
                        <h3>Subscribe to Le Journal</h3>
                        <p>Receive curated stories and exclusive invites directly to your inbox.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your Email Address" className="newsletter-input" />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blog
