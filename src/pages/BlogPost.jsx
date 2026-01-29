import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'

const BlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const post = blogPosts.find(p => p.id === parseInt(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!post) {
        return (
            <div className="blog-post-error">
                <h2>Article Not Found</h2>
                <Link to="/blog" className="back-link">Return to Journal</Link>
            </div>
        )
    }

    const nextPost = blogPosts.find(p => p.id === post.id + 1) || blogPosts[0]

    return (
        <div className="blog-post-page">
            <div className="blog-post-bg"></div>

            <div className="blog-post-grid">
                <aside className="post-sidebar fade-in-up">
                    <div className="sidebar-content">
                        <Link to="/blog" className="back-nav">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            Back to Journal
                        </Link>

                        <div className="post-header">
                            <div className="post-meta-header">
                                <span className="post-category">{post.category}</span>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <h1 className="post-title">{post.title}</h1>
                        </div>

                        <div className="post-sidebar-footer">
                            <span className="share-label">Share Article</span>
                            <div className="social-icons">
                                <button className="social-btn" aria-label="Share on Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </button>
                                <button className="social-btn" aria-label="Share on Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </button>
                                <button className="social-btn" aria-label="Share on LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </button>
                            </div>
                        </div>

                        <div className="sidebar-extra desktop-only">
                            <div className="sidebar-section-header">
                                <span className="sidebar-label">Community</span>
                                <h4 className="sidebar-heading">Reviews (3)</h4>
                            </div>

                            <div className="demo-reviews">
                                <div className="review-item">
                                    <div className="review-header">
                                        <span className="reviewer-name">Sarah J.</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <p className="review-text">"Absolutely exquisite writing. A true reminder to slow down."</p>
                                </div>
                                <div className="review-item">
                                    <div className="review-header">
                                        <span className="reviewer-name">M. Al-Fayed</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <p className="review-text">"The imagery captured the essence of the atelier perfectly."</p>
                                </div>
                            </div>

                            <div className="write-review-section">
                                <span className="sidebar-label">Leave a Rating</span>
                                <div className="review-stars-container">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            className="star-btn"
                                            aria-label={`Rate ${star} stars`}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Your thoughts..."
                                        className="minimal-input"
                                    />
                                    <button className="minimal-submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="post-main-content fade-in-up delay-1">
                    <div className="post-hero-image-wrapper">
                        <img src={post.image} alt={post.title} className="post-hero-image" />
                    </div>

                    <div className="post-content-wrapper">
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>

                    <div className="mobile-post-footer mobile-only">
                        <div className="post-sidebar-footer">
                            <span className="share-label">Share Article</span>
                            <div className="social-icons">
                                <button className="social-btn" aria-label="Share on Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </button>
                                <button className="social-btn" aria-label="Share on Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </button>
                                <button className="social-btn" aria-label="Share on LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </button>
                            </div>
                        </div>

                        <div className="sidebar-extra">
                            <div className="sidebar-section-header">
                                <span className="sidebar-label">Community</span>
                                <h4 className="sidebar-heading">Reviews (3)</h4>
                            </div>

                            <div className="demo-reviews">
                                <div className="review-item">
                                    <div className="review-header">
                                        <span className="reviewer-name">Sarah J.</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <p className="review-text">"Absolutely exquisite writing. A true reminder to slow down."</p>
                                </div>
                                <div className="review-item">
                                    <div className="review-header">
                                        <span className="reviewer-name">M. Al-Fayed</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <p className="review-text">"The imagery captured the essence of the atelier perfectly."</p>
                                </div>
                            </div>

                            <div className="write-review-section">
                                <span className="sidebar-label">Leave a Rating</span>
                                <div className="review-stars-container">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            className="star-btn"
                                            aria-label={`Rate ${star} stars`}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Your thoughts..."
                                        className="minimal-input"
                                    />
                                    <button className="minimal-submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="next-read-section">
                        <h3 className="next-read-heading">Up Next</h3>
                        <Link to={`/blog/${nextPost.id}`} className="next-read-card">
                            <div className="next-read-content">
                                <span className="next-label">Next Story</span>
                                <h4 className="next-title">{nextPost.title}</h4>
                                <span className="read-now-link">Read Now &rarr;</span>
                            </div>
                            <div className="next-read-image-wrapper">
                                <img src={nextPost.image} alt={nextPost.title} className="next-read-image" />
                            </div>
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default BlogPost
