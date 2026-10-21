import React from 'react';
import { Phone, MessageCircle, MapPin, Mountain } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061A13] text-stone-300 text-xs border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Tourism Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#D4AF37]" />
              <span>Shaisha Tours & Travels</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Your trusted travel companion across the misty hills, pine forests, and emerald tea valleys of Ooty and The Nilgiris. Providing punctual, comfortable, and safe mountain taxi travel since day one.
            </p>
            <div className="flex items-center gap-2 text-emerald-400/90 text-xs font-medium">
              <Mountain className="w-4 h-4 text-[#D4AF37]" />
              <span>Proudly Based in Ooty, The Nilgiris, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home & Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About Shaisha Travels
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Our Sightseeing & Taxi Services
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  onClick={(e) => handleNavClick(e, '#fleet')}
                  className="hover:text-white transition-colors"
                >
                  Tourist Fleet & Vehicles
                </a>
              </li>
              <li>
                <a
                  href="#sightseeing"
                  onClick={(e) => handleNavClick(e, '#sightseeing')}
                  className="hover:text-white transition-colors"
                >
                  Ooty Attractions & Spots
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, '#why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Book Cab
                </a>
              </li>
            </ul>
          </div>

          {/* Tourist Circuits (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Popular Routes
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>Ooty Town Sightseeing</li>
              <li>Coonoor Day Trip</li>
              <li>Pykara Falls & Lake</li>
              <li>Avalanche & Emerald</li>
              <li>Mudumalai Safari</li>
              <li>Coimbatore Airport Cab</li>
              <li>Mettupalayam Railway Cab</li>
            </ul>
          </div>

          {/* Direct Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Contact Dispatch Desk
            </span>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-stone-400 block text-[11px]">Primary Phone & WhatsApp:</span>
                <a
                  href="tel:7868833712"
                  className="text-white font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  7868833712
                </a>
              </div>

              <div>
                <span className="text-stone-400 block text-[11px]">Secondary Contact Phone:</span>
                <a
                  href="tel:6380120276"
                  className="text-white font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  6380120276
                </a>
              </div>

              <div className="pt-1">
                <span className="text-stone-400 block text-[11px]">Service Location:</span>
                <p className="text-stone-300 flex items-start gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Ooty, The Nilgiris, Tamil Nadu, India - 643001</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20in%20Ooty."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#1EBE5D] transition-colors text-[11px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp: 917868833712
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="mt-14 pt-6 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Shaisha Tours & Travels. All rights reserved. Ooty Taxi Service.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Commercial Passenger Transport</span>
            <span aria-hidden="true">·</span>
            <span>Nilgiri Tourism Certified</span>
            <span aria-hidden="true">·</span>
            <span>24x7 Cab Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
