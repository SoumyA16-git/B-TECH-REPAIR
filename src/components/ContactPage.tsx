import React, { useState } from 'react';
import { Phone, ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import { REPAIR_IMAGES } from '../data/repairImages';
import { ApplianceCategory } from '../types';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: 'AC' as ApplianceCategory,
    location: '',
    problem: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)'
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticketNumber = `BT-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketNumber);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello B-Tech Repair, I would like to book a doorstep service:
Ticket: ${submittedTicket}
Name: ${formData.name}
Phone: ${formData.phone}
Appliance: ${formData.appliance}
Location: ${formData.location}
Problem: ${formData.problem || 'Standard inspection'}
Preferred: ${formData.preferredDate} (${formData.preferredTime})`;

    window.open(`https://wa.me/917205719060?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F5F5F2] min-h-screen text-[#181B1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs text-[#16496B] hover:text-[#181B1D] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME INDEX</span>
          </button>

          <div className="font-mono text-xs text-[#181B1D]/60 uppercase">
            PATIA DISPATCH DESK · LIVE INTAKE
          </div>
        </div>

        {/* Diagnostic Intake Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Intake Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#16496B] uppercase tracking-wider">
                SERVICE INTAKE / DOORSTEP DISPATCH
              </span>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#181B1D]">
                Tell us what's wrong.
              </h1>
              <p className="text-sm sm:text-base text-[#181B1D]/70 font-mono pt-1">
                Fill in the appliance symptoms below. We assign an on-duty technician for diagnostic visit.
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-8 bg-white border border-[#16496B] space-y-6">
                <div className="flex items-center gap-3 text-[#16496B]">
                  <CheckCircle2 className="w-7 h-7 text-[#D17A2A]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#181B1D]">
                    Service Intake Received
                  </h3>
                </div>

                <div className="p-4 bg-[#F5F5F2] border border-[#CCD4D9] font-mono text-xs space-y-2">
                  <div className="text-[#D17A2A] font-bold text-sm">
                    TICKET REF: {submittedTicket}
                  </div>
                  <div>Customer: {formData.name} ({formData.phone})</div>
                  <div>Appliance: {formData.appliance}</div>
                  <div>Location: {formData.location}</div>
                  <div>Details: {formData.problem || 'Doorstep inspection request'}</div>
                  <div>Preferred Schedule: {formData.preferredDate} ({formData.preferredTime})</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#16496B] hover:bg-[#123852] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer"
                  >
                    <span>TRANSMIT VIA WHATSAPP →</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#181B1D] text-[#181B1D] text-xs font-mono tracking-wider hover:bg-[#181B1D] hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DISPATCH DESK</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-10 border border-[#CCD4D9]">
                
                {/* NAME & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 072057 19060"
                      className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                    />
                  </div>
                </div>

                {/* APPLIANCE OPTIONS: AC, REFRIGERATOR, WASHING MACHINE, MICROWAVE, OTHER */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                    APPLIANCE CATEGORY *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(['AC', 'Refrigerator', 'Washing Machine', 'Microwave Oven', 'Other'] as ApplianceCategory[]).map((app) => (
                      <button
                        type="button"
                        key={app}
                        onClick={() => setFormData({ ...formData, appliance: app })}
                        className={`p-3 font-mono text-xs tracking-wider border text-left cursor-pointer transition-colors ${
                          formData.appliance === app
                            ? 'bg-[#181B1D] text-white border-[#181B1D]'
                            : 'bg-[#F5F5F2] text-[#181B1D] border-[#CCD4D9] hover:border-[#16496B]'
                        }`}
                      >
                        {app}
                      </button>
                    ))}
                  </div>
                </div>

                {/* LOCATION */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                    LOCATION / RESIDENTIAL ADDRESS *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Near KIIT Campus 6, Patia / Chandrasekharpur"
                    className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                  />
                </div>

                {/* PROBLEM DESCRIPTION */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                    PROBLEM DESCRIPTION / SYMPTOMS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="Describe what stopped working (e.g. AC blowing warm air, fridge compressor humming, washing machine drum not spinning)..."
                    className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                  />
                </div>

                {/* PREFERRED DATE & PREFERRED TIME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#181B1D]/80">
                      PREFERRED TIME
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F5F2] border border-[#CCD4D9] text-[#181B1D] text-sm focus:outline-hidden focus:border-[#16496B]"
                    >
                      <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                      <option value="Urgent Dispatch (Next Available)">Urgent Dispatch (Next Available)</option>
                    </select>
                  </div>
                </div>

                {/* Large Button: REQUEST SERVICE */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#16496B] hover:bg-[#123852] text-white font-mono text-sm uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    REQUEST SERVICE
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Phone 072057 19060 with Large Image of Technician Tools */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Block */}
            <div className="p-8 bg-[#181B1D] text-[#F5F5F2] border border-[#333A40] space-y-4">
              <span className="font-mono text-xs text-[#D17A2A] uppercase tracking-wider">
                IMMEDIATE FIELD CONTACT
              </span>
              <div>
                <span className="text-xs font-mono text-[#BEC8CD] block mb-1">
                  CALL DIRECTLY FOR SAME-DAY DISPATCH
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2] hover:text-[#D17A2A] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-6 h-6 text-[#D17A2A]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
              <div className="font-mono text-xs text-[#BEC8CD]/80 pt-2 border-t border-[#333A40]">
                Monday to Sunday: 8:00 AM – 9:00 PM Doorstep Availability
              </div>
            </div>

            {/* Large Image of Technician Tools */}
            <div className="relative border border-[#CCD4D9] bg-[#181B1D] overflow-hidden aspect-[4/3]">
              <img
                src={REPAIR_IMAGES.technicianTools}
                alt="Professional technician diagnostic toolset, manifold gauge and multimeter"
                className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.88]"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#181B1D]/90 text-white font-mono text-[11px] p-2.5 border border-[#333A40]">
                <span>DIAGNOSTIC & PRESSURE APPARATUS · FIELD READY</span>
              </div>
            </div>

            {/* Workshop Address */}
            <div className="p-5 bg-white border border-[#CCD4D9] space-y-2 font-mono text-xs text-[#181B1D]">
              <div className="font-bold flex items-center gap-2 text-[#16496B]">
                <MapPin className="w-4 h-4 text-[#D17A2A]" />
                <span>WORKSHOP LOCATION</span>
              </div>
              <p className="text-[#181B1D]/75 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
