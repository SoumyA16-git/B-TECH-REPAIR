import React from 'react';
import { DIAGNOSTIC_CHECKLIST } from '../data/repairData';
import { CheckSquare } from 'lucide-react';

export const DiagnosticChecklist: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            DIAGNOSTIC DISCIPLINE
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5 text-balance">
            The Problem Isn't Always Where You Think It Is.
          </h2>
          <p className="text-sm sm:text-base text-[#171A1D]/75 mt-3 leading-relaxed">
            Appliance faults can have several possible causes. The relevant components should be inspected before deciding what needs to be repaired or replaced.
          </p>
        </div>

        {/* Diagnostic 6-Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIAGNOSTIC_CHECKLIST.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#CCD4D9] p-5 space-y-2 hover:border-[#164B70] transition-colors"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#CCD4D9]/60">
                <span className="font-mono text-xs font-bold text-[#164B70] tracking-wider uppercase">
                  {item.name}
                </span>
                <CheckSquare className="w-4 h-4 text-[#D9822B]" />
              </div>

              <p className="text-xs text-[#171A1D]/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#EAEFF2] border border-[#CCD4D9] text-xs font-mono text-[#171A1D]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>OUR COMMITMENT: NO GUESSWORK · NO REPLACING FUNCTIONAL PARTS</span>
          <span className="text-[#164B70] font-semibold">HONEST DOORSTEP ASSESSMENT</span>
        </div>

      </div>
    </section>
  );
};
