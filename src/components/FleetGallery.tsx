import React, { useState } from 'react';
import { FLEET_DATA, Vehicle } from '../data/toursData';
import { Users, Briefcase, Snowflake, Mountain, CheckCircle2, Upload, Camera, ArrowRight } from 'lucide-react';

interface FleetGalleryProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const FleetGallery: React.FC<FleetGalleryProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'suv' | 'sedan' | 'tempo' | 'hatchback'>('all');
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string | null>(null);

  const filteredVehicles = activeCategory === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((v) => v.category === activeCategory);

  const handleSelectCab = (vehicle: Vehicle) => {
    onSelectVehicle(vehicle.name);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileUpload = (vehicleId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCustomPhotos((prev) => ({
          ...prev,
          [vehicleId]: result,
        }));
        setUploadSuccessMsg(`Custom taxi photo updated for ${vehicleId}`);
        setTimeout(() => setUploadSuccessMsg(null), 3500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#F5F6F4] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
              <span className="uppercase tracking-widest text-[#D4AF37]">Our Tourist Fleet</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500">Nilgiri Certified Cabs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              Spotless, Reliable Cabs for Every Group Size & Journey
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Every vehicle in our fleet is mechanically inspected for Nilgiri ghat roads, fitted with hill-safe radial tires, spotless seat upholstery, and powerful heating for misty mountain mornings.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill compliant segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl self-start md:self-end">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0F392B] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Cabs ({FLEET_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('suv')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'suv'
                  ? 'bg-white text-[#0F392B] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Innova & SUVs
            </button>
            <button
              onClick={() => setActiveCategory('sedan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'sedan'
                  ? 'bg-white text-[#0F392B] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Sedans
            </button>
            <button
              onClick={() => setActiveCategory('tempo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'tempo'
                  ? 'bg-white text-[#0F392B] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tempo Traveller
            </button>
            <button
              onClick={() => setActiveCategory('hatchback')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'hatchback'
                  ? 'bg-white text-[#0F392B] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Compact
            </button>
          </div>
        </div>

        {uploadSuccessMsg && (
          <div className="mb-6 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>{uploadSuccessMsg}</span>
          </div>
        )}

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => {
            const hasCustomPhoto = !!customPhotos[vehicle.id];
            const displayPhoto = customPhotos[vehicle.id];

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Vehicle Visual Frame */}
                  <div className="relative h-56 bg-gradient-to-br from-[#0F392B]/10 via-stone-100 to-stone-200 overflow-hidden flex items-center justify-center p-4 border-b border-stone-200/80">
                    {hasCustomPhoto ? (
                      <img
                        src={displayPhoto}
                        alt={vehicle.name}
                        className="w-full h-full object-cover rounded-lg shadow-sm"
                      />
                    ) : (
                      /* Realistic CSS/SVG Vehicle Presentation */
                      <div className="w-full h-full rounded-xl bg-gradient-to-t from-stone-900/10 to-transparent flex flex-col items-center justify-center text-center p-4 relative">
                        <div className="w-16 h-16 rounded-2xl bg-[#0F392B] text-white flex items-center justify-center shadow-lg mb-2 group-hover:scale-105 transition-transform">
                          <Mountain className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <div className="text-sm font-bold text-[#0F392B] tracking-tight">
                          {vehicle.name}
                        </div>
                        <div className="text-[11px] text-stone-500 font-medium">
                          Nilgiri Tourist Taxi · Commercial Yellow Plate
                        </div>

                        {/* Subtle watermarked tea hill silhouette */}
                        <div className="absolute bottom-1 right-2 text-[10px] text-stone-400 font-mono">
                          SHAISHA FLEET
                        </div>
                      </div>
                    )}

                    {/* Badge */}
                    {vehicle.badge && (
                      <div className="absolute top-3 left-3 bg-[#0F392B] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm border border-emerald-700/50">
                        {vehicle.badge}
                      </div>
                    )}

                    {/* Real-time Photo Upload affordance */}
                    <label
                      htmlFor={`upload-${vehicle.id}`}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-stone-700 hover:text-[#0F392B] p-1.5 rounded-lg shadow-sm cursor-pointer transition-colors border border-stone-200 flex items-center gap-1 text-[11px] font-medium"
                      title="Upload your vehicle photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#0F392B]" />
                      <span className="hidden group-hover:inline">Update Photo</span>
                      <input
                        id={`upload-${vehicle.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(vehicle.id, e)}
                      />
                    </label>
                  </div>

                  {/* Vehicle Information */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-[#0F392B] uppercase tracking-wider">
                        {vehicle.idealFor}
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mt-1">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Key Technical Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 text-center">
                      <div className="p-2 bg-stone-50 rounded-lg">
                        <Users className="w-4 h-4 text-[#0F392B] mx-auto mb-1" />
                        <span className="block text-[11px] font-bold text-stone-800">
                          {vehicle.capacity}
                        </span>
                        <span className="text-[10px] text-stone-500">Seating</span>
                      </div>

                      <div className="p-2 bg-stone-50 rounded-lg">
                        <Briefcase className="w-4 h-4 text-[#0F392B] mx-auto mb-1" />
                        <span className="block text-[11px] font-bold text-stone-800 truncate">
                          {vehicle.luggage.split('+')[0]}
                        </span>
                        <span className="text-[10px] text-stone-500">Luggage</span>
                      </div>

                      <div className="p-2 bg-stone-50 rounded-lg">
                        <Snowflake className="w-4 h-4 text-[#0F392B] mx-auto mb-1" />
                        <span className="block text-[11px] font-bold text-stone-800">
                          AC & Heater
                        </span>
                        <span className="text-[10px] text-stone-500">Climate</span>
                      </div>
                    </div>

                    {/* Hill Road Safety Feature */}
                    <div className="flex items-start gap-2 text-xs text-emerald-900 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/60">
                      <Mountain className="w-3.5 h-3.5 text-[#0F392B] shrink-0 mt-0.5" />
                      <span>{vehicle.hillSuitability}</span>
                    </div>

                    {/* Vehicle features checklist */}
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Booking Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleSelectCab(vehicle)}
                    className="w-full py-3 px-4 bg-[#0F392B] hover:bg-[#09231A] text-white font-bold text-xs rounded-xl transition shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <span>Reserve {vehicle.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Quality Promise Note */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-2xl mx-auto space-y-1">
          <p>
            All Shaisha Tours & Travels vehicles carry active All India / Tamil Nadu Tourist permits, complete commercial insurance, and pollution certifications.
          </p>
          <p className="font-semibold text-stone-700">
            For urgent cab booking, call directly on <a href="tel:7868833712" className="text-[#0F392B] underline">7868833712</a> or <a href="tel:6380120276" className="text-[#0F392B] underline">6380120276</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
