import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../config/businessConfig';

export const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you are looking for does not exist on DH Insurance &amp; Digital Service."
        path="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-brand-lightGrey">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200 text-center space-y-6">
          
          <div className="w-20 h-20 rounded-3xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mx-auto">
            <span className="text-3xl font-black text-brand-royal">404</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600">
              The page you requested may have been moved or does not exist. Please navigate using the links below.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-royal text-white py-3 px-5 rounded-xl text-sm font-bold shadow-md transition-colors"
            >
              <Home className="w-4 h-4 text-brand-yellow" />
              <span>Return to Homepage</span>
            </Link>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-5 rounded-xl text-sm font-bold shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Support</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-brand-royal">
            <Link to="/insurance" className="hover:underline">Insurance</Link>
            <span>•</span>
            <Link to="/banking" className="hover:underline">BOI Banking</Link>
            <span>•</span>
            <Link to="/loans" className="hover:underline">Loans</Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NotFound;
