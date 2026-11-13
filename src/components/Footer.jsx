import React from 'react';
import Logo from './Logo';
import { ArrowUpRight, MessageSquare, ShieldCheck, Cpu } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

function InstagramIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSolutionClick = (templateKey) => {
    openWhatsApp(WHATSAPP_TEMPLATES[templateKey] || WHATSAPP_TEMPLATES.GENERAL);
  };

  return (
    <footer className="relative bg-[#040711] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="large" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {BRAND_CONFIG.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium hover:bg-emerald-500/20 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {BRAND_CONFIG.phone}</span>
              </button>
              <a
                href={BRAND_CONFIG.instagramPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/60 text-xs font-medium hover:text-white hover:border-violet-500/40 transition-colors"
                title="Instagram (Configured profile placeholder)"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{BRAND_CONFIG.handle}</span>
              </a>
            </div>
            <div className="text-xs text-slate-400 italic">
              "{BRAND_CONFIG.tagline}"
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {BRAND_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleSolutionClick('AUTOMATION')}
                  className="hover:text-blue-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Financial Automation</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick('PROMPT')}
                  className="hover:text-violet-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Custom AI Solutions</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick('AUTOMATION')}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Business Workflows</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <a
                  href="#tools"
                  onClick={(e) => handleNavClick(e, '#tools')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Automation Utilities
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem / Products Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Planned Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleSolutionClick('TREASURY')}
                  className="hover:text-blue-400 transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>YouKnow Treasury</span>
                  <span className="text-[10px] font-mono text-slate-400">R&D</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick('ACCOUNTS')}
                  className="hover:text-violet-400 transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>YouKnow Accounts</span>
                  <span className="text-[10px] font-mono text-slate-400">R&D</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick('PAYMENTS')}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>YouKnow Payments</span>
                  <span className="text-[10px] font-mono text-slate-400">Design</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick('INTELLIGENCE')}
                  className="hover:text-purple-400 transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>YouKnow Intelligence</span>
                  <span className="text-[10px] font-mono text-slate-400">R&D</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} {BRAND_CONFIG.name}. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline font-mono text-slate-400">International Enterprise Software</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="font-mono text-blue-400/90">{BRAND_CONFIG.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
