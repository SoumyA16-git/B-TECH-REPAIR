import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileActionBar } from './components/MobileActionBar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServiceIndex } from './components/ServiceIndex';
import { ACIssueIndex } from './components/ACIssueIndex';
import { JetPumpFeature } from './components/JetPumpFeature';
import { RepairProcess } from './components/RepairProcess';
import { DiagnosticChecklist } from './components/DiagnosticChecklist';
import { TransparencySection } from './components/TransparencySection';
import { ApplianceCoverage } from './components/ApplianceCoverage';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingDeskModal } from './components/BookingDeskModal';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ServiceAreasPage } from './components/ServiceAreasPage';
import { ContactPage } from './components/ContactPage';
import { ServiceId, ApplianceCategory } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('ac-repair');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    appliance: ApplianceCategory;
    problem: string;
  }>({
    appliance: 'AC',
    problem: ''
  });

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView, selectedServiceId]);

  const handleNavigate = (view: string, serviceId?: ServiceId) => {
    if (view === 'service' && serviceId) {
      setSelectedServiceId(serviceId);
      setCurrentView('service');
    } else {
      setCurrentView(view);
    }
  };

  const handleOpenBooking = (appliance: ApplianceCategory = 'AC', problem: string = '') => {
    setBookingPrefill({ appliance, problem });
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7F5] text-[#171A1D]">
      {/* Top Bar strictly following 3-Zone Top Bar Contract */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('AC')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 4.1 Hero — “Tell Us What's Wrong” */}
            <Hero
              onOpenBooking={() => handleOpenBooking('AC')}
              onExploreServices={() => {
                const el = document.getElementById('services-index');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 5. Immediate Trust Layer (5.0 ★ / 468 Reviews) */}
            <TrustBar
              onReviewsClick={() => setCurrentView('reviews')}
            />

            {/* 6. Main Service Navigation — What Needs Fixing? */}
            <ServiceIndex
              onSelectService={handleSelectService}
              onBookCategory={(category) => handleOpenBooking(category as ApplianceCategory)}
            />

            {/* 7. AC Services — Primary Focus ("When Your AC Isn't Doing Its Job") */}
            <ACIssueIndex
              onSelectService={handleSelectService}
              onSelectIssueForBooking={(issueDesc) => handleOpenBooking('AC', issueDesc)}
            />

            {/* 8. Jet Pump Cleaning Feature ("Deep Cleaning for Better Maintenance") */}
            <JetPumpFeature
              onSelectService={handleSelectService}
              onBookJetPump={() => handleOpenBooking('AC', 'AC Jet Pump Machine Deep Wash Service')}
            />

            {/* 9. Repair Process — Signature Service Ticket */}
            <RepairProcess />

            {/* 10. “Repair What Actually Needs Repair” */}
            <DiagnosticChecklist />

            {/* 11. Genuine Parts & Service Transparency */}
            <TransparencySection />

            {/* 12. Appliance Coverage — Large Asymmetric Layout */}
            <ApplianceCoverage
              onSelectService={handleSelectService}
            />

            {/* 13. Reviews — "People Remember the Service." */}
            <ReviewsSection
              onViewAllReviews={() => setCurrentView('reviews')}
            />

            {/* 14. Service Areas — "We Come to You." */}
            <ServiceAreasSection
              onOpenBooking={() => handleOpenBooking('AC')}
            />

            {/* Real FAQs */}
            <FAQSection />
          </>
        )}

        {currentView === 'service' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onBack={() => setCurrentView('home')}
            onNavigateService={(id) => setSelectedServiceId(id)}
            onOpenBookingWithDetails={(cat, issue) => handleOpenBooking(cat, issue)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onOpenBooking={() => handleOpenBooking('AC')}
            onViewReviews={() => setCurrentView('reviews')}
          />
        )}

        {currentView === 'reviews' && (
          <ReviewsPage
            onBack={() => setCurrentView('home')}
            onOpenBooking={() => handleOpenBooking('AC')}
          />
        )}

        {currentView === 'service-areas' && (
          <ServiceAreasPage
            onBack={() => setCurrentView('home')}
            onOpenBooking={() => handleOpenBooking('AC')}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage
            onBack={() => setCurrentView('home')}
          />
        )}
      </main>

      {/* Quiet Technical Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('AC')}
      />

      {/* Mobile Persistent Action Bar strictly <= 15% height */}
      <MobileActionBar
        onOpenBooking={() => handleOpenBooking('AC')}
      />

      {/* Interactive Booking Desk Modal */}
      <BookingDeskModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledAppliance={bookingPrefill.appliance}
        prefilledProblem={bookingPrefill.problem}
      />
    </div>
  );
}
