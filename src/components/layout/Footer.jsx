import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Landmark, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../../config/businessConfig';

export const Footer = () => {
  const { contacts, location, openingHours, bankingCSP, disclaimers } = businessConfig;

  return (
    <footer className="bg-brand-darkBlue text-slate-300 pt-16 pb-8 border-t border-brand-royal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Kiosk Badge */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-royal to-brand-navy flex items-center justify-center p-1 border border-brand-yellow/30">
                <img src="/favicon.svg" alt="DH Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">DH INSURANCE</span>
                <span className="text-[11px] font-bold text-brand-yellow tracking-wider uppercase">&amp; Digital Service</span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your authorized multi-service financial and digital centre in Olpad, Surat. We provide trusted insurance advisory, Bank of India CSP banking, loan facilitation, and citizen services.
            </p>

            {/* Micro CSP Badge */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
              <Landmark className="w-8 h-8 text-brand-yellow shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-white">Bank of India CSP Kiosk</p>
                <p className="text-slate-400">Kiosk ID: <span className="text-brand-yellow font-bold">{bankingCSP.kioskId}</span></p>
                <p className="text-slate-400">Branch: Palod ({bankingCSP.branchCode})</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Our Business', path: '/about' },
                { name: 'Insurance Portfolio', path: '/insurance' },
                { name: 'Bank of India CSP Services', path: '/banking' },
                { name: 'Loan Facilitation', path: '/loans' },
                { name: 'Digital & Citizen Services', path: '/digital-services' },
                { name: 'Xerox & Quality Printing', path: '/printing' },
                { name: 'Contact & Support', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-brand-yellow transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-royal" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Offerings */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
              Core Specialisations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Life &amp; Term Insurance (LIC)</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Cashless Health &amp; Mediclaim</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Instant Bike &amp; Car Insurance</span>
              </li>
              <li className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-brand-royal shrink-0" />
                <span>AePS Cash Withdrawal &amp; Transfer</span>
              </li>
              <li className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Home &amp; Gold Loan Assistance</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-brand-royal shrink-0" />
                <span>PAN Card, ITR &amp; MSME Udyam</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-brand-royal shrink-0" />
                <span>Passport Photography &amp; Colour Xerox</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Visit Information */}
          <div className="space-y-3.5">
            <h4 className="text-base font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
              Contact &amp; Location
            </h4>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
              <p className="text-slate-400">
                {location.locality}, Surat District, Gujarat, India.
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-300 font-medium">{openingHours.weekdays}</p>
                <p className="text-slate-500 text-xs mt-0.5">{openingHours.sunday}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-brand-yellow" />
                <a href={getPhoneLink(contacts.primaryPhoneRaw)} className="text-white hover:text-brand-yellow font-semibold">
                  {contacts.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-brand-yellow" />
                <a href={getPhoneLink(contacts.secondaryPhoneRaw)} className="text-white hover:text-brand-yellow font-semibold">
                  {contacts.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm bg-brand-royal/20 p-2 rounded-lg border border-brand-royal/40">
                <Shield className="w-4 h-4 text-brand-yellow" />
                <span className="text-xs text-blue-200">LIC Agent:</span>
                <a href={getPhoneLink(contacts.licAgentPhoneRaw)} className="text-brand-yellow font-bold text-xs hover:underline">
                  {contacts.licAgentPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl text-sm font-bold shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers Section */}
        <div className="py-6 border-b border-white/10 text-xs text-slate-400 space-y-2 leading-relaxed">
          <p>
            <strong className="text-slate-300">Banking Notice:</strong> {disclaimers.banking}
          </p>
          <p>
            <strong className="text-slate-300">Insurance Notice:</strong> {disclaimers.insurance}
          </p>
          <p>
            <strong className="text-slate-300">Loan &amp; Citizen Services:</strong> {disclaimers.loans} {disclaimers.digital}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-yellow transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-brand-yellow transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-yellow transition-colors">
              Locate Centre
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
