import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Ooty Sightseeing', href: '#sightseeing' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with direct phone numbers & Nilgiri location */}
      <div className="bg-[#0B281E] text-[#E8F5E9] text-xs py-2 px-4 border-b border-[#164E3D]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-emerald-200/90">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Ooty, The Nilgiris, Tamil Nadu · Local Taxi & Sightseeing</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden sm:inline text-emerald-300/70">24/7 Booking Support:</span>
            <a
              href="tel:7868833712"
              className="hover:text-[#F3C64F] transition-colors font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              7868833712
            </a>
            <span className="text-emerald-500/50">|</span>
            <a
              href="tel:6380120276"
              className="hover:text-[#F3C64F] transition-colors font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              6380120276
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly obeying the 3-zone contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3.5'
            : 'bg-white border-b border-stone-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F392B] whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#D4AF37]" />
            Shaisha Tours & Travels
          </a>

          {/* Zone 2: Navigation Links (single-line, subtle hover underlines) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#0F392B] hover:underline underline-offset-8 decoration-[#D4AF37] decoration-2 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking%20in%20Ooty."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F392B] hover:bg-[#09231A] rounded-lg transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:7868833712"
              className="p-2 text-[#0F392B] bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              aria-label="Call primary number"
            >
              <Phone className="w-4 h-4 text-[#0F392B]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#0F392B] rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0F392B] hover:bg-emerald-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href="tel:7868833712"
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-[#0F392B] bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Call Primary: 7868833712
              </a>
              <a
                href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking%20in%20Ooty."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-[#0F392B] hover:bg-[#09231A] rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                WhatsApp: 7868833712
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick Action Bar for Mobile (kept within 15% mobile sticky cap) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-50 bg-[#0F392B]/95 backdrop-blur-md text-white p-2 rounded-xl shadow-xl border border-emerald-800/50 flex items-center gap-2">
        <a
          href="tel:7868833712"
          className="flex-1 py-2.5 px-2 bg-white text-[#0F392B] font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#0F392B]" />
          Call: 7868833712
        </a>
        <a
          href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20in%20Ooty."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-[#25D366] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 text-white" />
          WhatsApp Now
        </a>
      </div>
    </>
  );
};
