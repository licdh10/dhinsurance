import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export const FAQAccordion = ({ items = businessConfig.faqs }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-royal/40 shadow-card'
                : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-royal' : 'text-slate-400'}`} />
                <span className={`text-base sm:text-lg font-bold ${isOpen ? 'text-brand-navy' : 'text-slate-800'}`}>
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-brand-royal' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
