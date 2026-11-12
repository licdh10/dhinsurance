import React from 'react';
import { Phone, Clock, MapPin, Shield } from 'lucide-react';
import { businessConfig, getPhoneLink } from '../../config/businessConfig';

export const TopBar = () => {
  const { contacts, location, openingHours } = businessConfig;

  return (
    <div className="bg-brand-darkBlue text-slate-300 text-xs py-2 px-4 border-b border-brand-royal/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
            <span>{location.locality}, {location.city}, Gujarat</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
            <span>{openingHours.weekdays}</span>
          </div>
        </div>

        {/* Right: Phone Numbers & LIC Agent */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Call:</span>
            <a 
              href={getPhoneLink(contacts.primaryPhoneRaw)} 
              className="text-white hover:text-brand-yellow transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-brand-yellow" />
              {contacts.primaryPhone}
            </a>
            <span className="text-slate-500">|</span>
            <a 
              href={getPhoneLink(contacts.secondaryPhoneRaw)} 
              className="text-white hover:text-brand-yellow transition-colors hidden sm:inline"
            >
              {contacts.secondaryPhone}
            </a>
          </div>

          <div className="flex items-center gap-1.5 bg-brand-royal/40 px-2.5 py-0.5 rounded-full border border-brand-royal/60">
            <Shield className="w-3 h-3 text-brand-yellow" />
            <span className="text-blue-200">LIC Agent:</span>
            <a 
              href={getPhoneLink(contacts.licAgentPhoneRaw)} 
              className="text-brand-yellow font-bold hover:underline"
              title="Direct contact for Life Insurance Corporation of India (LIC) policies"
            >
              {contacts.licAgentPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
