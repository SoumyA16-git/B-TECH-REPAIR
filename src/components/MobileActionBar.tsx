import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#181B1D] border-t border-[#333A40] shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 h-14">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex items-center justify-center gap-2 border-r border-[#333A40] text-[#F5F5F2] hover:bg-black/20 active:bg-black/40 transition-colors text-xs font-mono font-medium tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 text-[#D17A2A]" />
          <span>CALL {BUSINESS_INFO.phone}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 bg-[#16496B] text-[#F5F5F2] hover:bg-[#123852] active:bg-[#0e2c40] transition-colors text-xs font-mono tracking-wider font-semibold cursor-pointer"
        >
          <span>REQUEST SERVICE</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#DCE2E5]" />
        </button>
      </div>
    </aside>
  );
};
