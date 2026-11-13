import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { businessConfig } from '../config/businessConfig';

export const PrivacyPolicy = () => {
  const { name, contacts, location } = businessConfig;

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection standards at DH Insurance &amp; Digital Service, Pipodara, Surat."
        path="/privacy-policy"
      />

      <section className="bg-brand-navy text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="bg-brand-yellow/20 text-brand-yellow px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Privacy Policy</h1>
          <p className="text-blue-100 text-sm mt-2">
            Last updated: November 2026 • Effective for {name}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Key Security Notice */}
          <div className="p-5 rounded-2xl bg-brand-lightGrey border border-brand-royal/30 flex items-start gap-3">
            <Lock className="w-6 h-6 text-brand-royal shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-brand-navy text-base mb-1">Strict Confidentiality Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {name} never asks for, collects, stores, or processes confidential financial passwords, ATM PINs, UPI PINs, or Aadhaar OTPs through this public informational website.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">1. Information We Collect</h2>
            <p>
              When you submit an enquiry via our website form or contact us via WhatsApp/telephone, we only collect basic contact information voluntarily provided by you, including your name, 10-digit telephone number, and the specific category of service you are enquiring about.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">2. How Your Information Is Used</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>To answer your specific inquiries regarding insurance policies, Bank of India CSP services, loans, or citizen services.</li>
              <li>To prepare and verify accurate documentation on official authorized government or banking portals upon your explicit instruction.</li>
              <li>To deliver printed copies, insurance policy schedules, or application acknowledgement slips.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">3. Banking &amp; Government Data Protection</h2>
            <p>
              Any biometric identification (e-KYC) performed for Bank of India CSP operations is transmitted in real-time through encrypted bank networks directly to Bank of India and UIDAI servers. Our centre does not retain or store biometric fingerprint templates on local drives.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">4. Non-Disclosure &amp; Third-Party Sharing</h2>
            <p>
              We do not sell, rent, or trade your contact information to third-party telemarketers. Information is only shared with authorized insurers, lending institutions, or government authorities when strictly required to process your requested application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">5. Contact Our Privacy Desk</h2>
            <p>
              If you have any questions regarding your personal information or request deletion of communication records, please contact us at {contacts.primaryPhone} or visit our storefront in {location.locality}, Surat, Gujarat.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
