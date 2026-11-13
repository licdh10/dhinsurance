import React from 'react';
import { 
  CreditCard, 
  Fingerprint, 
  Vote, 
  FileSpreadsheet, 
  Building2, 
  HardHat, 
  UtensilsCrossed, 
  Train, 
  Layers, 
  Landmark, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const DigitalServices = () => {
  const { contacts, services, disclaimers } = businessConfig;

  const iconMap = {
    CreditCard,
    Fingerprint,
    Vote,
    FileSpreadsheet,
    Building2,
    HardHat,
    UtensilsCrossed,
    Train,
    Layers,
    Landmark,
  };

  return (
    <>
      <SEO
        title="Citizen Digital Services in Pipodara | PAN Card, ITR, Udyam MSME &amp; PF"
        description="Fast, reliable citizen documentation assistance in Pipodara, Surat: PAN Card applications, Aadhaar assistance, ITR return filing, Udyam MSME, E-Shram, and FSSAI licenses."
        path="/digital-services"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Digital Citizen Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Government &amp; Digital Online Services in Pipodara
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Eliminate paperwork headaches. We help you apply for PAN cards, file Income Tax returns, register MSME businesses, and manage EPFO claims with accurate documentation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Catalogue of Services"
            title="Citizen &amp; Business Digital Applications"
            subtitle="Accurate form filling, document scanning, and government portal tracking for individuals and traders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.digitalServices.map((item) => {
              const IconComp = iconMap[item.icon] || CreditCard;
              const whatsappUrl = getWhatsAppLink(item.title);
              const phoneUrl = getPhoneLink();

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 hover:border-brand-royal/40 transition-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon & Turnaround Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-yellow transition-colors shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        <Clock className="w-3 h-3 text-brand-royal" />
                        <span>{item.processingTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href={phoneUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy py-2.5 px-3.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-royal group-hover:text-brand-yellow" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Document Submission Banner */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-brand-royal text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-card">
            <div className="space-y-3 text-center lg:text-left">
              <span className="bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                Zero Visit Convenience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Share Documents Directly on WhatsApp
              </h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Need to apply for PAN correction, ITR return, or Udyam certificate? Send photos of your documents to our official WhatsApp number for swift verification and application submission.
              </p>
            </div>

            <a
              href={getWhatsAppLink('Digital Services Document Submission')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-8 rounded-xl font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Send Documents on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Official Eligibility Disclaimer */}
      <section className="py-8 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-1">Government Schemes &amp; Documentation Notice:</p>
              <p>{disclaimers.digital}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalServices;
