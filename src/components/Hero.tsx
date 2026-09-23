import React from 'react';
import { Phone, ArrowRight, Gauge, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative border-b border-[#CCD4D9] bg-[#F6F7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Technical Intake & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Technical Label in IBM Plex Mono */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#171A1D]/70">
              <span className="inline-block w-2 h-2 rounded-none bg-[#D9822B]"></span>
              <span>DOORSTEP TECHNICAL SERVICE DESK</span>
              <span className="text-[#CCD4D9]">/</span>
              <span>PATIA, BHUBANESWAR</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#171A1D] leading-tight text-balance">
                Something stopped working?
                <span className="block text-[#164B70]">We fix it.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#171A1D]/80 max-w-2xl leading-relaxed">
              AC, refrigerator, washing machine and microwave repair with doorstep service across Bhubaneswar and nearby areas.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#164B70] hover:bg-[#103753] text-white text-sm font-medium transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#D9822B]" />
                <span>Call for Service</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-[#171A1D] hover:bg-[#171A1D] hover:text-white text-[#171A1D] text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Book Doorstep Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="text-xs font-mono text-[#171A1D]/70 hover:text-[#164B70] underline underline-offset-4 cursor-pointer py-2"
              >
                View Services Index →
              </button>
            </div>

            {/* Key Service Desk Indicators */}
            <div className="pt-6 border-t border-[#CCD4D9] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-mono text-[11px] text-[#171A1D]/50 uppercase">AVERAGE RESPONSE</span>
                <span className="text-sm font-semibold text-[#171A1D]">60 – 90 mins</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[#171A1D]/50 uppercase">DIAGNOSIS</span>
                <span className="text-sm font-semibold text-[#171A1D]">Before any repair</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[#171A1D]/50 uppercase">RATING</span>
                <span className="text-sm font-semibold text-[#171A1D]">5.0 ★ (468 Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual — Authentic Service Visit Setup */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#CCD4D9] bg-[#EAEFF2] p-5 shadow-xs">
              
              {/* Technical Ticket Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#CCD4D9] text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#164B70] font-semibold">
                  <Wrench className="w-3.5 h-3.5 text-[#D9822B]" />
                  <span>SERVICE DESK INTAKE</span>
                </div>
                <span className="text-[#171A1D]/60">STATUS: ON-CALL</span>
              </div>

              {/* Visual Technician Work Inspection Console */}
              <div className="relative bg-[#171A1D] text-[#DCE4E9] p-5 border border-[#333A40] space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-mono text-[#D9822B] tracking-wider uppercase">
                      INSPECTION PROTOCOL
                    </div>
                    <div className="text-base font-semibold text-white mt-0.5">
                      Air Conditioner Diagnostic Bench
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-[#164B70] text-white">
                    LIVE DISPATCH
                  </span>
                </div>

                {/* Simulated Diagnostic Readout Gauges */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="bg-[#101316] p-3 border border-[#272B30]">
                    <div className="text-[10px] text-[#DCE4E9]/60 flex items-center justify-between">
                      <span>SUCTION PRESSURE</span>
                      <Gauge className="w-3 h-3 text-[#D9822B]" />
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      125 <span className="text-xs font-normal text-[#DCE4E9]/70">PSI (R32)</span>
                    </div>
                    <div className="text-[10px] text-[#22C55E] mt-0.5">NORMAL OPERATING RANGE</div>
                  </div>

                  <div className="bg-[#101316] p-3 border border-[#272B30]">
                    <div className="text-[10px] text-[#DCE4E9]/60 flex items-center justify-between">
                      <span>COMPRESSOR DRAW</span>
                      <Zap className="w-3 h-3 text-[#D9822B]" />
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      4.8 <span className="text-xs font-normal text-[#DCE4E9]/70">AMPS</span>
                    </div>
                    <div className="text-[10px] text-[#22C55E] mt-0.5">WITHIN RATED LOAD</div>
                  </div>
                </div>

                {/* Technical checklist step */}
                <div className="bg-[#101316] p-3 border border-[#272B30] text-[11px] font-mono space-y-1.5">
                  <div className="text-[#DCE4E9]/70 flex items-center justify-between">
                    <span>STEP 01: POWER & CAPACITOR</span>
                    <span className="text-[#22C55E]">CHECKED</span>
                  </div>
                  <div className="text-[#DCE4E9]/70 flex items-center justify-between">
                    <span>STEP 02: REFRIGERANT LEAK CHECK</span>
                    <span className="text-[#22C55E]">TESTED</span>
                  </div>
                  <div className="text-[#DCE4E9]/70 flex items-center justify-between">
                    <span>STEP 03: JET PUMP COIL RINSE</span>
                    <span className="text-[#D9822B]">SCHEDULED</span>
                  </div>
                </div>

                {/* Technician Location Pinpoint */}
                <div className="pt-2 border-t border-[#272B30] flex items-center justify-between text-[11px]">
                  <span className="text-[#DCE4E9]/60">SERVICE HUB:</span>
                  <span className="font-mono text-white">Sishu Vihar, Patia, Bhubaneswar</span>
                </div>
              </div>

              {/* PRD Specified Small Technical Overlay */}
              <div className="mt-4 pt-3 border-t border-[#CCD4D9] flex items-center justify-between text-xs font-mono text-[#171A1D]/80">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#164B70]">SERVICE REQUEST:</span>
                  <span>AC / DIAGNOSIS / REPAIR</span>
                </div>
                <div className="flex items-center gap-1 text-[#171A1D]/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#164B70]" />
                  <span>DOORSTEP</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
