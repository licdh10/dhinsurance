import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import GoogleMapSection from './components/common/GoogleMapSection';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Insurance from './pages/Insurance';
import Banking from './pages/Banking';
import Loans from './pages/Loans';
import DigitalServices from './pages/DigitalServices';
import Printing from './pages/Printing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-lightGrey selection:bg-brand-royal selection:text-white">
        {/* Top Info Notification Bar */}
        <TopBar />
        
        {/* Sticky Header & Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/digital-services" element={<DigitalServices />} />
            <Route path="/printing" element={<Printing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Floating WhatsApp Contact Widget */}
        <FloatingWhatsApp />

        {/* Storefront Google Maps Integration */}
        <GoogleMapSection />

        {/* Comprehensive Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
