import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Calendar, Users, Car, CheckCircle2, Copy, Check, Clock, AlertCircle } from 'lucide-react';

interface ContactAndBookingProps {
  initialService?: string;
  initialVehicle?: string;
  initialPickup?: string;
  initialDate?: string;
}

export const ContactAndBooking: React.FC<ContactAndBookingProps> = ({
  initialService = '',
  initialVehicle = 'Toyota Innova Crysta',
  initialPickup = '',
  initialDate = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState(initialPickup);
  const [destination, setDestination] = useState(initialService || 'Ooty Local Sightseeing');
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState('09:00 AM');
  const [passengers, setPassengers] = useState('4');
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [notes, setNotes] = useState('');

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedData, setSubmittedData] = useState<{
    summary: string;
    whatsappUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync external pre-selections
  useEffect(() => {
    if (initialService) setDestination(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialVehicle) setVehicle(initialVehicle);
  }, [initialVehicle]);

  useEffect(() => {
    if (initialPickup) setPickup(initialPickup);
  }, [initialPickup]);

  useEffect(() => {
    if (initialDate) setDate(initialDate);
  }, [initialDate]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = 'Please provide your full name.';
    if (!phone.trim()) {
      errors.phone = 'Please provide a valid contact phone number.';
    } else {
      const cleanPhone = phone.replace(/[\s-]/g, '');
      if (cleanPhone.length < 10) {
        errors.phone = 'Please enter a valid 10-digit mobile number.';
      }
    }
    if (!pickup.trim()) errors.pickup = 'Please provide a pickup location in or around Ooty.';
    if (!destination.trim()) errors.destination = 'Please provide your travel destination or package.';
    if (!date) errors.date = 'Please pick a travel date.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const message = [
      `*🚖 Taxi Booking Inquiry - Shaisha Tours & Travels*`,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Pickup Location:* ${pickup.trim()}`,
      `*Destination / Tour:* ${destination.trim()}`,
      `*Travel Date:* ${date}`,
      `*Pickup Time:* ${time}`,
      `*Passengers:* ${passengers}`,
      `*Preferred Cab:* ${vehicle}`,
      notes.trim() ? `*Special Notes:* ${notes.trim()}` : null,
      `\n_Sent via Shaisha Tours & Travels Ooty web portal._`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917868833712?text=${encoded}`;

    setSubmittedData({
      summary: message,
      whatsappUrl,
    });
  };

  const handleCopySummary = () => {
    if (submittedData) {
      navigator.clipboard.writeText(submittedData.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F392B]">
            <span className="uppercase tracking-widest text-[#D4AF37]">Direct Contact & Booking</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Fast Local Response</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Contact Shaisha Tours & Travels or Book Your Ooty Taxi
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Reach out directly to our Ooty coordination team. We are available 24/7 for hotel pickups, train & airport transfers, sightseeing packages, and urgent taxi requests across The Nilgiris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Phones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="p-7 bg-[#0B281E] text-white rounded-2xl shadow-md border border-emerald-900/60 space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Primary Booking Number</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  7868833712
                </h3>
                <p className="text-xs text-emerald-200/80">
                  Open 24 Hours for Calls & WhatsApp inquiries
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:7868833712"
                  className="flex-1 py-3 px-4 bg-[#D4AF37] hover:bg-[#F3C64F] text-[#0F392B] font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <Phone className="w-4 h-4 text-[#0F392B]" />
                  Call 7868833712
                </a>
                <a
                  href="https://wa.me/917868833712?text=Hello%20Shaisha%20Tours%20%26%20Travels,%20I%20am%20inquiring%20about%20a%20taxi%20booking%20in%20Ooty."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#107049] hover:bg-[#0B5637] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 border border-emerald-400/30 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Secondary Phone Card */}
            <div className="p-6 bg-[#FAFAF9] rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F392B] uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Secondary Dispatch & Inquiries</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                  6380120276
                </h3>
                <p className="text-xs text-stone-600">
                  Available for alternate booking, package coordination, and tour assistance
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="tel:6380120276"
                  className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 6380120276
                </a>
                <a
                  href="https://wa.me/916380120276?text=Hello%20Shaisha%20Tours,%20I%20want%20to%20inquire%20about%20cab%20rates%20in%20Ooty."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-[#0F392B] font-semibold text-xs rounded-lg transition-colors border border-emerald-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#0F392B]" />
                  Message
                </a>
              </div>
            </div>

            {/* Location & Hub Info */}
            <div className="p-6 bg-[#FAFAF9] rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F392B] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Base Office & Service Area</span>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">
                  Shaisha Tours & Travels
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">
                  Ooty (Udhagamandalam), The Nilgiris District,<br />
                  Tamil Nadu, India · PIN: 643001
                </p>
              </div>

              <div className="pt-2 text-[11px] text-stone-500 space-y-1">
                <p className="font-semibold text-stone-700">Doorstep pickups across:</p>
                <p>Ooty Town, Charring Cross, Lake Road, Coonoor, Kotagiri, Lovedale, Fernhill, Aruvankadu, Gudalur, and Mettupalayam foothills.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Working Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="mb-6 pb-4 border-b border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F392B]">
                  Reserve Your Taxi
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  Cab Booking Inquiry Form
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Fill in your travel details. We will prepare your itinerary and send it directly to our dispatch desk via WhatsApp or phone for immediate confirmation.
                </p>
              </div>

              {submittedData ? (
                /* Success / Summary Screen strictly adhering to "Do not claim booking has been confirmed" */
                <div className="space-y-6">
                  <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Inquiry Details Successfully Generated!</span>
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      Your travel request has been compiled. To allocate your cab and assign a driver, please tap <strong>Send to WhatsApp</strong> below or call our dispatch desk. (Note: Vehicle allocation is confirmed directly by our team once we receive your message).
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-700 whitespace-pre-wrap leading-relaxed">
                    {submittedData.summary}
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <a
                      href={submittedData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl transition shadow-md flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      Send to WhatsApp (917868833712)
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="py-3.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition border border-stone-300 flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Details'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#0F392B] underline hover:text-[#09231A]"
                    >
                      ← Submit another inquiry
                    </button>
                    <a
                      href="tel:7868833712"
                      className="text-xs font-bold text-stone-700 hover:text-[#0F392B] flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0F392B]" />
                      Call Dispatch directly: 7868833712
                    </a>
                  </div>
                </div>
              ) : (
                /* The Live Booking Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          formErrors.name ? 'border-red-500' : 'border-stone-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          formErrors.phone ? 'border-red-500' : 'border-stone-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Pickup */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Pickup Location in Ooty / Station *
                      </label>
                      <input
                        type="text"
                        placeholder="Hotel name, Railway station, or Address"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          formErrors.pickup ? 'border-red-500' : 'border-stone-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition`}
                      />
                      {formErrors.pickup && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.pickup}
                        </p>
                      )}
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Destination / Sightseeing Tour *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Full Day Sightseeing, Coonoor, Pykara"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          formErrors.destination ? 'border-red-500' : 'border-stone-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition`}
                      />
                      {formErrors.destination && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.destination}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          formErrors.date ? 'border-red-500' : 'border-stone-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition`}
                      />
                      {formErrors.date && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.date}
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Preferred Pickup Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 09:00 AM"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                      />
                    </div>

                    {/* Passengers */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Passenger Count
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                      >
                        <option value="1 - 2 Passengers (Couple/Solo)">1 - 2 Passengers</option>
                        <option value="3 - 4 Passengers (Small Family)">3 - 4 Passengers</option>
                        <option value="5 - 7 Passengers (Innova/Ertiga)">5 - 7 Passengers</option>
                        <option value="8 - 14 Passengers (Tempo Traveller)">8 - 14 Passengers</option>
                        <option value="15+ Group">15+ Group Charter</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Vehicle */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Vehicle Category
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                    >
                      <option value="Toyota Innova Crysta (6-7 Seater SUV)">Toyota Innova Crysta (6-7 Seater SUV) - Recommended for Hills</option>
                      <option value="Maruti Suzuki Dzire Sedan (4 Seater)">Maruti Suzuki Dzire Sedan (4 Seater)</option>
                      <option value="Maruti Suzuki Ertiga (6 Seater MPV)">Maruti Suzuki Ertiga (6 Seater MPV)</option>
                      <option value="Force Tempo Traveller (12-14 Seater)">Force Tempo Traveller (12-14 Seater)</option>
                      <option value="Maruti WagonR (3-4 Seater Hatchback)">Maruti WagonR (3-4 Seater Hatchback)</option>
                    </select>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Special Requests / Luggage / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 4 big bags, early morning train pickup, senior citizen needing low step, child seat..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F392B] focus:border-transparent transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#0F392B] hover:bg-[#09231A] text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    <span>Generate Booking Request & Open WhatsApp</span>
                  </button>

                  <div className="text-[11px] text-stone-500 text-center pt-2">
                    No advance payment required online · Our team verifies driver and cab availability before confirming.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
