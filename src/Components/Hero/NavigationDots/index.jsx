import React from 'react';

const NavigationDots = ({ slides, currentSlide, setCurrentSlide }) => {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${currentSlide === index ? 'w-8 bg-amber-500' : 'w-2 bg-white/50 hover:bg-white/75'} h-2 rounded-full`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
