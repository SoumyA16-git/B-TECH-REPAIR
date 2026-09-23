import React from 'react';
import { REPAIR_IMAGES } from '../data/repairImages';

export const FieldBreakSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#181B1D]">
      {/* Full-width photographic strip */}
      <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
        <img
          src={REPAIR_IMAGES.outdoorCondenserBreak}
          alt="Technician standing beside rooftop outdoor AC unit inspecting compressor lines"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] saturate-[0.9]"
        />

        {/* Ambient tonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181B1D]/80 via-[#181B1D]/30 to-[#181B1D]/80" />

        {/* Overlapping Text Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-12 z-10 pointer-events-none">
          
          {/* Small Top Badge */}
          <div className="space-y-1">
            <span className="block font-mono text-xs sm:text-sm tracking-widest uppercase text-[#F5F5F2] font-semibold">
              FIELD SERVICE
            </span>
            <span className="block font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#DCE2E5]/80">
              BHUBANESWAR & CUTTACK
            </span>
          </div>

          {/* Very large sentence partially overlapping image edge */}
          <div className="max-w-4xl pb-2">
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F2] leading-[1.02] drop-shadow-md">
              We come to the problem.
            </h2>
            <div className="mt-3 font-mono text-xs sm:text-sm text-[#DCE2E5]/80 tracking-wide max-w-xl">
              Doorstep diagnostics with portable manifold gauges, digital multimeters, leak detectors, and high-pressure jet equipment.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
