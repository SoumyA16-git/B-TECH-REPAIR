import React from 'react';
import { Phone, MapPin, Clock, Star, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { ServiceId } from '../types';

interface FooterProps {
  onNavigate: (view: string, serviceId?: ServiceId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#171A1D] text-[#DCE4E9] pt-16 pb-24 md:pb-16 border-t border-[#333A40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#333A40]">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group cursor-pointer"
            >
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#DCE4E9]">
                B-TECH REPAIR
              </span>
            </button>
            <p className="text-xs text-[#DCE4E9]/70 leading-relaxed max-w-sm">
              Doorstep appliance diagnosis and technical repair service based in Patia, Bhubaneswar. Dedicated to component-level troubleshooting, genuine parts, and honest transparent billing.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex text-[#D9822B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono text-white">
                5.0 ★ · 468 Google Reviews
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-[#D9822B] uppercase tracking-wider">
              SERVICES
            </div>
            <ul className="space-y-2 text-xs text-[#DCE4E9]/80">
              <li>
                <button
                  onClick={() => onNavigate('service', 'ac-repair')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AC Repair & Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'ac-jet-pump-cleaning')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AC Jet Pump Deep Wash
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'ac-installation')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AC Installation & Piping
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'refrigerator-repair')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Refrigerator Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'washing-machine-repair')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Washing Machine Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'microwave-repair')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Microwave Oven Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-[#D9822B] uppercase tracking-wider">
              REPAIR DESK
            </div>
            <ul className="space-y-2 text-xs text-[#DCE4E9]/80">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About B-Tech Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Verified Reviews (468)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-areas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bhubaneswar & Cuttack Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Service Intake Desk
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#D9822B] hover:underline cursor-pointer text-left font-medium"
                >
                  Book Doorstep Visit →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-[#D9822B] uppercase tracking-wider">
              HUB CONTACT
            </div>
            <div className="space-y-2 text-xs text-[#DCE4E9]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9822B] shrink-0 mt-0.5" />
                <span>Near Koel Campus, Sishu Vihar, Patia, Bhubaneswar 751024</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9822B] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-mono text-white hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D9822B] shrink-0" />
                <span>Mon – Sun: 8:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#DCE4E9]/50 gap-4">
          <div>
            © {new Date().getFullYear()} B-Tech Repair. All rights reserved. Doorstep Service in Bhubaneswar & Cuttack.
          </div>
          <div className="flex items-center gap-4">
            <span>PATIA · CHANDRASEKHARPUR · CUTTACK</span>
            <span>·</span>
            <span>HONEST DIAGNOSIS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
