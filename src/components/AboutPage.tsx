import React from 'react';
import { Phone, CheckCircle, MapPin, Wrench, Shield, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface AboutPageProps {
  onOpenBooking: () => void;
  onViewReviews: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onViewReviews }) => {
  const reviewThemes = [
    {
      title: 'Prompt service',
      desc: 'Doorstep technicians arrive within promised timeframes across Bhubaneswar, prepared with multimeters, gauges, and core spare parts.'
    },
    {
      title: 'Professional behaviour',
      desc: 'Respectful, courteous conduct inside customers\' homes, including protective masking during AC wet washes and tidy work stations.'
    },
    {
      title: 'Genuine parts',
      desc: 'Replacement capacitors, compressor relays, fan motors, and thermal fuses sourced from trusted manufacturer channels.'
    },
    {
      title: 'Honest assessment',
      desc: 'Technicians check capacitors, electrical lines, and coils before jumping to expensive conclusions like refrigerant leaks or whole-unit replacement.'
    },
    {
      title: 'Standard service charges',
      desc: 'Clear inspection and repair charges quoted before initiating work, with no arbitrary post-job surprises.'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F6F7F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header strictly adhering to PRD Section 17 */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              ABOUT B-TECH REPAIR
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171A1D]">
              Built Around the Repair.
            </h1>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#171A1D]/80 leading-relaxed max-w-3xl">
            <p>
              B-Tech Repair was founded with a singular, grounded premise: appliance service should be practical, technically accurate, and completely transparent.
            </p>
            <p>
              Based out of Sishu Vihar, Patia, we provide doorstep diagnosis and component-level repair for four essential home systems: <strong>air conditioners, refrigerators, washing machines, and microwave ovens</strong>. Our technicians serve residential communities, offices, and commercial establishments across Bhubaneswar, Cuttack, and surrounding areas.
            </p>
            <p>
              Rather than rushing to replace whole units or recommending unnecessary services, our technicians are trained to identify the exact failed component—whether it is a swollen AC run capacitor, a choked capillary tube, a burnt defrost relay, or a worn washing machine drum damper.
            </p>
          </div>

          <div className="pt-4 border-t border-[#CCD4D9] flex flex-wrap items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="py-3 px-5 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-mono font-medium transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="py-3 px-5 bg-[#171A1D] hover:bg-black text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Book Doorstep Technician
            </button>
          </div>
        </div>

        {/* Operational Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#CCD4D9] p-6 space-y-2">
            <div className="text-xs font-mono text-[#164B70] font-semibold uppercase">
              LOCALITY & WORKSHOP
            </div>
            <h3 className="text-base font-bold text-[#171A1D]">
              Sishu Vihar, Patia
            </h3>
            <p className="text-xs text-[#171A1D]/70 leading-relaxed">
              Located near Koel Campus, giving our technicians rapid access to KIIT, Chandrasekharpur, Sailashree Vihar, and North Bhubaneswar within 60 minutes.
            </p>
          </div>

          <div className="bg-white border border-[#CCD4D9] p-6 space-y-2">
            <div className="text-xs font-mono text-[#164B70] font-semibold uppercase">
              REPAIR METHODOLOGY
            </div>
            <h3 className="text-base font-bold text-[#171A1D]">
              Component-Level Focus
            </h3>
            <p className="text-xs text-[#171A1D]/70 leading-relaxed">
              We test capacitors, relays, microswitches, and sensors individually using calibrated multimeters and manifold gauges before proposing any replacement.
            </p>
          </div>

          <div className="bg-white border border-[#CCD4D9] p-6 space-y-2">
            <div className="text-xs font-mono text-[#164B70] font-semibold uppercase">
              DOORSTEP COVERAGE
            </div>
            <h3 className="text-base font-bold text-[#171A1D]">
              Bhubaneswar & Cuttack
            </h3>
            <p className="text-xs text-[#171A1D]/70 leading-relaxed">
              Doorstep coverage across the twin cities, supporting both urgent same-day breakdowns and scheduled seasonal maintenance.
            </p>
          </div>
        </div>

        {/* Customer Feedback Themes Section strictly per PRD Section 17 */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-10 space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              CORE PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171A1D] mt-1">
              Customer Feedback Themes
            </h2>
            <p className="text-xs sm:text-sm text-[#171A1D]/75 mt-1.5">
              These principles reflect the consistent themes documented across our 468 verified Google customer reviews:
            </p>
          </div>

          <div className="divide-y divide-[#CCD4D9] border-y border-[#CCD4D9]">
            {reviewThemes.map((theme, i) => (
              <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6">
                <div className="sm:w-1/3">
                  <span className="font-mono text-xs font-bold text-[#164B70] mr-2">
                    0{i + 1}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-[#171A1D]">
                    {theme.title}
                  </span>
                </div>
                <div className="sm:w-2/3 text-xs sm:text-sm text-[#171A1D]/75 leading-relaxed">
                  {theme.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center text-xs font-mono">
            <span className="text-[#171A1D]/60">5.0 ★ · 468 GOOGLE REVIEWS</span>
            <button
              onClick={onViewReviews}
              className="text-[#164B70] hover:underline font-semibold cursor-pointer"
            >
              Read Customer Testimonials →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
