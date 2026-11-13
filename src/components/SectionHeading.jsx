import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeVariant = 'blue',
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-4 flex ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
