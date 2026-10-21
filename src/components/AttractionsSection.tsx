import React from 'react';
import { ATTRACTIONS_DATA, Attraction } from '../data/toursData';
import { MapPin, Clock, Compass, Sparkles, ArrowRight } from 'lucide-react';

interface AttractionsSectionProps {
  onSelectAttraction: (attractionName: string) => void;
}

export const AttractionsSection: React.FC<AttractionsSectionProps> = ({ onSelectAttraction }) => {
  const handleSelectSpot = (attraction: Attraction) => {
    onSelectAttraction(`Ooty Sightseeing: ${attraction.name}`);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sightseeing" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
            <span className="uppercase tracking-widest text-[#D4AF37]">Iconic Nilgiri Sights</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Must-Visit Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Explore Ooty&apos;s Crown Jewel Attractions with Private Cabs
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            From panoramic cloud-line viewpoints to historic rose terraces and cascading pine waterfalls, explore the best sights of the Queen of Hill Stations without the stress of parking or crowded buses.
          </p>
        </div>

        {/* Attractions Grid (6 requested spots) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS_DATA.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#FAFAF9] rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Visual Header with stylized mountain / scenic banner */}
                <div className="h-44 bg-gradient-to-br from-[#0B281E] via-[#0F392B] to-[#164E3D] text-white p-5 flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative background contour */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                    viewBox="0 0 400 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 150 Q 100 80, 200 130 T 400 90 L400 200 L0 200 Z" fill="#ffffff" />
                  </svg>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] bg-black/30 px-2.5 py-1 rounded backdrop-blur-sm border border-emerald-500/20">
                      {spot.category}
                    </span>
                    <span className="text-xs text-emerald-200 font-medium">
                      {spot.distanceFromTown}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F3C64F] transition-colors">
                      {spot.name}
                    </h3>
                    {spot.altitude && (
                      <span className="text-xs text-emerald-300/90 block mt-0.5">
                        Elevation: {spot.altitude}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-200/60">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {spot.timings}
                    </span>
                    <span className="font-semibold text-stone-700">
                      {spot.entryFeeApprox}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {spot.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                      Tour Highlights
                    </span>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {spot.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D4AF37] font-bold">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Driver's Local Travel Tip */}
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-950 space-y-1">
                    <div className="flex items-center gap-1 font-bold text-[#0F392B]">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Driver&apos;s Local Tip</span>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-normal">
                      {spot.travelTip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleSelectSpot(spot)}
                  className="w-full py-2.5 px-3 bg-stone-100 hover:bg-[#0F392B] hover:text-white text-[#0F392B] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 border border-stone-200 hover:border-transparent active:scale-[0.98]"
                >
                  <span>Plan Taxi to {spot.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tourist Itinerary Suggestion Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAFAF9] rounded-2xl border border-stone-200 text-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-stone-900">
              Want to combine Doddabetta, Botanical Garden & Pykara in one full day?
            </h4>
            <p className="text-xs text-stone-600">
              Our travel specialists will map out a traffic-free sequence so your family spends more time enjoying viewpoints and less time waiting in lines.
            </p>
          </div>
          <a
            href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours,%20please%20help%20me%20plan%20a%201-day%20or%202-day%20Ooty%20sightseeing%20circuit."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#0F392B] hover:bg-[#09231A] text-white font-bold text-xs rounded-xl transition shadow-sm whitespace-nowrap"
          >
            Ask Driver on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
