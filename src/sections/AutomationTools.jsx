import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Layers,
  ArrowRight,
  Clock,
  Sparkles,
  MessageSquare,
  Search,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { TOOLS_DATA, TOOL_CATEGORIES } from '../data/toolsData';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

export default function AutomationTools() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = useMemo(() => {
    if (selectedCategory === 'All') return TOOLS_DATA;
    return TOOLS_DATA.filter((tool) => tool.category === selectedCategory);
  }, [selectedCategory]);

  const handleRequestAccess = (tool) => {
    openWhatsApp(WHATSAPP_TEMPLATES.TOOL_ACCESS(tool.name));
  };

  return (
    <section id="tools" className="relative py-20 sm:py-28 bg-[#060A14]">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Automation Utilities"
          badgeVariant="blue"
          title="Small Tools."
          highlight="Big Operational Impact."
          description="A specialized collection of purpose-built micro-applications and software utilities designed to eliminate manual bottlenecks in financial workflows."
        />

        {/* Category Filters Bar */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {TOOL_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs font-medium px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-400/40'
                    : 'bg-[#0E172E]/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isInDev = tool.status === 'In Development';
            return (
              <div
                key={tool.id}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#0E172E]/90 to-[#0A1020]/80 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {tool.category}
                    </span>
                    <Badge
                      variant={isInDev ? 'blue' : 'violet'}
                      size="small"
                      dot
                    >
                      {tool.status}
                    </Badge>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <span className="text-[10px] font-mono text-slate-400 font-normal">
                      {tool.version}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Capability pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tool.capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleRequestAccess(tool)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-500/20 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Request Access
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extensibility note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            Have a custom workflow utility you need engineered?{' '}
            <button
              onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.AUTOMATION)}
              className="text-blue-400 hover:underline cursor-pointer font-semibold ml-1"
            >
              Request a custom automation tool &rarr;
            </button>
          </p>
        </div>
      </div>

      {/* Tool Specifications Modal */}
      {selectedTool && (
        <Modal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          title={selectedTool.name}
          subtitle={`${selectedTool.category} • ${selectedTool.status}`}
        >
          <div className="space-y-5">
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
              {selectedTool.description}
            </p>

            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#060A14] border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-400">Build Status:</span>
                <span className="block text-white font-semibold mt-0.5">{selectedTool.status}</span>
              </div>
              <div>
                <span className="text-slate-400">Target ETA:</span>
                <span className="block text-blue-400 font-semibold mt-0.5">{selectedTool.eta}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2.5">
                Technical Capabilities
              </h4>
              <div className="space-y-2">
                {selectedTool.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Join early developer and enterprise access
              </div>
              <Button
                variant="whatsapp"
                onClick={() => {
                  handleRequestAccess(selectedTool);
                  setSelectedTool(null);
                }}
                icon={MessageSquare}
                iconPosition="left"
              >
                Request Early Access
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
