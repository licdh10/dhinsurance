import React from 'react';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { businessConfig } from '../config/businessConfig';

export const TermsConditions = () => {
  const { name, bankingCSP, disclaimers } = businessConfig;

  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for utilizing advisory and services at DH Insurance &amp; Digital Service, Pipodara, Surat."
        path="/terms-and-conditions"
      />

      <section className="bg-brand-navy text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="bg-brand-yellow/20 text-brand-yellow px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Terms &amp; Conditions</h1>
          <p className="text-blue-100 text-sm mt-2">
            Effective Date: November 2026 • {name}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">1. Nature of Services</h2>
            <p>
              {name} functions as a multi-service business facilitation centre providing insurance advisory, authorized Bank of India Customer Service Point (CSP Kiosk ID: {bankingCSP.kioskId}) operations, loan documentation assistance, government citizen services, and digital document printing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">2. Banking CSP Authorization</h2>
            <p>
              {disclaimers.banking}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">3. Insurance Policies &amp; Underwriting</h2>
            <p>
              {disclaimers.insurance} Premium calculations, NCB transfers, and policy acceptance are decided by the respective insurers based on truthful disclosure of facts by the applicant.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">4. Loan Facilitation Disclaimer</h2>
            <p>
              {disclaimers.loans} We do not charge unauthorized advance approval fees or guarantee credit limits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">5. Accuracy of Submitted Documents</h2>
            <p>
              Customers are solely responsible for verifying the authenticity and correctness of all identification proofs, income records, and certificates provided for government registration (PAN, Aadhaar, ITR, Udyam, etc.).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">6. Modifications to Terms</h2>
            <p>
              We reserve the right to amend these terms in accordance with bank directives, IRDAI regulations, or government statutory guidelines.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default TermsConditions;
