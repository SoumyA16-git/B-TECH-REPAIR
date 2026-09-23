import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Wrench, ChevronDown, ChevronUp } from 'lucide-react';
import { TECHNICAL_AC_ISSUES } from '../data/repairData';
import { ServiceId } from '../types';

interface ACIssueIndexProps {
  onSelectService: (serviceId: ServiceId) => void;
  onSelectIssueForBooking: (issueName: string) => void;
}

export const ACIssueIndex: React.FC<ACIssueIndexProps> = ({ onSelectService, onSelectIssueForBooking }) => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>('ac-not-cooling');

  const selectedIssue = TECHNICAL_AC_ISSUES.find(i => i.id === selectedIssueId) || TECHNICAL_AC_ISSUES[0];

  return (
    <section className="py-16 md:py-24 border-b border-[#CCD4D9] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#164B70] font-semibold">
              DIAGNOSTIC INDEX / AIR CONDITIONING
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#171A1D] mt-1.5">
              When Your AC Isn't Doing Its Job
            </h2>
            <p className="text-sm sm:text-base text-[#171A1D]/75 mt-2 max-w-2xl">
              Air conditioner faults stem from specific thermodynamic, electrical, or airflow bottlenecks. 
              Review the 10 diagnostic categories inspected at doorstep visits across Bhubaneswar.
            </p>
          </div>

          <button
            onClick={() => onSelectService('ac-repair')}
            className="text-xs font-mono font-medium text-[#164B70] hover:underline flex items-center gap-1.5 shrink-0 self-start md:self-end"
          >
            <span>Complete AC Engineering Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 10-Issue Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {TECHNICAL_AC_ISSUES.map((issue) => {
            const isSelected = selectedIssueId === issue.id;
            return (
              <button
                key={issue.id}
                onClick={() => setSelectedIssueId(issue.id)}
                className={`text-left p-4 border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-[#164B70] bg-[#164B70] text-white shadow-sm ring-1 ring-[#164B70]'
                    : 'border-[#CCD4D9] bg-[#F6F7F5] hover:bg-white hover:border-[#164B70]/60 text-[#171A1D]'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono mb-2">
                  <span className={isSelected ? 'text-[#D9822B] font-bold' : 'text-[#171A1D]/50'}>
                    {issue.code}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D9822B]"></span>}
                </div>

                <div className="text-xs sm:text-sm font-semibold tracking-tight">
                  {issue.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Issue Diagnostic Detail Drawer */}
        <div className="mt-8 border border-[#CCD4D9] bg-[#F6F7F5] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#D9822B] font-bold bg-white px-2 py-0.5 border border-[#CCD4D9]">
                  {selectedIssue.code}
                </span>
                <h3 className="text-xl font-bold text-[#171A1D]">
                  {selectedIssue.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 border border-[#CCD4D9] space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#171A1D]/50 block">
                    OBSERVED SYMPTOM
                  </span>
                  <p className="text-[#171A1D]/80 leading-relaxed font-medium">
                    {selectedIssue.symptom}
                  </p>
                </div>

                <div className="bg-white p-4 border border-[#CCD4D9] space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#171A1D]/50 block">
                    COMMON ROOT CAUSES
                  </span>
                  <p className="text-[#171A1D]/80 leading-relaxed">
                    {selectedIssue.likelyCauses}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-[#164B70] flex items-start gap-2 bg-[#EAEFF2] p-3 border border-[#CCD4D9]">
                <Wrench className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
                <span>
                  <strong>Doorstep Inspection:</strong> {selectedIssue.inspection}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onSelectIssueForBooking(`AC Issue: ${selectedIssue.name}`)}
                className="w-full py-3 px-4 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Request Technician for {selectedIssue.name}
              </button>

              <button
                onClick={() => {
                  if (selectedIssue.id === 'jet-pump-cleaning') {
                    onSelectService('ac-jet-pump-cleaning');
                  } else if (selectedIssue.id === 'ac-installation' || selectedIssue.id === 'copper-pipe-installation') {
                    onSelectService('ac-installation');
                  } else {
                    onSelectService('ac-repair');
                  }
                }}
                className="w-full py-2.5 px-4 bg-white border border-[#171A1D] hover:bg-[#171A1D] hover:text-white text-[#171A1D] text-xs font-medium text-center transition-colors cursor-pointer"
              >
                Read Technical Procedure →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
