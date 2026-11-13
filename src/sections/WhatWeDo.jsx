import React, { useState } from 'react';
import {
  BadgePercent,
  Cpu,
  Layers,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Workflow,
  MessageSquare,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatWeDo() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      default:
        return <Workflow className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleDiscuss = (solution) => {
    openWhatsApp(solution.whatsappMessage);
  };

  return (
    <section id="solutions" className="relative py-20 sm:py-28 bg-[#060A14]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Capabilities"
          badgeVariant="blue"
          title="Technology That Works"
          highlight="Behind Your Business."
          description="We eliminate operational complexity with high-reliability automation, proprietary AI system prompts, and purposeful enterprise software utilities."
        />

        {/* 4 Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SOLUTIONS_DATA.map((item, index) => {
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-[#0E172E]/90 to-[#0A1020]/90 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/40 flex flex-col justify-between"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-400/50 transition-all duration-500" />

                <div>
                  {/* Top row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <Badge variant={index % 2 === 0 ? 'blue' : 'violet'}>
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                    {item.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Mini bullet preview */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/60">
                    {item.capabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Learn More */}
                <div className="mt-8 pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSolution(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn More & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleDiscuss(item)}
                    className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                    title="Discuss on WhatsApp"
                    aria-label={`Discuss ${item.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSolution && (
        <Modal
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
          title={selectedSolution.title}
          subtitle={selectedSolution.tagline}
        >
          <div className="space-y-6">
            <p className="text-slate-200 leading-relaxed">
              {selectedSolution.longDescription}
            </p>

            {/* Architecture Strip */}
            <div className="p-4 rounded-xl bg-[#070B14] border border-blue-500/20">
              <div className="text-xs font-mono uppercase text-blue-400 mb-1 font-semibold">
                Target Architecture Pipeline
              </div>
              <div className="text-xs font-mono text-slate-300 tracking-wide">
                {selectedSolution.architecture}
              </div>
            </div>

            {/* Comprehensive capabilities list */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                Key Operational Deliverables
              </h4>
              <div className="space-y-2.5">
                {selectedSolution.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Direct consultation via WhatsApp
              </div>
              <Button
                variant="whatsapp"
                onClick={() => {
                  handleDiscuss(selectedSolution);
                  setSelectedSolution(null);
                }}
                icon={MessageSquare}
                iconPosition="left"
              >
                Discuss This Capability
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
