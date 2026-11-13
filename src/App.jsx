import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import PromptEngineering from './sections/PromptEngineering';
import AutomationTools from './sections/AutomationTools';
import Ecosystem from './sections/Ecosystem';
import HowWeWork from './sections/HowWeWork';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { WHATSAPP_TEMPLATES, openWhatsApp } from './utils/whatsapp';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFloatingWhatsApp = () => {
    openWhatsApp(WHATSAPP_TEMPLATES.GENERAL);
  };

  return (
    <div className="min-h-screen bg-[#060A14] text-slate-100 flex flex-col relative selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <PromptEngineering />
        <AutomationTools />
        <Ecosystem />
        <HowWeWork />
        <AboutUs />
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#0E172E]/90 hover:bg-[#142247] text-slate-300 hover:text-white border border-slate-700/80 shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Persistent Floating WhatsApp Quick Button */}
        <button
          onClick={handleFloatingWhatsApp}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all duration-300 active:scale-95 cursor-pointer border border-emerald-400/30"
          aria-label="Direct WhatsApp Contact"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
