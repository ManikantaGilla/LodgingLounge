
export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  images: string[];
  amenities: string[];
  roomTypes: {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
    image: string;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const HOTELS_DATA: Hotel[] = [
  {
    id: "hotel-1",
    name: "The Grand Plaza Hotel",
    description: "Experience luxury and comfort at The Grand Plaza Hotel, located in the heart of downtown New York. Our elegant rooms offer breathtaking city views and our amenities include a rooftop pool, spa, and 5-star restaurant. Perfect for business travelers and tourists alike.",
    location: "Downtown, New York",
    rating: 4.8,
    reviews: 1243,
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Rooftop Pool",
      "Spa & Wellness Center",
      "Fitness Center",
      "Restaurant & Bar",
      "24/7 Room Service",
      "Business Center",
      "Concierge Service",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Deluxe King Room",
        description: "Spacious room with king-sized bed and city view",
        price: 299,
        features: ["King Bed", "City View", "40m²", "Air Conditioning", "Minibar"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Executive Suite",
        description: "Luxury suite with separate living area and panoramic views",
        price: 499,
        features: ["King Bed", "Separate Living Area", "Panoramic View", "65m²", "Jacuzzi"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-3",
        name: "Double Queen Room",
        description: "Comfortable room with two queen beds",
        price: 349,
        features: ["2 Queen Beds", "City View", "45m²", "Air Conditioning", "Work Desk"],
        image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "hotel-2",
    name: "Seaside Resort & Spa",
    description: "Escape to our beachfront resort and enjoy the soothing sounds of the ocean from your private balcony. Our resort features multiple swimming pools, a world-class spa, and direct beach access. Perfect for a relaxing getaway.",
    location: "Oceanfront, Miami",
    rating: 4.7,
    reviews: 865,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Beach Access",
      "Multiple Swimming Pools",
      "Spa & Wellness Center",
      "Ocean-view Restaurant",
      "Water Sports",
      "Kids Club",
      "Fitness Center",
      "Poolside Bar"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Ocean View Room",
        description: "Bright room with stunning ocean views and private balcony",
        price: 389,
        features: ["King Bed", "Ocean View", "Private Balcony", "35m²", "Air Conditioning"],
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Beach Villa",
        description: "Private villa steps away from the beach",
        price: 789,
        features: ["King Bed", "Direct Beach Access", "Private Pool", "85m²", "Kitchenette"],
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    }
  },
  {
    id: "hotel-3",
    name: "Urban Loft Hotel",
    description: "Experience the vibrant energy of Los Angeles at our boutique hotel located in the artistic district. Our modern loft-style rooms feature industrial-chic design and all the comforts of home. Walk to trendy restaurants, galleries, and shops.",
    location: "Arts District, Los Angeles",
    rating: 4.5,
    reviews: 607,
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Rooftop Bar",
      "Artistic Lounge",
      "Coffee Shop",
      "Bicycle Rental",
      "Pet Friendly",
      "Co-working Space",
      "Fitness Room",
      "Artisanal Breakfast"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Studio Loft",
        description: "Open-concept studio with modern industrial design",
        price: 249,
        features: ["Queen Bed", "City View", "30m²", "High Ceilings", "Smart TV"],
        image: "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Artist Suite",
        description: "Spacious suite with separate living area and artistic elements",
        price: 399,
        features: ["King Bed", "Separate Living Area", "55m²", "Local Artwork", "Rain Shower"],
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: "hotel-4",
    name: "Mountain View Lodge",
    description: "Nestled in the heart of the mountains, our rustic-luxury lodge offers breathtaking views and outdoor adventures right at your doorstep. Enjoy hiking, skiing, and nature while retreating to comfort and warmth.",
    location: "Mountain Range, Colorado",
    rating: 4.9,
    reviews: 423,
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597589022928-bb4002c099ec?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Fireplace Lounge",
      "Hot Tub",
      "Ski Storage",
      "Mountain View Restaurant",
      "Adventure Concierge",
      "Spa Services",
      "Complimentary Breakfast",
      "Hiking Trails"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Mountain View Room",
        description: "Cozy room with stunning mountain views",
        price: 329,
        features: ["Queen Bed", "Mountain View", "Fireplace", "25m²", "Heated Floors"],
        image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Luxury Cabin",
        description: "Stand-alone cabin with premium amenities and privacy",
        price: 589,
        features: ["King Bed", "Panoramic Views", "Private Deck", "75m²", "Full Kitchen"],
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 39.5501,
      lng: -105.7821
    }
  },
  {
    id: "hotel-5",
    name: "The Landmark Hotel",
    description: "Stay in our historic hotel that combines old-world charm with modern amenities. Located in the heart of Chicago, our establishment has hosted celebrities and dignitaries for over a century while continuously evolving to meet the needs of today's travelers.",
    location: "Downtown, Chicago",
    rating: 4.6,
    reviews: 1087,
    price: 279,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Historic Ballroom",
      "Fine Dining Restaurant",
      "Afternoon Tea Service",
      "Concierge",
      "Fitness Center",
      "Business Center",
      "Valet Parking",
      "Luxury Toiletries"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Classic Room",
        description: "Elegant room with traditional decor and modern comforts",
        price: 279,
        features: ["Queen Bed", "City View", "28m²", "Marble Bathroom", "Work Desk"],
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Heritage Suite",
        description: "Luxurious suite with separate living area and historic touches",
        price: 459,
        features: ["King Bed", "Corner Location", "55m²", "Claw-foot Bathtub", "Living Room"],
        image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: "hotel-6",
    name: "Desert Oasis Resort",
    description: "Escape to our luxurious desert retreat where modern design meets natural beauty. Our resort offers spectacular views of the surrounding landscape, multiple pools, and a world-class spa focused on relaxation and rejuvenation.",
    location: "Palm Springs, California",
    rating: 4.7,
    reviews: 532,
    price: 359,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "3 Swimming Pools",
      "Desert Spa",
      "Yoga Classes",
      "Farm-to-table Restaurant",
      "Pool Bar",
      "Tennis Courts",
      "Star Gazing Deck",
      "Desert Excursions"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Desert View Room",
        description: "Modern room with views of the desert landscape",
        price: 359,
        features: ["King Bed", "Desert View", "Private Patio", "32m²", "Outdoor Shower"],
        image: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Pool Bungalow",
        description: "Private bungalow with direct pool access",
        price: 599,
        features: ["King Bed", "Pool Access", "Hammock", "50m²", "Outdoor Bathtub"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 33.8303,
      lng: -116.5453
    }
  },
  {
    id: "hotel-7",
    name: "The Metropolitan",
    description: "Experience modern luxury in the heart of the city. Our sleek, contemporary hotel offers spacious rooms with floor-to-ceiling windows, a rooftop infinity pool with panoramic views, and multiple dining options to satisfy every palate.",
    location: "Midtown, New York",
    rating: 4.6,
    reviews: 1358,
    price: 319,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Rooftop Infinity Pool",
      "24/7 Fitness Center",
      "Multiple Restaurants",
      "Sky Lounge",
      "Spa Services",
      "Meeting Spaces",
      "Concierge",
      "Express Check-in/out"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "City View Room",
        description: "Modern room with stunning city views through floor-to-ceiling windows",
        price: 319,
        features: ["King Bed", "City View", "Floor-to-ceiling Windows", "38m²", "Smart Home Controls"],
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Sky Suite",
        description: "High-floor suite with panoramic views and luxury amenities",
        price: 589,
        features: ["King Bed", "Panoramic Views", "Separate Living Area", "65m²", "Free Minibar"],
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 40.7549,
      lng: -73.9840
    }
  },
  {
    id: "hotel-8",
    name: "Harbor View Hotel",
    description: "Enjoy the perfect waterfront getaway at our elegant hotel overlooking the harbor. Watch boats come and go from your private balcony, dine on fresh seafood at our waterfront restaurant, and explore the charming coastal town just steps from our door.",
    location: "Harbor District, San Francisco",
    rating: 4.5,
    reviews: 892,
    price: 289,
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Harbor-view Restaurant",
      "Waterfront Terrace",
      "Fitness Center",
      "Bicycle Rental",
      "Sailing Excursions",
      "Spa Services",
      "Meeting Rooms",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Harbor View Room",
        description: "Comfortable room with views of the bustling harbor",
        price: 289,
        features: ["Queen Bed", "Harbor View", "Private Balcony", "30m²", "Binoculars Provided"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Captain's Suite",
        description: "Premium corner suite with panoramic water views",
        price: 489,
        features: ["King Bed", "Panoramic Views", "Telescope", "60m²", "Wet Bar"],
        image: "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 37.8199,
      lng: -122.4783
    }
  },
  {
    id: "hotel-9",
    name: "The Taj Palace",
    description: "Experience the epitome of Indian luxury at The Taj Palace. Located in the heart of New Delhi, this iconic hotel combines traditional Indian hospitality with modern amenities. Featuring stunning architecture, world-class restaurants, and spectacular views of the city.",
    location: "New Delhi, India",
    rating: 4.9,
    reviews: 1876,
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Multiple Restaurants",
      "Luxury Spa",
      "Outdoor Pool",
      "Butler Service",
      "Business Center",
      "Concierge",
      "Valet Parking",
      "Traditional Indian Wellness Center"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Luxury Room",
        description: "Elegant room with city views and traditional Indian decor",
        price: 399,
        features: ["King Bed", "City View", "42m²", "Mini Bar", "Work Desk"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Palace Suite",
        description: "Opulent suite with separate living area and butler service",
        price: 899,
        features: ["King Bed", "Panoramic Views", "Living Room", "85m²", "Private Butler"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    }
  },
  {
    id: "hotel-10",
    name: "Oberoi Udaivilas",
    description: "Set on the banks of Lake Pichola, this luxury resort offers stunning views of the City Palace and Lake Palace. Experience royal Rajasthani hospitality with modern comforts in this palatial property.",
    location: "Udaipur, India",
    rating: 4.8,
    reviews: 1245,
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Lakeside Pool",
      "Ayurvedic Spa",
      "Private Lake Access",
      "Heritage Walks",
      "Yoga Classes",
      "Multiple Restaurants",
      "Cultural Activities",
      "Private Boat Tours"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Premier Lake View Room",
        description: "Elegant room with stunning lake and palace views",
        price: 599,
        features: ["King Bed", "Lake View", "Private Terrace", "55m²", "Semi-private Pool"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Kohinoor Suite",
        description: "Palatial suite with private pool and lake views",
        price: 1299,
        features: ["King Bed", "Private Pool", "Butler Service", "100m²", "Private Dining"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 24.5854,
      lng: 73.6835
    }
  },
  {
    id: "hotel-11",
    name: "The Leela Palace",
    description: "Located in the bustling heart of Bengaluru's business district, The Leela Palace combines traditional grandeur with contemporary luxury. Experience world-class dining, wellness, and hospitality.",
    location: "Bengaluru, India",
    rating: 4.7,
    reviews: 1532,
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "Free WiFi",
      "Rooftop Pool",
      "Spa & Wellness",
      "Multiple Restaurants",
      "Business Center",
      "Art Gallery",
      "24/7 Fitness Center",
      "Concierge",
      "Library Lounge"
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Royal Club Room",
        description: "Modern luxury room with city views and club access",
        price: 349,
        features: ["King Bed", "Club Lounge Access", "40m²", "City View", "Work Station"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "room-2",
        name: "Luxury Suite",
        description: "Spacious luxury suite with premium amenities and panoramic city views",
        price: 629,
        features: ["King Bed", "Panoramic City Views", "Separate Living Area", "70m²", "Premium Amenities"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    }
  }
];
