import React from 'react';
import { ArrowRight, Layers, ShieldCheck, Sparkles, Database, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import { ECOSYSTEM_PRODUCTS } from '../data/ecosystemData';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

export default function Ecosystem() {
  const handleInquireProduct = (product) => {
    const templateKey = product.id.toUpperCase();
    const msg = WHATSAPP_TEMPLATES[templateKey] || `Hi YouKnow Finance, I would like to learn more about the ${product.name} architecture.`;
    openWhatsApp(msg);
  };

  return (
    <section id="products" className="relative py-20 sm:py-28 bg-[#070B14] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Roadmap & Vision"
          badgeVariant="cyan"
          title="One Vision."
          highlight="Multiple Financial Solutions."
          description="A unified, modular financial software ecosystem currently in active R&D and architectural formulation to power the next generation of automated enterprises."
        />

        {/* 4 Ecosystem Products 2x2 Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ECOSYSTEM_PRODUCTS.map((prod) => {
            return (
              <div
                key={prod.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#0E172E]/90 to-[#0A1020]/95 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-[#060A14]">
                  <img
                    src={prod.visualImage}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E172E] via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider text-white px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      {prod.name}
                    </span>
                    <Badge variant="blue" size="small" dot>
                      {prod.status}
                    </Badge>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-2">
                      {prod.subtitle}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* Architecture Pillars */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                        Planned Core Pillars
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {prod.pillars.map((pillar, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span>{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Target: {prod.targetAudience}
                    </span>
                    <button
                      onClick={() => handleInquireProduct(prod)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                    >
                      <span>Inquire Product</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#0E172E]/50 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            Notice: The products above represent active R&D specifications and planned architectural milestones. Enterprise partner pilots can be scheduled via direct consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
