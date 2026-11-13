import React from 'react';
import { 
  Copy, 
  Palette, 
  Printer, 
  Sparkles, 
  Camera, 
  BookOpen, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Layers,
  Shield,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Printing = () => {
  const { contacts, services } = businessConfig;

  const iconMap = {
    Copy,
    Palette,
    Printer,
    Sparkles,
    Camera,
    BookOpen,
  };

  return (
    <>
      <SEO
        title="Xerox &amp; Digital Printing in Pipodara | Passport Photos &amp; Colour Laser Prints"
        description="High-speed Black &amp; White and Colour Xerox, digital laser printing, instant 5-minute passport size photos, lamination, and spiral binding in Pipodara, Surat."
        path="/printing"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Quality Print &amp; Document Centre
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Xerox, Colour Printing &amp; Passport Photography in Pipodara
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Equipped with commercial digital multi-function copiers, colour lasers, and instant photo studios. Send files on WhatsApp or visit us in Pipodara.
          </p>
        </div>
      </section>

      {/* Send Via WhatsApp Callout Banner */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-lightGrey rounded-2xl p-5 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy">
                  Zero Wait: Print Directly via WhatsApp!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Send your PDF, Word, Excel, or images to <strong>+91 {contacts.whatsAppNumber}</strong>. We'll have your prints ready for pickup.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppLink('Printing & Xerox File Send')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Files on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Printing Services Catalogue */}
      <section className="py-16 md:py-20 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Printing Solutions"
            title="Complete Document Reproduction &amp; Finishing"
            subtitle="Premium 75+ GSM legal papers, heavy gloss cardstocks, and thermal lamination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.printingServices.map((svc) => {
              const IconComp = iconMap[svc.icon] || Printer;
              const whatsappUrl = getWhatsAppLink(svc.title);
              const phoneUrl = getPhoneLink();

              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 hover:border-brand-royal/40 transition-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-yellow transition-colors shrink-0 mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal shrink-0 mt-0.5" />
                      <span>{svc.spec}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp Order</span>
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

      {/* Professional Equipment & Facility Showcase Gallery */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Shop Equipment &amp; Facility"
            title="Professional Equipment Infrastructure"
            subtitle="Our storefront in Pipodara is equipped with dedicated multi-function laser copiers, studio lighting, and biometric hardware for swift execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Equipment Card 1 */}
            <div className="bg-brand-lightGrey rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-royal p-6 flex flex-col justify-between text-white relative">
                <span className="bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-2.5 py-0.5 rounded-full w-max">
                  High-Speed Heavy Duty
                </span>
                <div>
                  <Printer className="w-10 h-10 text-brand-yellow mb-2" />
                  <h4 className="text-lg font-bold">Multi-Function Digital Copier</h4>
                </div>
              </div>
              <div className="p-6 space-y-2 text-xs text-slate-600 flex-1 flex flex-col justify-between">
                <p>
                  Industrial-grade monochrome laser engine delivering crisp 600 DPI output up to 45 pages per minute for legal documents and registers.
                </p>
                <div className="pt-3 border-t border-slate-200 text-brand-navy font-semibold">
                  Supports: A4, Legal, FS, Double-sided Duplex
                </div>
              </div>
            </div>

            {/* Equipment Card 2 */}
            <div className="bg-brand-lightGrey rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <div className="h-48 bg-gradient-to-br from-brand-royal to-[#2085D8] p-6 flex flex-col justify-between text-white relative">
                <span className="bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-2.5 py-0.5 rounded-full w-max">
                  Vibrant Colour Match
                </span>
                <div>
                  <Palette className="w-10 h-10 text-brand-yellow mb-2" />
                  <h4 className="text-lg font-bold">Digital Colour Laser Station</h4>
                </div>
              </div>
              <div className="p-6 space-y-2 text-xs text-slate-600 flex-1 flex flex-col justify-between">
                <p>
                  Precision micro-toner laser printer delivering vivid colour reproduction for certificates, maps, identity cards, and promotional flyers.
                </p>
                <div className="pt-3 border-t border-slate-200 text-brand-navy font-semibold">
                  Supports: Glossy Photo Paper, 100-250 GSM Cardstock
                </div>
              </div>
            </div>

            {/* Equipment Card 3 */}
            <div className="bg-brand-lightGrey rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <div className="h-48 bg-gradient-to-br from-brand-navy via-brand-darkBlue to-[#1769AA] p-6 flex flex-col justify-between text-white relative">
                <span className="bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-2.5 py-0.5 rounded-full w-max">
                  5-Min Delivery
                </span>
                <div>
                  <Camera className="w-10 h-10 text-brand-yellow mb-2" />
                  <h4 className="text-lg font-bold">Instant Photo &amp; Lamination Studio</h4>
                </div>
              </div>
              <div className="p-6 space-y-2 text-xs text-slate-600 flex-1 flex flex-col justify-between">
                <p>
                  Studio flash backdrop setup for compliant passport and visa photos, paired with thermal pouch laminators and heavy-gauge spiral binders.
                </p>
                <div className="pt-3 border-t border-slate-200 text-brand-navy font-semibold">
                  Standards: Indian Passport, Visa, PAN &amp; Driving Licence
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Printing;
