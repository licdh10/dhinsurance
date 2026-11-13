import React from 'react';
import { 
  HeartHandshake, 
  Home, 
  Coins, 
  Car, 
  UserCheck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Loans = () => {
  const { contacts, services, disclaimers } = businessConfig;

  const iconMap = {
    'loan-home': Home,
    'loan-gold': Coins,
    'loan-car': Car,
    'loan-personal': UserCheck,
  };

  return (
    <>
      <SEO
        title="Loan Assistance in Pipodara | Home, Gold, Car &amp; Personal Loans"
        description="Professional loan documentation and liaison assistance in Pipodara, Surat for Home Loans, Gold Loans, Car Loans, and Personal Loans with leading banks."
        path="/loans"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Financial Facilitation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Transparent Loan Documentation &amp; Assistance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We prepare, audit, and organize your loan files for Home, Gold, Car, and Personal loans to facilitate smooth approval through authorized banking channels.
          </p>
        </div>
      </section>

      {/* Loan Service Cards Grid */}
      <section className="py-16 md:py-20 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.loanServices.map((loan) => {
              const IconComp = iconMap[loan.id] || HeartHandshake;
              const whatsappUrl = getWhatsAppLink(`${loan.title} Assistance`);
              const phoneUrl = getPhoneLink();

              return (
                <div
                  key={loan.id}
                  className="bg-white rounded-3xl p-7 sm:p-8 shadow-card border border-slate-200/80 hover:border-brand-royal/40 transition-card flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-brand-royal/10 text-brand-royal flex items-center justify-center shrink-0">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="bg-brand-yellow/20 text-brand-navy border border-brand-yellow/40 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                        File Assistance
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-brand-navy">
                      {loan.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-royal uppercase tracking-wider mt-1">
                      {loan.tagline}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {loan.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Key Benefits &amp; Features:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {loan.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Required Documents Checklist */}
                    <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-brand-navy mb-2">
                        <FileText className="w-4 h-4 text-brand-royal" />
                        <span>Standard Documentation Checklist:</span>
                      </div>
                      <ul className="space-y-1 text-slate-600">
                        {loan.documents.map((doc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-royal"></span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl text-xs font-bold shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Loan Enquiry</span>
                    </a>

                    <a
                      href={phoneUrl}
                      className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-royal text-white py-3 px-5 rounded-xl text-xs font-bold shadow-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-brand-yellow" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Transparent Process Steps */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple Roadmap"
            title="Our 4-Step Loan File Preparation"
            subtitle="We handle the complex paperwork so your loan file is bank-ready."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-lightGrey p-6 rounded-2xl border border-slate-200">
              <span className="text-2xl font-black text-brand-royal">01</span>
              <h4 className="font-bold text-brand-navy text-base mt-2 mb-1">Profile Discussion</h4>
              <p className="text-xs text-slate-600">Assess your financial background, income documents, and funding requirement.</p>
            </div>
            <div className="bg-brand-lightGrey p-6 rounded-2xl border border-slate-200">
              <span className="text-2xl font-black text-brand-royal">02</span>
              <h4 className="font-bold text-brand-navy text-base mt-2 mb-1">Document Collation</h4>
              <p className="text-xs text-slate-600">Collect KYC, bank statements, ITR, property deeds, or gold ornament valuation details.</p>
            </div>
            <div className="bg-brand-lightGrey p-6 rounded-2xl border border-slate-200">
              <span className="text-2xl font-black text-brand-royal">03</span>
              <h4 className="font-bold text-brand-navy text-base mt-2 mb-1">File Audit &amp; Prep</h4>
              <p className="text-xs text-slate-600">Review paperwork thoroughly to prevent rejection due to minor documentation discrepancies.</p>
            </div>
            <div className="bg-brand-lightGrey p-6 rounded-2xl border border-slate-200">
              <span className="text-2xl font-black text-brand-royal">04</span>
              <h4 className="font-bold text-brand-navy text-base mt-2 mb-1">Bank Liaison</h4>
              <p className="text-xs text-slate-600">Coordinate file submission with authorized branch managers and track updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-8 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-1">Loan Transparency &amp; Non-Discretionary Notice:</p>
              <p>{disclaimers.loans}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loans;
