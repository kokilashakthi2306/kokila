import React from 'react';
import { Mountain, Award, HeartHandshake, MapPinned, Check } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
            <span className="uppercase tracking-widest text-[#D4AF37]">About Shaisha Tours & Travels</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Nilgiri Native Taxi Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Your Trusted Local Travel Partner in the Heart of the Nilgiris
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Based in Ooty (Udhagamandalam), <strong>Shaisha Tours & Travels</strong> is a locally owned and operated taxi service dedicated to giving visitors a safe, comfortable, and truly memorable hill station experience.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              Navigating the Nilgiri mountains requires more than just a car—it demands intimate familiarity with sharp hairpin bends, sudden mountain mists, steep ghat inclines, and changing weather conditions. At Shaisha Tours & Travels, our drivers are native to these hills with extensive experience handling every major mountain corridor, including the 36 hairpin turns of Kalhatty, the scenic Coonoor road, Kotagiri passes, and the Pykara corridor.
            </p>

            <p>
              We founded our business with a single commitment: <em>treat every tourist like a valued family guest</em>. That means showing up right on time, keeping every cab immaculate and fragrant with clean seats, offering honest local advice on opening times and tourist spots, and charging fair, transparent rates with zero unexpected surcharges.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0F392B] flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-[#0F392B]" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Hill-Road Specialists</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Decades of collective mountain driving experience, ensuring gentle cornering, minimal motion sickness, and complete passenger peace of mind.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0F392B] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-[#0F392B]" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Customer-First Service</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We don’t rush you at viewpoints. Enjoy the tea gardens, photo stops, and lake promenades at your own relaxed holiday rhythm.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0F392B] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#0F392B]" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Well-Maintained Fleet</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sedans, premium SUVs (Innova Crysta), and group tempo travellers regularly serviced for peak mechanical reliability on mountain roads.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0F392B] flex items-center justify-center">
                  <MapPinned className="w-5 h-5 text-[#0F392B]" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Deep Local Knowledge</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Insiders tips for the best authentic Nilgiri homemade chocolate shops, fresh tea factories, and hidden viewpoints away from crowded tourist queues.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commitments & Regional Roots (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B281E] text-white p-7 sm:p-8 rounded-2xl shadow-xl border border-emerald-900/60 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
                  The Shaisha Standard
                </span>
                <h3 className="text-xl font-bold text-white">
                  Why Travelers Choose Shaisha Across the Nilgiris
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-emerald-100/90">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>100% On-Time Guarantee:</strong> Pre-scheduled cabs reach your hotel lobby or station 10 minutes prior to pickup time.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Child & Senior-Friendly Drivers:</strong> Polite, non-smoking, patient chauffeurs trained to assist elder passengers with steps and luggage.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Fixed Sightseeing Packages:</strong> No confusing meters or dispute on fuel and driver bata—everything is agreed upfront.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>All Mountain Routes Covered:</strong> Licensed and permitted for Tamil Nadu, Karnataka (Bandipur/Mysore/Bangalore), and Kerala (Wayanad).</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-emerald-300">Direct Contact Phones</div>
                  <div className="text-sm font-bold text-white">7868833712 · 6380120276</div>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-bold text-[#0F392B] bg-[#D4AF37] hover:bg-[#F3C64F] rounded-lg transition-colors whitespace-nowrap"
                >
                  Book Your Taxi
                </a>
              </div>
            </div>

            {/* Local geography callout */}
            <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-stone-700 space-y-1.5">
              <span className="font-bold text-[#0F392B] block">Operating Hub: Ooty Center (Udhagamandalam)</span>
              <p className="text-stone-600">
                Regular daily service across Ooty town, Coonoor, Kotagiri, Gudalur, Pykara, Avalanche, and long-distance transfers to Coimbatore, Mettupalayam, Mysore, and Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
