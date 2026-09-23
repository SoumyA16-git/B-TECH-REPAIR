import React, { useState } from 'react';
import { Phone, ArrowLeft, CheckCircle2, AlertCircle, Wrench, Shield, Droplets, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES_INDEX, BUSINESS_INFO } from '../data/repairData';
import { ServiceId, ApplianceCategory } from '../types';

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

  return (
    <div className="py-10 md:py-16 bg-[#F6F7F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-[#164B70] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO REPAIR DESK</span>
          </button>

          <div className="text-xs font-mono text-[#171A1D]/60">
            SERVICE CODE: {service.number} / {service.category}
          </div>
        </div>

        {/* Hero Banner for this Specific Service */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#164B70] uppercase tracking-wider">
                TECHNICAL SPECIFICATION · {service.number}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D]">
                {service.title}
              </h1>
            </div>

            <span className="px-3 py-1 text-xs font-mono bg-[#EAEFF2] text-[#164B70] border border-[#CCD4D9]">
              DOORSTEP BHUBANESWAR
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#171A1D]/80 leading-relaxed max-w-3xl">
            {service.tagline}
          </p>

          <div className="text-xs sm:text-sm text-[#171A1D]/70 max-w-3xl leading-relaxed">
            {service.fullDesc}
          </div>

          {/* Quick Action Bar */}
          <div className="pt-4 border-t border-[#CCD4D9] flex flex-wrap items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="py-3 px-5 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-medium transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
              <span>Call Technician Desk ({BUSINESS_INFO.phone})</span>
            </a>

            <button
              onClick={() => onOpenBookingWithDetails(service.category, `${service.title} - Doorstep Request`)}
              className="py-3 px-5 bg-white border border-[#171A1D] hover:bg-[#171A1D] hover:text-white text-[#171A1D] text-xs font-medium transition-colors cursor-pointer"
            >
              Book Doorstep Diagnosis
            </button>
          </div>
        </div>

        {/* Common Symptoms Checked */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            BREAKDOWN INDICATORS
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#171A1D]">
            Observed Symptoms & Breakdown Scenarios
          </h2>
          <p className="text-xs text-[#171A1D]/70">
            If your appliance exhibits any of these behavior patterns, our technician conducts on-site component and circuit audits:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {service.commonIssues.map((issue, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenBookingWithDetails(service.category, issue)}
                className="p-3.5 bg-[#F6F7F5] border border-[#CCD4D9] hover:border-[#164B70] transition-colors cursor-pointer flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
                <div className="text-xs font-medium text-[#171A1D] flex-1">
                  {issue}
                  <span className="block text-[10px] text-[#164B70] font-mono mt-0.5">Click to request diagnosis for this issue →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Technical Inspection Workflow */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            ON-SITE PROTOCOL
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#171A1D]">
            Diagnostic & Service Steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.inspectionSteps.map((step) => (
              <div key={step.step} className="bg-[#F6F7F5] border border-[#CCD4D9] p-5 space-y-2">
                <span className="font-mono text-sm font-bold text-[#164B70] block">
                  STEP {step.step}
                </span>
                <h4 className="text-sm font-bold text-[#171A1D]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#171A1D]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & Equipment Used */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="border border-[#CCD4D9] bg-white p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              SPECIFICATIONS & SCOPE
            </div>
            <h3 className="text-lg font-bold text-[#171A1D]">
              System Parameters
            </h3>
            <div className="space-y-3 divide-y divide-[#CCD4D9]/60 text-xs">
              {service.technicalSpecs.map((spec, i) => (
                <div key={i} className="pt-2.5 flex justify-between gap-3">
                  <span className="text-[#171A1D]/60 font-mono">{spec.label}</span>
                  <span className="font-medium text-[#171A1D] text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#CCD4D9] bg-white p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
                SERVICE INTEGRITY
              </div>
              <h3 className="text-lg font-bold text-[#171A1D]">
                Parts & Pricing Standard
              </h3>
              <p className="text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed">
                {service.standardNotice}
              </p>
              <div className="p-3 bg-[#F6F7F5] border border-[#CCD4D9] text-xs font-mono text-[#164B70]">
                ✓ On-site explanation of faults prior to initiating any repair.
              </div>
            </div>

            <div className="pt-4 border-t border-[#CCD4D9]">
              <div className="text-[11px] font-mono text-[#171A1D]/60">
                DOORSTEP SERVICE COVERAGE:
              </div>
              <div className="text-xs font-semibold text-[#171A1D] mt-0.5">
                Bhubaneswar (Patia, KIIT, Chandrasekharpur, Jayadev Vihar, Nayapalli) & Cuttack
              </div>
            </div>
          </div>

        </div>

        {/* FAQs for this Service */}
        <div className="border border-[#CCD4D9] bg-white p-6 sm:p-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            COMMON QUESTIONS
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#171A1D]">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-[#CCD4D9] border-y border-[#CCD4D9]">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#171A1D] hover:text-[#164B70] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="font-mono text-xs text-[#164B70] ml-4 shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[#171A1D]/75 mt-2.5 leading-relaxed pl-2 border-l-2 border-[#164B70]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Service Navigation */}
        <div className="border border-[#CCD4D9] bg-[#EAEFF2] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#171A1D]/60 uppercase block">OTHER APPLIANCE SERVICES</span>
            <span className="text-sm font-bold text-[#171A1D]">Need inspection on a different appliance?</span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {SERVICES_INDEX.filter(s => s.id !== serviceId).slice(0, 3).map((other) => (
              <button
                key={other.id}
                onClick={() => onNavigateService(other.id)}
                className="px-3 py-1.5 bg-white border border-[#CCD4D9] hover:border-[#164B70] hover:text-[#164B70] cursor-pointer"
              >
                {other.category} →
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
