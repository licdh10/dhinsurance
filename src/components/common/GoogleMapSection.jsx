import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Phone, 
  Clock, 
  Landmark, 
  Car,
  Compass
} from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/businessConfig';

export const GoogleMapSection = () => {
  const { location, contacts, openingHours, bankingCSP } = businessConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyPlusCode = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(location.plusCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section 
      id="storefront-map" 
      aria-label="Storefront Location & Google Map"
      className="bg-slate-50 py-16 md:py-20 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Background ambient accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-royal via-brand-yellow to-brand-royal opacity-80" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-royal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-brand-royal/10 text-brand-royal border border-brand-royal/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-brand-royal" />
            <span>Storefront Location &amp; Directions</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight">
            Visit Our Service Centre in Pipodara
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently located at Sagar Complex, Silver Hub Industrial. Drop by for Bank of India CSP banking, life and motor insurance, loan assistance, or digital citizen services.
          </p>
        </div>

        {/* Location & Quick Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Card 1: Exact Address & Plus Code */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-royal">Official Address</span>
                  <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                    Open for Walk-ins
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mt-1">
                  DH Insurance &amp; Digital Service
                </h3>
                <p className="text-slate-700 font-medium text-sm sm:text-base leading-snug mt-1">
                  {location.fullAddress}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dist. Surat, Gujarat, India – PIN 394110
                </p>
              </div>
            </div>

            {/* Plus Code Highlight Box */}
            <div className="bg-gradient-to-r from-blue-50/80 to-slate-50 p-4 rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Navigation className="w-5 h-5 text-brand-royal shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Google Maps Plus Code:</span>
                  <span className="text-sm font-bold font-mono text-brand-navy select-all tracking-wide">
                    {location.plusCode}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyPlusCode}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-brand-navy border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all active:scale-95"
                  title="Copy Plus Code to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>

                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-brand-royal hover:bg-brand-navy text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-colors"
                >
                  <span>Navigate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Landmarks & Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <Landmark className="w-4 h-4 text-brand-royal shrink-0" />
                <span>BOI CSP Kiosk #{bankingCSP.kioskId}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <Car className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Easy Road Access &amp; Parking</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <Clock className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Mon–Sat 9 AM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Actions & Phone */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between space-y-5 h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-royal block mb-1">
                Navigation &amp; Assistance
              </span>
              <h3 className="text-lg font-bold text-brand-navy">
                Need Help Finding Us?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Click below to launch turn-by-turn navigation in the Google Maps app or call our storefront directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-royal hover:bg-brand-navy text-white font-bold py-3 px-5 rounded-xl text-sm shadow-md transition-all hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>

              <a
                href={location.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors border border-slate-200"
              >
                <MapPin className="w-4 h-4 text-brand-royal" />
                <span>Open in Google Maps App</span>
              </a>

              <a
                href={getPhoneLink(contacts.primaryPhoneRaw)}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow/15 hover:bg-brand-yellow/25 text-brand-navy font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border border-brand-yellow/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-navy" />
                <span>Call Storefront: {contacts.primaryPhone}</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span>Palod Branch Code: <strong>{bankingCSP.branchCode}</strong></span>
              <span>Sunday: Urgent by appt.</span>
            </div>
          </div>

        </div>

        {/* Embedded Google Map Container */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-card">
          
          {/* Top Bar on Map */}
          <div className="bg-brand-navy text-white px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-white text-sm">Pipodara Location Map</span>
                <span className="text-slate-400 font-mono text-xs">({location.plusCode})</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-white font-bold transition-colors"
              >
                <span>Navigate on Device</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Iframe Embed */}
          <div className="relative w-full h-80 sm:h-96 md:h-[440px] bg-slate-100">
            <iframe
              title="DH Insurance & Digital Service Google Maps Location Pipodara"
              src={location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Map Footer Bar with Key Locality Info */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-royal shrink-0" />
              <span><strong>Address:</strong> 1st Floor, Shop no 5 Sagar complex, Silver Hub Industrial, Pipodara 394110</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500 shrink-0">
              <span>Plus Code: <strong className="font-mono text-brand-navy">9X77+QH Pipodara, Gujarat</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleMapSection;
