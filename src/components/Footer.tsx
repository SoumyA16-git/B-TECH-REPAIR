import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { ServiceId } from '../types';

interface FooterProps {
  onNavigate: (view: string, serviceId?: ServiceId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#181B1D] text-[#F5F5F2] border-t border-[#333A40] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#333A40]">
          
          {/* Brand & Identity */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F2]">
              B-TECH REPAIR
            </h2>
            <div className="font-mono text-xs text-[#BEC8CD]/80 space-y-1">
              <div>FIELD TECHNICAL SERVICE · PATIA</div>
              <div>5.0 ★ · 468 GOOGLE REVIEWS</div>
            </div>
          </div>

          {/* Core Services Index */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs sm:text-sm tracking-wider uppercase text-[#DCE2E5]">
            <div>
              <button
                onClick={() => onNavigate('service', 'ac-repair')}
                className="hover:text-[#D17A2A] transition-colors cursor-pointer"
              >
                AC REPAIR & JET PUMP
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('service', 'refrigerator-repair')}
                className="hover:text-[#D17A2A] transition-colors cursor-pointer"
              >
                REFRIGERATOR
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('service', 'washing-machine-repair')}
                className="hover:text-[#D17A2A] transition-colors cursor-pointer"
              >
                WASHING MACHINE
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('service', 'microwave-repair')}
                className="hover:text-[#D17A2A] transition-colors cursor-pointer"
              >
                MICROWAVE
              </button>
            </div>
          </div>

          {/* Address & Direct Phone */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs sm:text-sm text-[#BEC8CD]">
            <div className="leading-relaxed">
              Nandankanan Rd, near Koel Campus<br />
              Sishu Vihar, Patia<br />
              Bhubaneswar, Odisha 751024
            </div>

            <div>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 text-base font-bold text-[#F5F5F2] hover:text-[#D17A2A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D17A2A]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Metadata & Legal hairline */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#BEC8CD]/60 gap-4">
          <div>
            © {new Date().getFullYear()} B-TECH REPAIR · BHUBANESWAR, ODISHA
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#F5F5F2] cursor-pointer"
            >
              ABOUT REPAIR DESK
            </button>
            <button
              onClick={() => onNavigate('service-areas')}
              className="hover:text-[#F5F5F2] cursor-pointer"
            >
              SERVICE AREAS
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#F5F5F2] cursor-pointer"
            >
              CONTACT & INTAKE
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
