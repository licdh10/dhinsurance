import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          dark 
            ? 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30' 
            : 'bg-brand-royal/10 text-brand-royal border border-brand-royal/20'
        }`}>
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
        dark ? 'text-white' : 'text-brand-navy'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
