import React, { useState } from 'react';
import { Send, MessageSquare, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    serviceType: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'backend_notice' | null

  const serviceOptions = [
    'General Enquiry',
    'Life / Term Insurance (LIC)',
    'Health Insurance / Mediclaim',
    'Vehicle Insurance (Bike / Car)',
    'Bank of India CSP Services',
    'Home Loan Assistance',
    'Gold Loan Assistance',
    'Personal / Car Loan',
    'PAN Card / Aadhaar Services',
    'ITR Return Filing',
    'Udyam (MSME) / FSSAI Licence',
    'Xerox & Colour Printing',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      errs.phoneNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please enter your query or message (minimum 5 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Per Requirement 11:
    // "If a backend service is not configured, clearly indicate that the contact form requires configuration instead of pretending messages were submitted."
    // We show a clear informational banner and provide one-click direct WhatsApp handoff.
    setSubmitStatus('backend_notice');
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;

    const text = encodeURIComponent(
      `Hello DH Insurance & Digital Service,\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nService: ${formData.serviceType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/91${businessConfig.contacts.whatsAppNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
          Send Us an Enquiry
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Fill out the details below. Our team in Pipodara will contact you promptly.
        </p>
      </div>

      {submitStatus === 'backend_notice' && (
        <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-slate-700 text-xs sm:text-sm space-y-3">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-brand-navy">Form Notice &amp; Instant WhatsApp Option</p>
              <p className="mt-1 text-slate-600">
                Direct website database backend email dispatch is currently in offline configuration mode. You can instantly forward your prepared message directly to our official WhatsApp helpline with one click:
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl font-bold text-sm shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Forward Enquiry to WhatsApp Now</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Ramesh Patel"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.fullName 
                ? 'border-red-500 focus:border-red-500 bg-red-50/30' 
                : 'border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/10'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            10-Digit Mobile Number *
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-slate-400 text-sm font-semibold">+91</span>
            <input
              type="tel"
              placeholder="98765 43210"
              maxLength={10}
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                errors.phoneNumber 
                  ? 'border-red-500 focus:border-red-500 bg-red-50/30' 
                  : 'border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/10'
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-600 text-xs mt-1 font-medium">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Service Category */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Required Service *
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/10 bg-white"
          >
            {serviceOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Your Message or Query *
          </label>
          <textarea
            rows={3}
            placeholder="Tell us what you need assistance with..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
              errors.message 
                ? 'border-red-500 focus:border-red-500 bg-red-50/30' 
                : 'border-slate-300 focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/10'
            }`}
          />
          {errors.message && (
            <p className="text-red-600 text-xs mt-1 font-medium">{errors.message}</p>
          )}
        </div>

        {/* Security & Privacy Notice */}
        <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-slate-500 text-[11px] leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
          <p>
            <strong>Security Notice:</strong> Please never disclose OTPs, PINs, Aadhaar passwords, or banking credentials. We protect your privacy.
          </p>
        </div>

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-royal text-white py-3 px-5 rounded-xl text-sm font-bold shadow-md transition-colors"
          >
            <Send className="w-4 h-4 text-brand-yellow" />
            <span>Submit Enquiry</span>
          </button>

          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-5 rounded-xl text-sm font-bold shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Send via WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
