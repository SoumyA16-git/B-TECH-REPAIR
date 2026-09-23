import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Wrench } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-[#F6F7F5]/95 backdrop-blur-md border-b border-[#CCD4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-[#164B70] rounded-sm group cursor-pointer"
          >
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[#171A1D] group-hover:text-[#164B70] transition-colors">
              B-TECH REPAIR
            </span>
          </button>

          {/* Zone 2: 4–6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#171A1D]/80">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                onClick={() => handleNav('home')}
                className={`flex items-center gap-1 hover:text-[#164B70] transition-colors py-2 cursor-pointer ${
                  currentView.startsWith('service') ? 'text-[#164B70] font-semibold' : ''
                }`}
              >
                Services
                <span className="text-xs text-[#171A1D]/50">▾</span>
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#CCD4D9] shadow-lg py-2 mt-0 z-50 text-left">
                  <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#171A1D]/50 border-b border-[#CCD4D9]/40 mb-1">
                    APPLIANCE SERVICES
                  </div>
                  <button
                    onClick={() => handleNav('service', 'ac-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>AC Repair & Servicing</span>
                    <span className="font-mono text-[10px] text-[#171A1D]/40">01</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'ac-jet-pump-cleaning')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>AC Jet Pump Deep Cleaning</span>
                    <span className="font-mono text-[10px] text-[#D9822B]">POPULAR</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'ac-installation')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>AC Installation & Copper Pipe</span>
                    <span className="font-mono text-[10px] text-[#171A1D]/40">01C</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'refrigerator-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>Refrigerator Repair</span>
                    <span className="font-mono text-[10px] text-[#171A1D]/40">02</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'washing-machine-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>Washing Machine Repair</span>
                    <span className="font-mono text-[10px] text-[#171A1D]/40">03</span>
                  </button>
                  <button
                    onClick={() => handleNav('service', 'microwave-repair')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#F6F7F5] hover:text-[#164B70] flex items-center justify-between"
                  >
                    <span>Microwave Oven Repair</span>
                    <span className="font-mono text-[10px] text-[#171A1D]/40">04</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('about')}
              className={`hover:text-[#164B70] transition-colors cursor-pointer ${
                currentView === 'about' ? 'text-[#164B70] font-semibold' : ''
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNav('reviews')}
              className={`hover:text-[#164B70] transition-colors cursor-pointer ${
                currentView === 'reviews' ? 'text-[#164B70] font-semibold' : ''
              }`}
            >
              Reviews
              <span className="ml-1 text-[11px] font-mono text-[#D9822B]">5.0★</span>
            </button>

            <button
              onClick={() => handleNav('service-areas')}
              className={`hover:text-[#164B70] transition-colors cursor-pointer ${
                currentView === 'service-areas' ? 'text-[#164B70] font-semibold' : ''
              }`}
            >
              Service Areas
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`hover:text-[#164B70] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#164B70] font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hidden lg:flex items-center gap-2 text-xs font-mono font-medium text-[#171A1D] hover:text-[#164B70] px-3 py-1.5 border border-[#CCD4D9] hover:border-[#164B70] transition-colors bg-white/70"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-medium text-white bg-[#164B70] hover:bg-[#103753] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Request Service</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#171A1D] hover:bg-[#DCE4E9] transition-colors"
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
          <div className="text-[11px] font-mono text-[#171A1D]/60 uppercase tracking-wider mb-2">
            SELECT APPLIANCE / SERVICE
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNav('service', 'ac-repair')}
              className="text-left p-2.5 bg-[#F6F7F5] border border-[#CCD4D9] hover:border-[#164B70]"
            >
              <span className="block font-semibold">AC Repair</span>
              <span className="text-[10px] text-[#171A1D]/60">Faults & gas</span>
            </button>
            <button
              onClick={() => handleNav('service', 'ac-jet-pump-cleaning')}
              className="text-left p-2.5 bg-[#F6F7F5] border border-[#CCD4D9] hover:border-[#164B70]"
            >
              <span className="block font-semibold">Jet Pump Wash</span>
              <span className="text-[10px] text-[#D9822B]">Deep cleaning</span>
            </button>
            <button
              onClick={() => handleNav('service', 'refrigerator-repair')}
              className="text-left p-2.5 bg-[#F6F7F5] border border-[#CCD4D9] hover:border-[#164B70]"
            >
              <span className="block font-semibold">Refrigerator</span>
              <span className="text-[10px] text-[#171A1D]/60">Cooling & relay</span>
            </button>
            <button
              onClick={() => handleNav('service', 'washing-machine-repair')}
              className="text-left p-2.5 bg-[#F6F7F5] border border-[#CCD4D9] hover:border-[#164B70]"
            >
              <span className="block font-semibold">Washing Machine</span>
              <span className="text-[10px] text-[#171A1D]/60">Drain, spin & PCB</span>
            </button>
          </div>

          <div className="border-t border-[#CCD4D9] pt-3 flex flex-col gap-2.5 text-sm">
            <button
              onClick={() => handleNav('about')}
              className="text-left font-medium text-[#171A1D] hover:text-[#164B70] py-1"
            >
              About B-Tech Repair
            </button>
            <button
              onClick={() => handleNav('reviews')}
              className="text-left font-medium text-[#171A1D] hover:text-[#164B70] py-1 flex items-center justify-between"
            >
              <span>Customer Reviews</span>
              <span className="font-mono text-xs text-[#D9822B]">5.0 ★ (468)</span>
            </button>
            <button
              onClick={() => handleNav('service-areas')}
              className="text-left font-medium text-[#171A1D] hover:text-[#164B70] py-1"
            >
              Service Areas (Bhubaneswar & Cuttack)
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-left font-medium text-[#171A1D] hover:text-[#164B70] py-1"
            >
              Service Desk & Direct Contact
            </button>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#171A1D] text-white text-xs font-mono font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
