import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileActionBar } from './components/MobileActionBar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServiceIndex } from './components/ServiceIndex';
import { ACIssueIndex } from './components/ACIssueIndex';
import { FieldBreakSection } from './components/FieldBreakSection';
import { DiagnosticChecklist } from './components/DiagnosticChecklist';
import { RepairProcess } from './components/RepairProcess';
import { ApplianceCoverage } from './components/ApplianceCoverage';
import { ServiceDetailsSection } from './components/ServiceDetailsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ConversionSection } from './components/ConversionSection';
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
    <div className="min-h-screen flex flex-col bg-[#F5F5F2] text-[#181B1D]">
      {/* 3-Zone Top Bar Contract */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('AC')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* SECTION 01 — IMMERSIVE HERO */}
            <Hero
              onOpenBooking={() => handleOpenBooking('AC')}
              onExploreServices={() => {
                const el = document.getElementById('services-index');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* SECTION 02 — VISUAL TRANSITION (5.0 / 468 Customer Reviews) */}
            <TrustBar
              onReviewsClick={() => setCurrentView('reviews')}
            />

            {/* SECTION 03 — “WHAT'S BROKEN?” (Vertical Oversized Service Index) */}
            <ServiceIndex
              onSelectService={handleSelectService}
              onBookCategory={(category) => handleOpenBooking(category as ApplianceCategory)}
            />

            {/* SECTION 04 — AC FEATURE (Split Screen Takeover) */}
            <ACIssueIndex
              onSelectService={handleSelectService}
              onSelectIssueForBooking={(issueDesc) => handleOpenBooking('AC', issueDesc)}
            />

            {/* SECTION 05 — FULL-BLEED IMAGE BREAK ("We come to the problem.") */}
            <FieldBreakSection />

            {/* SECTION 06 — THE DIAGNOSIS (Dark Graphite "Find the fault first.") */}
            <DiagnosticChecklist />

            {/* SECTION 07 — REPAIR PROCESS (Horizontal Timeline 01–05) */}
            <RepairProcess />

            {/* SECTION 08 — APPLIANCE PHOTO COLLAGE (Asymmetric Editorial Collage) */}
            <ApplianceCoverage
              onSelectService={handleSelectService}
            />

            {/* SECTION 09 — SERVICE DETAILS (Alternating Editorial Rows) */}
            <ServiceDetailsSection
              onSelectService={handleSelectService}
              onBookService={(cat, issue) => handleOpenBooking(cat as ApplianceCategory, issue)}
            />

            {/* SECTION 10 — CUSTOMER REVIEWS (Editorial Testimonial Layout) */}
            <ReviewsSection
              onViewAllReviews={() => setCurrentView('reviews')}
            />

            {/* SECTION 11 — SERVICE AREA (Serving Bhubaneswar & Nearby Areas / PATIA) */}
            <ServiceAreasSection
              onOpenBooking={() => handleOpenBooking('AC')}
            />

            {/* SECTION 12 — FINAL CONVERSION SECTION (Visually Strong Dark Section) */}
            <ConversionSection
              onOpenBooking={() => handleOpenBooking('AC')}
            />
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

      {/* Minimal and Strong Footer */}
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
