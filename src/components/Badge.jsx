import React from 'react';

export default function Badge({
  children,
  variant = 'blue',
  size = 'default',
  dot = false,
  className = '',
}) {
  const variants = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
    slate: 'bg-slate-800/60 text-slate-300 border-slate-700/60',
  };

  const sizes = {
    small: 'text-[11px] px-2 py-0.5 font-medium',
    default: 'text-xs px-2.5 py-1 font-medium',
    large: 'text-sm px-3.5 py-1.5 font-medium',
  };

  const dotColors = {
    blue: 'bg-blue-400',
    violet: 'bg-violet-400',
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    slate: 'bg-slate-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-200 ${
        variants[variant] || variants.blue
      } ${sizes[size] || sizes.default} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant] || 'bg-blue-400'}`} />
      )}
      {children}
    </span>
  );
}
