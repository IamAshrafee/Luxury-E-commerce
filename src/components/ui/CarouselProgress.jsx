import React from 'react'
import './CarouselProgress.css'

const CarouselProgress = ({ progress = 0 }) => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100)

    return (
        <div className="carousel-progress-track">
            <div
                className="carousel-progress-thumb"
                style={{ width: `${clampedProgress}%` }}
            >
                <div className="progress-glow"></div>
            </div>
        </div>
    )
}

export default CarouselProgress
