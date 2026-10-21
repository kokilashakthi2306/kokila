export interface Vehicle {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'tempo' | 'hatchback';
  capacity: string;
  luggage: string;
  acType: string;
  idealFor: string;
  description: string;
  features: string[];
  hillSuitability: string;
  badge?: string;
  defaultImage?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  placesCovered: string[];
  description: string;
  highlights: string[];
  popularFor: string;
}

export interface Attraction {
  id: string;
  name: string;
  category: string;
  distanceFromTown: string;
  timings: string;
  altitude?: string;
  entryFeeApprox: string;
  description: string;
  highlights: string[];
  travelTip: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'suv',
    capacity: '6 - 7 Passengers',
    luggage: '4 Large Bags + 3 Small',
    acType: 'Dual AC with Rear Vents',
    idealFor: 'Families, Ghat Road Touring, VIP Comfort',
    description: 'The undisputed king of mountain highways. Unmatched legroom, plush captain seats, and exceptional hill stability across the Nilgiri hairpin curves.',
    features: ['High Ground Clearance', 'Ergonomic Reclining Seats', 'Quiet Cabin', 'Powerful Hill-Climb Engine', 'Phone Charging Sockets'],
    hillSuitability: 'Excellent for all 36 Hairpin Bends & Kalhatty Ghat',
    badge: 'Most Popular for Sightseeing',
  },
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire Sedan',
    category: 'sedan',
    capacity: '4 Passengers',
    luggage: '2 Large Bags + 2 Handbags',
    acType: 'Climate Controlled AC & Heater',
    idealFor: 'Couples, Solo Travelers, Small Families',
    description: 'Smooth, economic, and extremely comfortable sedan for town sightseeing, Coonoor day excursions, and scenic valley drives.',
    features: ['Fuel Efficient & Budget-Friendly', 'Clean Sanitized Interior', 'Heater for Cold Ooty Mornings', 'Spacious Boot Space'],
    hillSuitability: 'Great for Ooty Town, Botanical Garden, Doddabetta & Pykara',
    badge: 'Best Value for Couples',
  },
  {
    id: 'ertiga-mpv',
    name: 'Maruti Suzuki Ertiga',
    category: 'suv',
    capacity: '6 Passengers',
    luggage: '3 Bags + Hand Luggage',
    acType: 'Front & Roof-Mounted AC',
    idealFor: 'Family Vacations & Medium Groups',
    description: 'Practical, spacious 7-seater MPV offering flexible seating and smooth cornering along Ooty-Kotagiri and Coonoor scenic routes.',
    features: ['Foldable Rear Seats for Extra Luggage', 'Comfortable Headroom', 'Smooth Suspension', 'Individual Seatbelts'],
    hillSuitability: 'Optimal for Coonoor, Kotagiri & Coimbatore Airport Transfers',
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller (12 - 14 Seater)',
    category: 'tempo',
    capacity: '12 - 14 Passengers',
    luggage: 'Ample Dedicated Luggage Bay',
    acType: 'Individual AC Vents & High Roof',
    idealFor: 'Extended Families, Corporate Groups, College Tours',
    description: 'Travel together in style without splitting your group across multiple cars. Pushback reclining bucket seats and panoramic mountain windows.',
    features: ['Push-back Reclining Seats', 'High Ceiling & Wide Aisle', 'Crisp Audio & PA System', 'First Aid & Tool Kit Onboard'],
    hillSuitability: 'Driven exclusively by senior master drivers trained for heavy ghat vehicles',
    badge: 'Ideal for Group Tours',
  },
  {
    id: 'wagon-r',
    name: 'Maruti Suzuki WagonR',
    category: 'hatchback',
    capacity: '3 - 4 Passengers',
    luggage: '1 Large Bag + Hand Luggage',
    acType: 'Front AC & Warm Heater',
    idealFor: 'Budget Sightseeing & Quick Point-to-Point Drops',
    description: 'Tall-boy stance with easy ingress and egress, making it a favorite for quick city hopping and budget-friendly viewpoints.',
    features: ['Budget-Friendly Rates', 'Easy Town Parking & Maneuvering', 'Clean Seats & Floor Mats', 'Experienced Driver'],
    hillSuitability: 'Reliable for Ooty Town Sightseeing and Local Hotel Drops',
  },
];

export const SERVICES_DATA: TourPackage[] = [
  {
    id: 'local-sightseeing',
    title: 'Ooty Local Sightseeing',
    tagline: 'The essential Queen of Hill Stations discovery package',
    duration: 'Full Day (8 - 9 Hours)',
    placesCovered: [
      'Government Botanical Garden',
      'Ooty Lake & Boating',
      'Government Rose Garden',
      'Doddabetta Peak & Telescope House',
      'Tea Factory & Chocolate Museum',
      'Wax World Museum',
    ],
    description: 'Enjoy a leisurely, private tour covering Ooty’s iconic landmarks. Your dedicated cab stays with you at every stop with zero rush.',
    highlights: ['Doorstep hotel pickup & drop', 'Flexible time at each attraction', 'Local shopping recommendations for tea & homemade chocolates'],
    popularFor: 'First-time visitors & families wanting a relaxed day in town',
  },
  {
    id: 'ooty-tourist-packages',
    title: 'Curated 2-Day & 3-Day Ooty Packages',
    tagline: 'Comprehensive itinerary tailored to your schedule',
    duration: '2 to 3 Days Customized Tour',
    placesCovered: [
      'Day 1: Ooty Town & Doddabetta',
      'Day 2: Coonoor & Heritage Toy Train connection',
      'Day 3: Pykara Waterfalls, Pine Forest & Shooting Medu',
    ],
    description: 'Complete end-to-end holiday transport. We coordinate with your hotel check-ins and train schedules so you never have to scramble for transport.',
    highlights: ['Continuous assigned driver for your entire stay', 'Fuel, driver allowance & parking included', 'Customizable pickup times'],
    popularFor: 'Honeymoon couples and vacationing families planning a multi-day stay',
  },
  {
    id: 'coonoor-trips',
    title: 'Coonoor Day Excursions',
    tagline: 'Misty tea gardens, heritage vantage points & heritage sights',
    duration: '6 to 7 Hours',
    placesCovered: [
      "Sim's Park & Botanical Arboreum",
      "Dolphin's Nose Viewpoint",
      "Lamb's Rock & Catherine Falls Vista",
      'Highfield Tea Factory & Oil Distillery',
      'Valley Tea Gardens & Ketti Valley Viewpoint',
    ],
    description: 'Descend to scenic Coonoor (1,850m) through winding emerald tea plantations. Experience colonial heritage gardens and breath-taking ravine lookouts.',
    highlights: ['Option to ride the UNESCO Nilgiri Mountain Toy Train one way', 'Scenic tea tasting stops', 'Stunning photographic viewpoints'],
    popularFor: 'Nature lovers, photographers & tea garden enthusiasts',
  },
  {
    id: 'airport-railway-transfers',
    title: 'Airport & Railway Station Transfers',
    tagline: 'Punctual, stress-free transfers with hill-experienced drivers',
    duration: 'Point-to-Point Direct Transfer',
    placesCovered: [
      'Coimbatore International Airport (CJB) ↔ Ooty (approx. 3.5 hrs)',
      'Mettupalayam Railway Station (Nilgiri Express) ↔ Ooty',
      'Coimbatore Junction (CBE) ↔ Ooty',
      'Mysore Railway Station / Airport ↔ Ooty (approx. 4 hrs)',
      'Bangalore Kempegowda Airport (BLR) ↔ Ooty',
    ],
    description: 'Never worry about missing your flight or train. We track your arrivals and departures in real time and ensure safe, comfortable ghat transit.',
    highlights: ['Flight/train delay accommodation', 'Comfort stops along Mettupalayam/Gudalur ghats', 'Spacious trunk space for family luggage'],
    popularFor: 'Inbound and outbound tourists arriving via plane or train',
  },
  {
    id: 'family-trips-group-tours',
    title: 'Family Trips & Group Touring',
    tagline: 'Travel together with comfort, luggage room, and group camaraderie',
    duration: 'Full Day or Multi-Day Charters',
    placesCovered: [
      'Large group picnics at Pykara Lake',
      'Avalanche Lake & Emerald Dam forest trips',
      'Family-friendly viewpoints & parks',
      'Group dining & authentic Nilgiri restaurant stops',
    ],
    description: 'Whether it is a multi-generational family reunion or friends traveling together, our Innova Crystas and Force Tempo Travellers keep everyone together comfortably.',
    highlights: ['Senior-citizen friendly vehicles with easy entry', 'Ample boot space for strollers and luggage', 'Drivers patient with family needs'],
    popularFor: 'Large families, friend reunions & corporate retreat groups',
  },
  {
    id: 'outstation-taxi-services',
    title: 'Outstation & Wildlife Safari Travel',
    tagline: 'Connecting Ooty to South India’s top hill stations & sanctuaries',
    duration: 'Multi-Day Intercity & Safari Charters',
    placesCovered: [
      'Mudumalai National Park & Theppakadu Elephant Camp',
      'Bandipur Tiger Reserve & Kabini',
      'Wayanad (Kerala) & Sulthan Bathery',
      'Mysore Palace & Chamundi Hills',
      'Kodaikanal Hill Station Tour',
    ],
    description: 'Seamless interstate and inter-district travel with verified permits, toll handling, and drivers who know forest checkpost timings and speed limits.',
    highlights: ['Wildlife sanctuary gate guidance', 'Safe day and permitted-hours travel', 'All-inclusive transparent outstation billing'],
    popularFor: 'Tourists combining Ooty with wildlife safaris or onward South India trips',
  },
];

export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: 'doddabetta-peak',
    name: 'Doddabetta Peak',
    category: 'Vantage Point',
    distanceFromTown: '9 km from Ooty Center',
    timings: '7:00 AM - 6:00 PM',
    altitude: '2,637 meters (Highest in Nilgiris)',
    entryFeeApprox: '₹10 per adult (approx)',
    description: 'Standing at 2,637m, Doddabetta is the highest mountain peak in the Nilgiri range. It houses a Telescope House offering a 360-degree panoramic vista across mist-clad valleys and distant plains.',
    highlights: ['Spectacular sunrise & morning cloud seas', 'Nilgiri biosphere telescope viewing', 'Surrounding pine and rhododendron slopes'],
    travelTip: 'Visit before 10:30 AM to beat the mid-day mountain mist and cloud cover for the clearest valley views.',
  },
  {
    id: 'ooty-lake',
    name: 'Ooty Lake & Boat House',
    category: 'Waterfront & Recreation',
    distanceFromTown: '1.5 km from Ooty Bus Stand',
    timings: '9:00 AM - 6:00 PM',
    entryFeeApprox: '₹13 per person (Boating charges separate)',
    description: 'An iconic 65-acre artificial lake constructed in 1824 by John Sullivan. Surrounded by lofty eucalyptus trees and scenic hills, it offers pedal boats, motor boats, rowing, and cycling along the shore.',
    highlights: ['Pedal boating and row boating with safety jackets', 'Mini train ride along the bank for children', 'Eucalyptus grove promenade and snack stalls'],
    travelTip: 'Evening boating around 4:30 PM offers cool mountain breezes and golden reflections on the water.',
  },
  {
    id: 'botanical-garden',
    name: 'Government Botanical Garden',
    category: 'Heritage & Flora',
    distanceFromTown: '2 km from Ooty Center',
    timings: '7:00 AM - 6:30 PM',
    entryFeeApprox: '₹50 per adult (approx)',
    description: 'Spread over 55 rolling acres on the lower slopes of Doddabetta Peak, this historic garden dates back to 1848. It features over a thousand species of indigenous and exotic plants, fern houses, and a 20-million-year-old fossil tree trunk.',
    highlights: ['Terraced Italian garden with floral borders', '20-million-year-old fossilized tree trunk', 'Ancient conservatory with rare orchids & ferns'],
    travelTip: 'Plan 1.5 to 2 hours to walk through all 6 terraced sections. Wheelchair assistance is available at the entrance.',
  },
  {
    id: 'rose-garden',
    name: 'Government Rose Garden',
    category: 'Floral Sanctuary',
    distanceFromTown: '3 km from Ooty Center',
    timings: '8:30 AM - 6:00 PM',
    entryFeeApprox: '₹40 per adult (approx)',
    description: 'Perched on the scenic slopes of Elk Hill at 2,200 meters, this is India’s largest rose garden. It boasts more than 20,000 varieties of hybrid tea roses, miniature roses, ramblers, and floribundas in five curving terraces.',
    highlights: ['Over 20,000 rose varieties in vibrant blooms', 'Nila Maadam observation platform overlooking Ooty town', 'Picturesque rose arches and pergolas'],
    travelTip: 'Best visited during morning hours when flowers are fresh and glistening with dew. Great photo-op for families.',
  },
  {
    id: 'tea-estates',
    name: 'Nilgiri Tea Estates & Tea Museum',
    category: 'Plantation & Culture',
    distanceFromTown: '4.5 km from Ooty Center',
    timings: '9:00 AM - 6:30 PM',
    entryFeeApprox: '₹10 - ₹25 per person',
    description: 'Lush terraced tea plantations stretch as far as the eye can see across the undulating Nilgiri hills. Visit an operating tea factory to witness traditional orthodox and CTC tea processing and taste freshly brewed Nilgiri mountain tea.',
    highlights: ['Guided tour of tea leaves withering, curling & drying', 'Complimentary fresh cardamon and green tea tasting', 'Direct factory counter to purchase authentic Nilgiri tea & homemade chocolates'],
    travelTip: 'Don’t miss walking into the designated tea plantation trails for iconic photo shoots among the tea bushes.',
  },
  {
    id: 'pykara-falls',
    name: 'Pykara Falls & Pykara Lake',
    category: 'Waterfalls & Lake',
    distanceFromTown: '21 km from Ooty on Mysore Road',
    timings: '8:30 AM - 5:30 PM',
    entryFeeApprox: '₹10 entry (Speed boating charges separate)',
    description: 'Sacred to the Toda indigenous tribe, the Pykara River cascades dramatically over two distinct tiers of rocks before flowing into Pykara Lake. The boat house here features thrilling speed boat rides across tranquil forest waters.',
    highlights: ['Dual-stage roaring waterfalls during and after monsoons', 'Speed boat and motor boat rides in pristine lake reservoir', 'Scenic pine forest drive en route through Wenlock Downs'],
    travelTip: 'Combine Pykara with Shooting Medu (Wenlock Downs) and 9th Mile Pine Forest for an unforgettable half-day road trip.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Mountain & Ghat Drivers',
    description: 'All our drivers have years of dedicated experience navigating Nilgiri steep inclines, 36 hairpin bends of Kalhatty, misty morning curves, and heavy rain conditions safely.',
  },
  {
    title: 'Doorstep Pickup & Zero Delays',
    description: 'We pick you up directly from your Ooty hotel, homestay, resort, railway station, or bus terminal at the exact minute requested. Punctuality is our core promise.',
  },
  {
    title: 'Transparent Pricing, No Surprises',
    description: 'Clear, upfront quotes with driver allowances and tolls clearly stated. No sudden last-minute price hikes or deceptive charges midway through your tour.',
  },
  {
    title: 'Sanitized, Spotless & Heated Cabs',
    description: 'Every vehicle undergoes thorough cleaning before dispatch. Equipped with functional heaters for chilly Ooty mornings and comfortable hill suspension.',
  },
  {
    title: 'Flexible & Personalized Itineraries',
    description: 'You are never bound to a rushed schedule. Spend as much time as you desire admiring a viewpoint or enjoying fresh Ooty tea with your family.',
  },
  {
    title: 'Direct Phone & WhatsApp Booking',
    description: 'No complicated apps or wait times. Speak directly with local travel coordinators on 7868833712 or 6380120276 for immediate confirmation.',
  },
];

export const FAQS = [
  {
    q: 'How do I book a taxi with Shaisha Tours & Travels?',
    a: 'Simply call us at 7868833712 or 6380120276, or tap the WhatsApp button to message us directly. You can also fill out the quick booking form on this page with your travel details.',
  },
  {
    q: 'Can we customize our Ooty sightseeing spots?',
    a: 'Absolutely. We specialize in customized tourist packages. If you want to spend extra time at Pykara Lake, skip a museum, or add Coonoor viewpoints, we tailor the day to your preference.',
  },
  {
    q: 'Are your cabs safe for steep Nilgiri ghat roads?',
    a: 'Yes! Our fleet is meticulously inspected, tires are maintained for wet and steep road grip, and every driver holds verified commercial hill driving credentials with years of Nilgiri experience.',
  },
  {
    q: 'Do you provide pickup from Coimbatore Airport or Mettupalayam Railway Station?',
    a: 'Yes, we provide round-the-clock airport transfers from Coimbatore International Airport (CJB) and railway station pickups from Mettupalayam, Coimbatore Junction, and Mysore.',
  },
  {
    q: 'Can we hire a taxi for multi-day outstation trips like Mudumalai or Wayanad?',
    a: 'Yes, we cater to wildlife safaris in Mudumalai and Bandipur, as well as extended journeys to Wayanad, Mysore, Bangalore, and Kodaikanal.',
  },
];
