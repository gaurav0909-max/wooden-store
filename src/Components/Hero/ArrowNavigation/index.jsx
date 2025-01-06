import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ArrowNavigation = ({ prevSlide, nextSlide }) => {
    return (
        <>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </>
    );
};

export default ArrowNavigation;
