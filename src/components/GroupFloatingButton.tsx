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
        className="flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#0B3996] via-[#082b75] to-[#041a4a] hover:from-[#FF4B00] hover:to-[#e04200] text-white pl-2.5 sm:pl-3 pr-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full shadow-xl sm:shadow-2xl border border-white/80 hover:border-white transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Travelling with more than 9 people? Click Here for group enquiry on WhatsApp"
      >
        {/* Animated Group Icon Container */}
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/20 text-white shrink-0 group-hover:bg-white group-hover:text-[#FF4B00] transition-colors">
          <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        {/* Message Text */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs font-semibold text-amber-300 group-hover:text-amber-200 transition-colors whitespace-nowrap">
            Travelling with more than 9 people?
          </span>
          <span className="text-[11px] sm:text-[13px] font-black tracking-tight text-white flex items-center gap-1">
            <span>Click Here</span>
            <MessageCircle className="w-3 h-3 text-emerald-400 fill-emerald-400/40 group-hover:text-white group-hover:fill-white/30 inline-block" />
          </span>
        </div>
      </a>
    </div>
  );
};

