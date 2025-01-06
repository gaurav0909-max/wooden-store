import React from 'react';

const BackgroundSlides = ({ slides, currentSlide }) => {
    return (
        <div className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="relative w-full h-full">
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BackgroundSlides;
