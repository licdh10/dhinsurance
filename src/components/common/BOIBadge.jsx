import React from 'react';
import { Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export const BOIBadge = ({ variant = 'default', showDisclaimers = true }) => {
  const { bankingCSP } = businessConfig;

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-navy to-brand-royal text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
        <Landmark className="w-3.5 h-3.5 text-brand-yellow" />
        <span>Bank of India CSP</span>
        <span className="bg-brand-yellow text-brand-navy px-1.5 py-0.5 rounded font-bold text-[10px]">
          Kiosk: {bankingCSP.kioskId}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-brand-navy via-[#143A75] to-brand-royal text-white rounded-2xl p-6 md:p-8 shadow-card border border-brand-royal/30 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-yellow border border-white/20 shrink-0">
            <Landmark className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-semibold mb-2 border border-brand-yellow/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Banking Correspondent</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {bankingCSP.bankName} Customer Service Point (CSP)
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Providing doorstep financial inclusion &amp; banking services in Pipodara.
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
          <div className="border-r border-white/10 pr-2 md:pr-4">
            <p className="text-[11px] uppercase tracking-wider text-blue-200 font-medium">Kiosk ID</p>
            <p className="text-base md:text-lg font-bold text-brand-yellow mt-0.5">{bankingCSP.kioskId}</p>
          </div>
          <div className="border-r border-white/10 px-2 md:px-4">
            <p className="text-[11px] uppercase tracking-wider text-blue-200 font-medium">Branch</p>
            <p className="text-base md:text-lg font-bold text-white mt-0.5">{bankingCSP.branch}</p>
          </div>
          <div className="pl-2 md:pl-4">
            <p className="text-[11px] uppercase tracking-wider text-blue-200 font-medium">Branch Code</p>
            <p className="text-base md:text-lg font-bold text-brand-yellow mt-0.5">{bankingCSP.branchCode}</p>
          </div>
        </div>
      </div>

      {showDisclaimers && (
        <div className="mt-5 pt-4 border-t border-white/15 flex items-start gap-2 text-xs text-blue-200/90 leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
          <p>
            {bankingCSP.authorizationNotice} All kiosk transactions are secured with biometric authentication and verified through official bank gateways.
          </p>
        </div>
      )}
    </div>
  );
};

export default BOIBadge;
