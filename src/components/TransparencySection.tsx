import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-b border-[#CCD4D9] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            SERVICE TRANSPARENCY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            Repair With Clarity
          </h2>
          <p className="text-sm sm:text-base text-[#171A1D]/75 mt-2">
            Every step of our doorstep service is communicated upfront, so you know exactly what is being tested and fixed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="border border-[#CCD4D9] bg-[#F6F7F5] p-6 space-y-3">
            <div className="w-9 h-9 bg-white border border-[#CCD4D9] flex items-center justify-center text-[#164B70]">
              <ShieldCheck className="w-5 h-5 text-[#164B70]" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">
              Genuine Parts
            </h3>
            <p className="text-xs sm:text-sm text-[#171A1D]/75 leading-relaxed">
              Use genuine parts where applicable and available to ensure long-term durability and proper equipment compatibility.
            </p>
          </div>

          <div className="border border-[#CCD4D9] bg-[#F6F7F5] p-6 space-y-3">
            <div className="w-9 h-9 bg-white border border-[#CCD4D9] flex items-center justify-center text-[#164B70]">
              <FileText className="w-5 h-5 text-[#164B70]" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">
              Clear Assessment
            </h3>
            <p className="text-xs sm:text-sm text-[#171A1D]/75 leading-relaxed">
              Explain the required repair before carrying out the work. We detail why a component has degraded and discuss options before proceeding.
            </p>
          </div>

          <div className="border border-[#CCD4D9] bg-[#F6F7F5] p-6 space-y-3">
            <div className="w-9 h-9 bg-white border border-[#CCD4D9] flex items-center justify-center text-[#164B70]">
              <CheckCircle2 className="w-5 h-5 text-[#164B70]" />
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">
              Transparent Service
            </h3>
            <p className="text-xs sm:text-sm text-[#171A1D]/75 leading-relaxed">
              Keep service charges and repair requirements clear. Honest standard pricing without arbitrary post-repair inflations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
