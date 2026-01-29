import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
    {
        id: 1,
        title: "The Art of Slow Living",
        category: "Lifestyle",
        date: "January 24, 2026",
        image: "https://images.unsplash.com/photo-1507643179173-61b039ed6930?q=80&w=1000&auto=format&fit=crop",
        excerpt: "Discover how to cultivate presence and luxury in your everyday moments through the philosophy of slow living."
    },
    {
        id: 2,
        title: "Sustainable Luxury: A New Era",
        category: "Sustainability",
        date: "January 18, 2026",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        excerpt: "Exploring the intersection of ethical craftsmanship and premium aesthetics in modern fashion."
    },
    {
        id: 3,
        title: "Behind the Seams: The Atelier",
        category: "Craftsmanship",
        date: "January 10, 2026",
        image: "https://images.unsplash.com/photo-1589785250499-5231c6b12a32?q=80&w=1000&auto=format&fit=crop",
        excerpt: "An exclusive look into the meticulous process of creating our signature leather collection."
    },
    {
        id: 4,
        title: "Curating Your Personal Sanctuary",
        category: "Interiors",
        date: "January 05, 2026",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
        excerpt: "Expert tips on transforming your living space into a retreat of comfort and elegance."
    }
];

const Blog = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="blog-page">
            <div className="blog-bg"></div>

            <div className="container blog-container">
                <header className="blog-header fade-in-up">
                    <h1 className="blog-title">Le <span className="gold-text">Journal</span></h1>
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
                            <span className="post-meta">{featuredPost.category} — {featuredPost.date}</span>
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
                    <div className="blog-grid">
                        {recentPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                                <div className="card-image-wrapper">
                                    <img src={post.image} alt={post.title} className="card-image" />
                                    <div className="card-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <span className="post-meta-small">{post.category} — {post.date}</span>
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
