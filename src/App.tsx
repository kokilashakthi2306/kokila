/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { FleetGallery } from './components/FleetGallery';
import { AttractionsSection } from './components/AttractionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactAndBooking } from './components/ContactAndBooking';
import { Footer } from './components/Footer';

export default function App() {
  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    vehicle?: string;
    pickup?: string;
    date?: string;
  }>({
    service: '',
    vehicle: 'Toyota Innova Crysta',
    pickup: '',
    date: '',
  });

  const handleQuickBookFromHero = (data: {
    pickup: string;
    destination: string;
    date: string;
    vehicle: string;
  }) => {
    setBookingPrefill({
      service: data.destination,
      vehicle: data.vehicle,
      pickup: data.pickup,
      date: data.date,
    });
  };

  const handleSelectService = (serviceTitle: string) => {
    setBookingPrefill((prev) => ({
      ...prev,
      service: serviceTitle,
    }));
  };

  const handleSelectVehicle = (vehicleName: string) => {
    setBookingPrefill((prev) => ({
      ...prev,
      vehicle: vehicleName,
    }));
  };

  const handleSelectAttraction = (attractionTitle: string) => {
    setBookingPrefill((prev) => ({
      ...prev,
      service: attractionTitle,
    }));
  };

  const handleScrollToContact = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1F2937]">
      {/* 1. Navigation bar */}
      <Navbar onOpenBooking={handleScrollToContact} />

      {/* Main Content Area in exact required structural order */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onQuickBook={handleQuickBookFromHero} />

        {/* 3. About Us Section */}
        <AboutUs />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Fleet Gallery */}
        <FleetGallery onSelectVehicle={handleSelectVehicle} />

        {/* 6. Ooty Tourist Attractions Section */}
        <AttractionsSection onSelectAttraction={handleSelectAttraction} />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Contact & Booking Section */}
        <ContactAndBooking
          initialService={bookingPrefill.service}
          initialVehicle={bookingPrefill.vehicle}
          initialPickup={bookingPrefill.pickup}
          initialDate={bookingPrefill.date}
        />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
