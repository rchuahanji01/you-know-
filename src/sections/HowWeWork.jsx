import React, { useState } from 'react';
import { Search, Layers, Code2, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { PROCESS_STEPS } from '../data/processData';

export default function HowWeWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="how-we-work" className="relative py-20 sm:py-28 bg-[#060A14] overflow-hidden">
      {/* Background Subtle Line Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Execution Methodology"
          badgeVariant="blue"
          title="From Complexity"
          highlight="to Clarity."
          description="A structured, engineering-first methodology that turns chaotic manual spreadsheets and fragmented operations into seamless, automated software engines."
        />

        {/* Desktop Horizontal Stepper Bar */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-12 right-12 h-0.5 bg-slate-800 -z-0" />
            <div
              className="absolute top-7 left-12 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 -z-0"
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 88}%` }}
            />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="text-left group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-base transition-all duration-300 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105 border border-blue-400'
                            : isPast
                            ? 'bg-slate-800 text-blue-300 border border-blue-500/30'
                            : 'bg-[#0E172E] text-slate-400 border border-slate-800 group-hover:border-slate-700'
                        }`}
                      >
                        {step.step}
                      </div>
                    </div>

                    <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {step.name}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      {step.tagline}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detailed Card (Desktop) */}
        <div className="mt-12 hidden lg:block">
          {(() => {
            const step = PROCESS_STEPS[activeStepIndex];
            return (
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0E172E] to-[#0A1020] border border-blue-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-12 gap-8 items-center">
                  <div className="col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-blue-400 font-bold">
                        Phase {step.step} //
                      </span>
                      <span className="text-xs font-mono uppercase text-slate-400">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {step.summary}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-sm">
                      {step.details}
                    </p>
                  </div>

                  <div className="col-span-5 bg-[#060A14] p-6 rounded-2xl border border-slate-800 space-y-3">
                    <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                      Key Deliverables & Verification
                    </div>
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-mono">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="mt-12 lg:hidden space-y-6">
          {PROCESS_STEPS.map((step) => {
            return (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0E172E] to-[#0A1020] border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 flex items-center justify-center font-mono font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.name}</h3>
                    <div className="text-xs text-slate-400 font-mono">{step.tagline}</div>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-200 mt-2">
                  {step.summary}
                </div>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.details}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400">
                    Deliverables:
                  </div>
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
