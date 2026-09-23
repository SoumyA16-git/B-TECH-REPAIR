import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowLeft, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { ApplianceCategory, BookingTicket } from '../types';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [appliance, setAppliance] = useState<ApplianceCategory>('AC');
  const [problemDesc, setProblemDesc] = useState('');
  const [location, setLocation] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Today / Within 90 mins');
  const [ticket, setTicket] = useState<BookingTicket | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket: BookingTicket = {
      ticketId: `BTR-${randomNum}`,
      customerName: name,
      phone: phone,
      appliance: appliance,
      problemDesc: problemDesc || 'Appliance fault diagnosis requested',
      location: location,
      preferredDate: preferredDate || 'Today',
      preferredTime: preferredTime,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Received'
    };
    setTicket(newTicket);
  };

  const createWhatsAppLink = (t: BookingTicket) => {
    const text = encodeURIComponent(
      `Hello B-Tech Repair Desk, I booked Service Ticket #${t.ticketId}.\n` +
      `Name: ${t.customerName}\n` +
      `Phone: ${t.phone}\n` +
      `Appliance: ${t.appliance}\n` +
      `Problem: ${t.problemDesc}\n` +
      `Location: ${t.location}\n` +
      `Preferred Time: ${t.preferredTime}`
    );
    return `https://wa.me/917205719060?text=${text}`;
  };

  return (
    <div className="py-12 md:py-20 bg-[#F6F7F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-[#164B70] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MAIN DESK</span>
          </button>

          <span className="text-xs font-mono text-[#171A1D]/60">
            DIRECT SERVICE DESK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Service Intake Form */}
          <div className="lg:col-span-7 bg-white border border-[#CCD4D9] p-6 sm:p-8">
            {ticket ? (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-[#164B70] bg-[#F6F7F5] p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[#CCD4D9]">
                    <div>
                      <div className="text-[10px] font-mono text-[#D9822B] uppercase">SERVICE TICKET</div>
                      <div className="text-2xl font-bold font-mono text-[#164B70]">
                        #{ticket.ticketId}
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 text-xs font-mono font-semibold bg-[#22C55E]/15 text-[#15803D] border border-[#22C55E]/40">
                      REGISTERED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div>
                      <span className="text-[#171A1D]/50 block text-[10px]">NAME</span>
                      <span className="font-semibold text-[#171A1D]">{ticket.customerName}</span>
                    </div>
                    <div>
                      <span className="text-[#171A1D]/50 block text-[10px]">PHONE</span>
                      <span className="font-semibold text-[#171A1D]">{ticket.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#171A1D]/50 block text-[10px]">APPLIANCE</span>
                      <span className="font-semibold text-[#164B70]">{ticket.appliance}</span>
                    </div>
                    <div>
                      <span className="text-[#171A1D]/50 block text-[10px]">LOCATION</span>
                      <span className="font-semibold text-[#171A1D]">{ticket.location}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[#171A1D]/50 block text-[10px]">PROBLEM</span>
                      <p className="font-sans text-xs text-[#171A1D]">{ticket.problemDesc}</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#171A1D]/80 space-y-1">
                  <p className="font-semibold text-[#164B70]">
                    ✓ Ticket recorded on the Patia Service Desk.
                  </p>
                  <p>
                    Our coordinator will confirm technician arrival timing by phone.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={createWhatsAppLink(ticket)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setTicket(null)}
                    className="py-3 px-4 border border-[#CCD4D9] hover:bg-[#F6F7F5] text-xs font-mono text-[#171A1D] cursor-pointer"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171A1D]">
                    Tell Us What's Not Working.
                  </h1>
                  <p className="text-xs sm:text-sm text-[#171A1D]/70 mt-1">
                    Doorstep technician dispatch across Bhubaneswar, Patia & Cuttack.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyabrata Mohapatra"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 072057 19060"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-[#171A1D]/70 uppercase">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Koel Campus / Sailashree Vihar"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                    />
                  </div>
                </div>

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
                      Preferred Time
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#CCD4D9] bg-white focus:outline-none focus:border-[#164B70]"
                    >
                      <option value="Today / Within 90 mins">Today / Within 90 mins</option>
                      <option value="Morning 9 AM – 12 PM">Morning 9 AM – 12 PM</option>
                      <option value="Afternoon 12 PM – 3 PM">Afternoon 12 PM – 3 PM</option>
                      <option value="Evening 3 PM – 7 PM">Evening 3 PM – 7 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#164B70] hover:bg-[#103753] text-white text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
                  >
                    Request Service
                  </button>
                </div>

                {/* Below the form: Prefer to call? 072057 19060 */}
                <div className="pt-4 border-t border-[#CCD4D9] text-center space-y-1">
                  <span className="text-xs text-[#171A1D]/70">Prefer to call?</span>
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="text-lg font-mono font-bold text-[#164B70] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Physical Service Desk & Verification Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#CCD4D9] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                <MapPin className="w-4 h-4 text-[#D9822B]" />
                <span>SERVICE HUB ADDRESS</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#171A1D]">
                  B-Tech Repair
                </h3>
                <p className="text-xs text-[#171A1D]/75 mt-1 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="pt-3 border-t border-[#CCD4D9] text-xs font-mono space-y-1.5 text-[#171A1D]/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#164B70]" />
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
                  <span>Phone: {BUSINESS_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#CCD4D9] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#164B70] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#164B70]" />
                <span>DOORSTEP PROTOCOL</span>
              </div>
              <ul className="text-xs text-[#171A1D]/75 space-y-2">
                <li>• No work begun without customer approval of estimate.</li>
                <li>• Calibrated multimeters and pressure gauges brought on-site.</li>
                <li>• Transparent component testing in front of customer.</li>
                <li>• Standardized service receipt generated upon completion.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
