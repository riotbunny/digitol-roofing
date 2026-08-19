import React, { useState } from 'react';
import { BadgeHUD } from '../ui/BadgeHUD';
import { MagneticButton } from '../ui/MagneticButton';
import { WORKFLOW_NODES } from '../../data/agencyData';
import { Hammer, Play, CheckCircle2, PhoneCall } from 'lucide-react';

export function AutomationPipeline() {
  const [activeStep, setActiveStep] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState([]);

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationLogs([]);

    const steps = [
      { step: 0, log: '[0.00s] Homeowner John S. in 78704 clicks Google ad for "roof replacement near me"' },
      { step: 1, log: '[0.01s] System sends instant SMS: "Hey John, saw you need a roof quote for 1420 Oak St. Does 2pm tomorrow work for an estimator?"' },
      { step: 2, log: '[0.03s] Homeowner replies "Yes!" -> Estimate auto-booked on your sales rep\'s phone with satellite roof view' },
      { step: 3, log: '[0.06s] Sales rep arrives, inspects roof, and signs $16,200 architectural shingle replacement' },
    ];

    steps.forEach(({ step, log }, index) => {
      setTimeout(() => {
        setActiveStep(step);
        setSimulationLogs((prev) => [...prev, log]);

        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
          }, 1000);
        }
      }, (index + 1) * 700);
    });
  };

  return (
    <section id="how-it-works" className="py-28 relative bg-void-900 bg-cyber-grid border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeHUD variant="amber" icon={Hammer}>
            HOW THE SYSTEM WORKS
          </BadgeHUD>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            FROM ONLINE CLICK TO <br />
            <span className="text-gradient-emerald">SIGNED $14,000+ ROOF CONTRACT</span>.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            Here is the exact 4-step process we use to turn local homeowners into booked, in-person roof estimates on your calendar.
          </p>
        </div>

        {/* Visual Pipeline Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {WORKFLOW_NODES.map((node, index) => {
            const isActive = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <div
                key={node.step}
                className={`p-6 rounded-2xl glass-panel transition-all duration-300 border relative ${
                  isActive
                    ? 'border-neon-cyan bg-void-850 shadow-neon-cyan scale-[1.03]'
                    : isPassed
                    ? 'border-neon-emerald/60 bg-void-900'
                    : 'border-white/10 bg-void-950/60'
                }`}
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                    isActive
                      ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    STEP {node.step}
                  </span>
                  <span className="text-[10px] font-mono text-neon-amber uppercase tracking-wider">
                    {node.badge}
                  </span>
                </div>

                <h4 className="font-mono text-sm font-bold text-white tracking-wider mb-2">
                  {node.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {node.desc}
                </p>

                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan" />
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Simulation Sandbox */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel bg-void-950/90 border border-white/15 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-neon-amber animate-ping" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                TEST LEAD SIMULATION // WATCH SPEED-TO-LEAD IN ACTION
              </span>
            </div>

            <MagneticButton
              variant="amber"
              size="sm"
              disabled={isSimulating}
              onClick={triggerSimulation}
              icon={Play}
            >
              {isSimulating ? 'TRACING NEW LEAD...' : 'SIMULATE A ROOFING LEAD'}
            </MagneticButton>
          </div>

          {/* Console Log Stream */}
          <div className="mt-4 bg-void-950 rounded-xl p-4 border border-white/10 font-mono text-xs space-y-2 min-h-[110px]">
            {simulationLogs.length === 0 ? (
              <div className="text-slate-400 italic">
                Click &quot;SIMULATE A ROOFING LEAD&quot; above to see how our automated text and call system instantly locks in homeowner appointments...
              </div>
            ) : (
              simulationLogs.map((log, i) => (
                <div key={i} className="text-neon-cyan animate-fadeIn flex items-center gap-2">
                  <span className="text-neon-emerald font-bold">&gt;</span>
                  <span>{log}</span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
