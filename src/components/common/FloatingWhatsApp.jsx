import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppLink, businessConfig } from '../../config/businessConfig';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Interactive Tooltip Prompt */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] text-xs relative animate-fade-in transition-all">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <p className="font-bold text-brand-navy">Instant Assistance</p>
          </div>
          <p className="text-slate-600 text-[11px] leading-snug">
            Need insurance quotes, BOI banking info, or document help? Chat directly with us!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact DH Insurance on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/80 hover:ring-[#25D366]/30"
      >
        {/* Glow rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-pulse-subtle pointer-events-none"></span>
        <MessageSquare className="w-7 h-7 fill-white relative z-10 transition-transform group-hover:rotate-6" />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-yellow rounded-full border-2 border-white z-20"></span>
      </a>

    </div>
  );
};

export default FloatingWhatsApp;
