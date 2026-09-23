import React from 'react';

interface TimelineStep {
  number: string;
  title: string;
  sentence: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'REQUEST',
    sentence: 'Call or book online with your appliance type and symptom.'
  },
  {
    number: '02',
    title: 'INSPECT',
    sentence: 'Technician arrives at your doorstep with diagnostic tools.'
  },
  {
    number: '03',
    title: 'DIAGNOSE',
    sentence: 'Root cause identified and clear quotation provided before work.'
  },
  {
    number: '04',
    title: 'REPAIR',
    sentence: 'Defects corrected using genuine manufacturer-grade parts.'
  },
  {
    number: '05',
    title: 'TEST',
    sentence: 'Complete operational run verified under real load with customer.'
  }
];

export const RepairProcess: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-20 sm:py-32 border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#CCD4D9]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#16496B] tracking-wider uppercase">
              WORKFLOW / SYSTEMATIC RESOLUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181B1D]">
              How the repair happens.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 font-mono text-xs sm:text-sm text-[#181B1D]/60 max-w-xs">
            From your first phone call to complete functional verification at your doorstep.
          </div>
        </div>

        {/* Large Horizontal Service Timeline (Desktop) & Vertical (Mobile) */}
        <div className="relative">
          
          {/* Subtle connecting line running through steps on Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] h-px bg-[#BEC8CD]/80 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col pt-2 lg:pt-0 pl-6 lg:pl-0 border-l lg:border-l-0 border-[#BEC8CD] lg:border-transparent group"
              >
                {/* Step Marker Dot / Number */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Small square indicator */}
                  <div className="w-3.5 h-3.5 bg-[#F5F5F2] border border-[#16496B] flex items-center justify-center -ml-[31px] lg:ml-0 group-hover:bg-[#16496B] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#D17A2A]" />
                  </div>
                  
                  {/* Large Number */}
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#16496B]">
                    {step.number}
                  </span>
                </div>

                {/* Short Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#181B1D] mb-2 uppercase">
                  {step.title}
                </h3>

                {/* One Short Sentence */}
                <p className="text-sm text-[#181B1D]/75 leading-relaxed font-normal">
                  {step.sentence}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
