import React from 'react';
import { Users, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_GROUP_MSG } from '../data/tourData';

export const GroupFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_GROUP_MSG}`;

  return (
    <div className="fixed bottom-[78px] md:bottom-6 right-2.5 sm:right-6 z-40 flex items-center group max-w-[calc(100vw-20px)]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-group-enquiry-btn"
        className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#FF4B00] via-[#FF3800] to-[#E02E00] hover:from-[#FF5D17] hover:to-[#D02600] text-white pl-2.5 sm:pl-3.5 pr-3.5 sm:pr-5 py-2 sm:py-2.5 rounded-full shadow-[0_8px_25px_rgba(255,75,0,0.45)] hover:shadow-[0_10px_30px_rgba(255,75,0,0.65)] border-2 border-white/90 hover:border-white transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Travelling with more than 9 people? Click Here for group enquiry on WhatsApp"
      >
        {/* Animated Group Icon Container */}
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-[#FF4B00] shadow-sm shrink-0 group-hover:scale-110 transition-transform">
          <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-[#FF4B00]/20" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500 border border-white"></span>
          </span>
        </div>

        {/* Message Text */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs font-bold text-yellow-200 tracking-tight whitespace-nowrap">
            Travelling with more than 9 people?
          </span>
          <span className="text-[11px] sm:text-[13px] font-black tracking-tight text-white flex items-center gap-1.5 drop-shadow-xs">
            <span>Click Here</span>
            <span className="inline-flex items-center gap-0.5 bg-white/20 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-extrabold text-white">
              <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-emerald-300 text-emerald-300 inline-block" />
              WhatsApp
            </span>
          </span>
        </div>
      </a>
    </div>
  );
};

