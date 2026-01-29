import React, { useRef, useEffect } from 'react'
import './ProductShowcase.css'
import CarouselControl from '../ui/CarouselControl'
import CarouselProgress from '../ui/CarouselProgress'
import perfumeImg from '../../assets/images/perfume.png'
import watchImg from '../../assets/images/watch.png'
import crystalImg from '../../assets/images/crystal.png'

const products = [
    {
        id: 1,
        name: "Or Noir",
        category: "Parfum",
        price: "€450",
        image: perfumeImg,
    },
    {
        id: 2,
        name: "Chronos One",
        category: "Timepiece",
        price: "€12,500",
        image: watchImg,
    },
    {
        id: 3,
        name: "Lumina",
        category: "Fine Jewelry",
        price: "€3,200",
        image: crystalImg,
    },
    // Duplicate for scrolling effect demo
    {
        id: 4,
        name: "Or Noir II",
        category: "Parfum",
        price: "€450",
        image: perfumeImg,
    }
]

const ProductShowcase = () => {
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(true)
    const [progress, setProgress] = React.useState(0)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // buffer

            // Calculate progress percentage
            const maxScroll = scrollWidth - clientWidth
            const currentProgress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
            setProgress(currentProgress)
        }
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            el.addEventListener('scroll', checkScroll)
            // Check initially
            checkScroll()
            return () => el.removeEventListener('scroll', checkScroll)
        }
    }, [])

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 400 // Approximate card width + gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="showcase" id="collections">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Curated <span className="gold-text">Excellence</span></h2>
                    <p className="section-subtitle">Discover our masterpiece collection defined by rarity.</p>
                </div>

                <div className="showcase-wrapper">
                    <CarouselControl
                        direction="prev"
                        onClick={() => scroll('left')}
                        isVisible={canScrollLeft}
                    />

                    <div className="carousel-container" ref={scrollRef}>
                        {products.map((product) => (
                            <div key={product.id} className="product-card glass-panel">
                                <div className="card-image">
                                    <img src={product.image} alt={product.name} loading="lazy" />
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

                    <CarouselControl
                        direction="next"
                        onClick={() => scroll('right')}
                        isVisible={canScrollRight}
                    />
                </div>

                <CarouselProgress progress={progress} />
            </div>
        </section>
    )
}

export default ProductShowcase
