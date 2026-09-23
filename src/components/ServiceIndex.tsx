import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceId } from '../types';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ServiceIndexProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookCategory?: (category: string) => void;
}

interface ServiceIndexRow {
  number: string;
  serviceId: ServiceId;
  name: string;
  services: string;
  image: string;
  tag: string;
  meta: string;
}

const SERVICE_ROWS: ServiceIndexRow[] = [
  {
    number: '01',
    serviceId: 'ac-repair',
    name: 'AIR CONDITIONER',
    services: 'Repair / Service / Cleaning / Jet Pump',
    image: REPAIR_IMAGES.acIndoorUnit,
    tag: 'HVAC & COOLING',
    meta: 'Split, Inverter & Window units'
  },
  {
    number: '02',
    serviceId: 'refrigerator-repair',
    name: 'REFRIGERATOR',
    services: 'Repair / Service / Compressor / Gas Leakage',
    image: REPAIR_IMAGES.refrigeratorCooling,
    tag: 'REFRIGERATION',
    meta: 'Single door, Double door, Side-by-side'
  },
  {
    number: '03',
    serviceId: 'washing-machine-repair',
    name: 'WASHING MACHINE',
    services: 'Repair / Service / Drum & Motor / Drain Issues',
    image: REPAIR_IMAGES.washingMachineDrum,
    tag: 'LAUNDRY',
    meta: 'Front load, Top load & Semi-automatic'
  },
  {
    number: '04',
    serviceId: 'microwave-repair',
    name: 'MICROWAVE OVEN',
    services: 'Repair / Service / Heating & Magnetron / PCB Panel',
    image: REPAIR_IMAGES.microwaveCavity,
    tag: 'THERMAL & PCB',
    meta: 'Solo, Grill & Convection models'
  }
];

export const ServiceIndex: React.FC<ServiceIndexProps> = ({ onSelectService }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section id="services-index" className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-20 sm:py-32 border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 pb-6 border-b border-[#CCD4D9]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#16496B] tracking-wider uppercase">
              INDEX 01 / SELECT AN APPLIANCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1D]">
              What's not working?
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs sm:text-sm text-[#181B1D]/60 max-w-sm">
            Select an equipment type to inspect common fault symptoms, diagnostic methods, and service procedures.
          </div>
        </div>

        {/* Oversized Service Index with Dynamic Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (or full width on mobile): Vertical Oversized Index Rows */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-[#CCD4D9]">
            {SERVICE_ROWS.map((row, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={row.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => onSelectService(row.serviceId)}
                  className={`group relative py-6 sm:py-10 cursor-pointer transition-all duration-200 select-none ${
                    isHovered ? 'pl-2 sm:pl-4 bg-[#EAECE9]/40' : 'pl-0'
                  }`}
                >
                  <div className="flex items-start sm:items-baseline justify-between gap-2">
                    <div className="flex items-start sm:items-baseline gap-3 sm:gap-8">
                      {/* Big Number */}
                      <span className={`font-mono text-base sm:text-2xl font-normal transition-colors shrink-0 mt-1 sm:mt-0 ${
                        isHovered ? 'text-[#16496B] font-semibold' : 'text-[#181B1D]/40'
                      }`}>
                        {row.number}
                      </span>

                      {/* Appliance Name */}
                      <div>
                        <h3 className={`text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-200 ${
                          isHovered ? 'text-[#181B1D] translate-x-0.5 sm:translate-x-1' : 'text-[#181B1D]/90'
                        }`}>
                          {row.name}
                        </h3>

                        {/* Services Detail Subline */}
                        <p className={`mt-1 font-mono text-xs sm:text-sm transition-colors ${
                          isHovered ? 'text-[#16496B]' : 'text-[#181B1D]/60'
                        }`}>
                          {row.services}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex items-center pl-2 shrink-0 pt-1 sm:pt-0">
                      <ArrowRight className={`w-5 h-5 sm:w-8 sm:h-8 transition-all duration-200 ${
                        isHovered ? 'translate-x-1 sm:translate-x-2 text-[#16496B]' : 'text-[#CCD4D9] group-hover:text-[#181B1D]'
                      }`} />
                    </div>
                  </div>

                  {/* Mobile Preview Image (shown directly under active item on small screens) */}
                  <div className="block lg:hidden mt-3 pt-2.5 border-t border-[#CCD4D9]/60">
                    <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-[#181B1D]">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#181B1D]/90 text-[#F5F5F2] font-mono text-[10px]">
                        {row.tag} · {row.meta}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Reactive Photographic Preview Area */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative border border-[#CCD4D9] p-3 bg-[#EAECE9]/60">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181B1D]">
                <img
                  key={SERVICE_ROWS[hoveredIdx].serviceId}
                  src={SERVICE_ROWS[hoveredIdx].image}
                  alt={SERVICE_ROWS[hoveredIdx].name}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08] transition-opacity duration-300"
                />
                
                {/* Technical Annotation Badge */}
                <div className="absolute top-3 left-3 bg-[#181B1D]/90 text-[#F5F5F2] px-3 py-1.5 font-mono text-xs flex items-center gap-2 border border-[#333A40]">
                  <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
                  <span>{SERVICE_ROWS[hoveredIdx].tag}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#181B1D]/90 text-[#DCE2E5] p-3 border border-[#333A40] text-xs font-mono">
                  <div className="text-[#F5F5F2] font-semibold mb-0.5">
                    {SERVICE_ROWS[hoveredIdx].name}
                  </div>
                  <div className="text-[#BEC8CD] text-[11px]">
                    {SERVICE_ROWS[hoveredIdx].meta} · Doorstep Inspection
                  </div>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="flex justify-between items-center px-1 pt-3 text-[11px] font-mono text-[#181B1D]/60 uppercase">
                <span>PREVIEW / LIVE WORKSHOP DATA</span>
                <span>CLICK ROW TO INSPECT FAULTS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
