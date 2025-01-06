import React from 'react';
import { slides } from '../../data/sliceData';
import BackgroundSlides from './BackgroundSlides';
import SlideContent from './SlideContent';
import NavigationDots from './NavigationDots';
import ArrowNavigation from './ArrowNavigation';

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
      <BackgroundSlides slides={slides} currentSlide={currentSlide} />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideContent slides={slides} currentSlide={currentSlide} />
      </div>
      <NavigationDots slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <ArrowNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
    </section>
  );
};

export default Hero;
