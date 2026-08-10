import React from 'react';
import { Award, Users, Tag, Sliders, Headphones } from 'lucide-react';
import { TRUST_ITEMS } from '../data/tourData';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
      case 'Users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
      case 'Tag':
        return <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
      default:
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B3996]" />;
    }
  };

  return (
    <section className="bg-white border-b border-gray-100 py-4 sm:py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop 5-Column / Mobile Grid or Flex Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#F6F7F6] sm:bg-transparent border sm:border-0 border-gray-100/80 ${
                index === TRUST_ITEMS.length - 1 && TRUST_ITEMS.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EBF2FF] flex items-center justify-center shrink-0 border border-[#0B3996]/10">
                {getIcon(item.iconName)}
              </div>
              <div className="text-left">
                <p className="font-extrabold text-gray-900 text-xs sm:text-sm leading-snug">
                  {item.title}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600 font-medium leading-tight">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
