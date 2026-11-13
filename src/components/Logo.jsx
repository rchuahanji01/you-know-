import React from 'react';

export default function Logo({ size = 'default', showWordmark = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconSize = isLarge ? 'w-10 h-10' : isSmall ? 'w-7 h-7' : 'w-8 h-8';
  const textSize = isLarge ? 'text-2xl' : isSmall ? 'text-lg' : 'text-xl';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric YK Emblem */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-cyan-500/10 blur-sm" />
        <div className="relative w-full h-full rounded-xl bg-[#0E172E] border border-blue-500/30 flex items-center justify-center p-1.5 shadow-inner">
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="ykGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Geometric YK monogram */}
            <path
              d="M14 14 L21 24 V34"
              stroke="url(#ykGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 14 L21 24"
              stroke="url(#ykGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 16 L25 25 L34 34"
              stroke="url(#ykGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="21" cy="24" r="2.5" fill="#00D2FF" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className={`font-bold tracking-tight text-white flex items-center gap-1.5 ${textSize}`}>
            <span>YouKnow</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent font-extrabold">
              Finance
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
            Enterprise Tech
          </span>
        </div>
      )}
    </div>
  );
}
