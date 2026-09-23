import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#171A1D] border-t border-[#333A40] shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 h-14">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex items-center justify-center gap-2 border-r border-[#333A40] text-white hover:bg-black/20 active:bg-black/40 transition-colors text-xs font-mono font-medium tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
          <span>CALL {BUSINESS_INFO.phone}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 bg-[#164B70] text-white hover:bg-[#103753] active:bg-[#0c293e] transition-colors text-xs font-medium tracking-wide cursor-pointer"
        >
          <span>REQUEST SERVICE</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
        </button>
      </div>
    </div>
  );
};
