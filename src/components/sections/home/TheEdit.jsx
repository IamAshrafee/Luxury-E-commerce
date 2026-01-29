import React, { useEffect, useRef } from 'react'
import './TheEdit.css'
import perfumeImg from '../../../assets/images/edit_perfume.png'
import watchImg from '../../../assets/images/edit_watch.png'
import jewelryImg from '../../../assets/images/edit_jewelry.png'

const TheEdit = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const editItems = [
        {
            id: 1,
            title: "Evening Rituals",
            image: perfumeImg,
            text: "Scent that lingers long after midnight."
        },
        {
            id: 2,
            title: "Daily Drivers",
            image: watchImg,
            text: "Precision engineering for the everyday."
        },
        {
            id: 3,
            title: "Statement Pieces",
            image: jewelryImg,
            text: "Jewelry that demands to be seen."
        }
    ]

    return (
        <section className="the-edit">
            <div className="container">
                <div className="edit-header">
                    <h2 className="edit-title">The <span className="highlight-text">Edit</span></h2>
                    <p className="edit-subtitle">Curated essentials for the modern connoisseur.</p>
                </div>

                <div className="edit-grid">
                    {editItems.map((item, index) => (
                        <div key={item.id} className="edit-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="edit-image-wrapper">
                                <img src={item.image} alt={item.title} className="edit-image" />
                            </div>
                            <div className="edit-content">
                                <span className="edit-number">0{index + 1}</span>
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-text">{item.text}</p>
                                <a href="#" className="edit-link">Shop Look</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TheEdit
