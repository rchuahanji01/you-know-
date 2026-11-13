import React from 'react';
import { Target, Cpu, ShieldCheck, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { BRAND_CONFIG } from '../data/brandConfig';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function AboutUs() {
  const handleConnect = () => {
    openWhatsApp(WHATSAPP_TEMPLATES.GENERAL);
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#070B14] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="blue" dot>
              <span>Our Mission & Philosophy</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Believe Business Should Move Forward,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Not Get Stuck in Repetitive Work.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {BRAND_CONFIG.aboutFull}
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Modern enterprises spend thousands of critical engineering and finance hours manually cross-checking balances, converting documents, writing prompt workarounds, and copy-pasting numbers. We build the intelligent software bridge that runs reliably behind your organization.
              </p>
            </div>

            {/* Core Tenets Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRAND_CONFIG.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0E172E]/70 border border-slate-800 space-y-1.5"
                >
                  <div className="text-xs font-mono uppercase text-blue-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{principle.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                onClick={handleConnect}
                icon={MessageSquare}
                iconPosition="left"
              >
                Connect With Our Team
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Tech Mesh Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-blue-500/20 via-slate-800/40 to-transparent border border-blue-500/25 shadow-2xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#0A1020] relative">
                <img
                  src="/assets/tech-bg-mesh.png"
                  alt="YouKnow Finance Core Architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-transparent opacity-90" />

                {/* Floating manifesto card */}
                <div className="absolute inset-x-4 bottom-4 glass-panel-elevated p-4 rounded-xl border border-blue-500/30">
                  <div className="text-[11px] font-mono uppercase text-blue-400 font-bold tracking-wider mb-1">
                    Engineering Ethos
                  </div>
                  <div className="text-sm font-semibold text-white">
                    "Finance. Understood. Automated."
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    B2B Financial automation, deterministic prompt rails, and agile operational tooling.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
