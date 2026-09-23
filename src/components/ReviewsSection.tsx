import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface ReviewsSectionProps {
  onViewAllReviews?: () => void;
}

const SUPPORTING_REVIEWS = [
  {
    quote: "Very polite technician. Cleaned the split AC with a pressure pump inside a protective bag so no water touched the wallpaper. Cooling is completely restored.",
    author: "Prasanta Mohapatra",
    location: "Patia, Bhubaneswar",
    service: "AC Jet Pump Service"
  },
  {
    quote: "Diagnosed the faulty inverter PCB board instead of asking me to replace the entire compressor as another company suggested. Saved me substantial money.",
    author: "Debabrata Rout",
    location: "Chandrasekharpur",
    service: "Inverter AC Repair"
  },
  {
    quote: "Washing machine had a severe drain error code. He arrived within an hour, opened the pump filter, removed foreign obstruction, and checked the spin cycle before leaving.",
    author: "Smita Jena",
    location: "Sishu Vihar, Patia",
    service: "Washing Machine Service"
  }
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onViewAllReviews }) => {
  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-14 sm:py-24 lg:py-32 border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: 5.0 ★ / 468 REVIEWS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-[#CCD4D9] gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
                5.0
              </span>
              <div className="flex items-center text-[#D17A2A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D17A2A] stroke-none" />
                ))}
              </div>
              <span className="font-mono text-xs sm:text-base text-[#181B1D]/60 tracking-wider uppercase">
                468 REVIEWS ON GOOGLE
              </span>
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-[#16496B] uppercase tracking-wider">
              VERIFIED RESIDENTIAL & COMMERCIAL ACCOUNTS
            </div>
          </div>

          {onViewAllReviews && (
            <button
              onClick={onViewAllReviews}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16496B] hover:text-[#181B1D] underline underline-offset-4 cursor-pointer self-start sm:self-auto"
            >
              <span>View all customer entries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Large Editorial Testimonial Layout (No cards with shadows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Main Large Quote */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <blockquote className="text-xl sm:text-3xl lg:text-5xl font-medium tracking-tight text-[#181B1D] leading-snug">
              “They identified the real problem and fixed my AC without recommending unnecessary part replacements.”
            </blockquote>

            <div className="pt-2 font-mono text-xs sm:text-sm text-[#181B1D]/80">
              <div className="font-bold text-[#181B1D]">Subhasish Nayak</div>
              <div className="text-[11px] sm:text-xs text-[#181B1D]/60">Google Review · Bhubaneswar</div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#CCD4D9] font-mono text-[11px] sm:text-xs text-[#181B1D]/60 space-y-1">
              <div>SERVICE: DOORSTEP SPLIT AC DIAGNOSIS</div>
              <div>VERIFICATION: VERIFIED PATIA LOCAL ENTRY</div>
            </div>
          </div>

          {/* Right Column: Smaller review excerpts in a vertical column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 divide-y divide-[#CCD4D9]">
            {SUPPORTING_REVIEWS.map((rev, idx) => (
              <div key={idx} className={idx > 0 ? "pt-6 sm:pt-8 space-y-2 sm:space-y-3" : "space-y-2 sm:space-y-3"}>
                <p className="text-sm sm:text-base text-[#181B1D]/85 leading-relaxed font-normal">
                  “{rev.quote}”
                </p>
                <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs text-[#181B1D]/60 pt-1">
                  <span className="font-semibold text-[#181B1D]">{rev.author}</span>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
