import React from 'react';
import { BadgeHUD } from '../ui/BadgeHUD';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Hammer, DollarSign, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function JobGallery({ onOpenAudit }) {
  const jobs = [
    {
      id: 1,
      title: 'Luxury Architectural Shingle Re-Roof',
      image: '/images/roof-luxury.jpg',
      city: 'Austin, Texas',
      ticket: '$24,500 Signed Ticket',
      channel: 'Google Search Ads',
      costToAcquire: '$140 Ad Spend',
      details: '48 SQ Owens Corning Duration shingles, full tear-off, seamless aluminum gutters.'
    },
    {
      id: 2,
      title: 'High-Pitch Residential Shingle Replacement',
      image: '/images/roof-crew.jpg',
      city: 'Denver, Colorado',
      ticket: '$18,200 Signed Ticket',
      channel: 'Facebook & Instagram Video Ads',
      costToAcquire: '$110 Ad Spend',
      details: '36 SQ GAF Timberline HDZ, synthetic underlayment, ice & water shield.'
    },
    {
      id: 3,
      title: 'Standing Seam Modern Metal Roof',
      image: '/images/roof-metal.jpg',
      city: 'Phoenix, Arizona',
      ticket: '$36,000 Signed Ticket',
      channel: 'TikTok Video Showcase',
      costToAcquire: '$190 Ad Spend',
      details: '24-Gauge Matte Black standing seam metal, lifetime warranty, custom trim.'
    },
    {
      id: 4,
      title: 'Commercial TPO Flat Roof Installation',
      image: '/images/roof-commercial.jpg',
      city: 'Dallas / Fort Worth, TX',
      ticket: '$68,000 Signed Contract',
      channel: 'Google Commercial Search',
      costToAcquire: '$280 Ad Spend',
      details: '60-mil Carlisle TPO single-ply membrane, R-30 polyiso insulation, warehouse project.'
    }
  ];

  return (
    <section className="py-28 relative bg-void-900 bg-cyber-grid border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeHUD variant="emerald" icon={Hammer}>
            REAL ROOFING FINANCIALS
          </BadgeHUD>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            THE TYPES OF JOBS WE <br />
            <span className="text-gradient-emerald">PUT ON YOUR SCHEDULE</span>.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            We don&apos;t generate small $150 repair requests. We build campaigns specifically targeted to high-ticket full re-roofs, architectural replacements, standing seam metal, and commercial flat roofs.
          </p>
        </div>

        {/* 4-Card Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <SpotlightCard key={job.id} accentColor="cyan" className="p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                {/* Job Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/15 h-56 sm:h-64 group">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-void-950/85 backdrop-blur-md border border-neon-cyan/40 text-xs font-mono text-neon-cyan font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                    <span>{job.ticket}</span>
                  </div>

                  {/* Bottom Location */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                    <span className="flex items-center gap-1 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-neon-cyan" /> {job.city}
                    </span>
                    <span className="text-neon-emerald font-bold">{job.channel}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                  {job.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                  {job.details}
                </p>
              </div>

              {/* Financial Box */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-slate-400">COST TO ACQUIRE: </span>
                  <span className="text-neon-emerald font-bold">{job.costToAcquire}</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="text-white hover:text-neon-cyan transition-colors flex items-center gap-1 font-bold"
                >
                  GET THESE JOBS <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
