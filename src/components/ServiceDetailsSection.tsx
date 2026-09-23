import React from 'react';
import { ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import { ServiceId } from '../types';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ServiceDetailsProps {
  onSelectService: (serviceId: ServiceId) => void;
  onBookService: (applianceCategory: string, issue: string) => void;
}

export const ServiceDetailsSection: React.FC<ServiceDetailsProps> = ({
  onSelectService,
  onBookService
}) => {
  return (
    <section className="relative w-full bg-[#F5F5F2] text-[#181B1D] py-16 sm:py-28 lg:py-36 border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 lg:space-y-36">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3 pb-6 sm:pb-8 border-b border-[#CCD4D9]">
          <span className="font-mono text-xs text-[#16496B] tracking-wider uppercase">
            DETAIL 03 / APPLIANCE TECHNICAL PROFILES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1D]">
            The machines you depend on.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#181B1D]/60 pt-1">
            Carefully executed mechanical, thermodynamic, and electronic doorstep repairs.
          </p>
        </div>

        {/* 1. AC: Large image on left, text on right (Deep crop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative h-[260px] sm:h-[400px] lg:h-[480px] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden">
            <img
              src={REPAIR_IMAGES.acServiceAlt}
              alt="Technician testing AC indoor unit electronics with meter"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#181B1D]/90 text-white font-mono text-[10px] sm:text-[11px] px-2.5 py-1 border border-[#333A40]">
              AC · SPLIT / INVERTER / WINDOW
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              01 / AIR CONDITIONING
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
              Cooling loss, refrigerant leaks & PCB failures.
            </h3>
            <p className="text-sm sm:text-base text-[#181B1D]/80 leading-relaxed font-normal">
              When an AC fails in Bhubaneswar’s humid climate, guessing wastes money. We check running amps, standing pressure, blower velocity, and temperature delta before recommending any parts replacement.
            </p>
            <div className="pt-1 sm:pt-2 flex flex-col gap-1.5 sm:gap-2 font-mono text-xs text-[#181B1D]/75">
              <div>— Manifold pressure test for R32, R410A, and R22</div>
              <div>— High-pressure jet pump coil deep wash</div>
              <div>— Inverter sensor & relay board repairs</div>
            </div>
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onSelectService('ac-repair')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16496B] hover:text-[#181B1D] font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Inspect AC Protocol →
              </button>
              <button
                onClick={() => onBookService('AC', 'AC Diagnostic Doorstep Visit')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#181B1D] hover:bg-[#16496B] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>
        </div>

        {/* 2. Refrigerator: Text on left, image on right (Square crop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 order-2 lg:order-1">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              02 / REFRIGERATION
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
              When cooling drops, food spoils fast.
            </h3>
            <p className="text-sm sm:text-base text-[#181B1D]/80 leading-relaxed font-normal">
              Refrigerators rely on sealed capillary circuits, starter relays, and automated defrost timers. We trace whether a compressor is struggling to start, gas has leaked slowly, or a thermistor is sending incorrect readings.
            </p>
            <div className="pt-1 sm:pt-2 flex flex-col gap-1.5 sm:gap-2 font-mono text-xs text-[#181B1D]/75">
              <div>— PTC relay, OLP & starting capacitor testing</div>
              <div>— Capillary choked line diagnosis & filter replacement</div>
              <div>— Door gasket air-tight seal audit</div>
            </div>
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onSelectService('refrigerator-repair')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16496B] hover:text-[#181B1D] font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Inspect Fridge Protocol →
              </button>
              <button
                onClick={() => onBookService('Refrigerator', 'Refrigerator Cooling Issue')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#181B1D] hover:bg-[#16496B] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[260px] sm:h-[380px] lg:h-[440px] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden order-1 lg:order-2">
            <img
              src={REPAIR_IMAGES.refrigeratorCompressor}
              alt="Refrigerator rear compressor unit and capillary line inspection"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#181B1D]/90 text-white font-mono text-[10px] sm:text-[11px] px-2.5 py-1 border border-[#333A40]">
              REFRIGERATOR · SINGLE & DOUBLE DOOR
            </div>
          </div>
        </div>

        {/* 3. Washing Machine: Large image on left, text on right (Panoramic crop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative h-[260px] sm:h-[360px] lg:h-[420px] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden">
            <img
              src={REPAIR_IMAGES.washingMachineMechanics}
              alt="Washing machine drum and suspension belt inspection"
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.88]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#181B1D]/90 text-white font-mono text-[10px] sm:text-[11px] px-2.5 py-1 border border-[#333A40]">
              WASHING MACHINE · FRONT & TOP LOAD
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              03 / LAUNDRY EQUIPMENT
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
              Drain blocks, spin failures & drum vibration.
            </h3>
            <p className="text-sm sm:text-base text-[#181B1D]/80 leading-relaxed font-normal">
              From stuck coin traps and choked drain impellers to worn spider arms and slipping motor drive belts. We take apart front and top load units cleanly on-site and verify balancing.
            </p>
            <div className="pt-1 sm:pt-2 flex flex-col gap-1.5 sm:gap-2 font-mono text-xs text-[#181B1D]/75">
              <div>— Inlet solenoid valve pressure testing</div>
              <div>— Drain motor & impeller de-clogging</div>
              <div>— Suspension damper & shock strut replacement</div>
            </div>
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onSelectService('washing-machine-repair')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16496B] hover:text-[#181B1D] font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Inspect Washer Protocol →
              </button>
              <button
                onClick={() => onBookService('Washing Machine', 'Washing Machine Not Spinning / Draining')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#181B1D] hover:bg-[#16496B] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>
        </div>

        {/* 4. Microwave: Text on left, image on right (Wide crop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 order-2 lg:order-1">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              04 / THERMAL & MICROWAVE
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
              Turntable spins, but food stays stone cold.
            </h3>
            <p className="text-sm sm:text-base text-[#181B1D]/80 leading-relaxed font-normal">
              Microwaves operate under high voltages that demand proper safety discharge and specialized meter tests. We isolate whether the issue is a burnt magnetron, defective high-voltage diode, shorted capacitor, or door switch interlock.
            </p>
            <div className="pt-1 sm:pt-2 flex flex-col gap-1.5 sm:gap-2 font-mono text-xs text-[#181B1D]/75">
              <div>— Magnetron filament resistance & emission test</div>
              <div>— High voltage capacitor & diode discharge and audit</div>
              <div>— Mica waveguide sheet burn replacement</div>
            </div>
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onSelectService('microwave-repair')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#16496B] hover:text-[#181B1D] font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                Inspect Microwave Protocol →
              </button>
              <button
                onClick={() => onBookService('Microwave Oven', 'Microwave Not Heating / Sparking')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#181B1D] hover:bg-[#16496B] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[260px] sm:h-[340px] lg:h-[400px] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden order-1 lg:order-2">
            <img
              src={REPAIR_IMAGES.microwaveMagnetron}
              alt="Microwave oven electronic panel and high voltage circuit inspection"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#181B1D]/90 text-white font-mono text-[10px] sm:text-[11px] px-2.5 py-1 border border-[#333A40]">
              MICROWAVE · CONVECTION & GRILL
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
