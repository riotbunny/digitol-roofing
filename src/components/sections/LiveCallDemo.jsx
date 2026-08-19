import React, { useState } from 'react';
import { BadgeHUD } from '../ui/BadgeHUD';
import { PhoneCall, MessageSquare, Play, Pause, Volume2, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export function LiveCallDemo() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="py-28 relative bg-void-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            
            <BadgeHUD variant="amber" icon={PhoneCall}>
              THE 45-SECOND SPEED-TO-LEAD ENGINE
            </BadgeHUD>

            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              SEE HOW WE GET HOMEOWNERS <br />
              <span className="text-gradient-cyan">ON YOUR ESTIMATOR&apos;S PHONE</span>.
            </h2>

            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
              When a homeowner fills out an ad form, they want an inspection fast. While your competitors take 4 hours to call back, our system instantly triggers a personalized SMS and connects your sales rep via phone in under 45 seconds.
            </p>

            {/* Micro Highlights */}
            <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-void-900 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-emerald flex-shrink-0" />
                <span>Zero lost leads while your crew is up on a roof</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-void-900 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Homeowner address and satellite roof view sent to your estimator</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-void-900 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-amber flex-shrink-0" />
                <span>Automated appointment reminders stop estimate no-shows</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tactile iPhone SMS & Call Simulation Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-3xl p-5 sm:p-7 glass-panel bg-void-900/95 border border-white/20 shadow-2xl space-y-5 relative overflow-hidden">
              
              {/* iPhone Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
                  <span className="text-white font-bold">LIVE SPEED-TO-LEAD DEMO</span>
                </div>
                <div className="flex items-center gap-1 text-neon-cyan">
                  <Clock className="w-3.5 h-3.5" />
                  <span>42 SECONDS AGO</span>
                </div>
              </div>

              {/* Inbound Lead Box */}
              <div className="p-3.5 rounded-xl bg-void-950 border border-white/10 font-mono text-xs space-y-1">
                <div className="text-[10px] text-neon-cyan font-bold uppercase tracking-wider">
                  NEW INBOUND ROOF ESTIMATE REQUEST:
                </div>
                <div className="text-white font-semibold">John Sanders &bull; 1420 Oakwood Dr</div>
                <div className="text-slate-400 text-[11px]">22-Year Old Shingle Roof &bull; Active Master Bedroom Leak</div>
              </div>

              {/* SMS Message Bubble Conversation */}
              <div className="space-y-3 font-sans text-xs">
                
                {/* Outbound SMS from Roofer */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] p-3.5 rounded-2xl rounded-br-sm bg-neon-cyan text-void-950 font-medium shadow-md">
                    <p className="leading-relaxed">
                      &quot;Hey John! This is Mike with Apex Roofing. Saw you requested a roof estimate for 1420 Oakwood. Would 2 PM tomorrow or Thursday morning work best for a quick inspection?&quot;
                    </p>
                    <span className="text-[9px] font-mono text-void-950/70 mt-1 block text-right">0:42s AFTER LEAD</span>
                  </div>
                </div>

                {/* Homeowner Reply */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3.5 rounded-2xl rounded-bl-sm bg-void-950 border border-white/15 text-white">
                    <p className="leading-relaxed">
                      &quot;Wow that was fast! Thursday at 10 AM works great for me. Thanks Mike.&quot;
                    </p>
                    <span className="text-[9px] font-mono text-slate-500 mt-1 block">1 MINUTE LATER</span>
                  </div>
                </div>

              </div>

              {/* Simulated Live Call Bridge Audio Bar */}
              <div className="p-4 rounded-xl bg-void-950 border border-neon-emerald/30 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neon-emerald font-bold flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>ESTIMATOR LIVE CALL BRIDGE</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">00:32 / 00:45</span>
                </div>

                {/* Interactive Waveform / Play Button */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleAudio}
                    className="w-10 h-10 rounded-xl bg-neon-emerald text-void-950 flex items-center justify-center font-bold hover:scale-105 active:scale-95 transition-transform flex-shrink-0"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  {/* Animated Waveform Visualizer */}
                  <div className="flex-1 flex items-center gap-1 h-8 px-2 rounded-lg bg-white/5 overflow-hidden">
                    {[16, 28, 12, 32, 20, 24, 18, 30, 14, 26, 32, 18, 22, 28, 14, 20, 30, 12].map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-neon-emerald animate-pulse' : 'bg-white/20'
                        }`}
                        style={{ height: `${isPlayingAudio ? height : 6}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 text-center">
                  {isPlayingAudio ? '▶ PLAYING: ESTIMATOR SETTING APPOINTMENT OVER PHONE...' : 'CLICK PLAY TO HEAR ACTUAL ESTIMATE CALL BRIDGE'}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
