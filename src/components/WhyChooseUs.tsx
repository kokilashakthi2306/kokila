import React from 'react';
import { WHY_CHOOSE_US, FAQS } from '../data/toursData';
import { ShieldCheck, Compass, PhoneCall, Heart, Sparkles, HelpCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap = [
    <Compass key="1" className="w-5 h-5 text-[#0F392B]" />,
    <ShieldCheck key="2" className="w-5 h-5 text-[#0F392B]" />,
    <Sparkles key="3" className="w-5 h-5 text-[#0F392B]" />,
    <Heart key="4" className="w-5 h-5 text-[#0F392B]" />,
    <Compass key="5" className="w-5 h-5 text-[#0F392B]" />,
    <PhoneCall key="6" className="w-5 h-5 text-[#0F392B]" />,
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
            <span className="uppercase tracking-widest text-[#D4AF37]">The Shaisha Difference</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Nilgiri Travel Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Why Discerning Travelers Rely on Shaisha Tours & Travels
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Mountain roads in the Nilgiris demand experienced hands and a thoughtful approach. Here is what makes our taxi service the preferred choice for families, couples, and group vacations.
          </p>
        </div>

        {/* 4 Core Pillars + Extra Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="p-7 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                {iconMap[index % iconMap.length]}
              </div>

              <h3 className="text-lg font-bold text-stone-900">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local Road Competence Strip */}
        <div className="mt-16 bg-[#0B281E] text-white p-8 sm:p-10 rounded-3xl border border-emerald-900/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37]">
                Safety First Across All Nilgiri Slopes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Mastery Over the 36 Hairpin Bends & Changing Mountain Fog
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                The Kalhatty Ghat road between Ooty and Masinagudi features 36 demanding hairpin turns with steep gradients. We strictly deploy hill-experienced drivers who adhere to engine-braking safety protocols, low-gear descents, and courteous hill driving etiquette so your family journeys in supreme comfort.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="tel:7868833712"
                className="w-full text-center py-3.5 px-4 bg-[#D4AF37] hover:bg-[#F3C64F] text-[#0F392B] font-bold text-xs rounded-xl transition shadow-md whitespace-nowrap"
              >
                Call Primary: 7868833712
              </a>
              <a
                href="tel:6380120276"
                className="w-full text-center py-3.5 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition border border-white/20 whitespace-nowrap"
              >
                Secondary Desk: 6380120276
              </a>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F392B] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900">
              Frequently Asked Questions About Ooty Taxi Booking
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-stone-200/90 space-y-2 shadow-xs"
              >
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
