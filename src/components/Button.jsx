import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer';

  const sizes = {
    small: 'text-xs px-3.5 py-1.5 gap-1.5',
    default: 'text-sm px-5 py-2.5 gap-2',
    large: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 hover:from-blue-500 hover:via-blue-400 hover:to-violet-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 border border-blue-400/30',
    secondary:
      'bg-[#0E172E]/90 hover:bg-[#142247] text-slate-100 border border-slate-700/80 hover:border-blue-500/40 hover:text-white shadow-md hover:-translate-y-0.5',
    outline:
      'bg-transparent hover:bg-blue-600/10 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500/50',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    whatsapp:
      'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 border border-emerald-400/30 font-semibold',
    violet:
      'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 border border-violet-400/30',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  const classes = `${baseClasses} ${sizes[size] || sizes.default} ${variants[variant] || variants.primary} group ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  );
}
