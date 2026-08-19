import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BadgeHUD } from '../ui/BadgeHUD';
import { 
  Search, 
  Share2, 
  Video, 
  PhoneCall, 
  Globe, 
  CloudLightning,
  ArrowUpRight,
  CheckCircle2,
  Hammer
} from 'lucide-react';

export function ServicesBentoGrid({ onSelectService }) {
  const [activeIntentTab, setActiveIntentTab] = useState('full-reroof');

  return (
    <section id="services" className="py-28 relative bg-void-900 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeHUD variant="cyan" icon={Hammer}>
            WHAT WE DO FOR ROOFERS
          </BadgeHUD>
          
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            CUSTOM LEAD &amp; AD CAMPAIGNS <br />
            <span className="text-gradient-cyan">BUILT SPECIFICALLY FOR ROOFERS</span>.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            We don&apos;t use cookie-cutter templates or automated black-box algorithms. We build custom campaigns by hand that get you real homeowners and property managers who need a roof right now.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Google Search Ads for Roof Replacements (Span 7) */}
          <div className="md:col-span-7">
            <SpotlightCard accentColor="cyan" className="p-7 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase">HIGH-INTENT GOOGLE ADS</span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Google Ads for Roof Replacements</h3>
                    </div>
                  </div>
                  <BadgeHUD variant="cyan" pulse={false}>#1 ON GOOGLE</BadgeHUD>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  When a homeowner has an active leak or their 20-year roof is failing, they search Google for a reputable roofer. We put your company at the very top of page 1 and block junk keywords like &quot;diy patch&quot; and &quot;cheap handyman&quot; so you only talk to real buyers.
                </p>

                {/* Interactive Job Keyword Switcher */}
                <div className="p-4 rounded-xl bg-void-950/80 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-slate-300">SELECT SEARCH TARGET:</span>
                    <span className="text-neon-cyan font-bold">LIVE PREVIEW</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'full-reroof', label: 'Full Re-Roofs', ticket: '$12k-$22k Job', cpa: 'Avg $65 / Estimate' },
                      { id: 'emergency', label: 'Emergency Leak', ticket: 'Immediate Call', cpa: 'Same-Day Visit' },
                      { id: 'commercial', label: 'Commercial TPO', ticket: '$40k+ Contract', cpa: 'High-Ticket HOA' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => setActiveIntentTab(btn.id)}
                        className={`p-2.5 rounded-lg font-mono text-xs border text-left transition-all ${
                          activeIntentTab === btn.id
                            ? 'bg-neon-cyan/15 border-neon-cyan text-white'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="font-bold text-[11px] text-white">{btn.label}</div>
                        <div className="text-neon-cyan text-[10px] mt-0.5">{btn.ticket}</div>
                        <div className="text-slate-400 text-[9px] mt-0.5">{btn.cpa}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>Negative Keyword Shield (Zero Wasted Clicks)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>Google Guaranteed / Local Map Pack Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>Real Human Daily Bid Adjustments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                    <span>Direct Inbound Phone Calls to Your Office</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-xs">
                  <span className="text-slate-400">AVERAGE RESULT: </span>
                  <span className="text-neon-cyan font-bold">18-35 BOOKED ESTIMATES / MO</span>
                </div>
                <button 
                  type="button"
                  onClick={() => onSelectService('Google Search Ads')}
                  className="text-xs font-mono text-white flex items-center gap-1 hover:text-neon-cyan transition-colors font-bold"
                >
                  GET DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Card 2: Facebook & Meta Ads Showing Real Crew Work (Span 5) */}
          <div className="md:col-span-5">
            <SpotlightCard accentColor="emerald" className="p-7 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neon-emerald/10 border border-neon-emerald/30 flex items-center justify-center text-neon-emerald">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-neon-emerald tracking-widest uppercase">LOCAL SOCIAL ADS</span>
                      <h3 className="text-xl font-bold font-display text-white">Facebook &amp; Instagram Ads</h3>
                    </div>
                  </div>
                  <BadgeHUD variant="emerald" pulse={false}>CREW SHOWCASE</BadgeHUD>
                </div>

                {/* Roofing Crew Image in Card */}
                <div className="relative rounded-xl overflow-hidden mb-5 border border-white/15 h-36">
                  <img 
                    src="/images/roof-crew.jpg" 
                    alt="Professional Roofing Crew"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-void-950/80 text-[10px] font-mono text-neon-emerald">
                    REAL JOB PHOTOS = 4X HIGHER TRUST
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Homeowners hire roofers they trust. We run video ads showing your actual crew tearing off old shingles and nailing down clean architectural roofs, targeted directly to homeowners aged 35+ with older homes in your zip codes.
                </p>

                <div className="space-y-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-emerald flex-shrink-0" />
                    <span>Target Older Neighborhoods &amp; 15+ Year Roofs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-emerald flex-shrink-0" />
                    <span>Before &amp; After Photo &amp; Video Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-emerald flex-shrink-0" />
                    <span>Financing &amp; 0% Down Monthly Payment Hooks</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-neon-emerald font-bold">AVG CLOSE RATE: 34%</span>
                <button 
                  type="button"
                  onClick={() => onSelectService('Facebook & Instagram Ads')}
                  className="text-xs font-mono text-white flex items-center gap-1 hover:text-neon-emerald transition-colors font-bold"
                >
                  GET DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Card 3: Speed-to-Lead Follow-Up (Span 4) */}
          <div className="md:col-span-4">
            <SpotlightCard accentColor="amber" className="p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-neon-amber/10 border border-neon-amber/30 flex items-center justify-center text-neon-amber">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-neon-amber tracking-widest uppercase">FAST FOLLOW-UP</span>
                    <h3 className="text-lg font-bold font-display text-white">45-Sec Text &amp; Call Bridge</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  Homeowners call 2 or 3 roofers and hire the first one who answers. The second a lead submits an address, our system automatically texts them and calls your estimator to bridge the live conversation in under 45 seconds.
                </p>

                <div className="p-3 rounded-lg bg-void-950/80 border border-white/10 mb-5 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-300">
                    <span>LEAD RESPONSE:</span>
                    <span className="text-neon-amber font-bold">&lt; 45 SECONDS</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>NO-SHOW REDUCTION:</span>
                    <span className="text-neon-emerald font-bold">-70% APPOINTMENT DROPS</span>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-amber flex-shrink-0" />
                    <span>Automated Appointment Reminders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-amber flex-shrink-0" />
                    <span>Review Requests After Job Is Done</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-neon-amber font-bold">NEVER LOSE A LEAD</span>
                <button 
                  type="button"
                  onClick={() => onSelectService('Speed to Lead Follow-Up')}
                  className="text-xs font-mono text-white flex items-center gap-1 hover:text-neon-amber font-bold"
                >
                  AUDIT <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Card 4: Drone Footage & Short-Form Video (Span 4) */}
          <div className="md:col-span-4">
            <SpotlightCard accentColor="purple" className="p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-neon-purple tracking-widest uppercase">DRONE &amp; VIDEO</span>
                    <h3 className="text-lg font-bold font-display text-white">Drone Job Flyovers</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  Show off finished roofs with crisp 4K drone flyovers and crew walk-throughs. We edit your job site clips into high-energy video ads that dominate TikTok and Facebook Reels.
                </p>

                <div className="p-3 rounded-lg bg-void-950/80 border border-white/10 mb-5 font-mono text-xs">
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>NEIGHBORHOOD TRUST</span>
                    <span className="text-neon-purple font-bold">5X HIGHER</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-neon-purple h-full w-[85%] rounded-full" />
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-purple flex-shrink-0" />
                    <span>Drone Inspection Video Clips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-purple flex-shrink-0" />
                    <span>Customer Video Testimonial Ads</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-neon-purple font-bold">TIKTOK &amp; REELS</span>
                <button 
                  type="button"
                  onClick={() => onSelectService('Drone & Video Production')}
                  className="text-xs font-mono text-white flex items-center gap-1 hover:text-neon-purple font-bold"
                >
                  AUDIT <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Card 5: High-Converting Roofing Websites (Span 4) */}
          <div className="md:col-span-4">
            <SpotlightCard accentColor="cyan" className="p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">FAST WEBSITES</span>
                    <h3 className="text-lg font-bold font-display text-white">Converting Websites</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  A modern, mobile-friendly roofing website built with one-tap calling, interactive roof cost calculators, financing options, and local trust badges (GAF, CertainTeed, Owens Corning).
                </p>

                <div className="p-3 rounded-lg bg-void-950/80 border border-white/10 mb-5 font-mono text-xs flex items-center justify-between">
                  <span className="text-slate-300">LOAD SPEED:</span>
                  <div className="flex items-center gap-1 text-neon-emerald font-bold text-sm">
                    <span>0.8 Seconds</span>
                    <span className="text-[10px] text-slate-400">(Mobile)</span>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Instant Quote Request Calculator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Manufacturer Warranty Trust Badges</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-sky-400 font-bold">3X MORE CALLS</span>
                <button 
                  type="button"
                  onClick={() => onSelectService('Roofing Websites')}
                  className="text-xs font-mono text-white flex items-center gap-1 hover:text-sky-400 font-bold"
                >
                  AUDIT <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
