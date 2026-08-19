import React, { useRef, useEffect } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { BadgeHUD } from '../ui/BadgeHUD';
import { useTypewriter } from '../../hooks/useTypewriter';
import { TYPEWRITER_PHRASES, CLIENT_LOGOS } from '../../data/agencyData';
import { 
  ArrowUpRight, 
  Hammer, 
  Calculator, 
  MapPin,
  CheckCircle2,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';

export function HeroSection({ onOpenAudit, onOpenSimulator }) {
  const canvasRef = useRef(null);
  const typewriterText = useTypewriter(TYPEWRITER_PHRASES, 45, 25, 2400);

  // High-performance particle matrix with contractor amber/emerald tones
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;
    const particleCount = isMobile ? 25 : Math.min(Math.floor((width * height) / 16000), 55);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: isMobile ? 80 : 130 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        size: Math.random() * 1.5 + 0.8,
        color: i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#10B981' : '#38BDF8',
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2.5;
          p.y -= Math.sin(angle) * force * 2.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (distBetween < (isMobile ? 70 : 100)) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - distBetween / (isMobile ? 70 : 100)) * 0.16;
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden bg-cyber-grid">
      {/* Interactive Canvas Grid Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-50"
      />

      {/* Warm Contractor Gold Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[450px] bg-amber-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Roofer Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-7">
            
            {/* Status Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <BadgeHUD variant="amber" icon={Hammer}>
                100% EXCLUSIVE ROOFING LEADS
              </BadgeHUD>
              <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-300">
                1 ROOFER PER 35-MILE RADIUS
              </span>
            </div>

            {/* Main Punch Headline */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
                WE FILL YOUR SCHEDULE WITH <br />
                <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">EXCLUSIVE ROOF</span> <br />
                REPLACEMENTS.
              </h1>

              {/* Dynamic Typewriter Line */}
              <div className="min-h-9 sm:h-8 flex items-center">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-void-900/90 border border-amber-500/40 text-amber-400 font-mono text-[11px] sm:text-xs md:text-sm shadow-md">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="line-clamp-1">{typewriterText}</span>
                  <span className="w-1.5 sm:w-2 h-3.5 sm:h-4 bg-amber-400 animate-pulse flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans font-normal">
              Stop burning cash on recycled leads from Angi and HomeAdvisor that get sent to 5 other roofers. At <strong className="text-white font-semibold">Digitol</strong>, our dedicated team manages your <span className="text-amber-400 font-semibold">Google Ads</span>, <span className="text-emerald-400 font-semibold">Facebook video ads</span>, and <span className="text-sky-400 font-semibold">custom websites</span> so qualified local homeowners call YOU directly.
            </p>

            {/* Tactical CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <MagneticButton
                variant="amber"
                size="lg"
                onClick={onOpenAudit}
                icon={ArrowUpRight}
                badge="FREE 15-MIN AUDIT"
                className="w-full sm:w-auto justify-center text-xs sm:text-sm font-bold shadow-lg"
              >
                GET EXCLUSIVE ROOF LEADS
              </MagneticButton>

              <MagneticButton
                variant="outline"
                size="lg"
                onClick={onOpenSimulator}
                icon={Calculator}
                className="w-full sm:w-auto justify-center text-xs sm:text-sm"
              >
                CALCULATE ROOF REVENUE
              </MagneticButton>
            </div>

            {/* Guarantees Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 w-full max-w-xl text-left">
              <div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400">TERRITORY</div>
                <div className="font-mono text-xs sm:text-sm text-emerald-400 font-bold mt-0.5">EXCLUSIVE 35-MI</div>
              </div>
              <div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400">MANAGEMENT</div>
                <div className="font-mono text-xs sm:text-sm text-amber-400 font-bold mt-0.5">HUMAN PROS</div>
              </div>
              <div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400">GUARANTEE</div>
                <div className="font-mono text-xs sm:text-sm text-sky-400 font-bold mt-0.5">5 JOBS IN 30 DAYS</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card with Real Job Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-4 sm:p-6 border border-white/15 shadow-2xl overflow-hidden scanline-overlay">
              
              {/* Luxury Roof Job Preview Photo */}
              <div className="relative rounded-xl overflow-hidden mb-4 sm:mb-5 border border-white/15 h-44 sm:h-56 group">
                <img 
                  src="/images/roof-luxury.jpg" 
                  alt="Luxury Roof Replacement by Client Crew"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/40 to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-void-950/85 backdrop-blur-md border border-amber-400/40 text-[9px] sm:text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>CLIENT PROJECT: $24,500 RE-ROOF</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-white">
                  <span className="font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> Austin, TX
                  </span>
                  <span className="text-emerald-400 font-bold">CLOSED VIA GOOGLE ADS</span>
                </div>
              </div>

              {/* Header of HUD */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase">
                    MONTHLY ESTIMATES PIPELINE
                  </span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-slate-300">
                  LIVE STATS
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4 font-mono text-xs">
                <div className="p-2.5 sm:p-3 rounded-xl bg-void-950/80 border border-white/10">
                  <div className="text-slate-400 text-[9px] sm:text-[10px]">BOOKED ESTIMATES</div>
                  <div className="text-amber-400 font-bold text-base sm:text-lg mt-0.5">34 / Month</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 mt-0.5">Direct on roofer calendar</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-void-950/80 border border-white/10">
                  <div className="text-slate-400 text-[9px] sm:text-[10px]">AVG RE-ROOF TICKET</div>
                  <div className="text-emerald-400 font-bold text-base sm:text-lg mt-0.5">$14,500</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 mt-0.5">Architectural Shingles</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-void-950/80 border border-white/10">
                  <div className="text-slate-400 text-[9px] sm:text-[10px]">SPEED TO LEAD</div>
                  <div className="text-sky-400 font-bold text-base sm:text-lg mt-0.5">&lt; 45 Seconds</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 mt-0.5">Instant SMS Bridge</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-void-950/80 border border-white/10">
                  <div className="text-slate-400 text-[9px] sm:text-[10px]">ESTIMATE CLOSE RATE</div>
                  <div className="text-emerald-400 font-bold text-base sm:text-lg mt-0.5">38.4%</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-500 mt-0.5">Pre-screened homeowners</div>
                </div>
              </div>

              {/* Bottom status line */}
              <div className="mt-3 sm:mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>EXCLUSIVE 35-MILE RADIUS</span>
                </div>
                <span className="text-white font-bold">1 ROOFER PER CITY</span>
              </div>

            </div>
          </div>

        </div>

        {/* Client Logomark Ticker */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-center mb-3">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase">
              // TRUSTED BY LEADING ROOFING CONTRACTORS NATIONWIDE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 opacity-80">
            {CLIENT_LOGOS.map((client) => (
              <div key={client.name} className="flex items-center gap-1.5 group cursor-default">
                <span className="font-mono text-xs sm:text-sm font-bold text-slate-300 group-hover:text-amber-400 transition-colors">
                  {client.name}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-white/5 border border-white/10 text-slate-400 group-hover:border-amber-400/40">
                  {client.city}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
