import React from 'react';
import { ArrowRight, Droplets, CheckCircle, ShieldAlert } from 'lucide-react';
import { ServiceId } from '../types';

interface JetPumpFeatureProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookJetPump: () => void;
}

export const JetPumpFeature: React.FC<JetPumpFeatureProps> = ({ onSelectService, onBookJetPump }) => {
  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Technical Cutaway */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border border-[#CCD4D9] bg-white p-6 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#CCD4D9] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#164B70] font-semibold">
                  <Droplets className="w-4 h-4 text-[#164B70]" />
                  <span>HIGH-PRESSURE JET HYGIENE RIG</span>
                </div>
                <span className="text-[#D9822B] font-bold">120 PSI REGULATED</span>
              </div>

              {/* Graphic / Technical Schematic Representation */}
              <div className="bg-[#171A1D] text-[#DCE4E9] p-6 space-y-4">
                <div className="text-[10px] font-mono text-[#D9822B] uppercase tracking-wider">
                  PHYSICAL WASH & APPLIANCE ISOLATION
                </div>
                
                <div className="border-l-2 border-[#164B70] pl-4 space-y-2">
                  <div className="text-sm font-semibold text-white">
                    Protective Waterproof Catchment Bag
                  </div>
                  <p className="text-xs text-[#DCE4E9]/70 leading-relaxed">
                    Mounted tightly beneath split indoor unit with 2-meter drain tube. Prevents wastewater contact with wall paint, electronic circuitry, or home furnishings.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="bg-[#101316] p-3 border border-[#272B30]">
                    <span className="text-[10px] text-[#DCE4E9]/50 block">NOZZLE SPRAY ANGLE</span>
                    <span className="text-sm font-bold text-white mt-1 block">45° Fan Pattern</span>
                    <span className="text-[10px] text-[#22C55E]">Protects aluminum fins</span>
                  </div>
                  <div className="bg-[#101316] p-3 border border-[#272B30]">
                    <span className="text-[10px] text-[#DCE4E9]/50 block">TARGET ZONE</span>
                    <span className="text-sm font-bold text-white mt-1 block">Coils & Blower Wheel</span>
                    <span className="text-[10px] text-[#22C55E]">Flushes deep mold</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#DCE4E9]/60 flex items-center justify-between">
                  <span>OUTDOOR CONDENSER COIL</span>
                  <span className="text-[#22C55E]">HIGH-FLOW RINSE INCLUDED</span>
                </div>
              </div>

              <div className="text-xs text-[#171A1D]/70 italic flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D9822B] shrink-0" />
                <span>Electrical junction boxes and PCB enclosures are isolated and protected prior to water flow.</span>
              </div>
            </div>
          </div>

          {/* Text and 4-Step Process */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
                EQUIPMENT-GRADE SERVICE
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
                Deep Cleaning for Better Maintenance
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#171A1D]/80 leading-relaxed">
              Our AC cleaning service uses a jet pump machine to thoroughly clean the unit while technicians inspect the system and check its operation.
            </p>

            {/* 4-Step Process strictly from PRD */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white border border-[#CCD4D9] flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#164B70] bg-[#F6F7F5] px-2 py-1 border border-[#CCD4D9]">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#171A1D]">INSPECT</h4>
                  <p className="text-xs text-[#171A1D]/70 mt-0.5">
                    Technician examines filter density, coil oxidation, blower wheel rotation, and condensation drain line status.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#CCD4D9] flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#164B70] bg-[#F6F7F5] px-2 py-1 border border-[#CCD4D9]">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#171A1D]">CLEAN</h4>
                  <p className="text-xs text-[#171A1D]/70 mt-0.5">
                    Controlled high-pressure jet pump stream flushes compacted debris and soot from between cooling fins and the cylindrical blower fan.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#CCD4D9] flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#164B70] bg-[#F6F7F5] px-2 py-1 border border-[#CCD4D9]">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#171A1D]">CHECK COMPONENTS</h4>
                  <p className="text-xs text-[#171A1D]/70 mt-0.5">
                    Electrical terminal screws tightened, fan motor bearings tested for play, and outdoor condenser fins checked.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#CCD4D9] flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#164B70] bg-[#F6F7F5] px-2 py-1 border border-[#CCD4D9]">
                  04
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#171A1D]">TEST</h4>
                  <p className="text-xs text-[#171A1D]/70 mt-0.5">
                    Unit powered on; intake-to-outlet temperature differential measured along with free drain water run-off.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookJetPump}
                className="py-3 px-5 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Book Jet Pump Cleaning
              </button>
              <button
                onClick={() => onSelectService('ac-jet-pump-cleaning')}
                className="text-xs font-mono text-[#171A1D] hover:text-[#164B70] underline underline-offset-4 cursor-pointer"
              >
                Read Complete Jet Service Guide →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
