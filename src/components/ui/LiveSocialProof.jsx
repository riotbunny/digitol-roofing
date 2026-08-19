import React, { useState, useEffect } from 'react';
import { Hammer, CheckCircle2, MapPin, X } from 'lucide-react';

export function LiveSocialProof() {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  const notifications = [
    { client: 'Titan Peak Roofing', city: 'Austin, TX', event: 'Closed $24,500 shingle replacement', time: '14m ago' },
    { client: 'Summit Ridge Commercial', city: 'Denver, CO', event: 'Booked $48,000 TPO estimate', time: '32m ago' },
    { client: 'Exclusive Territory Locked', city: 'Tampa, FL', event: '35-mile market claimed', time: '1h ago' },
    { client: 'Shield Guard Restoration', city: 'Dallas, TX', event: '52 Hail claims approved', time: '2h ago' },
    { client: 'Apex Roofing & Solar', city: 'Phoenix, AZ', event: 'Closed $36,000 metal roof', time: '3h ago' },
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (dismissed) return;
      setCurrentNotification(notifications[index % notifications.length]);
      index++;

      // Hide after 6 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 5500);
    }, 11000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (!currentNotification || dismissed) return null;

  return (
    <div className="hidden sm:flex fixed bottom-6 left-6 z-40 max-w-sm rounded-2xl glass-panel bg-void-950/95 border border-neon-cyan/40 p-4 shadow-2xl animate-scaleUp items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-neon-cyan/15 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan flex-shrink-0">
        <Hammer className="w-4 h-4" />
      </div>

      <div className="flex-1 font-mono text-xs pr-2">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
          <span className="flex items-center gap-1 text-neon-cyan font-bold">
            <MapPin className="w-3 h-3" /> {currentNotification.city}
          </span>
          <span>{currentNotification.time}</span>
        </div>
        <div className="text-white font-bold text-[11px]">{currentNotification.client}</div>
        <div className="text-neon-emerald font-semibold text-[10px] mt-0.5">{currentNotification.event}</div>
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="text-slate-500 hover:text-white transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
