import React from 'react';
import { ArrowDown, CheckCircle, Wrench, Shield, ClipboardList, Activity } from 'lucide-react';

export const RepairProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'REQUEST',
      subtitle: 'Tell us what isn\'t working.',
      detail: 'Call our desk or fill out the service intake. Share the appliance model, observed symptoms, and your location in Bhubaneswar or Cuttack.',
      icon: <ClipboardList className="w-4 h-4 text-[#164B70]" />
    },
    {
      num: '02',
      title: 'INSPECTION',
      subtitle: 'The technician checks the appliance.',
      detail: 'Our technician arrives at your doorstep with diagnostic tools (multimeter, manifold gauges, clamp meters) to inspect the unit thoroughly.',
      icon: <Activity className="w-4 h-4 text-[#164B70]" />
    },
    {
      num: '03',
      title: 'DIAGNOSIS',
      subtitle: 'The actual fault is identified.',
      detail: 'We isolate the physical or electronic root cause and explain the findings to you before starting any work. No guesswork or hidden costs.',
      icon: <Wrench className="w-4 h-4 text-[#D9822B]" />
    },
    {
      num: '04',
      title: 'REPAIR',
      subtitle: 'The required repair is carried out.',
      detail: 'Work is performed using genuine spare parts where needed, following proper refrigeration and electrical safety standards.',
      icon: <Shield className="w-4 h-4 text-[#164B70]" />
    },
    {
      num: '05',
      title: 'TEST',
      subtitle: 'The appliance is checked after service.',
      detail: 'The appliance runs through a full operating cycle under technician observation to verify stability, current draw, and proper function.',
      icon: <CheckCircle className="w-4 h-4 text-[#22C55E]" />
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            THE SERVICE DESK WORKFLOW
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            From Problem to Working Appliance
          </h2>
          <p className="text-sm sm:text-base text-[#171A1D]/75 mt-2">
            Every service visit follows a systematic 5-stage diagnostic protocol to avoid guesswork and unnecessary component replacements.
          </p>
        </div>

        {/* Ticket-like Flow Container */}
        <div className="border border-[#CCD4D9] bg-[#F6F7F5] p-4 sm:p-8 relative">
          
          {/* Ticket Header Bar */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#CCD4D9] text-xs font-mono gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#164B70]"></span>
              <span className="font-semibold text-[#171A1D]">STANDARD OPERATING PROCEDURE</span>
              <span className="text-[#CCD4D9]">/</span>
              <span className="text-[#171A1D]/60">SOP-BTR-2026</span>
            </div>
            <div className="text-[#171A1D]/60">
              AUDITED: 5 STAGES · DOORSTEP EXECUTION
            </div>
          </div>

          {/* Desktop: 5 Sequential Columns / Mobile: Stacked with Ticket Perforations */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="bg-white border border-[#CCD4D9] p-5 flex flex-col justify-between relative group hover:border-[#164B70] transition-colors"
              >
                {/* Step indicator top */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#CCD4D9]/60">
                    <span className="font-mono text-sm font-bold text-[#164B70]">
                      {step.num}
                    </span>
                    {step.icon}
                  </div>

                  <h3 className="font-mono text-xs font-bold tracking-wider text-[#171A1D] uppercase">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#164B70] mt-1">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#171A1D]/70 mt-2 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Arrow indicator between steps */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-none bg-[#F6F7F5] border border-[#CCD4D9] items-center justify-center text-[#164B70] text-xs font-mono">
                    →
                  </div>
                )}

                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-2 text-[#CCD4D9]">
                    <ArrowDown className="w-4 h-4 text-[#164B70]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ticket Footer Verification Stamp */}
          <div className="mt-6 pt-4 border-t border-[#CCD4D9] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#171A1D]/60 gap-3">
            <span>VERIFIED ON-SITE WITH CALIBRATED EQUIPMENT</span>
            <span className="text-[#164B70] font-semibold">HONEST DIAGNOSIS · STANDARD CHARGES</span>
          </div>

        </div>

      </div>
    </section>
  );
};
