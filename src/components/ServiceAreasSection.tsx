import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { SERVICE_AREAS_LIST, BUSINESS_INFO } from '../data/repairData';

interface ServiceAreasSectionProps {
  onOpenBooking: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="service-areas" className="py-16 md:py-24 border-b border-[#CCD4D9] bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            LOCAL DOORSTEP REACH
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            We Come to You.
          </h2>
          <div className="text-base sm:text-lg font-semibold text-[#164B70] mt-2">
            Bhubaneswar · Cuttack · Nearby Areas
          </div>
          <p className="text-xs sm:text-sm text-[#171A1D]/70 mt-1">
            Service availability may vary depending on location.
          </p>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS_LIST.map((area, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#CCD4D9] p-6 space-y-3 hover:border-[#164B70] transition-colors"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#CCD4D9]/60">
                <span className="font-bold text-base text-[#171A1D]">
                  {area.name}
                </span>
                <span className="font-mono text-[10px] text-[#164B70] bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">
                  {area.zone}
                </span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-[#171A1D]/50 font-mono text-[10px] uppercase">
                  KEY LANDMARKS / SECTORS:
                </div>
                <p className="text-[#171A1D]/80">
                  {area.landmarks}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#171A1D]/70 border-t border-[#CCD4D9]/50">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D9822B]" />
                  <span>{area.timing}</span>
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-[#164B70] hover:underline font-semibold cursor-pointer"
                >
                  Book Here →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Service Desk Location Anchor */}
        <div className="mt-8 border border-[#CCD4D9] bg-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#164B70] font-semibold uppercase">
              REGISTERED SERVICE HUB
            </div>
            <h4 className="text-base font-bold text-[#171A1D]">
              B-Tech Repair Service Center
            </h4>
            <p className="text-xs text-[#171A1D]/75">
              {BUSINESS_INFO.address}
            </p>
            <div className="text-[11px] font-mono text-[#171A1D]/60 pt-1">
              {BUSINESS_INFO.hours}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="py-2.5 px-4 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-mono font-medium transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="py-2.5 px-4 bg-[#171A1D] hover:bg-black text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Check Technician Availability
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
