import React from 'react';
import { MapPin, Sparkles, ArrowRight, Camera } from 'lucide-react';

interface DestinationItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  recommendedDays: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: "munnar",
    name: "Munnar",
    title: "Munnar Tea Country",
    subtitle: "Misty tea hills, Eravikulam National Park & Cheeyappara Waterfalls",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    tags: ["Tea Gardens", "Waterfalls", "Nilgiri Tahr", "Misty Hills"],
    recommendedDays: "2 - 3 Days"
  },
  {
    id: "alleppey",
    name: "Alleppey",
    title: "Alleppey Backwaters",
    subtitle: "Overnight luxury houseboat cruise, palm-fringed canals & serene lagoons",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Houseboat", "Backwaters", "Sunset Cruise", "Shikara Ride"],
    recommendedDays: "1 - 2 Days"
  },
  {
    id: "thekkady",
    name: "Thekkady",
    title: "Thekkady Periyar Reserve",
    subtitle: "Periyar Lake Boat Safari, cardamom spice walks & Kathakali show",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    tags: ["Wildlife Sanctuary", "Elephant Safari", "Spice Gardens", "Kathakali"],
    recommendedDays: "1 - 2 Days"
  },
  {
    id: "kovalam",
    name: "Kovalam & Poovar",
    title: "Kovalam Beach & Poovar",
    subtitle: "Lighthouse beach, golden sand estuary boating & mangrove forests",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tags: ["Lighthouse Beach", "Poovar Estuary", "Mangroves", "Sunset Pier"],
    recommendedDays: "2 - 3 Days"
  },
  {
    id: "athirappilly",
    name: "Athirappilly",
    title: "Athirappilly Waterfalls",
    subtitle: "India's Niagara waterfall set in pristine rainforest reserves",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    tags: ["Majestic Waterfalls", "Rainforest", "Vazhachal", "Nature Walks"],
    recommendedDays: "1 Day"
  },
  {
    id: "wayanad",
    name: "Wayanad",
    title: "Wayanad Hills & Caves",
    subtitle: "Edakkal ancient caves, Banasura Sagar Dam & heart-shaped lake",
    image: "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=800&q=80",
    tags: ["Chembra Peak", "Edakkal Caves", "Waterfalls", "Bamboo Forests"],
    recommendedDays: "2 - 3 Days"
  },
  {
    id: "jatayu",
    name: "Jatayu Rock",
    title: "Jatayu Earth's Center",
    subtitle: "World's largest bird sculpture atop a giant rock with cable car ride",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    tags: ["World Record Statue", "Cable Car", "Panoramic Views", "Mythological Heritage"],
    recommendedDays: "Half Day"
  },
  {
    id: "cochin",
    name: "Cochin / Kochi",
    title: "Historic Fort Kochi",
    subtitle: "Chinese fishing nets, colonial heritage streets & spice markets",
    image: "https://images.unsplash.com/photo-1600100397608-f020f7e43950?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese Nets", "Fort Kochi", "Mattancherry", "Heritage Walk"],
    recommendedDays: "1 - 2 Days"
  }
];

interface DestinationsSectionProps {
  onSelectDestination?: (destinationName: string) => void;
  onGetQuote: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onGetQuote }) => {
  return (
    <section id="destinations-section" className="py-12 sm:py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EBF2FF] text-[#0B3996] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-[#0B3996]/20">
            <Camera className="w-3.5 h-3.5 text-[#0B3996]" />
            <span>Top Attractions in God's Own Country</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            Explore Destination Highlights
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            From misty tea mountains and emerald backwaters to sun-kissed beaches and majestic waterfalls. Every destination can be customized in your personal package!
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DESTINATIONS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
            >
              {/* Image Container with Badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
                  <MapPin className="w-3 h-3 text-[#FF4B00]" />
                  <span>{item.name}</span>
                </div>

                {/* Duration Tag */}
                <div className="absolute top-3 right-3 bg-[#0B3996] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {item.recommendedDays}
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={onGetQuote}
                    className="w-full py-2 bg-[#EBF2FF] hover:bg-[#0B3996] text-[#0B3996] hover:text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 border border-[#0B3996]/20"
                  >
                    <span>Add {item.name} To My Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Note */}
        <div className="mt-10 bg-gradient-to-r from-[#0B3996] to-[#082b75] rounded-2xl p-5 sm:p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-extrabold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Want a Custom Route with Your Favorite Destinations?</span>
            </h4>
            <p className="text-xs sm:text-sm text-blue-100">
              Our Kerala travel advisors will design a day-by-day route tailored specifically for your dates, budget, and group size.
            </p>
          </div>

          <button
            onClick={onGetQuote}
            className="shrink-0 px-6 py-3 bg-[#FF4B00] hover:bg-[#e04200] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all uppercase tracking-wider"
          >
            Create Custom Trip Plan
          </button>
        </div>

      </div>
    </section>
  );
};
