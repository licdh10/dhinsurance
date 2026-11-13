import React from 'react';
import { 
  Landmark, 
  UserCheck, 
  Banknote, 
  SendHorizontal, 
  HelpCircle, 
  Home, 
  Coins, 
  Car, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Fingerprint,
  CreditCard,
  Building
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { BOIBadge } from '../components/common/BOIBadge';
import { ServiceCard } from '../components/common/ServiceCard';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Banking = () => {
  const { contacts, bankingCSP, services, disclaimers } = businessConfig;

  const iconMap = {
    UserCheck,
    Banknote,
    SendHorizontal,
    HelpCircle,
    Home,
    Coins,
    Car,
  };

  return (
    <>
      <SEO
        title="Bank of India CSP in Pipodara | Kiosk ID: 11621960 | Account Opening &amp; AePS"
        description="Official Bank of India Customer Service Point (CSP Kiosk ID: 11621960, Palod Branch Code: 002757) in Pipodara, Surat. Instant biometric account opening, cash withdrawal, and money transfer."
        path="/banking"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>Authorized Banking Correspondent</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Bank of India Customer Service Point (CSP)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Fast, secure, and hassle-free banking services right in your neighbourhood in Pipodara, Surat.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-navy px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:bg-brand-yellowHover transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Banking Assistance</span>
            </a>
            <a
              href={getWhatsAppLink('Bank of India CSP Services')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Banking Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Kiosk Credentials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BOIBadge />
        </div>
      </section>

      {/* CSP Services Catalogue Grid */}
      <section className="py-16 bg-brand-lightGrey border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Authorized Banking Services"
            title="Complete Kiosk Banking Facilities"
            subtitle="All transactions are authenticated via official Bank of India biometric or PIN encryption protocols."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.bankingServices.map((svc) => {
              const IconComp = iconMap[svc.icon] || Landmark;
              return (
                <ServiceCard
                  key={svc.id}
                  title={svc.title}
                  desc={svc.desc}
                  features={svc.features}
                  icon={IconComp}
                  serviceNameForEnquiry={`${svc.title} (Bank of India CSP)`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Authentication Workflow */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Safe, Biometric &amp; Real-Time Transactions"
            subtitle="Experience effortless banking in 3 straightforward steps with zero paperwork fuss."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-lightGrey p-7 rounded-2xl border border-slate-200 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center mx-auto mb-4 font-black text-xl">
                1
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Visit With Aadhaar or Card</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bring your 12-digit Aadhaar number or any bank debit card along with your registered mobile phone.
              </p>
            </div>

            <div className="bg-brand-lightGrey p-7 rounded-2xl border border-slate-200 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-royal text-brand-yellow flex items-center justify-center mx-auto mb-4 font-black text-xl">
                2
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Biometric Fingerprint Scan</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Verify identity using our certified UIDAI &amp; Bank of India biometric scanner. No signature or manual form required.
              </p>
            </div>

            <div className="bg-brand-lightGrey p-7 rounded-2xl border border-slate-200 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center mx-auto mb-4 font-black text-xl">
                3
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Instant Receipt &amp; SMS</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your account is credited or cash is dispensed instantly, accompanied by an official printed receipt and bank SMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Authorization Disclaimer */}
      <section className="py-10 bg-brand-lightGrey border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-slate-700 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-brand-navy text-sm">
              <ShieldCheck className="w-5 h-5 text-brand-royal" />
              <span>Official Banking Correspondent Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              {disclaimers.banking}
            </p>
            <p className="text-slate-500 text-xs pt-1">
              Bank of India trademarks and logos are the property of Bank of India and are displayed strictly pursuant to authorized CSP operations under Palod Branch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
