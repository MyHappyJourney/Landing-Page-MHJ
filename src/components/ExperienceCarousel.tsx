import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRAVEL_EXPERIENCES } from '../data/tourData';

interface ExperienceCarouselProps {
  onQuoteClick?: () => void;
}

export const ExperienceCarousel: React.FC<ExperienceCarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalSlides = TRAVEL_EXPERIENCES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Automatic slide rotation every 4 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section id="travel-experiences" className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
          <span>REAL TRAVEL EXPERIENCES</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-3">
          What your Kerala trip could look like with{' '}
          <span className="text-[#0B3996]">My</span>
          <span className="text-[#FF4B00]">Happy</span>
          <span className="text-[#0B3996]">Journey</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
          From misty tea gardens in Munnar to private houseboat sunsets in Alleppey backwaters — immerse yourself in God's Own Country.
        </p>

        {/* Carousel Frame */}
        <div
          className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100 bg-gray-900 aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.1/1]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {TRAVEL_EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={exp.url}
                alt={exp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Top-Right Counter Badge: e.g. 📷 5 / 6 */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/65 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-20 shadow-md">
            <Camera className="w-3.5 h-3.5 text-white" />
            <span>
              {currentIndex + 1} / {totalSlides}
            </span>
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
            id="experience-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
            id="experience-carousel-next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="flex items-center sm:justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6 overflow-x-auto py-2 px-2 max-w-5xl mx-auto scroll-smooth">
          {TRAVEL_EXPERIENCES.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${exp.title}`}
              className={`relative rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shrink-0 ${
                idx === currentIndex
                  ? 'border-2 border-[#FF4B00] ring-2 ring-[#FF4B00]/30 scale-105 shadow-md opacity-100'
                  : 'border border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
              }`}
            >
              <img
                src={exp.url}
                alt={exp.title}
                referrerPolicy="no-referrer"
                className="w-12 h-8 sm:w-16 sm:h-10 md:w-18 md:h-12 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
