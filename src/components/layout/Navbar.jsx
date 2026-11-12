import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig, getWhatsAppLink, getPhoneLink } from '../../config/businessConfig';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Banking & CSP', path: '/banking' },
    { name: 'Loans', path: '/loans' },
    { name: 'Digital Services', path: '/digital-services' },
    { name: 'Xerox & Printing', path: '/printing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Detect scroll to adjust shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
      isScrolled ? 'shadow-md border-b border-slate-200/80 py-2.5' : 'border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center shadow-md p-1.5 border border-brand-yellow/30 group-hover:scale-105 transition-transform">
              <img src="/favicon.svg" alt="DH Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-brand-navy leading-none">
                DH INSURANCE
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-brand-royal tracking-wider mt-0.5 uppercase">
                &amp; Digital Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-navy bg-brand-navy/10 font-bold border-b-2 border-brand-royal'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-royal text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <Phone className="w-4 h-4 text-brand-yellow" />
              <span className="hidden md:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 bg-[#25D366] text-white rounded-lg shadow-sm"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-navy text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-yellow' : 'text-slate-400'}`} />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile Drawer Actions */}
              <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={getPhoneLink()}
                  className="flex items-center justify-center gap-2 bg-brand-navy text-white py-3 rounded-xl font-semibold text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-yellow" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
