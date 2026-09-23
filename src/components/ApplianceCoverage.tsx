import React from 'react';
import { ServiceId } from '../types';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ApplianceCollageProps {
  onSelectService?: (serviceId: ServiceId) => void;
}

export const ApplianceCoverage: React.FC<ApplianceCollageProps> = ({ onSelectService }) => {
  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-20 sm:py-32 border-b border-[#CCD4D9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#CCD4D9]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#16496B] tracking-wider uppercase">
              FIELD OBSERVATION / EQUIPMENT PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181B1D]">
              Appliance environments we service.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs sm:text-sm text-[#181B1D]/60 max-w-sm">
            Trained on residential installations across Patia, KIIT, Infocity, and greater Bhubaneswar.
          </div>
        </div>

        {/* Intentionally Designed Asymmetric Photographic Collage */}
        {/* AC occupies strongest area; Large refrigerator; Narrow washing machine crop; Small microwave detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Top Left / Main: AC image occupying the strongest area */}
          <div
            onClick={() => onSelectService && onSelectService('ac-repair')}
            className="md:col-span-8 relative group overflow-hidden border border-[#CCD4D9] bg-[#181B1D] h-[360px] sm:h-[460px] cursor-pointer"
          >
            <img
              src={REPAIR_IMAGES.acIndoorUnit}
              alt="Split Air Conditioner evaporator indoor coil installation"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88] group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Dark lens vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D]/80 via-transparent to-transparent" />
            
            {/* Tiny Overlay Service Label */}
            <div className="absolute top-4 left-4 bg-[#181B1D]/90 text-[#F5F5F2] font-mono text-[11px] px-2.5 py-1 border border-[#333A40] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
              <span>01 / SPLIT & INVERTER AC</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-xs text-[#DCE2E5]/80 uppercase">
                Refrigerant pressure, coil cleaning & inverter electronics
              </div>
            </div>
          </div>

          {/* Top Right / Narrow: Washing Machine Narrow Crop */}
          <div
            onClick={() => onSelectService && onSelectService('washing-machine-repair')}
            className="md:col-span-4 relative group overflow-hidden border border-[#CCD4D9] bg-[#181B1D] h-[360px] sm:h-[460px] cursor-pointer"
          >
            <img
              src={REPAIR_IMAGES.washingMachineDrum}
              alt="Stainless steel washing machine drum and spin mechanism"
              className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.85] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D]/80 via-transparent to-transparent" />

            {/* Tiny Overlay Service Label */}
            <div className="absolute top-4 left-4 bg-[#181B1D]/90 text-[#F5F5F2] font-mono text-[11px] px-2.5 py-1 border border-[#333A40] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
              <span>03 / WASHING MACHINE</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-xs text-[#DCE2E5]/80 uppercase">
                Motor drive, drum spin, drain pumps & valves
              </div>
            </div>
          </div>

          {/* Bottom Left / Large: Large Refrigerator Image */}
          <div
            onClick={() => onSelectService && onSelectService('refrigerator-repair')}
            className="md:col-span-7 relative group overflow-hidden border border-[#CCD4D9] bg-[#181B1D] h-[300px] sm:h-[380px] cursor-pointer"
          >
            <img
              src={REPAIR_IMAGES.refrigeratorCooling}
              alt="Modern refrigerator interior cooling vents and thermal controls"
              className="w-full h-full object-cover filter contrast-[1.06] brightness-[0.88] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D]/80 via-transparent to-transparent" />

            {/* Tiny Overlay Service Label */}
            <div className="absolute top-4 left-4 bg-[#181B1D]/90 text-[#F5F5F2] font-mono text-[11px] px-2.5 py-1 border border-[#333A40] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
              <span>02 / REFRIGERATOR</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-xs text-[#DCE2E5]/80 uppercase">
                Compressor relay, defrost sensors & gas recharge
              </div>
            </div>
          </div>

          {/* Bottom Right / Small: Small Microwave Detail */}
          <div
            onClick={() => onSelectService && onSelectService('microwave-repair')}
            className="md:col-span-5 relative group overflow-hidden border border-[#CCD4D9] bg-[#181B1D] h-[300px] sm:h-[380px] cursor-pointer"
          >
            <img
              src={REPAIR_IMAGES.microwaveCavity}
              alt="Microwave oven internal cavity waveguide and control module"
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.85] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D]/80 via-transparent to-transparent" />

            {/* Tiny Overlay Service Label */}
            <div className="absolute top-4 left-4 bg-[#181B1D]/90 text-[#F5F5F2] font-mono text-[11px] px-2.5 py-1 border border-[#333A40] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
              <span>04 / MICROWAVE OVEN</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-xs text-[#DCE2E5]/80 uppercase">
                High-voltage diode, magnetron & touch touchpad
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
