import React from 'react'
import './CarouselControl.css'

const CarouselControl = ({ direction, onClick, isVisible = true }) => {
    const isNext = direction === 'next'

    return (
        <button
            className={`carousel-control ${direction} ${!isVisible ? 'hidden' : ''}`}
            onClick={onClick}
            aria-label={isNext ? "Scroll Right" : "Scroll Left"}
        >
            {isNext ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            )}
        </button>
    )
}

export default CarouselControl
