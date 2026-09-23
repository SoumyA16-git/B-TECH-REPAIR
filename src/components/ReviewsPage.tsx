import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, ArrowLeft, Search } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/repairData';

interface ReviewsPageProps {
  onBack: () => void;
  onOpenBooking: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBack, onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReviews = VERIFIED_REVIEWS.filter(review => {
    const matchesFilter = activeFilter === 'All' || review.serviceTag.includes(activeFilter);
    const matchesSearch = searchTerm === '' || 
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.highlight.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#F6F7F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-[#164B70] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MAIN DESK</span>
          </button>

          <span className="text-xs font-mono text-[#171A1D]/60">
            AUDIT: 468 GOOGLE REVIEWS · 5.0 RATING
          </span>
        </div>

        {/* Hero Rating Banner */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
                VERIFIED LOCAL RATINGS
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171A1D]">
                People Remember the Service.
              </h1>
              <p className="text-sm sm:text-base text-[#171A1D]/75 max-w-2xl">
                Every quote displayed here is preserved verbatim from real customer reviews on Google Maps for B-Tech Repair in Bhubaneswar and Cuttack.
              </p>
            </div>

            {/* Score box */}
            <div className="p-6 bg-[#F6F7F5] border border-[#CCD4D9] text-center shrink-0 self-start md:self-center">
              <div className="text-4xl font-mono font-bold text-[#171A1D]">5.0</div>
              <div className="flex justify-center text-[#D9822B] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-mono text-[#171A1D]/60">
                468 REVIEWS ON GOOGLE
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#CCD4D9] p-4">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs font-medium">
            {['All', 'AC', 'AC Jet Pump', 'Washing Machine', 'Refrigerator', 'Microwave'].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1.5 transition-colors whitespace-nowrap cursor-pointer border ${
                  activeFilter === tag
                    ? 'bg-[#164B70] text-white border-[#164B70]'
                    : 'bg-[#F6F7F5] text-[#171A1D]/70 border-[#CCD4D9] hover:bg-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative sm:w-64">
            <input
              type="text"
              placeholder="Search in reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs border border-[#CCD4D9] bg-[#F6F7F5] focus:outline-none focus:border-[#164B70]"
            />
            <Search className="w-3.5 h-3.5 text-[#171A1D]/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Reviews Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white border border-[#CCD4D9] p-6 space-y-4 hover:border-[#164B70] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D9822B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-[#171A1D]/50">
                    {review.date}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#164B70] border-l-2 border-[#D9822B] pl-3">
                  "{review.highlight}"
                </div>

                <p className="text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed">
                  “{review.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#CCD4D9] flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#171A1D]">
                    {review.author}
                  </div>
                  {review.location && (
                    <div className="text-[11px] font-mono text-[#171A1D]/60">
                      {review.location}
                    </div>
                  )}
                </div>
                <span className="font-mono text-[11px] text-[#164B70] bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">
                  {review.serviceTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#171A1D]">
              Need honest diagnosis on your appliance?
            </h3>
            <p className="text-xs text-[#171A1D]/70 mt-0.5">
              Doorstep service across Patia, Bhubaneswar and Cuttack.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="py-3 px-6 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Request Doorstep Visit
          </button>
        </div>

      </div>
    </div>
  );
};
