import React, { useState } from 'react';
import { HeaderHUD } from './components/layout/HeaderHUD';
import { HeroSection } from './components/sections/HeroSection';
import { LiveTelemetryMetrics } from './components/sections/LiveTelemetryMetrics';
import { ServicesBentoGrid } from './components/sections/ServicesBentoGrid';
import { ROASSimulator } from './components/sections/ROASSimulator';
import { AutomationPipeline } from './components/sections/AutomationPipeline';
import { CaseStudyVault } from './components/sections/CaseStudyVault';
import { AuditModal } from './components/sections/AuditModal';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
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
    <div className="relative min-h-screen bg-void-950 text-slate-100 selection:bg-neon-cyan/30 selection:text-neon-cyan font-sans pb-20 md:pb-0">
      {/* Subtle GPU Noise Grain */}
      <NoiseOverlay />

      {/* Floating Tactical Header HUD */}
      <HeaderHUD onOpenAudit={() => handleOpenAudit()} />

      {/* Main Roofer Experience */}
      <main>
        {/* Hero with Luxury Roof Image + Canvas physics + Roofer Typewriter */}
        <HeroSection 
          onOpenAudit={() => handleOpenAudit()} 
          onOpenSimulator={scrollToCalculator}
        />

        {/* Live Odometer Metrics (Signed contracts, avg ticket, speed-to-lead) */}
        <LiveTelemetryMetrics />

        {/* Asymmetrical Bento Grid for Roofing Ad Services */}
        <ServicesBentoGrid 
          onSelectService={(serviceName) => handleOpenAudit({ service: serviceName })}
        />

        {/* Interactive Roof Jobs & Revenue Calculator */}
        <ROASSimulator 
          onLockInTarget={(targetData) => handleOpenAudit(targetData)}
        />

        {/* 4-Step Roofing Engine & Live Lead Simulation */}
        <AutomationPipeline />

        {/* Real Roofing Contractor Case Studies (Austin, Denver, Dallas) */}
        <CaseStudyVault 
          onOpenAudit={() => handleOpenAudit()}
        />
      </main>

      {/* Roofer Obsidian Footer */}
      <Footer onOpenAudit={() => handleOpenAudit()} />

      {/* Mobile-Only Sticky Action Bar */}
      <MobileStickyBar onOpenAudit={() => handleOpenAudit()} />

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
