import React, { useState } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import confetti from 'canvas-confetti';
import { X, Check, ArrowRight, ShieldCheck, Hammer, Mail, User, Phone, Globe, MapPin } from 'lucide-react';

export function AuditModal({ isOpen, onClose, initialData = null }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    spendTier: initialData?.budget ? `$${initialData.budget.toLocaleString()} / month` : '$5,000 - $10,000 / month',
    jobTypes: ['Residential Shingle Re-Roofs', 'Google Search Ads'],
    serviceArea: '',
    websiteUrl: '',
    name: '',
    companyName: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const toggleJobType = (job) => {
    setFormData((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(job)
        ? prev.jobTypes.filter((j) => j !== job)
        : [...prev.jobTypes, job]
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00F2FE', '#05FFA1', '#A855F7', '#FFB800']
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-void-950/85 backdrop-blur-xl transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl glass-panel bg-void-900 border border-white/20 shadow-2xl overflow-hidden z-10 animate-scaleUp">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-void-950/80 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest uppercase truncate">
              DIGITOL // FREE ROOFING AD AUDIT
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="p-4 sm:p-8 overflow-y-auto flex-1">
            
            {/* Step Progress */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs">
              {[
                { num: 1, label: 'JOBS & BUDGET' },
                { num: 2, label: 'SERVICE AREA' },
                { num: 3, label: 'YOUR CONTACT' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-1.5 sm:gap-2">
                  <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                    step === s.num
                      ? 'bg-neon-cyan text-void-950'
                      : step > s.num
                      ? 'bg-neon-emerald text-void-950'
                      : 'bg-white/10 text-slate-400'
                  }`}>
                    {step > s.num ? '✓' : s.num}
                  </span>
                  <span className={`hidden xs:inline ${step === s.num ? 'text-white font-bold' : 'text-slate-400'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={step === 3 ? handleSubmit : handleNext}>
              
              {/* Step 1: Jobs & Budget */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      WHAT ROOFING JOBS DO YOU WANT MORE OF?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Residential Shingle Re-Roofs',
                        'Commercial TPO / Flat Roofs',
                        'Storm Damage Insurance Claims',
                        'Standing Seam Metal & Tile',
                        'Google Search Ads (Calls & Leads)',
                        'Facebook Video Ads Showing Work',
                      ].map((job) => (
                        <button
                          key={job}
                          type="button"
                          onClick={() => toggleJobType(job)}
                          className={`p-2.5 sm:p-3 rounded-xl font-mono text-[11px] sm:text-xs border text-left transition-all min-h-[44px] flex items-center ${
                            formData.jobTypes.includes(job)
                              ? 'bg-neon-cyan/15 border-neon-cyan text-white shadow-sm'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] flex-shrink-0 ${
                              formData.jobTypes.includes(job) ? 'bg-neon-cyan text-void-950 font-bold' : 'border border-white/20'
                            }`}>
                              {formData.jobTypes.includes(job) ? '✓' : ''}
                            </span>
                            <span className="truncate">{job}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      ESTIMATED MONTHLY AD BUDGET
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '$2,500 - $5,000 / mo',
                        '$5,000 - $10,000 / mo',
                        '$10,000 - $20,000 / mo',
                        '$20,000+ / mo',
                      ].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, spendTier: tier })}
                          className={`p-2.5 rounded-lg font-mono text-[11px] sm:text-xs border text-center transition-all min-h-[42px] ${
                            formData.spendTier === tier
                              ? 'bg-neon-emerald/15 border-neon-emerald text-white font-bold'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Service Area & Website */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      CITY / SERVICE AREA / ZIP CODES YOU COVER
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Austin, TX & 35-mile radius"
                        value={formData.serviceArea}
                        onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                      We only work with ONE roofing company per service area.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      CURRENT ROOFING COMPANY WEBSITE (OPTIONAL)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        placeholder="https://yourroofingcompany.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase mb-1">
                        YOUR NAME
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Mike Johnson"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase mb-1">
                        ROOFING COMPANY NAME
                      </label>
                      <div className="relative">
                        <Hammer className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Titan Peak Roofing"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase mb-1">
                        DIRECT EMAIL (FOR AUDIT VIDEO)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="mike@titanroofing.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-300 uppercase mb-1">
                        DIRECT CELL PHONE / WHATSAPP
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="(555) 234-5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-void-950 border border-white/15 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>No spam. Information is 100% private to your roofing company.</span>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-3.5 py-2 rounded-lg font-mono text-xs text-slate-400 hover:text-white"
                  >
                    ← BACK
                  </button>
                ) : <div />}

                <MagneticButton
                  type="submit"
                  variant={step === 3 ? "emerald" : "cyan"}
                  size="md"
                  disabled={isSubmitting}
                  icon={ArrowRight}
                  className="w-full sm:w-auto justify-center"
                >
                  {isSubmitting ? 'ANALYZING TERRITORY...' : step === 3 ? 'CLAIM FREE AUDIT' : 'CONTINUE →'}
                </MagneticButton>
              </div>

            </form>

          </div>
        ) : (
          /* Victory / Success Screen */
          <div className="p-6 sm:p-12 text-center space-y-5 overflow-y-auto">
            <div className="w-14 h-14 rounded-2xl bg-neon-emerald/20 border border-neon-emerald flex items-center justify-center mx-auto text-neon-emerald">
              <Hammer className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                AUDIT REQUEST RECEIVED!
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto font-sans">
                Our roofing marketing specialist is recording your custom 15-minute video teardown showing where you can capture more roof replacements.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-void-950 border border-white/10 font-mono text-xs text-slate-300 max-w-md mx-auto space-y-1 text-left">
              <div className="text-neon-emerald font-bold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>TERRITORY CHECK IN PROGRESS</span>
              </div>
              <div className="text-slate-400 text-[11px]">Video breakdown sent to: <span className="text-white font-bold">{formData.email || 'your email'}</span></div>
              <div className="text-slate-400 text-[11px]">Response Time: <span className="text-neon-cyan">&lt; 3 Business Hours</span></div>
            </div>

            <MagneticButton
              variant="outline"
              size="md"
              onClick={onClose}
              className="mx-auto"
            >
              BACK TO HOMEPAGE
            </MagneticButton>
          </div>
        )}

      </div>
    </div>
  );
}
