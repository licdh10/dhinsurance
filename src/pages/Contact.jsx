import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Shield, 
  Landmark, 
  ExternalLink,
  Share2,
  Mail
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/common/ContactForm';
import { BOIBadge } from '../components/common/BOIBadge';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const Contact = () => {
  const { contacts, location, openingHours, bankingCSP, socialLinks } = businessConfig;

  return (
    <>
      <SEO
        title="Contact Us | DH Insurance &amp; Digital Service in Olpad, Surat"
        description="Get in touch with DH Insurance &amp; Digital Service in Olpad, Surat. Call +91 8401377466, chat on WhatsApp, or visit our Bank of India CSP centre (Kiosk ID: 11621960)."
        path="/contact"
      />

      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD51B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Connect With Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            We Are Here to Assist You
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding Bank of India CSP services, insurance policies, loan paperwork, or digital applications? Reach us through any channel below.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-16 md:py-20 bg-brand-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone Contacts Card */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">Call Directly</h3>
                    <p className="text-xs text-slate-500">Fast telephone support</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Primary Phone:</span>
                    <a href={getPhoneLink(contacts.primaryPhoneRaw)} className="font-bold text-brand-navy hover:text-brand-royal">
                      {contacts.primaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Secondary Phone:</span>
                    <a href={getPhoneLink(contacts.secondaryPhoneRaw)} className="font-bold text-brand-navy hover:text-brand-royal">
                      {contacts.secondaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-brand-royal/10 border border-brand-royal/20">
                    <span className="text-brand-royal font-semibold text-xs">LIC Agent Line:</span>
                    <a href={getPhoneLink(contacts.licAgentPhoneRaw)} className="font-extrabold text-brand-navy text-xs hover:underline">
                      {contacts.licAgentPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">WhatsApp Helpline</h3>
                    <p className="text-xs text-slate-500">+91 {contacts.whatsAppNumber}</p>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors whitespace-nowrap"
                >
                  Chat Now
                </a>
              </div>

              {/* Physical Address & Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-royal text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">Storefront Location</h3>
                    <p className="text-xs text-slate-500">Visit our centre in person</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-sm text-slate-600 space-y-3">
                  <p className="leading-relaxed">
                    <strong>DH Insurance &amp; Digital Service</strong><br />
                    {location.addressPlaceholder}
                  </p>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 text-xs">
                    <Clock className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-navy">{openingHours.weekdays}</p>
                      <p className="text-slate-500">{openingHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Google Business Profiles Placeholders */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  External Profiles &amp; Maps
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Google Maps Directions</span>
                  </a>

                  <a
                    href={location.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-brand-royal" />
                    <span>Google Business Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed Section (Centered on Olpad, Gujarat) */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card">
            <div className="p-4 bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                <span className="font-bold">Location Map: Olpad, Surat, Gujarat</span>
              </div>
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow font-bold hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 bg-slate-100">
              <iframe
                title="DH Insurance & Digital Service Location Map"
                src={location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
