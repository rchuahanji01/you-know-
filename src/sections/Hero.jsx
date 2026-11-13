import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Activity, ShieldCheck, Zap, Layers } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { BRAND_CONFIG } from '../data/brandConfig';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

export default function Hero() {
  const handleExploreClick = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuildWithUs = () => {
    openWhatsApp(WHATSAPP_TEMPLATES.AUTOMATION);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-violet-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue" dot size="large">
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  Next-Gen Financial Software
                </span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Your Business.{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Smarter. Automated.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We build intelligent financial automation solutions, custom AI workflows and business tools that eliminate repetitive work and simplify complex operations.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                size="large"
                onClick={handleExploreClick}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {BRAND_CONFIG.cta.exploreSolutions}
              </Button>

              <Button
                variant="secondary"
                size="large"
                onClick={handleBuildWithUs}
                icon={MessageSquare}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {BRAND_CONFIG.cta.buildWithUs}
              </Button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-blue-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Precision</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  Deterministic Logic
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Workflows</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  Custom Prompts
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-violet-400 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Velocity</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  Zero Bottlenecks
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Ecosystem */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent border border-blue-500/30 shadow-2xl shadow-blue-950/60 group">
              {/* Image Container with glossy overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#0A1020]">
                <img
                  src="/assets/hero-automation-ecosystem.png"
                  alt="YouKnow Finance Intelligent Automation Ecosystem"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-transparent opacity-80" />

                {/* Floating telemetry badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-slate-200">System Telemetry: Active</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 glass-panel-elevated p-3.5 rounded-xl border border-blue-500/30 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <Layers className="w-3 h-3 text-blue-400" />
                      Continuous Ledger Sync
                    </span>
                    <span className="text-emerald-400 font-mono font-semibold">100% Validated</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 h-full w-[96%] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient decorative halo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-2xl opacity-15 -z-10 group-hover:opacity-25 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
