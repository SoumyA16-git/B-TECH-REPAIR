import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { ServiceId } from '../types';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, serviceId?: ServiceId) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const handleNav = (view: string, serviceId?: ServiceId) => {
    onNavigate(view, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F5F2]/95 backdrop-blur-md border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-[#16496B] rounded-sm group cursor-pointer"
          >
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[#181B1D] group-hover:text-[#16496B] transition-colors">
              B-TECH REPAIR
            </span>
          </button>

          {/* Zone 2: 4–6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#181B1D]/80">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                onClick={() => handleNav('home')}
                className={`flex items-center gap-1 hover:text-[#16496B] transition-colors py-2 cursor-pointer ${
                  currentView.startsWith('service') ? 'text-[#16496B] font-semibold' : ''
                }`}
              >
                Services
                <span className="text-xs text-[#181B1D]/50">▾</span>
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#CCD4D9] shadow-lg py-2 mt-0 z-50 text-left">
                  <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#181B1D]/50 border-b border-[#CCD4D9]/40 mb-1">
                    APPLIANCE SERVICES
                  </div>
                  <button
                    onClick={() => handleNav('service', 'ac-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>AC Repair & Servicing</span>
                    <span className="font-mono text-[10px] text-[#181B1D]/40">01</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'ac-jet-pump-cleaning')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>AC Jet Pump Deep Cleaning</span>
                    <span className="font-mono text-[10px] text-[#D17A2A]">POPULAR</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'ac-installation')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>AC Installation & Copper Pipe</span>
                    <span className="font-mono text-[10px] text-[#181B1D]/40">01C</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'refrigerator-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>Refrigerator Repair</span>
                    <span className="font-mono text-[10px] text-[#181B1D]/40">02</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'washing-machine-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>Washing Machine Repair</span>
                    <span className="font-mono text-[10px] text-[#181B1D]/40">03</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'microwave-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F5F5F2] hover:text-[#16496B] flex items-center justify-between cursor-pointer"
                  >
                    <span>Microwave Oven Repair</span>
                    <span className="font-mono text-[10px] text-[#181B1D]/40">04</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('about')}
              className={`hover:text-[#16496B] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#16496B] font-semibold' : ''
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNav('reviews')}
              className={`hover:text-[#16496B] transition-colors cursor-pointer ${
                currentView === 'reviews' ? 'text-[#16496B] font-semibold' : ''
              }`}
            >
              Reviews
              <span className="ml-1 text-[11px] font-mono text-[#D17A2A]">5.0★</span>
            </button>

            <button
              onClick={() => handleNav('service-areas')}
              className={`hover:text-[#16496B] transition-colors cursor-pointer ${
                currentView === 'service-areas' ? 'text-[#16496B] font-semibold' : ''
              }`}
            >
              Service Areas
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`hover:text-[#16496B] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#16496B] font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hidden lg:flex items-center gap-2 text-xs font-mono font-medium text-[#181B1D] hover:text-[#16496B] px-3 py-1.5 border border-[#CCD4D9] hover:border-[#16496B] transition-colors bg-white/70"
            >
              <Phone className="w-3.5 h-3.5 text-[#D17A2A]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-medium text-white bg-[#16496B] hover:bg-[#123852] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Request Service</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#181B1D] hover:bg-[#DCE2E5] transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#CCD4D9] px-4 pt-3 pb-6 space-y-3">
          <div className="text-[11px] font-mono text-[#181B1D]/60 uppercase tracking-wider mb-2">
            SELECT APPLIANCE / SERVICE
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNav('service', 'ac-repair')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">AC Repair</span>
              <span className="text-[10px] text-[#181B1D]/60">Faults & gas</span>
            </button>
            <button
              onClick={() => handleNav('service', 'ac-jet-pump-cleaning')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">Jet Pump Wash</span>
              <span className="text-[10px] text-[#D17A2A]">Deep cleaning</span>
            </button>
            <button
              onClick={() => handleNav('service', 'refrigerator-repair')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">Refrigerator</span>
              <span className="text-[10px] text-[#181B1D]/60">Cooling & relay</span>
            </button>
            <button
              onClick={() => handleNav('service', 'washing-machine-repair')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">Washing Machine</span>
              <span className="text-[10px] text-[#181B1D]/60">Motor & drain</span>
            </button>
            <button
              onClick={() => handleNav('service', 'microwave-repair')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">Microwave Oven</span>
              <span className="text-[10px] text-[#181B1D]/60">Magnetron & PCB</span>
            </button>
            <button
              onClick={() => handleNav('service', 'ac-installation')}
              className="text-left p-2.5 bg-[#F5F5F2] border border-[#CCD4D9] hover:border-[#16496B] cursor-pointer"
            >
              <span className="block font-semibold">AC Installation</span>
              <span className="text-[10px] text-[#181B1D]/60">Mounting & pipes</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[#CCD4D9] space-y-2 text-sm font-medium">
            <button
              onClick={() => handleNav('about')}
              className="block w-full text-left py-1.5 text-[#181B1D] hover:text-[#16496B] cursor-pointer"
            >
              About the Workshop
            </button>
            <button
              onClick={() => handleNav('reviews')}
              className="block w-full text-left py-1.5 text-[#181B1D] hover:text-[#16496B] cursor-pointer"
            >
              Google Reviews (5.0 ★ · 468)
            </button>
            <button
              onClick={() => handleNav('service-areas')}
              className="block w-full text-left py-1.5 text-[#181B1D] hover:text-[#16496B] cursor-pointer"
            >
              Service Areas (Bhubaneswar & Cuttack)
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="block w-full text-left py-1.5 text-[#181B1D] hover:text-[#16496B] cursor-pointer"
            >
              Contact & Intake Desk
            </button>
          </div>

          <div className="pt-3 border-t border-[#CCD4D9]">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full py-3 bg-[#181B1D] text-white flex items-center justify-center gap-2 text-xs font-mono font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D17A2A]" />
              <span>Call Technician Desk ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
