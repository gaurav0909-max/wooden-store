import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../../data/sliceData';

const Hero = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-neutral-950 rounded-lg">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Main image with gradient overlay */}
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

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-16 pb-20">
          <div className="max-w-xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 text-pretty ${currentSlide === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
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
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${currentSlide === index
              ? 'w-8 bg-amber-500'
              : 'w-2 bg-white/50 hover:bg-white/75'
              } h-2 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
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
    </section>
  );
};

export default Hero;