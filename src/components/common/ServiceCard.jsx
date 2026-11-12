import React from 'react';
import { Phone, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink, businessConfig } from '../../config/businessConfig';

export const ServiceCard = ({
  title,
  subtitle,
  desc,
  features = [],
  badge,
  icon: Icon,
  serviceNameForEnquiry,
  tagline,
  processingTime,
}) => {
  const enquiryTarget = serviceNameForEnquiry || title;
  const whatsappUrl = getWhatsAppLink(enquiryTarget);
  const phoneUrl = getPhoneLink();

  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 hover:border-brand-royal/40 transition-card flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Accent Stripe on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-royal via-brand-yellow to-brand-royal opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header row: Icon & Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-yellow transition-colors shrink-0">
              <Icon className="w-6 h-6" />
            </div>
          )}

          {badge && (
            <span className="inline-block bg-brand-yellow/20 text-brand-navy text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-brand-yellow/50 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
          {title}
        </h3>
        
        {(subtitle || tagline) && (
          <p className="text-xs font-semibold text-brand-royal mt-1 uppercase tracking-wide">
            {subtitle || tagline}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-slate-600 mt-3 leading-relaxed">
          {desc}
        </p>

        {/* Processing time badge if provided */}
        {processingTime && (
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            <span>Turnaround:</span>
            <span className="font-bold text-brand-navy">{processingTime}</span>
          </div>
        )}

        {/* Features Checklist */}
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm transition-colors"
          title={`Enquire about ${enquiryTarget} on WhatsApp`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Enquiry</span>
        </a>

        <a
          href={phoneUrl}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy py-2.5 px-4 rounded-xl text-xs font-bold transition-colors"
          title={`Call now for ${enquiryTarget}`}
        >
          <Phone className="w-3.5 h-3.5 text-brand-royal group-hover:text-brand-yellow" />
          <span>Call Now</span>
        </a>
      </div>

    </div>
  );
};

export default ServiceCard;
