import React, { useState } from 'react';
import { Star, MessageSquareQuote, Check } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data/repairData';
import { ApplianceCategory } from '../types';

interface ReviewsSectionProps {
  onViewAllReviews?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onViewAllReviews }) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredReviews = filter === 'All' 
    ? VERIFIED_REVIEWS 
    : VERIFIED_REVIEWS.filter(r => r.serviceTag.includes(filter));

  return (
    <section id="reviews" className="py-16 md:py-24 border-b border-[#CCD4D9] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Trust Anchors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              UNEDITED GOOGLE VERIFIED FEEDBACK
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
              People Remember the Service.
            </h2>
            <p className="text-sm sm:text-base text-[#171A1D]/75 mt-2 max-w-xl">
              Genuine customer impressions reflecting prompt doorstep arrival, honest diagnosis, standard service charges, and lasting repairs.
            </p>
          </div>

          {/* 5.0 Google Score Anchor */}
          <div className="p-4 bg-[#F6F7F5] border border-[#CCD4D9] shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold font-mono text-[#171A1D]">5.0</span>
              <div className="flex text-[#D9822B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs font-mono text-[#171A1D]/60 mt-1">
              468 REVIEWS ON GOOGLE
            </div>
          </div>
        </div>

        {/* Clean Filter Segmented Control */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-8 text-xs font-medium">
          {['All', 'AC', 'AC Jet Pump', 'Washing Machine', 'Refrigerator', 'Microwave'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1.5 transition-colors whitespace-nowrap cursor-pointer border ${
                filter === tag
                  ? 'bg-[#164B70] text-white border-[#164B70]'
                  : 'bg-[#F6F7F5] text-[#171A1D]/70 border-[#CCD4D9] hover:bg-white hover:text-[#171A1D]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div 
              key={review.id}
              className="border border-[#CCD4D9] bg-[#F6F7F5] p-6 flex flex-col justify-between space-y-4 hover:border-[#164B70] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D9822B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#171A1D]/50">
                    {review.date}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#164B70] border-l-2 border-[#D9822B] pl-2.5">
                  "{review.highlight}"
                </div>

                <p className="text-xs text-[#171A1D]/80 leading-relaxed">
                  “{review.text}”
                </p>
              </div>

              {/* Author & Google Reference */}
              <div className="pt-3 border-t border-[#CCD4D9] flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#171A1D]">
                    {review.author}
                  </div>
                  {review.location && (
                    <div className="text-[10px] font-mono text-[#171A1D]/50">
                      {review.location}
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-mono text-[#171A1D]/40">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {onViewAllReviews && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAllReviews}
              className="py-2.5 px-6 border border-[#171A1D] hover:bg-[#171A1D] hover:text-white text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              Explore All 468 Customer Experiences →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
