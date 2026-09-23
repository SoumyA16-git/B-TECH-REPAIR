import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface TrustBarProps {
  onReviewsClick?: () => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onReviewsClick }) => {
  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-12 sm:py-20 lg:py-24 border-b border-[#CCD4D9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle horizontal line running through the section above */}
        <div className="w-full h-px bg-[#BEC8CD]/60 mb-8 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
          
          {/* Left Column: 5.0 and 468 customer reviews */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#181B1D] leading-none">
                {BUSINESS_INFO.rating}
              </span>
              <div className="flex items-center text-[#D17A2A]">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#D17A2A] stroke-none" />
              </div>
            </div>
            
            <p className="font-mono text-xs sm:text-base text-[#181B1D]/75 tracking-normal">
              {BUSINESS_INFO.reviewCount} customer reviews on Google
            </p>

            {onReviewsClick && (
              <button
                onClick={onReviewsClick}
                className="inline-block pt-1 text-xs font-mono text-[#16496B] hover:text-[#181B1D] underline underline-offset-4 cursor-pointer"
              >
                Read verified local accounts →
              </button>
            )}
          </div>

          {/* Right Column: Spacious statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#181B1D] leading-snug tracking-tight text-balance">
              Professional appliance repair, doorstep service and practical solutions for everyday equipment.
            </p>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#BEC8CD]/40 flex flex-wrap gap-4 sm:gap-8 text-[11px] sm:text-xs font-mono text-[#181B1D]/60 uppercase tracking-wider">
              <div>LOCATION: PATIA, BHUBANESWAR</div>
              <div>SERVICE: RESIDENTIAL & COMMERCIAL</div>
              <div>SCOPE: ON-SITE DIAGNOSIS</div>
            </div>
          </div>
        </div>

        {/* Subtle horizontal line running through the section below */}
        <div className="w-full h-px bg-[#BEC8CD]/60 mt-8 sm:mt-12 sm:mb-2" />

      </div>
    </section>
  );
};
