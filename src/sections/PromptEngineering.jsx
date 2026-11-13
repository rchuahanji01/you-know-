import React, { useState } from 'react';
import {
  Sparkles,
  Terminal,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  ArrowRight,
  Shield,
  Bot,
  Code2,
  Workflow,
  Calculator,
  FileText,
  Boxes,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import {
  PROMPT_CATEGORIES,
  PROMPT_CAPABILITY_POINTS,
} from '../data/promptStudioData';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

export default function PromptEngineering() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCategory = PROMPT_CATEGORIES[activeCategoryIndex];

  const handleRequestPrompt = (specificCategory) => {
    const text = specificCategory
      ? `Hi YouKnow Finance, I am interested in requesting a custom AI prompt for ${specificCategory}.`
      : WHATSAPP_TEMPLATES.PROMPT;
    openWhatsApp(text);
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(activeCategory.promptPreview.outputSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Bot':
        return <Bot className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      case 'FileText':
        return <FileText className="w-4 h-4" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="custom-ai" className="relative py-20 sm:py-28 bg-[#070B14] overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Proprietary AI Methodology"
          badgeVariant="violet"
          title="Don't Just Use AI."
          highlight="Make AI Work For You."
          description="We design custom prompts and AI workflows tailored to your projects, business requirements and automation goals."
        />

        {/* Two-Column Showcase: Concept & Studio Mockup */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What You Can Request & Category Selectors */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E172E]/80 border border-slate-800/80 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Tailored Prompt Solutions</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Generic ChatGPT queries yield generic answers. We build production-ready prompt architectures engineered with deterministic schemas, role constraints, and zero-hallucination guardrails.
              </p>

              {/* Capability Checklist */}
              <div className="space-y-2.5 pt-2">
                {PROMPT_CAPABILITY_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <Button
                  variant="violet"
                  size="default"
                  onClick={() => handleRequestPrompt(activeCategory.name)}
                  icon={MessageSquare}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Request a Custom Prompt
                </Button>
                <div className="text-[11px] text-center text-slate-400 font-mono mt-2">
                  Opens WhatsApp pre-filled with your prompt requirement
                </div>
              </div>
            </div>

            {/* Visual banner card */}
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/20 bg-[#0A1020] p-4 hidden sm:block">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/ai-prompt-engineering.png"
                  alt="AI Prompt Engineering Architecture"
                  className="w-20 h-20 rounded-xl object-cover border border-violet-500/30 flex-shrink-0"
                />
                <div>
                  <div className="text-xs font-mono text-violet-400 uppercase">
                    Deterministic Engineering
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Structured System Instructions
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Tailored for your specific APIs, ERP schemas, and internal tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Prompt Studio Interface Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0A1020] border border-violet-500/25 shadow-2xl shadow-violet-950/30 overflow-hidden">
              {/* Studio Window Top Bar */}
              <div className="bg-[#0E172E] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    Prompt Studio Mockup Preview
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    SCHEMA_VALIDATED
                  </span>
                </div>
              </div>

              {/* Category Tab Selector */}
              <div className="bg-[#080D1A] px-3 py-2 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {PROMPT_CATEGORIES.map((cat, idx) => {
                  const isActive = idx === activeCategoryIndex;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-violet-600/30 text-violet-200 border border-violet-500/40'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {getCategoryIcon(cat.icon)}
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Studio Interactive Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* 1. Target Business Goal */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Target Business Objective
                  </div>
                  <div className="p-3 rounded-xl bg-[#060A14] border border-slate-800/80 text-xs sm:text-sm text-slate-200 font-mono">
                    {activeCategory.sampleGoal}
                  </div>
                </div>

                {/* 2. Structured System Instructions */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-violet-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      Engineered System Instructions & Rails
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {activeCategory.promptPreview.role}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#060A14] border border-violet-500/20 font-mono text-xs space-y-1.5 text-slate-300">
                    {activeCategory.promptPreview.instructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-violet-400 select-none">[{i + 1}]</span>
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Deterministic Output Schema */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Guaranteed Output Schema (Zero Hallucination)
                    </span>
                    <button
                      onClick={handleCopySchema}
                      className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#040711] border border-slate-800 font-mono text-xs text-emerald-300/90 overflow-x-auto">
                    <pre className="whitespace-pre">{activeCategory.promptPreview.outputSchema}</pre>
                  </div>
                </div>

                {/* Studio Footer Bar */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Want this engineered for your systems?
                  </div>
                  <button
                    onClick={() => handleRequestPrompt(activeCategory.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Prompt for {activeCategory.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
