import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { REPAIR_IMAGES } from '../data/repairImages';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] bg-[#181B1D] text-[#F5F5F2] flex flex-col justify-between overflow-hidden">
      {/* Background: Full-width documentary photograph of a technician servicing an actual split AC */}
      <div className="absolute inset-0 z-0">
        <img
          src={REPAIR_IMAGES.heroTechnician}
          alt="Technician servicing split air conditioner components and pipework"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] saturate-[0.85]"
        />
        {/* Subtle physical film/lens gradient to guarantee typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D] via-[#181B1D]/50 to-[#181B1D]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#181B1D]/70" />
      </div>

      {/* Top Left: B-TECH REPAIR / FIELD SERVICE · BHUBANESWAR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex items-center justify-between border-b border-[#F5F5F2]/15 pb-4">
          <div className="space-y-1">
            <span className="block font-mono text-xs sm:text-sm tracking-widest uppercase text-[#F5F5F2] font-semibold">
              B-TECH REPAIR
            </span>
            <span className="block font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#DCE2E5]/70">
              FIELD SERVICE · BHUBANESWAR
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#DCE2E5]/60">
            <span className="inline-block w-1.5 h-1.5 bg-[#D17A2A]" />
            <span>DISPATCHING MON–SUN 8:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-auto">
        <div className="max-w-4xl space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F2] leading-[1.08] text-balance">
            When something stops working, <br className="hidden sm:inline" />
            <span className="text-[#DCE2E5]">call the people who fix it.</span>
          </h1>

          {/* Small Supporting Line */}
          <p className="text-sm sm:text-xl text-[#BEC8CD] max-w-2xl font-normal leading-relaxed pt-1 sm:pt-2">
            AC, refrigerator, washing machine and microwave repair & service across Bhubaneswar and nearby areas.
          </p>

          {/* Bottom Left CTAs */}
          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16496B] hover:bg-[#123852] text-[#F5F5F2] text-xs sm:text-base font-semibold tracking-wide transition-colors border border-[#16496B]"
            >
              <Phone className="w-4 h-4 text-[#D17A2A]" />
              <span>CALL 072057 19060</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-[#F5F5F2]/10 text-[#F5F5F2] text-xs sm:text-base font-medium tracking-wide transition-colors border border-[#F5F5F2]/40 cursor-pointer"
            >
              <span>REQUEST SERVICE</span>
              <ArrowUpRight className="w-4 h-4 text-[#DCE2E5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Technical Bar & Bottom Right Vertical Technical Label */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="flex items-end justify-between border-t border-[#F5F5F2]/15 pt-6">
          
          {/* Bottom Left Metric Snippet */}
          <div className="flex items-center gap-6 sm:gap-12 font-mono text-xs text-[#BEC8CD]">
            <div>
              <span className="text-[#D17A2A] mr-2">●</span>
              <span>PATIA / SISHU VIHAR</span>
            </div>
            <div className="hidden md:block">
              <span>RESPONSE: 60–90 MIN</span>
            </div>
            <div className="hidden sm:block">
              <span>PRE-REPAIR DIAGNOSIS</span>
            </div>
          </div>

          {/* Bottom Right: Small vertical technical label */}
          <div className="text-right font-mono text-[11px] sm:text-xs tracking-wider text-[#BEC8CD]/80 space-y-1">
            <div className="hover:text-[#F5F5F2] transition-colors">AC</div>
            <div className="hover:text-[#F5F5F2] transition-colors">REFRIGERATION</div>
            <div className="hover:text-[#F5F5F2] transition-colors">LAUNDRY</div>
            <div className="hover:text-[#F5F5F2] transition-colors">MICROWAVE</div>
          </div>
        </div>
      </div>
    </section>
  );
};
