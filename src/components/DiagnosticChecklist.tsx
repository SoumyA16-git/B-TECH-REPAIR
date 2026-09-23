import React, { useState } from 'react';
import { REPAIR_IMAGES } from '../data/repairImages';

interface DiagnosticPoint {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  lineAngle: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  checkProcedure: string;
  symptomsAddressed: string;
}

const DIAGNOSTIC_POINTS: DiagnosticPoint[] = [
  {
    id: 'power',
    name: 'POWER',
    x: 24,
    y: 26,
    lineAngle: 'top-left',
    checkProcedure: 'Voltage stability across input terminals, phase integrity, and MCB trip thresholds.',
    symptomsAddressed: 'Sudden shutdowns, machine dead, tripping home fuses.'
  },
  {
    id: 'connection',
    name: 'CONNECTION',
    x: 74,
    y: 28,
    lineAngle: 'top-right',
    checkProcedure: 'Terminal crimp tightness, burn marks, wire resistance, and ground fault safety checks.',
    symptomsAddressed: 'Intermittent power losses, sparking, burnt electrical smell.'
  },
  {
    id: 'control',
    name: 'CONTROL',
    x: 48,
    y: 46,
    lineAngle: 'right',
    checkProcedure: 'Microcontroller sensor feedback, relay coil continuity, and display error codes (E1/E6/FE).',
    symptomsAddressed: 'Unresponsive buttons, program stopping mid-cycle, timer blinking.'
  },
  {
    id: 'component',
    name: 'COMPONENT',
    x: 32,
    y: 68,
    lineAngle: 'bottom-left',
    checkProcedure: 'Motor capacitor capacitance rating, thermal overload protection, and magnetron/relay tests.',
    symptomsAddressed: 'Humming motor unable to rotate, weak heating, abnormal vibration.'
  },
  {
    id: 'cooling',
    name: 'COOLING',
    x: 68,
    y: 65,
    lineAngle: 'bottom-right',
    checkProcedure: 'Manifold pressure check (standing vs running PSI), copper line sweating, and fin airflow.',
    symptomsAddressed: 'Air blowing warm, ice buildup on suction pipe, high power draw.'
  },
  {
    id: 'function',
    name: 'FUNCTION',
    x: 50,
    y: 84,
    lineAngle: 'left',
    checkProcedure: 'Full load operational test, vibration audit, thermostat cycle cutoff, and water drain clearance.',
    symptomsAddressed: 'Water leakages, noisy cycle, failure to shut off at set temperature.'
  }
];

export const DiagnosticChecklist: React.FC = () => {
  const [activePointId, setActivePointId] = useState<string>('control');

  const selectedPoint = DIAGNOSTIC_POINTS.find(p => p.id === activePointId) || DIAGNOSTIC_POINTS[0];

  return (
    <section className="relative w-full bg-[#181B1D] text-[#F5F5F2] py-20 sm:py-32 border-b border-[#333A40] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Service Manual Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#333A40]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D17A2A] tracking-wider uppercase">
              <span>MANUAL REF. / DIAGNOSTIC DISCIPLINE</span>
              <span className="text-[#333A40]">/</span>
              <span>INSPECTION PROTOCOL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F2]">
              Find the fault first.
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md font-mono text-xs sm:text-sm text-[#BEC8CD] leading-relaxed">
            Different symptoms can have different causes. Inspection helps determine what actually needs attention before repair work begins.
          </div>
        </div>

        {/* Technical Diagnostic Graphic — Technical Service Manual Aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Diagram Area with Authentic Center Component Photograph */}
          <div className="lg:col-span-8 relative bg-[#131517] border border-[#333A40] p-4 sm:p-8">
            
            {/* Header Annotation of Service Manual */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#333A40] font-mono text-[11px] text-[#BEC8CD]/60 uppercase">
              <span>SCHEMATIC / SUB-ASSEMBLY INSPECTION</span>
              <span>CALIBRATED TOOL AUDIT</span>
            </div>

            {/* Central Graphic Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0F1012] border border-[#272B2E]">
              
              {/* Authentic real-world circuit board & component photograph */}
              <img
                src={REPAIR_IMAGES.diagnosticMotherboard}
                alt="Electronic appliance control circuit board and terminal junctions under technical inspection"
                className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.7] saturate-[0.8]"
              />

              {/* Blueprint Grid Lines Over Image (Restrained, subtle) */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#BEC8CD 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Technical Annotation Pins & Hairline Leaders */}
              {DIAGNOSTIC_POINTS.map((pt) => {
                const isActive = activePointId === pt.id;
                return (
                  <div
                    key={pt.id}
                    onClick={() => setActivePointId(pt.id)}
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  >
                    {/* Center Targeting Dot */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 border transition-all duration-200 ${
                        isActive ? 'border-[#D17A2A] bg-[#D17A2A]/30 scale-125' : 'border-[#DCE2E5] bg-[#181B1D]/80 group-hover:border-[#D17A2A]'
                      }`}>
                        <div className={`w-1.5 h-1.5 mx-auto mt-[3px] ${
                          isActive ? 'bg-[#D17A2A]' : 'bg-[#DCE2E5]'
                        }`} />
                      </div>

                      {/* Monospace Label beside Pin (hidden or truncated gracefully on ultra-small mobile screens to prevent visual clash) */}
                      <span className={`absolute left-4 sm:left-5 font-mono text-[9px] sm:text-xs tracking-wider px-1 sm:px-1.5 py-0.5 border select-none whitespace-nowrap transition-colors pointer-events-none ${
                        isActive
                          ? 'bg-[#181B1D] text-[#D17A2A] border-[#D17A2A] z-30 shadow-md'
                          : 'bg-[#181B1D]/90 text-[#DCE2E5] border-[#333A40] group-hover:border-[#BEC8CD]'
                      }`}>
                        {pt.name}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Central Target Grid Crosshairs */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 pointer-events-none" />

              {/* Bottom watermark / stamp */}
              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#BEC8CD]/60 bg-[#181B1D]/80 px-2 py-1 border border-[#333A40]">
                CROSS-SYSTEM AUDIT PROTOCOL · BHUBANESWAR FIELD UNIT
              </div>
            </div>

            {/* Quick-switch bar under graphic */}
            <div className="mt-4 pt-3 border-t border-[#333A40] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {DIAGNOSTIC_POINTS.map((pt) => {
                const isActive = activePointId === pt.id;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setActivePointId(pt.id)}
                    className={`py-2 px-2 text-center font-mono text-[11px] sm:text-xs tracking-wider border transition-colors cursor-pointer ${
                      isActive
                        ? 'border-[#D17A2A] bg-[#181B1D] text-[#D17A2A] font-semibold'
                        : 'border-[#333A40] text-[#BEC8CD] hover:border-[#BEC8CD]/60'
                    }`}
                  >
                    {pt.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Diagnostic Readout for Active Point */}
          <div className="lg:col-span-4 bg-[#181B1D] border border-[#333A40] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#D17A2A] uppercase">
                DIAGNOSTIC CHECKPOINT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2]">
                {selectedPoint.name}
              </h3>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm text-[#BEC8CD]">
              <div className="p-3 bg-[#131517] border border-[#333A40] space-y-1.5">
                <div className="text-[11px] text-[#D17A2A] uppercase tracking-wider">
                  TESTING PROCEDURE
                </div>
                <div className="text-[#DCE2E5] leading-relaxed">
                  {selectedPoint.checkProcedure}
                </div>
              </div>

              <div className="p-3 bg-[#131517] border border-[#333A40] space-y-1.5">
                <div className="text-[11px] text-[#DCE2E5]/70 uppercase tracking-wider">
                  TYPICAL FAULT SYMPTOMS
                </div>
                <div className="text-[#F5F5F2] leading-relaxed">
                  {selectedPoint.symptomsAddressed}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#333A40] text-xs font-mono text-[#BEC8CD]/70">
              ✓ We explain the root fault and quote transparent costs before touching a screwdriver.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
