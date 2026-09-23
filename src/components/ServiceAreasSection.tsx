import React from 'react';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface ServiceAreasSectionProps {
  onOpenBooking?: () => void;
}

const LOCAL_AREAS = [
  'Patia', 'KIIT Campus', 'Infocity', 'Chandrasekharpur', 'Sailashree Vihar',
  'Damana', 'Jayadev Vihar', 'Nayapalli', 'Saheed Nagar', 'Master Canteen',
  'Khandagiri', 'Old Town', 'Cuttack Link Road', 'CDA Sector'
];

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onOpenBooking }) => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'B-Tech Repair Nandankanan Rd, near Koel Campus, Sishu Vihar, Patia, Bhubaneswar, Odisha 751024'
  )}`;

  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-20 sm:py-32 border-b border-[#CCD4D9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#CCD4D9]">
          <span className="font-mono text-xs text-[#16496B] tracking-wider uppercase">
            LOCATION 04 / FIELD DISPATCH RADIUS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181B1D] mt-2">
            Serving Bhubaneswar and nearby areas.
          </h2>
        </div>

        {/* Strong Geographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Visual Anchor "PATIA" + Address + Get Directions */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Visual Anchor: PATIA */}
            <div>
              <span className="font-mono text-xs text-[#181B1D]/50 uppercase tracking-widest block mb-1">
                DISPATCH HUB & WORKSHOP BASE
              </span>
              <div className="text-6xl sm:text-8xl font-bold tracking-tighter text-[#181B1D]">
                PATIA
              </div>
              <div className="text-lg sm:text-xl font-medium text-[#16496B] mt-1">
                Bhubaneswar · Cuttack · Nearby Areas
              </div>
            </div>

            {/* Address */}
            <div className="p-6 bg-[#EAECE9]/50 border border-[#CCD4D9] space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D17A2A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs text-[#181B1D]/60 uppercase tracking-wider mb-1">
                    WORKSHOP & DESK LOCATION
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#181B1D] leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#181B1D] hover:bg-[#16496B] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D17A2A]" />
                  <span>GET DIRECTIONS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {onOpenBooking && (
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#CCD4D9] hover:bg-white text-[#181B1D] text-xs font-mono tracking-wider transition-colors cursor-pointer"
                  >
                    <span>SCHEDULE DOORSTEP VISIT</span>
                  </button>
                )}
              </div>
            </div>

            <div className="font-mono text-xs text-[#181B1D]/70 space-y-1">
              <div>DAILY DISPATCH: 8:00 AM – 9:00 PM (MONDAY TO SUNDAY)</div>
              <div>AVERAGE DOORSTEP TRANSIT TIME: 45 – 90 MINUTES</div>
            </div>
          </div>

          {/* Right Column: Clean Grid of Covered Sectors & Landmarks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs text-[#181B1D]/60 uppercase tracking-wider">
              COVERED RESIDENTIAL & COMMERCIAL LOCALITIES
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LOCAL_AREAS.map((area) => (
                <div
                  key={area}
                  className="p-3 border border-[#CCD4D9] bg-white/60 font-mono text-xs text-[#181B1D] flex items-center justify-between"
                >
                  <span>{area}</span>
                  <span className="w-1.5 h-1.5 bg-[#16496B]" />
                </div>
              ))}
            </div>

            {/* Plain authentic geographical note */}
            <div className="p-4 bg-[#EAECE9]/40 border border-[#CCD4D9] text-xs font-mono text-[#181B1D]/80">
              Field technicians carry portable manifold gauges, replacement capacitors, and jet pump cleaning tools directly to customer homes across these zones.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
