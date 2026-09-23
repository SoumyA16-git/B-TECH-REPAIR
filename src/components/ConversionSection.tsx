import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ConversionSectionProps {
  onOpenBooking: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full bg-[#181B1D] text-[#F5F5F2] pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-[#333A40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className="font-mono text-xs text-[#D17A2A] tracking-wider uppercase">
              DESK 05 / IMMEDIATE SERVICE DISPATCH
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F2] leading-[1.05]">
              Got an appliance problem?
            </h2>

            <p className="text-xl sm:text-2xl text-[#BEC8CD] font-normal">
              Tell us what stopped working.
            </p>

            {/* Two Large Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#16496B] hover:bg-[#123852] text-[#F5F5F2] text-base font-semibold tracking-wide transition-colors border border-[#16496B]"
              >
                <Phone className="w-4 h-4 text-[#D17A2A]" />
                <span>CALL 072057 19060</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-transparent hover:bg-white/10 text-[#F5F5F2] text-base font-medium tracking-wide transition-colors border border-[#F5F5F2]/40 cursor-pointer"
              >
                <span>REQUEST SERVICE</span>
                <ArrowUpRight className="w-4 h-4 text-[#DCE2E5]" />
              </button>
            </div>

            {/* Address & Timings */}
            <div className="pt-6 border-t border-[#333A40] text-xs font-mono text-[#BEC8CD]/80 space-y-1">
              <div>LOCATION: NANDANKANAN RD, NEAR KOEL CAMPUS, SISHU VIHAR, PATIA</div>
              <div>OPERATIONAL HOURS: MONDAY – SUNDAY 8:00 AM – 9:00 PM</div>
            </div>
          </div>

          {/* Right Column: Large photograph of technician tools or hands repairing an appliance */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full max-w-full">
            <div className="relative border border-[#333A40] bg-[#131517] overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full">
                <img
                  src={REPAIR_IMAGES.technicianHands}
                  alt="Technician hands holding specialized diagnostic tools repairing appliance terminal wiring"
                  className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.82] saturate-[0.88]"
                />
              </div>

              {/* Technical label overlay */}
              <div className="p-3 sm:p-4 bg-[#131517] border-t border-[#333A40] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-[#BEC8CD]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
                  <span>ON-SITE DIAGNOSTIC TOOLING</span>
                </div>
                <span>BHUBANESWAR FIELD UNIT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
