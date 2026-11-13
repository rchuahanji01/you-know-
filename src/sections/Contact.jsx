import React, { useState } from 'react';
import {
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Send,
  Workflow,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { BRAND_CONFIG } from '../data/brandConfig';
import {
  WHATSAPP_PHONE,
  WHATSAPP_RAW_NUMBER,
  WHATSAPP_TEMPLATES,
  getWhatsAppUrl,
  openWhatsApp,
} from '../utils/whatsapp';

export default function Contact() {
  const topics = [
    {
      id: 'general',
      label: 'General Inquiry',
      message: WHATSAPP_TEMPLATES.GENERAL,
    },
    {
      id: 'prompt',
      label: 'Custom AI Prompt',
      message: WHATSAPP_TEMPLATES.PROMPT,
    },
    {
      id: 'automation',
      label: 'Business Automation',
      message: WHATSAPP_TEMPLATES.AUTOMATION,
    },
    {
      id: 'treasury',
      label: 'Treasury & Accounts',
      message: WHATSAPP_TEMPLATES.TREASURY,
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [customNote, setCustomNote] = useState('');

  const handleLaunchWhatsApp = () => {
    let finalMessage = selectedTopic.message;
    if (customNote.trim()) {
      finalMessage = `${selectedTopic.message} Context: ${customNote.trim()}`;
    }
    openWhatsApp(finalMessage);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#060A14] overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/15 via-emerald-600/10 to-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Engineering Channel"
          badgeVariant="emerald"
          title="Have a Process"
          highlight="Worth Automating?"
          description="Tell us what you're trying to build. Let's explore how technology can make it simpler."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Main WhatsApp Interactive Card */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#0E172E] via-[#0A1020] to-[#060A14] border border-blue-500/30 shadow-2xl shadow-blue-950/40 relative overflow-hidden">
            {/* Top accent light */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-500" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Direct WhatsApp Details */}
              <div className="md:col-span-5 space-y-5 text-left">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="emerald" dot size="small">
                    <span>Direct WhatsApp Connection</span>
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Instant Communication
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Skip lengthy ticket queues. Connect directly with our engineering and solution design team on WhatsApp.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#060A14] border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    Official WhatsApp Line
                  </div>
                  <div className="text-lg font-mono font-bold text-emerald-400 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 flex-shrink-0" />
                    <span>{WHATSAPP_PHONE}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Direct chat • Fast response
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>No automated spam robots — real human review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>NDA & confidentiality respected</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pre-configured Topic Builder */}
              <div className="md:col-span-7 bg-[#060A14]/90 p-6 rounded-2xl border border-slate-800 space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                    1. Select Discussion Topic
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {topics.map((t) => {
                      const isSelected = selectedTopic.id === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`text-xs font-medium px-3.5 py-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/50 shadow-sm'
                              : 'bg-slate-800/40 text-slate-400 border-slate-700/60 hover:text-slate-200 hover:bg-slate-800/70'
                          }`}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                    2. Add Specific Detail (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Briefly describe your process, tool, or document type..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1020] border border-slate-700/70 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-colors resize-none placeholder:text-slate-600 font-sans"
                  />
                </div>

                <div className="p-3 rounded-xl bg-[#0A1020]/80 border border-slate-800 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold">Message preview: </span>
                  <span className="text-slate-300">
                    "{selectedTopic.message}
                    {customNote.trim() ? ` Context: ${customNote.trim()}` : ''}"
                  </span>
                </div>

                {/* Submit to WhatsApp Button */}
                <Button
                  variant="whatsapp"
                  size="large"
                  onClick={handleLaunchWhatsApp}
                  icon={ArrowUpRight}
                  iconPosition="right"
                  className="w-full justify-center"
                >
                  Chat With Us on WhatsApp
                </Button>

                {/* Extensible Future Form Notice */}
                <div className="text-[11px] text-center text-slate-400 font-mono">
                  Dedicated enterprise email portal arriving in future update.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
