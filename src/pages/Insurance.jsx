import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Activity, 
  Car, 
  Bike, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Shield, 
  Users, 
  Clock, 
  Award,
  Filter
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Insurance = () => {
  const { contacts, services, disclaimers } = businessConfig;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Life Insurance', 'Health Insurance', 'Accident Insurance', 'Vehicle Insurance'];

  const filteredCategories = activeCategory === 'All'
    ? services.insuranceCategories
    : services.insuranceCategories.filter(cat => cat.category === activeCategory);

  return (
    <>
      <SEO
        title="Insurance Services in Pipodara | Life, Health, Vehicle &amp; Term Insurance"
        description="Comprehensive insurance advisory in Pipodara, Surat: Life &amp; Term Insurance, Cashless Health Floater, Personal Accident, and instant 5-minute Bike and Car insurance."
        path="/insurance"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Protect What You Cherish
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Complete Insurance Solutions in Pipodara
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From life protection and cashless health hospitalization to instant 5-minute two-wheeler and four-wheeler insurance.
          </p>

          {/* Dedicated LIC Agent Strip */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-brand-royal/40 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-brand-royal/60 text-xs sm:text-sm">
            <Shield className="w-4 h-4 text-brand-yellow" />
            <span className="text-blue-100">Authorized LIC Agent Direct Contact:</span>
            <a 
              href={`tel:${contacts.licAgentPhoneRaw}`}
              className="text-brand-yellow font-extrabold hover:underline"
            >
              {contacts.licAgentPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-brand-yellow shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-brand-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Portfolio Grid */}
      <section className="py-16 md:py-20 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              {/* Category Header */}
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-royal text-brand-yellow flex items-center justify-center font-bold">
                    {group.category.includes('Life') && <Shield className="w-5 h-5" />}
                    {group.category.includes('Health') && <Activity className="w-5 h-5" />}
                    {group.category.includes('Accident') && <Heart className="w-5 h-5" />}
                    {group.category.includes('Vehicle') && <Car className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                      {group.category}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {group.items.map((item) => (
                  <ServiceCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    desc={item.desc}
                    features={item.features}
                    badge={item.badge}
                    serviceNameForEnquiry={`${item.title} (${group.category})`}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Instant Vehicle Insurance Fast-Track Banner */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-royal to-brand-navy rounded-3xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-card">
            <div className="space-y-3 text-center lg:text-left">
              <span className="bg-brand-yellow text-brand-navy text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                Instant 5-Minute Renewal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Fast Bike or Car Insurance Policy?
              </h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Just send your previous policy copy and Vehicle Registration (RC) book on WhatsApp. Receive your official digitally signed insurance policy PDF immediately!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={getWhatsAppLink('Vehicle Insurance (Bike / Car)')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send RC on WhatsApp</span>
              </a>
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 py-3.5 px-6 rounded-xl font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>Call {contacts.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory Disclaimer */}
      <section className="py-8 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-1">Important Regulatory Notice:</p>
              <p>{disclaimers.insurance}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insurance;
