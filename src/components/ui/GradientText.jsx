import React from 'react';
import './GradientText.css';

export default function GradientText({
    children,
    className = '',
    colors = ['#002395', '#FF4757', '#002395', '#FF4757', '#002395'], // App colors: Secondary Blue -> Primary Red
    animationSpeed = 8,
    showBorder = false,
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
            <div className="text-content" style={gradientStyle}>
                {children}
            </div>
        </div>
    );
}
