import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Compass, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onQuickBook: (data: { pickup: string; destination: string; date: string; vehicle: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickBook }) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('Ooty Local Sightseeing');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('Toyota Innova Crysta');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickBook({ pickup, destination, date, vehicle });
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#082218] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Layer: Atmospheric Ooty Nilgiri Tea Hills & Mountain Mist Artwork */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Rich multi-layered CSS gradient backdrop depicting misty tea valleys */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#061A13]/90 via-[#0B281E]/80 to-[#0F392B]"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(46, 125, 91, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Scenic SVG Mountain Contours & Terraced Tea Estate Curves */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant mountain ranges */}
          <path
            d="M0 450 C 220 320, 480 490, 720 360 C 960 230, 1200 420, 1440 310 L1440 800 L0 800 Z"
            fill="#061D15"
          />
          {/* Mid-range rolling slopes */}
          <path
            d="M0 520 C 300 420, 600 580, 900 470 C 1200 360, 1380 500, 1440 450 L1440 800 L0 800 Z"
            fill="#0A2C20"
          />
          {/* Foreground terraced tea lines */}
          <path
            d="M0 600 C 350 510, 700 660, 1050 550 C 1260 480, 1380 590, 1440 560 L1440 800 L0 800 Z"
            fill="#0F392B"
          />
          <path
            d="M0 670 C 250 620, 500 710, 800 630 C 1100 550, 1300 690, 1440 640 L1440 800 L0 800 Z"
            fill="#144635"
          />
        </svg>

        {/* Soft fog overlay filter */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B281E] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed editorial location metadata */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-300">
              <span className="tracking-widest uppercase text-[#D4AF37] font-semibold">Ooty, The Nilgiris</span>
              <span aria-hidden="true" className="text-emerald-500/70">·</span>
              <span>Tamil Nadu, India</span>
              <span aria-hidden="true" className="text-emerald-500/70">·</span>
              <span>Altitude 2,240m</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Explore Ooty with <span className="text-[#D4AF37]">Comfort & Confidence</span>
            </h1>

            {/* Short Persuasive Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
              Welcome to <strong>Shaisha Tours & Travels</strong>, your trusted local cab service in Ooty. 
              From serene tea plantations and mist-covered mountain peaks to seamless airport transfers 
              and Coonoor day trips, travel safely with our experienced hill drivers and spotless tourist fleet.
            </p>

            {/* Prominent Action Buttons: Call Now & Book on WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="tel:7868833712"
                className="px-6 py-3.5 text-sm font-bold text-[#0F392B] bg-[#D4AF37] hover:bg-[#F3C64F] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2.5 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <Phone className="w-5 h-5 text-[#0F392B]" />
                Call Now: 7868833712
              </a>

              <a
                href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20in%20Ooty."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#107049] hover:bg-[#0B5637] border border-emerald-400/30 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                Book Your Taxi on WhatsApp
              </a>
            </div>

            {/* Secondary Contact Note */}
            <div className="text-xs text-emerald-200/80 flex items-center gap-2 pt-1">
              <span>Alternate Booking Line:</span>
              <a href="tel:6380120276" className="text-white font-semibold underline underline-offset-4 hover:text-[#D4AF37]">
                6380120276
              </a>
              <span className="text-emerald-500/50">·</span>
              <span>Instant Confirmation Support</span>
            </div>

            {/* 4 Trust Highlights (Clean unboxed inline metadata) */}
            <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Hill-Trained</span>
                </div>
                <p className="text-[11px] text-emerald-200/70">Mastery over 36 hairpin bends</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>24/7 Pickup</span>
                </div>
                <p className="text-[11px] text-emerald-200/70">Doorstep hotel & train pickup</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold">
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>Custom Tours</span>
                </div>
                <p className="text-[11px] text-emerald-200/70">Sightseeing at your own pace</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>Family Fleet</span>
                </div>
                <p className="text-[11px] text-emerald-200/70">Clean Sedans, SUVs & Tempo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Booking Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-stone-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-100 relative">
              <div className="space-y-1.5 pb-4 border-b border-stone-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F392B]">
                    Instant Cab Inquiry
                  </span>
                  <span className="text-xs text-stone-500 font-medium">Direct Local Dispatch</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Plan Your Ooty Journey
                </h2>
                <p className="text-xs text-stone-600">
                  Select your travel details to send a quick booking request directly to our team.
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4 pt-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Pickup Location in Ooty / Arrival Hub *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hotel Savoy, Ooty Bus Stand, Railway Station"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Destination or Sightseeing Circuit *
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                  >
                    <option value="Ooty Local Sightseeing (Botanical, Lake, Rose Garden)">
                      Ooty Local Sightseeing (Botanical, Lake, Doddabetta)
                    </option>
                    <option value="Pykara Falls & Lake Tour (Wenlock Downs, Pine Forest)">
                      Pykara Falls & Lake Tour (Wenlock Downs, Pine Forest)
                    </option>
                    <option value="Coonoor Day Trip (Sims Park, Dolphin's Nose, Tea Garden)">
                      Coonoor Day Trip (Sim&apos;s Park, Dolphin&apos;s Nose, Tea Garden)
                    </option>
                    <option value="Coimbatore Airport (CJB) Pickup / Drop">
                      Coimbatore Airport (CJB) Pickup / Drop
                    </option>
                    <option value="Mettupalayam Railway Station Transfer">
                      Mettupalayam Railway Station Transfer
                    </option>
                    <option value="Mudumalai / Bandipur Safari Excursion">
                      Mudumalai / Bandipur Safari Excursion
                    </option>
                    <option value="Custom Multi-day Nilgiri Holiday Tour">
                      Custom Multi-day Nilgiri Holiday Tour
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Cab
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                    >
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta (6-7 Seats)</option>
                      <option value="Maruti Dzire Sedan">Maruti Dzire Sedan (4 Seats)</option>
                      <option value="Maruti Ertiga">Maruti Ertiga MPV (6 Seats)</option>
                      <option value="Force Tempo Traveller">Tempo Traveller (12-14 Seats)</option>
                      <option value="Maruti WagonR">WagonR Hatchback (3-4 Seats)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#0F392B] hover:bg-[#09231A] text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Proceed to Complete Inquiry
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span>Direct inquiry · No advance payment needed</span>
                <span className="font-semibold text-[#0F392B]">Fast response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
