import React from 'react';
import { Phone, ArrowUpRight, CheckCircle2, Star, ShieldCheck, Wrench, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { REPAIR_IMAGES } from '../data/repairImages';

interface AboutPageProps {
  onOpenBooking: () => void;
  onViewReviews: () => void;
}

const REVIEW_THEMES = [
  {
    title: 'Prompt service',
    desc: 'Doorstep response within 60 to 90 minutes across Patia, KIIT, Infocity, and greater Bhubaneswar.'
  },
  {
    title: 'Professional behaviour',
    desc: 'Technicians carry indoor floor coverings, waterproof service bags, clean multimeters, and work with care.'
  },
  {
    title: 'Honest assessment',
    desc: 'We explain what is actually defective. If a capacitor is weak, we change the capacitor—we don’t claim the compressor is dead.'
  },
  {
    title: 'Genuine parts mentioned by customers',
    desc: 'Original manufacturer-spec relays, run capacitors, high-voltage diodes, and sensor thermistors.'
  },
  {
    title: 'Reasonable / standard service charges',
    desc: 'Standard inspection fees with itemized quotations before work starts. No surprise hidden charges.'
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onViewReviews }) => {
  return (
    <div className="py-12 sm:py-20 bg-[#F5F5F2] min-h-screen text-[#181B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* Hero Section: Real Technician Photograph & Bold Direct Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
              PHILOSOPHY / FIELD SERVICE ETHOS
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#181B1D] leading-[1.08]">
              Repair is a practical job. <br />
              <span className="text-[#16496B]">So should the website be.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#181B1D]/80 leading-relaxed font-normal max-w-2xl">
              We don’t use generic corporate buzzwords, bloated sales pitches, or cartoon graphics. When an air conditioner stops cooling or a washing machine drum won’t spin, you need a qualified technician at your door with a meter and the right tools.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#16496B] hover:bg-[#123852] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D17A2A]" />
                <span>CALL 072057 19060</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#181B1D] hover:bg-[#181B1D] hover:text-white text-[#181B1D] text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
              >
                <span>REQUEST SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/12] bg-[#181B1D] border border-[#CCD4D9] overflow-hidden">
            <img
              src={REPAIR_IMAGES.technicianWorking}
              alt="Technician servicing electrical and mechanical components with diagnostic precision"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88]"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-[#181B1D]/90 text-white font-mono text-[11px] p-2.5 border border-[#333A40]">
              <span className="text-[#D17A2A] mr-2">●</span>
              <span>PATIA WORKSHOP & FIELD DISPATCH UNIT</span>
            </div>
          </div>

        </div>

        {/* Explain Doorstep Service, Categories, Service Approach & Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#CCD4D9]">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#16496B] uppercase font-bold block">
              01 / DOORSTEP SERVICE
            </span>
            <h3 className="text-xl font-bold text-[#181B1D]">We Come to You</h3>
            <p className="text-xs sm:text-sm text-[#181B1D]/75 leading-relaxed">
              No need to haul a heavy 70kg washing machine or dual-door refrigerator across town. Our service van carries portable tools and high-demand spares right to your gate.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#16496B] uppercase font-bold block">
              02 / APPLIANCE CATEGORIES
            </span>
            <h3 className="text-xl font-bold text-[#181B1D]">Focused Specialization</h3>
            <p className="text-xs sm:text-sm text-[#181B1D]/75 leading-relaxed">
              Air conditioners (Split, Inverter, Window), Refrigerators (Single/Double door), Washing Machines (Front/Top load), and Microwave Ovens (Convection/Grill).
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#16496B] uppercase font-bold block">
              03 / SERVICE APPROACH
            </span>
            <h3 className="text-xl font-bold text-[#181B1D]">Find the Fault First</h3>
            <p className="text-xs sm:text-sm text-[#181B1D]/75 leading-relaxed">
              We test electrical voltage, capacitor values, refrigerant manifold pressures, and motor coils before taking any components apart.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#16496B] uppercase font-bold block">
              04 / AREAS SERVED
            </span>
            <h3 className="text-xl font-bold text-[#181B1D]">Bhubaneswar & Cuttack</h3>
            <p className="text-xs sm:text-sm text-[#181B1D]/75 leading-relaxed">
              Based at Nandankanan Road, Patia, serving Chandrasekharpur, KIIT, Infocity, Jayadev Vihar, Nayapalli, and nearby localities.
            </p>
          </div>
        </div>

        {/* Real Customer Review Themes */}
        <div className="space-y-8 bg-[#EAECE9]/40 p-8 sm:p-12 border border-[#CCD4D9]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#CCD4D9]">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
                COMMUNITY REPUTATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#181B1D]">
                What 468 Customer Reviews Consistently Highlight
              </h2>
            </div>
            <button
              onClick={onViewReviews}
              className="mt-4 sm:mt-0 font-mono text-xs text-[#16496B] underline underline-offset-4 cursor-pointer"
            >
              Read full Google reviews →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEW_THEMES.map((theme, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#CCD4D9] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D17A2A]" />
                  <h4 className="font-bold text-sm sm:text-base text-[#181B1D]">
                    {theme.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#181B1D]/75 leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
