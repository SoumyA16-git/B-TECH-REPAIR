import React from 'react';
import { ArrowRight, Wind, Refrigerator, Waves, Flame } from 'lucide-react';
import { ServiceId } from '../types';

interface ApplianceCoverageProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ApplianceCoverage: React.FC<ApplianceCoverageProps> = ({ onSelectService }) => {
  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            COVERAGE HIERARCHY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            Appliance Specialization
          </h2>
          <p className="text-sm sm:text-base text-[#171A1D]/75 mt-2 max-w-2xl">
            Our highest operational capacity and diagnostic equipment are dedicated to residential and commercial air conditioning, complemented by seasoned technicians for refrigeration, laundry, and microwave systems.
          </p>
        </div>

        {/* Asymmetrical Layout strictly following PRD structure */}
        <div className="border border-[#CCD4D9] bg-white divide-y divide-[#CCD4D9]">
          
          {/* Top Large Hero Block: AIR CONDITIONER */}
          <div 
            onClick={() => onSelectService('ac-repair')}
            className="p-8 sm:p-12 hover:bg-[#F6F7F5]/80 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                  <Wind className="w-4 h-4 text-[#164B70]" />
                  <span>PRIMARY TECHNICAL DISCIPLINE · 01</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#171A1D] group-hover:text-[#164B70] transition-colors">
                  AIR CONDITIONER
                </h3>
                <div className="text-sm sm:text-base font-medium text-[#171A1D]/80">
                  Comprehensive Repair & Maintenance Service
                </div>
                <p className="text-xs sm:text-sm text-[#171A1D]/70 leading-relaxed">
                  Specialized testing for Inverter, Split, Window, and Cassette units. Complete manifold pressure checks, leak detection with nitrogen, genuine compressor capacitors, inverter PCB rectification, and dedicated jet pump wash rigs.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-[#171A1D]/60">
                  <span className="bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">SPLIT AC</span>
                  <span className="bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">INVERTER DUAL ROTARY</span>
                  <span className="bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">WINDOW AC</span>
                  <span className="bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">JET PUMP CLEANING</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-mono font-medium text-[#164B70] shrink-0 self-start md:self-center">
                <span>Explore AC Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Middle Two-Column Split: REFRIGERATOR & WASHING MACHINE */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#CCD4D9]">
            
            {/* Refrigerator */}
            <div 
              onClick={() => onSelectService('refrigerator-repair')}
              className="p-6 sm:p-8 hover:bg-[#F6F7F5]/80 transition-colors cursor-pointer group space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                <Refrigerator className="w-4 h-4 text-[#164B70]" />
                <span>SECONDARY SPECIALIZATION · 02</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171A1D] group-hover:text-[#164B70] transition-colors">
                REFRIGERATOR
              </h3>
              <div className="text-xs sm:text-sm font-medium text-[#171A1D]/80">
                Repair & Service
              </div>
              <p className="text-xs text-[#171A1D]/70 leading-relaxed">
                Single door, frost-free double door, and multi-door inverter refrigerators. Compressor starter relay testing, defrost timer/heater replacement, thermostat calibration, and gas charging.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-medium text-[#164B70]">
                <span>Explore Refrigerator</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Washing Machine */}
            <div 
              onClick={() => onSelectService('washing-machine-repair')}
              className="p-6 sm:p-8 hover:bg-[#F6F7F5]/80 transition-colors cursor-pointer group space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                <Waves className="w-4 h-4 text-[#164B70]" />
                <span>SECONDARY SPECIALIZATION · 03</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171A1D] group-hover:text-[#164B70] transition-colors">
                WASHING MACHINE
              </h3>
              <div className="text-xs sm:text-sm font-medium text-[#171A1D]/80">
                Repair & Service
              </div>
              <p className="text-xs text-[#171A1D]/70 leading-relaxed">
                Front load, top load, and semi-automatic machines. Drain pump motor replacement, drum bearing noise rectification, water level pressure sensor, and controller PCB testing.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-medium text-[#164B70]">
                <span>Explore Washing Machine</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* Bottom Full-Width Strip: MICROWAVE */}
          <div 
            onClick={() => onSelectService('microwave-repair')}
            className="p-6 sm:p-8 hover:bg-[#F6F7F5]/80 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                  <Flame className="w-4 h-4 text-[#164B70]" />
                  <span>APPLIANCE CATEGORY · 04</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#171A1D] group-hover:text-[#164B70] transition-colors">
                  MICROWAVE OVEN
                </h3>
                <p className="text-xs text-[#171A1D]/70">
                  Solo, Grill, and Convection ovens. Safe high-voltage circuit diagnosis, magnetron inspection, mica sheet arcing repair, turntable motors, and keypad membrane replacement.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#164B70] shrink-0">
                <span>Explore Microwave</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
