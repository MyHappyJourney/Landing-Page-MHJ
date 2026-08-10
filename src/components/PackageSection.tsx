import React, { useState, useRef } from 'react';
import { PACKAGES } from '../data/tourData';
import { PackageCard } from './PackageCard';
import { PackageItem } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PackageSectionProps {
  onViewDetails: (pkg: PackageItem) => void;
  onGetQuote: (pkg: PackageItem) => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onViewDetails, onGetQuote }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(index, PACKAGES.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="packages-section" className="py-10 sm:py-16 bg-[#F6F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#0B3996] font-bold text-xs uppercase tracking-widest bg-[#EBF2FF] px-3 py-1 rounded-full border border-[#0B3996]/20">
            POPULAR ITINERARIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-2 tracking-tight">
            CHOOSE YOUR KERALA TOUR 🌴
          </h2>
          <p className="text-xs sm:text-base text-gray-600 mt-2">
            Handcrafted tour packages with private AC vehicle, handpicked hotels, and 24x7 local support.
          </p>
        </div>

        {/* Desktop Layout: 4-column Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewDetails={onViewDetails}
              onGetQuote={onGetQuote}
            />
          ))}
        </div>

        {/* Mobile / Tablet Swipeable Carousel */}
        <div className="lg:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center"
              >
                <PackageCard
                  pkg={pkg}
                  onViewDetails={onViewDetails}
                  onGetQuote={onGetQuote}
                />
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots & Nav Controls */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {PACKAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? 'w-8 bg-[#0B3996]' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToCard(Math.min(PACKAGES.length - 1, activeIndex + 1))}
              disabled={activeIndex === PACKAGES.length - 1}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next Package"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
