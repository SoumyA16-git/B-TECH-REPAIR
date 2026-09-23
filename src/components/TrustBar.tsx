import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface TrustBarProps {
  onReviewsClick?: () => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onReviewsClick }) => {
  return (
    <div className="border-b border-[#CCD4D9] bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-[#CCD4D9]">
          
          {/* Factual Google Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#D9822B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-mono tracking-tight text-[#171A1D]">5.0</span>
                <span className="text-xs text-[#171A1D]/60 font-mono">/ 468 GOOGLE REVIEWS</span>
              </div>
              <button 
                onClick={onReviewsClick}
                className="text-[11px] text-[#164B70] hover:underline block text-left cursor-pointer"
              >
                Read verified customer reviews →
              </button>
            </div>
          </div>

          {/* Doorstep Service Coverage */}
          <div className="pt-4 md:pt-0 md:pl-6 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#164B70] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#171A1D]/60">
                DOORSTEP SERVICE
              </div>
              <div className="text-sm font-semibold text-[#171A1D]">
                BHUBANESWAR + NEARBY AREAS
              </div>
              <div className="text-xs text-[#171A1D]/70 mt-0.5">
                Patia · Cuttack · Chandrasekharpur & Suburbs
              </div>
            </div>
          </div>

          {/* Appliance Categories */}
          <div className="pt-4 md:pt-0 md:pl-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#164B70] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#171A1D]/60">
                CORE TECHNICAL FOCUS
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#171A1D] flex flex-wrap gap-x-2">
                <span>AC</span>
                <span>·</span>
                <span>FRIDGE</span>
                <span>·</span>
                <span>WASHING MACHINE</span>
                <span>·</span>
                <span>MICROWAVE</span>
              </div>
              <div className="text-[11px] text-[#171A1D]/60 mt-0.5">
                Doorstep diagnostic & component repair
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
