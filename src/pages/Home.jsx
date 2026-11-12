import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Landmark, 
  HeartHandshake, 
  FileText, 
  Printer, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Star, 
  Shield, 
  CreditCard,
  Users,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { BOIBadge } from '../components/common/BOIBadge';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ContactForm } from '../components/common/ContactForm';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Home = () => {
  const { contacts, bankingCSP, services, testimonials, location, openingHours } = businessConfig;

  return (
    <>
      <SEO
        title="Your Trusted Insurance &amp; Digital Service Centre in Olpad"
        description="Insurance, Bank of India CSP (Kiosk ID: 11621960), Loan Assistance, and Citizen Digital Services Under One Roof in Olpad, Surat."
        path="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#12386E] to-brand-royal text-white overflow-hidden py-16 md:py-24">
        {/* Abstract Background Visual Ornaments */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-royal/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-brand-yellow">
                <ShieldCheck className="w-4 h-4" />
                <span>Authorized Bank of India CSP (Kiosk ID: 11621960)</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Your Trusted Insurance &amp; <span className="text-brand-yellow">Digital Service</span> Centre
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Insurance, Banking, Loan Assistance and Digital Services Under One Roof in Olpad, Surat.
              </p>

              {/* CTAs: Call Now, WhatsApp, Explore Services */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellowHover text-brand-navy px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-brand-navy" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Feature Highlights Ticker */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Instant Bike / Car Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>BOI Biometric Account e-KYC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Dedicated LIC Agent</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card / Visual Badge Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-4"
            >
              {/* BOI Official Kiosk Spotlight */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-5">
                  <div className="flex items-center gap-2.5">
                    <Landmark className="w-6 h-6 text-brand-yellow" />
                    <span className="font-bold text-sm tracking-wide text-white uppercase">Official Banking Kiosk</span>
                  </div>
                  <span className="bg-[#25D366] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full animate-pulse">
                    ACTIVE CSP
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="text-xs text-blue-200">Bank Partner:</span>
                    <span className="text-sm font-bold text-white">{bankingCSP.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="text-xs text-blue-200">Kiosk ID:</span>
                    <span className="text-base font-extrabold text-brand-yellow">{bankingCSP.kioskId}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="text-xs text-blue-200">Branch &amp; Code:</span>
                    <span className="text-sm font-bold text-white">{bankingCSP.branch} ({bankingCSP.branchCode})</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="text-xs text-blue-200">Location:</span>
                    <span className="text-sm font-bold text-white">{location.locality}, Surat, Gujarat</span>
                  </div>
                </div>

                <Link
                  to="/banking"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellowHover text-brand-navy py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  <span>View All CSP Banking Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* LIC Agent Direct Banner */}
              <div className="bg-brand-darkBlue/80 backdrop-blur-md rounded-2xl p-4 border border-brand-royal/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-royal flex items-center justify-center text-brand-yellow">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Authorized LIC Agent Contact</p>
                    <p className="text-sm font-bold text-white">{contacts.licAgentPhone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${contacts.licAgentPhoneRaw}`}
                  className="bg-white/10 hover:bg-white/20 text-brand-yellow px-3 py-1.5 rounded-lg text-xs font-bold border border-brand-yellow/40 transition-colors"
                >
                  Call LIC Agent
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES SECTION */}
      <section id="services-overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Complete Portfolio"
            title="Comprehensive Services Under One Roof"
            subtitle="From authorized banking correspondence and insurance underwriting guidance to government documentation and digital xerox printing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Insurance */}
            <div className="bg-brand-lightGrey rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Insurance Services</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Full coverage for your family and assets: Life (LIC), Term insurance, Cashless Health, Personal Accident, and instant Bike &amp; Car insurance.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Instant Motor Insurance with NCB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Family Floater Health Plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Tax saving under 80C &amp; 80D</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/insurance"
                className="inline-flex items-center justify-between text-sm font-bold text-brand-royal group-hover:text-brand-navy transition-colors pt-3 border-t border-slate-200"
              >
                <span>Explore Insurance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Banking & CSP */}
            <div className="bg-brand-lightGrey rounded-2xl p-7 border border-brand-royal/30 shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between group relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-brand-navy text-brand-yellow text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                BOI CSP
              </span>
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-royal text-brand-yellow flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Bank of India CSP</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Authorized Customer Service Point (Kiosk ID: 11621960). Quick savings account opening, AePS biometric cash withdrawal, and nationwide money transfers.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Biometric e-KYC Account Opening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>AePS &amp; Micro-ATM Cash Withdrawal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Palod Branch Code 002757</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/banking"
                className="inline-flex items-center justify-between text-sm font-bold text-brand-royal group-hover:text-brand-navy transition-colors pt-3 border-t border-slate-200"
              >
                <span>Explore CSP Banking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Loan Services */}
            <div className="bg-brand-lightGrey rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Loan Assistance</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Hassle-free documentation and file preparation assistance for Home Loans, Gold Loans, Vehicle Loans, and Personal Loans with transparent guidance.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Home Loan &amp; PMAY Guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Gold Loan Coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Pre-submission Paperwork Audit</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/loans"
                className="inline-flex items-center justify-between text-sm font-bold text-brand-royal group-hover:text-brand-navy transition-colors pt-3 border-t border-slate-200"
              >
                <span>Explore Loan Support</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4: Digital Services */}
            <div className="bg-brand-lightGrey rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-royal text-brand-yellow flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Citizen Digital Services</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Prompt digital assistance for PAN Cards, Aadhaar services, Voter ID, ITR Filing, Udyam MSME, E-Shram, FSSAI licences, and PF claim withdrawals.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>New PAN &amp; Correction Assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Income Tax Return (ITR) Filing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>MSME Udyam Certificate</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/digital-services"
                className="inline-flex items-center justify-between text-sm font-bold text-brand-royal group-hover:text-brand-navy transition-colors pt-3 border-t border-slate-200"
              >
                <span>Explore Digital Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 5: Xerox & Printing */}
            <div className="bg-brand-lightGrey rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Xerox &amp; Quality Printing</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  High-speed monochrome &amp; colour photocopies, laser prints, instant 5-minute passport photos, document lamination, and spiral binding.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>B&amp;W &amp; Laser Colour Xerox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>5-Min Passport Size Photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Send on WhatsApp &amp; Collect</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/printing"
                className="inline-flex items-center justify-between text-sm font-bold text-brand-royal group-hover:text-brand-navy transition-colors pt-3 border-t border-slate-200"
              >
                <span>Explore Printing Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 6: Quick Consultation Card */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-royal text-white rounded-2xl p-7 shadow-card flex flex-col justify-between">
              <div>
                <span className="inline-block bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
                  Need Quick Advice?
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Speak Directly With Us</h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                  Have questions regarding your policy renewal, bank account opening, or document checklist? Connect directly via phone or WhatsApp.
                </p>
                <div className="space-y-2 text-xs text-blue-100 mb-6">
                  <p>📞 Primary: <strong>{contacts.primaryPhone}</strong></p>
                  <p>📞 Secondary: <strong>{contacts.secondaryPhone}</strong></p>
                  <p>🛡️ LIC Agent: <strong>{contacts.licAgentPhone}</strong></p>
                </div>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Query</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-16 md:py-24 bg-brand-lightGrey border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="Trusted Financial &amp; Digital Partner in Olpad"
            subtitle="We bridge the gap between complex banking &amp; insurance procedures and everyday citizens with speed, transparency, and personal care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Authorized BOI CSP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating officially under Bank of India Palod branch with Kiosk ID 11621960 for secure biometric financial transactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Dedicated LIC Agent</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct advisory for Life Insurance Corporation of India (LIC) policies, term plans, child plans, and claim guidance (+91 9601917955).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Fast &amp; Paperless</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant bike/car insurance issuance, biometric KYC account opening, and rapid turnaround for government applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Local Community Trust</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conveniently located in Olpad, Surat, offering genuine assistance to farmers, shopkeepers, salaried individuals, and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANKING & CSP HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BOIBadge />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.bankingServices.slice(0, 3).map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                features={item.features}
                serviceNameForEnquiry={item.title}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/banking"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-royal text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
            >
              <span>Explore All Bank of India CSP Services</span>
              <ArrowRight className="w-4 h-4 text-brand-yellow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INSURANCE HIGHLIGHTS */}
      <section className="py-16 md:py-24 bg-brand-lightGrey border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Insurance Portfolio"
            title="Shield What Matters Most"
            subtitle="Expert assistance for life, health, personal accident, and motor vehicles with hassle-free claim support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Term Insurance */}
            <ServiceCard
              title="Term Insurance"
              subtitle="Life Insurance"
              desc="Substantial life protection cover for your family's future at affordable annual premiums with critical illness riders."
              features={["Sum assured up to ₹1 Crore+", "Tax deduction under 80C", "Accidental benefit add-ons"]}
              badge="Top Choice"
              serviceNameForEnquiry="Term Insurance"
            />
            {/* Health Insurance */}
            <ServiceCard
              title="Health Insurance (Mediclaim)"
              subtitle="Health Insurance"
              desc="Cashless hospitalization across network hospitals in Gujarat and nationwide, covering surgeries, ICU, and day care."
              features={["Cashless claim settlement", "No room rent cap options", "Tax benefit under Section 80D"]}
              badge="Essential"
              serviceNameForEnquiry="Health Insurance"
            />
            {/* Vehicle Insurance */}
            <ServiceCard
              title="Bike &amp; Car Insurance"
              subtitle="Vehicle Insurance"
              desc="Instant paperless policy issuance in 5 minutes with maximum No Claim Bonus protection and zero-depreciation coverage."
              features={["Instant policy on WhatsApp", "Zero-depreciation add-on", "Cashless garage network"]}
              badge="5-Min Issue"
              serviceNameForEnquiry="Vehicle Insurance"
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/insurance"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-royal text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
            >
              <span>View Full Insurance Catalogue</span>
              <ArrowRight className="w-4 h-4 text-brand-yellow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="What Our Customers Say"
            subtitle="Real experiences from residents and business owners in Olpad and Surat."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-brand-lightGrey p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-brand-yellow mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-brand-navy">{t.name}</p>
                    <p className="text-slate-500">{t.location}</p>
                  </div>
                  <span className="bg-brand-royal/10 text-brand-royal font-semibold px-2 py-0.5 rounded text-[11px]">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-brand-lightGrey border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clarifications &amp; Help"
            title="Frequently Asked Questions"
            subtitle="Straightforward answers about our banking CSP, insurance services, loans, and digital applications."
          />

          <FAQAccordion />
        </div>
      </section>

      {/* 8. CONTACT & LOCATION SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Reach Out"
                title="Visit or Contact Us Today"
                subtitle="We are conveniently located in Olpad to attend to all your financial and document needs."
                centered={false}
              />

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 bg-brand-lightGrey p-4 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy">Phone Inquiries</p>
                    <p className="mt-0.5">{contacts.primaryPhone} / {contacts.secondaryPhone}</p>
                    <p className="text-xs text-brand-royal font-semibold mt-1">LIC Agent: {contacts.licAgentPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-lightGrey p-4 rounded-xl border border-slate-200">
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy">WhatsApp Helpline</p>
                    <p className="mt-0.5">+91 {contacts.whatsAppNumber}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Send documents for fast quote or xerox</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-lightGrey p-4 rounded-xl border border-slate-200">
                  <Clock className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy">Operating Hours</p>
                    <p className="mt-0.5">{openingHours.weekdays}</p>
                    <p className="text-xs text-slate-500">{openingHours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-royal hover:text-brand-navy font-bold text-sm"
                >
                  <span>View Full Contact Page &amp; Map</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
