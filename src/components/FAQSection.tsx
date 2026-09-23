import React, { useState } from 'react';
import { GENERAL_FAQS } from '../data/repairData';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
            CLEAR EXPECTATIONS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
            Service FAQ & Policies
          </h2>
          <p className="text-xs sm:text-sm text-[#171A1D]/70 mt-2">
            Answers to common questions regarding doorstep inspection, technician dispatch, and charges.
          </p>
        </div>

        <div className="border-t border-[#CCD4D9] divide-y divide-[#CCD4D9]">
          {GENERAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#171A1D] group-hover:text-[#164B70] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#164B70] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed pl-3 border-l-2 border-[#164B70]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
