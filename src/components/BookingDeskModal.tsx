import React, { useState } from 'react';
import { X, Phone, CheckCircle, Calendar, Clock, MapPin, Wrench, MessageSquare, Printer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { ApplianceCategory, BookingTicket } from '../types';

interface BookingDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledAppliance?: ApplianceCategory;
  prefilledProblem?: string;
}

export const BookingDeskModal: React.FC<BookingDeskModalProps> = ({
  isOpen,
  onClose,
  prefilledAppliance,
  prefilledProblem
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [appliance, setAppliance] = useState<ApplianceCategory>(prefilledAppliance || 'AC');
  const [problemDesc, setProblemDesc] = useState(prefilledProblem || '');
  const [location, setLocation] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Today / Within 90 Mins');
  const [submittedTicket, setSubmittedTicket] = useState<BookingTicket | null>(null);

  // Sync if prefill changes
  React.useEffect(() => {
    if (prefilledAppliance) setAppliance(prefilledAppliance);
    if (prefilledProblem) setProblemDesc(prefilledProblem);
  }, [prefilledAppliance, prefilledProblem]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) {
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket: BookingTicket = {
      ticketId: `BTR-${randomNum}`,
      customerName: name,
      phone: phone,
      appliance: appliance,
      problemDesc: problemDesc || 'General inspection requested',
      location: location,
      preferredDate: preferredDate || 'Today',
      preferredTime: preferredTime,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Received'
    };

    setSubmittedTicket(newTicket);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setProblemDesc('');
    setLocation('');
    setSubmittedTicket(null);
    onClose();
  };

  const createWhatsAppLink = (ticket: BookingTicket) => {
    const text = encodeURIComponent(
      `Hello B-Tech Repair, I registered Service Ticket #${ticket.ticketId}.\n` +
      `Name: ${ticket.customerName}\n` +
      `Phone: ${ticket.phone}\n` +
      `Appliance: ${ticket.appliance}\n` +
      `Problem: ${ticket.problemDesc}\n` +
      `Location: ${ticket.location}\n` +
      `Time: ${ticket.preferredTime}`
    );
    return `https://wa.me/917205719060?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-[#CCD4D9] shadow-2xl my-8">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#171A1D] text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D9822B]"></span>
            <span className="font-mono text-xs font-semibold tracking-wider">
              {submittedTicket ? 'SERVICE JOB TICKET GENERATED' : 'DOORSTEP INTAKE DESK'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedTicket ? (
          /* Success Ticket Presentation */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="border-2 border-dashed border-[#164B70] bg-[#F6F7F5] p-6 space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CCD4D9]">
                <div>
                  <div className="text-[10px] font-mono text-[#D9822B] uppercase">TICKET NUMBER</div>
                  <div className="text-2xl font-bold font-mono text-[#164B70]">
                    #{submittedTicket.ticketId}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-[#171A1D]/50 uppercase">STATUS</div>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-mono font-semibold bg-[#22C55E]/15 text-[#15803D] border border-[#22C55E]/40">
                    INTAKE LOGGED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#171A1D]/50 block text-[10px]">CUSTOMER NAME</span>
                  <span className="font-medium text-[#171A1D]">{submittedTicket.customerName}</span>
                </div>
                <div>
                  <span className="text-[#171A1D]/50 block text-[10px]">PHONE</span>
                  <span className="font-medium text-[#171A1D]">{submittedTicket.phone}</span>
                </div>
                <div>
                  <span className="text-[#171A1D]/50 block text-[10px]">APPLIANCE</span>
                  <span className="font-semibold text-[#164B70]">{submittedTicket.appliance}</span>
                </div>
                <div>
                  <span className="text-[#171A1D]/50 block text-[10px]">LOCATION</span>
                  <span className="font-medium text-[#171A1D]">{submittedTicket.location}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#171A1D]/50 block text-[10px]">REPORTED ISSUE</span>
                  <p className="font-sans text-xs text-[#171A1D] mt-0.5">{submittedTicket.problemDesc}</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#CCD4D9] flex justify-between text-[11px]">
                  <span className="text-[#171A1D]/60">TIMING: {submittedTicket.preferredTime}</span>
                  <span className="text-[#171A1D]/60">LOGGED AT: {submittedTicket.createdAt}</span>
                </div>
              </div>

            </div>

            <div className="space-y-2 text-xs text-[#171A1D]/80">
              <p className="font-medium text-[#164B70]">
                ✓ Our technician desk has received your ticket and is reviewing technician availability in your sector.
              </p>
              <p>
                For immediate confirmation or priority technician routing, you may also send this ticket summary directly via WhatsApp or call us.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={createWhatsAppLink(submittedTicket)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Ticket on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="py-3 px-4 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-mono font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D9822B]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={handleReset}
                className="py-3 px-4 border border-[#CCD4D9] hover:bg-[#F6F7F5] text-xs font-mono text-[#171A1D] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form strictly per PRD Section 15 */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171A1D]">
                Tell Us What's Not Working.
              </h3>
              <p className="text-xs sm:text-sm text-[#171A1D]/70 mt-1">
                Fill out the diagnostic intake below or directly call our Bhubaneswar repair desk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Soumya Ranjan"
                  className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 098765 43210"
                  className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Appliance Dropdown */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Appliance *
                </label>
                <select
                  value={appliance}
                  onChange={(e) => setAppliance(e.target.value as ApplianceCategory)}
                  className="w-full px-3 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                >
                  <option value="AC">AC (Air Conditioner)</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Microwave Oven">Microwave Oven</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Location (Sector / Colony) *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Sishu Vihar, Patia / Chandrasekharpur"
                  className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                />
              </div>
            </div>

            {/* Describe the Problem */}
            <div className="space-y-1">
              <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                Describe the Problem
              </label>
              <textarea
                rows={3}
                value={problemDesc}
                onChange={(e) => setProblemDesc(e.target.value)}
                placeholder="AC is running but not cooling…"
                className="w-full px-3.5 py-2 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
              />
            </div>

            {/* Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                >
                  <option value="Urgent / Today (Within 90 mins)">Urgent / Today (Within 90 mins)</option>
                  <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM – 3:00 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
                  <option value="Evening (3:00 PM – 7:00 PM)">Evening (3:00 PM – 7:00 PM)</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
              >
                Request Service
              </button>
            </div>

            {/* Below the form: Prefer to call? */}
            <div className="pt-4 border-t border-[#CCD4D9] text-center space-y-1">
              <span className="text-xs text-[#171A1D]/70">Prefer to call?</span>
              <div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#164B70] hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <span className="text-[11px] text-[#171A1D]/50 block">
                Direct mobile line to B-Tech Repair Desk · Sishu Vihar, Patia
              </span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
