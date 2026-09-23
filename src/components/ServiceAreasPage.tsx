import React from 'react';
import { MapPin, Phone, ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS_LIST, BUSINESS_INFO } from '../data/repairData';

interface ServiceAreasPageProps {
  onBack: () => void;
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onBack, onOpenBooking }) => {
  return (
    <div className="py-12 md:py-20 bg-[#F6F7F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-[#164B70] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MAIN DESK</span>
          </button>

          <span className="text-xs font-mono text-[#171A1D]/60">
            GEOGRAPHIC COVERAGE
          </span>
        </div>

        {/* Hero Header */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-10 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              DOORSTEP RADIUS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171A1D]">
              We Come to You.
            </h1>
          </div>

          <div className="text-lg sm:text-xl font-semibold text-[#164B70]">
            Bhubaneswar · Cuttack · Nearby Areas
          </div>

          <p className="text-xs sm:text-sm text-[#171A1D]/75 italic">
            Service availability may vary depending on location.
          </p>

          <p className="text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed max-w-3xl pt-2">
            Technicians operate with equipped service bags containing common run capacitors, starter relays, high-pressure jet pump wash bags, and diagnostic manifold gauges to resolve breakdowns at your residential flat, independent house, or workspace.
          </p>
        </div>

        {/* Service Zones */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#171A1D]">
            Primary Service Clusters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICE_AREAS_LIST.map((area, i) => (
              <div key={i} className="bg-white border border-[#CCD4D9] p-6 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#CCD4D9]/60">
                  <h3 className="font-bold text-base text-[#171A1D]">
                    {area.name}
                  </h3>
                  <span className="font-mono text-[10px] text-[#164B70] bg-[#EAEFF2] px-2 py-0.5 border border-[#CCD4D9]">
                    {area.zone}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-mono text-[10px] text-[#171A1D]/50 uppercase block">
                    COVERED LANDMARKS & RESIDENTIAL SECTORS:
                  </span>
                  <p className="text-[#171A1D]/80">
                    {area.landmarks}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#171A1D]/70 border-t border-[#CCD4D9]/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D9822B]" />
                    <span>{area.timing}</span>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-[#164B70] font-semibold hover:underline cursor-pointer"
                  >
                    Request Technician →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Base Station Information */}
        <div className="bg-white border border-[#CCD4D9] p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-[#171A1D]">
            Operational Service Station
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="space-y-2">
              <div className="text-[#171A1D]/60 font-mono text-xs uppercase">
                PHYSICAL ADDRESS:
              </div>
              <p className="font-medium text-[#171A1D]">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-xs text-[#171A1D]/70">
                Centrally located near KIIT / Koel Campus in Patia to ensure fast technician dispatch along Nandankanan Road and Infocity.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-[#171A1D]/60 font-mono text-xs uppercase">
                OPERATING SCHEDULE:
              </div>
              <p className="font-medium text-[#171A1D]">
                {BUSINESS_INFO.hours}
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 py-2 px-3 bg-[#164B70] text-white text-xs font-mono font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
