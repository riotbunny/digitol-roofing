import React, { useState } from 'react';
import { HeaderHUD } from './components/layout/HeaderHUD';
import { HeroSection } from './components/sections/HeroSection';
import { RoofingTrustBar } from './components/ui/RoofingTrustBar';
import { LiveTelemetryMetrics } from './components/sections/LiveTelemetryMetrics';
import { TerritoryChecker } from './components/sections/TerritoryChecker';
import { ComparisonMatrix } from './components/sections/ComparisonMatrix';
import { ServicesBentoGrid } from './components/sections/ServicesBentoGrid';
import { JobGallery } from './components/sections/JobGallery';
import { ROASSimulator } from './components/sections/ROASSimulator';
import { LiveCallDemo } from './components/sections/LiveCallDemo';
import { AutomationPipeline } from './components/sections/AutomationPipeline';
import { CaseStudyVault } from './components/sections/CaseStudyVault';
import { GuaranteeBanner } from './components/sections/GuaranteeBanner';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { LiveSocialProof } from './components/ui/LiveSocialProof';
import { AuditModal } from './components/sections/AuditModal';
import { NoiseOverlay } from './components/ui/NoiseOverlay';

export function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [auditInitialData, setAuditInitialData] = useState(null);

  const handleOpenAudit = (customData = null) => {
    setAuditInitialData(customData);
    setIsAuditOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditOpen(false);
    setAuditInitialData(null);
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-void-950 text-slate-100 selection:bg-amber-400/30 selection:text-amber-400 font-sans pb-20 md:pb-0">
      {/* GPU Tactical Noise Grain */}
      <NoiseOverlay />

      {/* Floating Tactical Header HUD */}
      <HeaderHUD onOpenAudit={() => handleOpenAudit()} />

      {/* Main Roofer High-Conversion Journey */}
      <main>
        {/* 1. Hero with Luxury Roof Image + Interactive Canvas + Roofer Typewriter */}
        <HeroSection 
          onOpenAudit={() => handleOpenAudit()} 
          onOpenSimulator={scrollToCalculator}
        />

        {/* 2. Roofing Industry & Manufacturer Trust Badges Bar */}
        <RoofingTrustBar />

        {/* 3. Live Odometer Metrics (Signed contracts, avg ticket, speed-to-lead) */}
        <LiveTelemetryMetrics />

        {/* 4. Interactive City / Territory Availability Checker Tool */}
        <TerritoryChecker 
          onClaimTerritory={(territoryData) => handleOpenAudit(territoryData)}
        />

        {/* 5. The "Angi / Shared Leads vs. Digitol Exclusive System" Comparison Matrix */}
        <ComparisonMatrix 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 6. Services Bento Grid (Google Search, Facebook Ads, Speed to Lead, Drone Media, Websites) */}
        <ServicesBentoGrid 
          onSelectService={(serviceName) => handleOpenAudit({ service: serviceName })}
        />

        {/* 7. Real Roofing Financials & Job Gallery (Shingles, Crew, Metal, Commercial TPO) */}
        <JobGallery 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 8. Interactive Roof Jobs & Revenue Calculator */}
        <ROASSimulator 
          onLockInTarget={(targetData) => handleOpenAudit(targetData)}
        />

        {/* 9. Live 45-Second SMS & Phone Call Bridge Interactive Demo */}
        <LiveCallDemo />

        {/* 10. 4-Step Roofing Engine & Live Lead Simulation Sandbox */}
        <AutomationPipeline />

        {/* 11. Real Contractor Case Studies (Austin, Denver, Dallas) */}
        <CaseStudyVault 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 12. 30-Day Pay-On-Performance / 5-Job Guarantee Banner */}
        <GuaranteeBanner 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 13. Frequently Asked Questions (FAQ) Accordion */}
        <FAQSection 
          onOpenAudit={() => handleOpenAudit()}
        />
      </main>

      {/* High-Contrast Obsidian Footer */}
      <Footer onOpenAudit={() => handleOpenAudit()} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenAudit={() => handleOpenAudit()} />

      {/* Floating Live Activity Social Proof */}
      <LiveSocialProof />

      {/* Free Video Audit & Territory Claim Modal */}
      <AuditModal 
        isOpen={isAuditOpen}
        onClose={handleCloseAudit}
        initialData={auditInitialData}
      />
    </div>
  );
}

export default App;
