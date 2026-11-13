import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { BRAND_CONFIG } from '../data/brandConfig';
import { WHATSAPP_TEMPLATES, openWhatsApp } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'solutions', 'custom-ai', 'tools', 'products', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkCta = () => {
    openWhatsApp(WHATSAPP_TEMPLATES.GENERAL);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060A14]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group transition-transform active:scale-95"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A1020]/70 border border-white/[0.07] px-4 py-1.5 rounded-full backdrop-blur-md">
            {BRAND_CONFIG.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600/30 border border-blue-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="small"
              onClick={handleTalkCta}
              icon={ArrowUpRight}
              iconPosition="right"
            >
              {BRAND_CONFIG.cta.primary}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0E172E] border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#070B14]/98 border-b border-slate-800 backdrop-blur-xl px-5 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {BRAND_CONFIG.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? 'text-white bg-blue-600/25 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <Button
                variant="primary"
                onClick={handleTalkCta}
                icon={MessageSquare}
                iconPosition="left"
                className="w-full justify-center"
              >
                {BRAND_CONFIG.cta.primary} (WhatsApp)
              </Button>
              <div className="text-center text-xs text-slate-400 font-mono mt-1">
                {BRAND_CONFIG.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
