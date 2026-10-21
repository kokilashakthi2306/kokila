import React from 'react';
import { SERVICES_DATA, TourPackage } from '../data/toursData';
import { MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleBookService = (pkg: TourPackage) => {
    onSelectService(pkg.title);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
            <span className="uppercase tracking-widest text-[#D4AF37]">Tailored Travel Packages</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Nilgiri Taxi Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Comprehensive Taxi Services for Tourists & Travelers
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Whether you need a quick station pickup, a full-day relaxed sightseeing cab, or a customized multi-day Nilgiri excursion, we provide clean vehicles, upfront pricing, and hospitable local drivers.
          </p>
        </div>

        {/* Services Grid (Clean Bento/Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const serviceNumber = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="bg-[#FAFAF9] rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Header with human editorial numbering and duration */}
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-xs font-bold text-[#D4AF37] tracking-wider">
                      {serviceNumber}. TOUR SERVICE
                    </span>
                    <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#0F392B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#0F392B] font-semibold mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Places Covered List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                      Key Highlights & Stops
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {service.placesCovered.slice(0, 4).map((place, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#0F392B] shrink-0 mt-0.5" />
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-200/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                      Included Comforts
                    </span>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {service.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
                  <div className="text-[11px] text-stone-500 font-medium">
                    {service.popularFor.split('&')[0]}
                  </div>
                  <button
                    onClick={() => handleBookService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F392B] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Book Taxi</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Booking Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B281E] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-900">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Need a Customized Sightseeing Plan or Multi-Day Package?</h3>
            <p className="text-xs text-emerald-200/90">
              Speak with our local travel desk to customize your spots, pickup times, and vehicle size.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:7868833712"
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3C64F] text-[#0F392B] font-bold text-xs rounded-lg transition-colors whitespace-nowrap"
            >
              Call 7868833712
            </a>
            <a
              href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours,%20I%20need%20a%20custom%20tourist%20taxi%20package%20for%20Ooty."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#107049] hover:bg-[#0B5637] text-white font-semibold text-xs rounded-lg transition-colors border border-emerald-400/30 whitespace-nowrap"
            >
              Custom WhatsApp Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
