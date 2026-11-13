import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Landmark, 
  CheckCircle2, 
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { BOIBadge } from '../components/common/BOIBadge';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const About = () => {
  const { contacts, bankingCSP, location, openingHours } = businessConfig;

  return (
    <>
      <SEO
        title="About Us | Dedicated Financial &amp; Digital Service Centre in Pipodara"
        description="Learn about DH Insurance &amp; Digital Service in Pipodara, Surat. Authorized Bank of India CSP (Kiosk ID: 11621960), dedicated LIC advisory, and community citizen support."
        path="/about"
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            About Our Business
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Committed to Honest Service &amp; Community Empowerment
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Providing accessible banking, reliable insurance advisory, loan documentation, and citizen digital services under one friendly roof in Pipodara, Surat.
          </p>
        </div>
      </section>

      {/* Storefront Visual & Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Storefront Graphic / Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-brand-navy via-brand-darkBlue to-brand-royal rounded-3xl p-8 text-white shadow-card border border-brand-royal/40 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-navy px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pipodara, Surat, Gujarat</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    DH Insurance &amp; Digital Service Centre
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    A welcoming storefront facility equipped with high-speed digital infrastructure, biometric banking terminals, and laser printing capabilities.
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/15 space-y-2 text-xs text-blue-100">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                    <span>Bank of India CSP Kiosk ID: <strong>{bankingCSP.kioskId}</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                    <span>Palod Branch Code: <strong>{bankingCSP.branchCode}</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                    <span>Dedicated LIC Agent: <strong>{contacts.licAgentPhone}</strong></span>
                  </p>
                </div>

                {/* Decorative background geometry */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Verified Contact Card */}
              <div className="bg-brand-lightGrey p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-brand-navy">Customer Help Desk</p>
                  <p className="text-slate-500">{contacts.primaryPhone} | {contacts.secondaryPhone}</p>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-bold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Business Introduction Text */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Who We Are"
                title="Your Local Neighbourhood Financial &amp; Digital Bridge"
                subtitle="Founded to solve the everyday documentation and banking challenges faced by citizens and small enterprises in Pipodara and neighboring villages."
                centered={false}
              />

              <div className="text-slate-700 space-y-4 text-base leading-relaxed">
                <p>
                  <strong>DH Insurance &amp; Digital Service</strong> was established with a clear, singular purpose: to bring essential financial, banking, and government citizen services directly to the residents of Pipodara and the surrounding areas of Surat district, eliminating the need for long commutes or complicated bureaucratic delays.
                </p>
                <p>
                  As an authorized <strong>Bank of India Customer Service Point (CSP)</strong> operating under the jurisdiction of the Palod branch (Kiosk ID: 11621960), we facilitate formal financial inclusion. Local residents, farmers, shopkeepers, and students can open bank accounts with instant biometric e-KYC, withdraw or transfer money securely, and access social security schemes without standing in lengthy bank queues.
                </p>
                <p>
                  Simultaneously, our comprehensive insurance desk and certified LIC agent direct helpline provide transparent, tailored guidance for life protection, cashless health hospitalization, and instant motor vehicle insurance.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-brand-lightGrey p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Clear, Honest Advisory</h4>
                  <p className="text-xs text-slate-600">No hidden clauses or exaggerated claims. Every policy and loan requirement is explained straightforwardly.</p>
                </div>
                <div className="bg-brand-lightGrey p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Modern Equipment</h4>
                  <p className="text-xs text-slate-600">Heavy-duty digital laser printers, biometric scanners, and direct WhatsApp queues ensure immediate turnaround.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision & Commitment Grid */}
      <section className="py-16 md:py-20 bg-brand-lightGrey border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Principles"
            title="Our Mission, Vision &amp; Service Commitment"
            subtitle="The fundamental standards that drive our daily customer interactions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide accessible, transparent, and prompt financial and digital documentation services to every individual and household in Pipodara, enabling financial security and digital empowerment.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Simplify banking for every citizen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Deliver right-fit insurance policies</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-royal text-brand-yellow flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be recognized as the most dependable and customer-centric single-window service hub in the Pipodara-Surat region, synonymous with integrity, speed, and genuine community support.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Zero-error documentation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Lifelong customer relationships</span>
                </li>
              </ul>
            </div>

            {/* Service Commitment */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Our Service Commitment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We promise clear communication, strict confidentiality of your personal details, respect for your time, and diligent follow-through for every claim or application entrusted to us.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Confidentiality &amp; data privacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                  <span>Honest status updates at each step</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">
                Support Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Assist You Every Step of the Way
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Whether you walk into our centre in Pipodara or message us on WhatsApp, we take the time to understand your specific requirement, review your documents for errors before submission, and provide transparent updates until your work is finished.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-navy px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-brand-yellowHover transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {contacts.primaryPhone}</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Banking Notice */}
      <section className="py-12 bg-brand-lightGrey border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BOIBadge />
        </div>
      </section>
    </>
  );
};

export default About;
