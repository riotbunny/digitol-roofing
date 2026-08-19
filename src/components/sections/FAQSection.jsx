import React, { useState } from 'react';
import { BadgeHUD } from '../ui/BadgeHUD';
import { HelpCircle, ChevronDown, ArrowUpRight } from 'lucide-react';

export function FAQSection({ onOpenAudit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are these leads shared with Angi, HomeAdvisor, or other roofers?',
      a: 'Never. 100% of the phone calls, form submissions, and estimate requests generated belong exclusively to your roofing company. The homeowner only sees your brand, your crew photos, and speaks directly to your sales team.'
    },
    {
      q: 'Do you lock us into a 6 or 12 month contract?',
      a: 'No. We operate on a month-to-month basis. We believe if we are making you money and filling your crews with profitable $14,000+ roof replacements, you will never want to leave. If we don’t deliver, you can cancel at any time with zero penalties.'
    },
    {
      q: 'How fast do calls and estimates start coming in?',
      a: 'Once we build your custom landing pages, Google search campaigns, and video ads, we launch within 7 to 10 days. Inbound calls and estimate requests typically start landing on your phone during week 2.'
    },
    {
      q: 'What if we only want full roof replacements and not small $150 repair calls?',
      a: 'We use strict negative keyword firewalls and qualifying form questions. We explicitly filter out searches like "cheap roof patch", "diy shingles", and "gutter cleaning" so your estimators only drive out to homeowners who need a full re-roof or major insurance claim.'
    },
    {
      q: 'Can you handle commercial flat roofs (TPO/Metal) and hail storm claims?',
      a: 'Yes. We build specialized campaigns for Commercial TPO & metal roofs targeting property managers and building owners, as well as rapid 24-hour storm campaigns triggered immediately after local hail storms.'
    },
    {
      q: 'How does the exclusive territory protection work?',
      a: 'We strictly accept only ONE roofing contractor per 35-mile service radius. Once your market is locked in, we turn down all other roofers in your territory so we never compete against our own partners.'
    }
  ];

  return (
    <section className="py-28 relative bg-void-900 bg-cyber-grid border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <BadgeHUD variant="cyan" icon={HelpCircle}>
            FREQUENTLY ASKED QUESTIONS
          </BadgeHUD>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            STRAIGHT ANSWERS FOR <br />
            <span className="text-gradient-cyan">ROOFING CONTRACTORS</span>.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg">
            No marketing jargon. Here are the exact answers to the questions roofing owners ask us every day.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl glass-panel transition-all duration-200 border overflow-hidden ${
                  isOpen ? 'border-neon-cyan/40 bg-void-850' : 'border-white/10 bg-void-950/80 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-mono text-sm sm:text-base font-bold text-white"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neon-cyan transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm font-sans text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400 mb-3">
            Have a specific question about your market or ad budget?
          </p>
          <button
            type="button"
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neon-cyan font-bold hover:underline"
          >
            <span>TALK TO A ROOFING SPECIALIST</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
