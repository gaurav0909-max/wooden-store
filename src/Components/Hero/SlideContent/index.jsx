import { ArrowRight } from 'lucide-react';
import React from 'react';

const SlideContent = ({ slides, currentSlide }) => {
    return (
        <div className="flex flex-col justify-center h-full pt-16 pb-20">
            <div className="max-w-xl">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-700 text-pretty ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ display: currentSlide === index ? 'block' : 'none' }}
                    >
                        <p className="text-sm md:text-base text-amber-400 font-medium tracking-wider uppercase mb-4">
                            {slide.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-300 mb-6 leading-tight">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                            {slide.description}
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="group inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors">
                                {slide.cta}
                                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlideContent;
