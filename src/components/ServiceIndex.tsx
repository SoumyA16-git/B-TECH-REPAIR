import React, { useState } from 'react';
import { ArrowRight, Wrench, Wind, Refrigerator, Waves, Flame } from 'lucide-react';
import { SERVICES_INDEX } from '../data/repairData';
import { ServiceId } from '../types';

interface ServiceIndexProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookCategory: (categoryName: string) => void;
}

export const ServiceIndex: React.FC<ServiceIndexProps> = ({ onSelectService, onBookCategory }) => {
  const [activeHoverId, setActiveHoverId] = useState<ServiceId>('ac-repair');

  // Filter to the 4 main items (AC Repair, Refrigerator, Washing Machine, Microwave)
  const mainServices = [
    SERVICES_INDEX.find(s => s.id === 'ac-repair')!,
    SERVICES_INDEX.find(s => s.id === 'refrigerator-repair')!,
    SERVICES_INDEX.find(s => s.id === 'washing-machine-repair')!,
    SERVICES_INDEX.find(s => s.id === 'microwave-repair')!,
  ];

  const activeService = SERVICES_INDEX.find(s => s.id === activeHoverId) || mainServices[0];

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'ac-repair':
      case 'ac-jet-pump-cleaning':
      case 'ac-installation':
        return <Wind className="w-5 h-5 text-[#164B70]" />;
      case 'refrigerator-repair':
        return <Refrigerator className="w-5 h-5 text-[#164B70]" />;
      case 'washing-machine-repair':
        return <Waves className="w-5 h-5 text-[#164B70]" />;
      case 'microwave-repair':
        return <Flame className="w-5 h-5 text-[#164B70]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#164B70]" />;
    }
  };

  return (
    <section id="services-index" className="py-16 md:py-24 border-b border-[#CCD4D9] bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            APPLIANCE SERVICE INDEX
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            What Needs Fixing?
          </h2>
          <p className="text-sm sm:text-base text-[#171A1D]/70 mt-2 max-w-2xl">
            Select an appliance category to view diagnostic procedures, common breakdown indicators, and doorstep repair options.
          </p>
        </div>

        {/* Desktop Layout: Asymmetric Service Index + Live Diagnostic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Rows (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-[#CCD4D9] border-y border-[#CCD4D9]">
            {mainServices.map((service) => {
              const isHovered = activeHoverId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveHoverId(service.id)}
                  onClick={() => onSelectService(service.id)}
                  className={`group py-6 px-3 sm:px-5 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isHovered ? 'bg-white shadow-xs' : 'hover:bg-white/60'
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#164B70]">
                        {service.number}
                      </span>
                      <span className="text-[#CCD4D9]">/</span>
                      <span className="font-semibold text-lg sm:text-xl text-[#171A1D] group-hover:text-[#164B70] transition-colors">
                        {service.category === 'AC' ? 'Air Conditioner' : service.category}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-[#171A1D]/90">
                      {service.title}
                    </div>

                    <p className="text-xs text-[#171A1D]/60 max-w-xl line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#164B70] shrink-0 pt-2 sm:pt-0">
                    <span className="group-hover:underline">Explore {service.category} Services</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Technical Preview Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#CCD4D9] p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#CCD4D9]">
              <div className="flex items-center gap-2">
                {getServiceIcon(activeService.id)}
                <span className="font-mono text-xs font-semibold text-[#171A1D]">
                  DIAGNOSTIC SPEC SHEET · {activeService.number}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#D9822B] bg-[#FFF6ED] px-2 py-0.5 border border-[#D9822B]/30">
                ACTIVE
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#171A1D]">
                {activeService.title}
              </h3>
              <p className="text-xs text-[#171A1D]/75 mt-1 leading-relaxed">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Typical Faults */}
            <div className="space-y-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#171A1D]/60">
                COMMON SYMPTOMS INSPECTED:
              </span>
              <ul className="text-xs text-[#171A1D]/80 space-y-1.5 pl-3 border-l-2 border-[#164B70]">
                {activeService.commonIssues.slice(0, 3).map((issue, idx) => (
                  <li key={idx}>· {issue}</li>
                ))}
              </ul>
            </div>

            {/* Technical Parameters */}
            <div className="bg-[#F6F7F5] border border-[#CCD4D9] p-3 text-[11px] space-y-1.5">
              {activeService.technicalSpecs.slice(0, 2).map((spec, i) => (
                <div key={i} className="flex justify-between gap-2">
                  <span className="text-[#171A1D]/60 font-mono">{spec.label}:</span>
                  <span className="font-medium text-[#171A1D] text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectService(activeService.id)}
                className="flex-1 py-2.5 px-4 bg-[#171A1D] hover:bg-[#164B70] text-white text-xs font-medium text-center transition-colors cursor-pointer"
              >
                View Full Technical Breakdown
              </button>

              <button
                onClick={() => onBookCategory(activeService.category)}
                className="py-2.5 px-4 border border-[#164B70] text-[#164B70] hover:bg-[#164B70] hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
