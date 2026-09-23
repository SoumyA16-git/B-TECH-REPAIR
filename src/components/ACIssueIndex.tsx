import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ServiceId } from '../types';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ACIssueIndexProps {
  onSelectService: (serviceId: ServiceId) => void;
  onSelectIssueForBooking?: (issue: string) => void;
}

const AC_ISSUES_LIST = [
  'AC NOT COOLING',
  'GAS LEAKAGE',
  'GAS CHARGING',
  'PCB REPAIR',
  'WET SERVICING',
  'REMOTE ISSUES',
  'INSTALLATION',
  'COPPER PIPE WORK',
  'CONDENSER REPLACEMENT'
];

export const ACIssueIndex: React.FC<ACIssueIndexProps> = ({
  onSelectService,
  onSelectIssueForBooking
}) => {
  return (
    <section className="relative w-full bg-[#181B1D] text-[#F5F5F2] border-b border-[#333A40] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-auto lg:min-h-[700px]">
        
        {/* Left Side: Large close-up photograph of an AC being cleaned with a jet pump machine */}
        <div className="lg:col-span-6 relative h-[320px] sm:h-[450px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[#333A40]">
          <img
            src={REPAIR_IMAGES.jetPumpCleaning}
            alt="AC evaporator coils being deep cleaned with high pressure jet pump machine"
            className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
          />
          {/* Subtle technical overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181B1D]/80 via-transparent to-transparent lg:hidden" />
          
          {/* Mechanical Detail Annotation */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-[#181B1D]/90 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 border border-[#333A40] text-[10px] sm:text-xs font-mono text-[#DCE2E5]">
            <span className="text-[#D17A2A] mr-1.5 sm:mr-2">●</span>
            <span>HIGH-PRESSURE JET WASH · 120 PSI FLUSH</span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-[#181B1D]/90 p-3 sm:p-4 border border-[#333A40] max-w-md text-[11px] sm:text-xs font-mono text-[#BEC8CD]">
            <span className="text-[#F5F5F2] block font-semibold mb-0.5 sm:mb-1">
              WATERPROOF CATCHMENT JACKET SYSTEM
            </span>
            Indoor evaporator fin flushing with zero wall splashing or floor spillage. Mould, soot, and fin choked debris extracted safely.
          </div>
        </div>

        {/* Right Side: Editorial Heading & Clean List with Thin Dividers */}
        <div className="lg:col-span-6 p-6 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#181B1D]">
          <div className="space-y-4 sm:space-y-6">
            
            {/* Small Technical Label */}
            <div className="font-mono text-xs text-[#D17A2A] tracking-wider uppercase flex items-center gap-2">
              <span>01 / AIR CONDITIONING</span>
              <span className="text-[#333A40]">|</span>
              <span className="text-[#BEC8CD]/60">PRIMARY FIELD SPECIALTY</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F2] leading-tight">
              More than a quick clean.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg text-[#BEC8CD] leading-relaxed max-w-xl font-normal">
              Jet pump cleaning, repair, installation and AC servicing for common cooling and equipment problems.
            </p>

            {/* Clean List with Thin Dividers (NO CARDS) */}
            <div className="pt-2 sm:pt-4 divide-y divide-[#333A40] border-y border-[#333A40]">
              {AC_ISSUES_LIST.map((issue) => (
                <div
                  key={issue}
                  onClick={() => {
                    if (onSelectIssueForBooking) {
                      onSelectIssueForBooking(`AC Service: ${issue}`);
                    } else {
                      onSelectService('ac-repair');
                    }
                  }}
                  className="group py-3.5 flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider cursor-pointer hover:pl-2 transition-all duration-150"
                >
                  <span className="text-[#DCE2E5] group-hover:text-white transition-colors">
                    {issue}
                  </span>
                  
                  <div className="flex items-center gap-2 text-[#BEC8CD]/40 group-hover:text-[#D17A2A] transition-colors">
                    <span className="text-[10px] hidden sm:inline uppercase">Schedule</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectService('ac-jet-pump-cleaning')}
              className="px-6 py-3.5 bg-[#16496B] hover:bg-[#123852] text-[#F5F5F2] text-xs sm:text-sm font-mono tracking-wider transition-colors border border-[#16496B] cursor-pointer"
            >
              EXPLORE JET PUMP PROCESS →
            </button>

            <button
              onClick={() => onSelectService('ac-repair')}
              className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#DCE2E5] text-xs sm:text-sm font-mono tracking-wider transition-colors border border-[#333A40] cursor-pointer"
            >
              AC DIAGNOSTIC PROTOCOL
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
