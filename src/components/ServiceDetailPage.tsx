import React, { useState } from 'react';
import { Phone, ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Wrench, ShieldCheck, Gauge } from 'lucide-react';
import { SERVICES_INDEX, BUSINESS_INFO } from '../data/repairData';
import { ServiceId, ApplianceCategory } from '../types';
import { REPAIR_IMAGES } from '../data/repairImages';

interface ServiceDetailPageProps {
  serviceId: ServiceId;
  onBack: () => void;
  onNavigateService: (id: ServiceId) => void;
  onOpenBookingWithDetails: (appliance: ApplianceCategory, issue: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBack,
  onNavigateService,
  onOpenBookingWithDetails
}) => {
  const service = SERVICES_INDEX.find(s => s.id === serviceId) || SERVICES_INDEX[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Specific service configurations matching the exact prompt headings and photography
  const getServiceConfig = () => {
    switch (serviceId) {
      case 'ac-repair':
        return {
          heroImage: REPAIR_IMAGES.heroTechnician,
          heroHeading: "AC not cooling? Start with the diagnosis.",
          heroSub: "When the compressor cuts out or air blows warm in Bhubaneswar's humidity, we find out whether it's pressure loss, an inverter thermistor failure, or capacitor degradation.",
          issueIndex: [
            'Not Cooling',
            'Gas Leakage',
            'Gas Charging',
            'PCB Repair',
            'Remote Problems',
            'Wet Servicing',
            'Condenser Issues',
            'Installation',
            'Copper Pipe Installation'
          ],
          stages: [
            { step: '01', title: 'Pressure Manifold Test', desc: 'Standing and running PSI check for R32, R410A, and R22 refrigerants.' },
            { step: '02', title: 'Amperage & Voltage Audit', desc: 'Compressor startup current draw and inverter PCB signal continuity check.' },
            { step: '03', title: 'Thermal Delta Measurement', desc: 'Supply vs return air temperature difference measured across coil fins.' },
            { step: '04', title: 'Targeted Component Fix', desc: 'Defective relays, capacitors, copper flared joints or sensors rectified.' }
          ]
        };

      case 'ac-jet-pump-cleaning':
        return {
          heroImage: REPAIR_IMAGES.jetPumpCleaning,
          heroHeading: "A deeper clean for the machine doing the cooling.",
          heroSub: "High-pressure water spray channeled through a dedicated catchment jacket. Extracts compacted mold, soot, and fin debris without bending aluminum heat transfer coils.",
          issueIndex: [
            'Sluggish Air Throw',
            'Musty Mold Odor',
            'Water Overflow from Drain Tray',
            'Fins Clogged with City Dust',
            'High Power Draw from Heat Resistance',
            'Seasonal Monsoon Overhaul'
          ],
          stages: [
            { step: '01', title: 'INSPECT', desc: 'Assess coil condition, blower wheel buildup, and shroud electrical junctions.' },
            { step: '02', title: 'CLEAN', desc: 'Mount waterproof bag and flush evaporator and condenser at 120 PSI.' },
            { step: '03', title: 'CHECK', desc: 'Clear drain channel obstruction, check fan motor bearings, and test tray seal.' },
            { step: '04', title: 'TEST', desc: 'Operational run: verify CFM blower velocity and clear condensate outflow.' }
          ]
        };

      case 'refrigerator-repair':
        return {
          heroImage: REPAIR_IMAGES.refrigeratorCompressor,
          heroHeading: "When the refrigerator isn't keeping up.",
          heroSub: "Cold visual inspection of sealed refrigeration loops, starting relays, and defrost timers. We stop cooling loss before food spoils.",
          issueIndex: [
            'Freezer Freezing but Fridge Warm',
            'Compressor Clicking Every Few Minutes',
            'Excessive Frost Buildup on Coil',
            'Water Pooling Under Crisper Trays',
            'Slow Refrigerant Leakage in Capillary',
            'Door Gasket Loose or Cracked'
          ],
          stages: [
            { step: '01', title: 'Relay & OLP Electrical Test', desc: 'Test PTC starter resistance and overload protector continuity.' },
            { step: '02', title: 'Defrost Heater & Thermostat', desc: 'Verify bi-metal defrost cutoff and timer cam mechanism.' },
            { step: '03', title: 'Gas Circuit & Capillary Audit', desc: 'Check suction pipe sweating and compressor shell temperature.' },
            { step: '04', title: 'Door Gasket Seal Verification', desc: 'Paper-slip tightness test around magnetic perimeter seals.' }
          ]
        };

      case 'washing-machine-repair':
        return {
          heroImage: REPAIR_IMAGES.washingMachineMechanics,
          heroHeading: "The cycle stops. We find out why.",
          heroSub: "Mechanical drum balance, solenoid valves, drive belts, and drain pump unclogging for front load, top load, and semi-automatic washers.",
          issueIndex: [
            'Machine Won’t Spin or Agitate',
            'Water Not Draining / Error E20',
            'Severe Shaking & Thumping Noise',
            'Water Leaking from Door Gasket',
            'Control Board Stops Mid-Program',
            'Inlet Valve Not Drawing Water'
          ],
          stages: [
            { step: '01', title: 'Drain Trap & Impeller Audit', desc: 'Clear foreign coins, pins, and lint from the pump cavity.' },
            { step: '02', title: 'Motor & Belt Tension Test', desc: 'Inspect carbon brushes, drive pulley, and capacitor values.' },
            { step: '03', title: 'Suspension & Damper Check', desc: 'Inspect shock struts and balancing springs for drum drift.' },
            { step: '04', title: 'Pressure Sensor Continuity', desc: 'Test water level switch hose for hairline pinholes or choke.' }
          ]
        };

      case 'microwave-repair':
        return {
          heroImage: REPAIR_IMAGES.microwaveMagnetron,
          heroHeading: "Small appliance. Specific fault.",
          heroSub: "High-voltage microwave circuits require deliberate safety protocols. We test magnetrons, high-voltage diodes, and touch membranes on-site.",
          issueIndex: [
            'Turntable Turns but No Heat',
            'Sparks & Crackling Inside Cavity',
            'Keypad Buttons Unresponsive',
            'Trips Home MCB Instantly',
            'Burnt Mica Waveguide Sheet',
            'Door Interlock Switch Defective'
          ],
          stages: [
            { step: '01', title: 'High-Voltage Discharge', desc: 'Safely discharge 2,000V capacitor before touching internal terminals.' },
            { step: '02', title: 'Magnetron Filament Test', desc: 'Verify low-ohm filament continuity and inspect antenna cap.' },
            { step: '03', title: 'Diode & Transformer Audit', desc: 'Meter forward/reverse resistance across high-voltage rectifier.' },
            { step: '04', title: 'Waveguide & Door Interlock', desc: 'Replace burned mica sheet and verify secondary safety microswitches.' }
          ]
        };

      default:
        return {
          heroImage: REPAIR_IMAGES.technicianWorking,
          heroHeading: `${service.title}`,
          heroSub: service.tagline,
          issueIndex: service.commonIssues,
          stages: service.inspectionSteps
        };
    }
  };

  const config = getServiceConfig();

  return (
    <div className="py-8 sm:py-16 bg-[#F5F5F2] min-h-screen text-[#181B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Top Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs text-[#16496B] hover:text-[#181B1D] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME INDEX</span>
          </button>

          <div className="font-mono text-[10px] sm:text-xs text-[#181B1D]/60 uppercase">
            PATIA WORKSHOP · {service.category} SPECIFICATION
          </div>
        </div>

        {/* HERO SECTION FOR SERVICE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left / Top: Photographic Focus */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden">
            <img
              src={config.heroImage}
              alt={config.heroHeading}
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88]"
            />
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#181B1D]/90 text-white font-mono text-[10px] sm:text-[11px] px-2.5 py-1 border border-[#333A40]">
              {service.number} · {service.category} FIELD AUDIT
            </div>
          </div>

          {/* Right / Top: Editorial Heading & CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              {service.number} / {service.category} SERVICE MANUAL
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181B1D] leading-[1.1]">
              {config.heroHeading}
            </h1>

            <p className="text-sm sm:text-lg text-[#181B1D]/80 leading-relaxed font-normal">
              {config.heroSub}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#16496B] hover:bg-[#123852] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D17A2A]" />
                <span>CALL 072057 19060</span>
              </a>

              <button
                onClick={() => onOpenBookingWithDetails(service.category, `${config.heroHeading} - Doorstep Visit`)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#181B1D] hover:bg-[#181B1D] hover:text-white text-[#181B1D] text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
              >
                <span>REQUEST DOORSTEP VISIT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-[#CCD4D9] text-[11px] sm:text-xs font-mono text-[#181B1D]/60 flex flex-wrap gap-4 sm:gap-6">
              <span>DOORSTEP: BHUBANESWAR & CUTTACK</span>
              <span>PARTS: GENUINE SPECIFICATION</span>
            </div>
          </div>

        </div>

        {/* SERVICE ISSUE INDEX (Thin dividers, no cards) */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-[#CCD4D9] flex items-baseline justify-between">
            <div>
              <span className="font-mono text-xs text-[#16496B] uppercase tracking-wider block mb-1">
                SYMPTOM INDEX
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1D]">
                Common Issues & Breakdown Scenarios
              </h2>
            </div>
            <span className="font-mono text-xs text-[#181B1D]/60 hidden sm:inline">
              SELECT ANY ISSUE TO INITIATE BOOKING
            </span>
          </div>

          <div className="divide-y divide-[#CCD4D9] border-y border-[#CCD4D9]">
            {config.issueIndex.map((issue) => (
              <div
                key={issue}
                onClick={() => onOpenBookingWithDetails(service.category, `${service.title}: ${issue}`)}
                className="group py-4 sm:py-5 flex items-center justify-between cursor-pointer hover:pl-2 transition-all duration-150"
              >
                <span className="text-sm sm:text-base font-semibold text-[#181B1D] group-hover:text-[#16496B] transition-colors">
                  {issue}
                </span>
                <div className="flex items-center gap-3 font-mono text-xs text-[#181B1D]/50 group-hover:text-[#D17A2A]">
                  <span className="hidden sm:inline">SCHEDULE DIAGNOSIS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LARGE VISUAL DIAGNOSTIC SECTION / INSPECT → CLEAN → CHECK → TEST */}
        <div className="bg-[#181B1D] text-[#F5F5F2] p-8 sm:p-12 lg:p-16 border border-[#333A40] space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs text-[#D17A2A] uppercase tracking-wider">
              DIAGNOSTIC PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F2]">
              {serviceId === 'ac-jet-pump-cleaning' ? 'Inspect → Clean → Check → Test' : 'Systematic Step-by-Step Resolution'}
            </h2>
            <p className="text-sm text-[#BEC8CD]">
              We adhere to technical discipline on every doorstep visit. No guesswork, no exaggerated promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#333A40]">
            {config.stages.map((stage) => (
              <div key={stage.step} className="space-y-2 border-l border-[#333A40] pl-4">
                <div className="font-mono text-xs text-[#D17A2A] font-bold">
                  STAGE {stage.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F2]">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#BEC8CD] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Specs & Standard Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-3 border-b border-[#CCD4D9] font-mono text-xs text-[#16496B] uppercase tracking-wider">
              OPERATIONAL PARAMETERS
            </div>
            <div className="space-y-3 font-mono text-xs">
              {service.technicalSpecs.map((spec) => (
                <div key={spec.label} className="p-3 bg-[#EAECE9]/50 border border-[#CCD4D9]">
                  <div className="text-[#181B1D]/60 uppercase text-[10px] mb-0.5">{spec.label}</div>
                  <div className="text-[#181B1D] font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border border-[#CCD4D9] text-xs font-mono text-[#181B1D]/75 leading-relaxed">
              {service.standardNotice}
            </div>
          </div>

          {/* Right: FAQs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="pb-3 border-b border-[#CCD4D9] font-mono text-xs text-[#16496B] uppercase tracking-wider">
              FREQUENTLY CLARIFIED TECHNICAL QUESTIONS
            </div>

            <div className="divide-y divide-[#CCD4D9] border-y border-[#CCD4D9]">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left text-sm sm:text-base font-semibold text-[#181B1D] hover:text-[#16496B] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#16496B]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#CCD4D9]" />}
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-[#181B1D]/80 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Other Services Switcher */}
        <div className="pt-8 border-t border-[#CCD4D9]">
          <div className="font-mono text-xs text-[#181B1D]/60 uppercase mb-4">
            OTHER APPLIANCE PROTOCOLS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            {SERVICES_INDEX.filter(s => s.id !== serviceId).map(other => (
              <button
                key={other.id}
                onClick={() => onNavigateService(other.id)}
                className="p-3 border border-[#CCD4D9] bg-white hover:border-[#16496B] hover:text-[#16496B] text-left transition-colors cursor-pointer"
              >
                <div className="text-[10px] text-[#181B1D]/50">{other.number}</div>
                <div className="font-bold mt-1 text-[#181B1D]">{other.category}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
