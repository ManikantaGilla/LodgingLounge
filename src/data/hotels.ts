
import { Hotel } from "@/services/hotelService";

export const hotelsData: Hotel[] = [
  // New York Hotels (7 total)
  {
    id: "1",
    name: "Grand Plaza Hotel",
    description: "Luxury hotel in the heart of Manhattan with stunning city views and world-class amenities.",
    location: "Manhattan, New York",
    rating: 4.8,
    reviews: 1243,
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Rooftop Pool', 'Spa & Wellness Center', 'Fitness Center', 'Restaurant & Bar', '24/7 Room Service'],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "ny-plaza",
    name: "The Plaza New York",
    description: "Iconic luxury hotel overlooking Central Park with world-class amenities and timeless elegance in the heart of Manhattan.",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: 2156,
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Central Park View', 'Luxury Spa', 'Fine Dining', '24/7 Concierge', 'Valet Parking', 'Business Center', 'Room Service'],
    coordinates: {
      lat: 40.7648,
      lng: -73.9808
    }
  },
  {
    id: "ny-highline",
    name: "The High Line Hotel",
    description: "Boutique hotel in Chelsea with historic charm and modern amenities, walking distance to the High Line park.",
    location: "Chelsea, New York",
    rating: 4.6,
    reviews: 892,
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Architecture', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Meeting Rooms', 'Garden Terrace'],
    coordinates: {
      lat: 40.7451,
      lng: -74.0072
    }
  },
  {
    id: "ny-brooklyn",
    name: "Brooklyn Bridge Hotel",
    description: "Charming hotel in historic Brooklyn Heights with stunning Manhattan skyline views.",
    location: "Brooklyn Heights, New York",
    rating: 4.4,
    reviews: 654,
    price: 279,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Manhattan Skyline Views', 'Historic District', 'Restaurant', 'Business Center', 'Parking'],
    coordinates: {
      lat: 40.6962,
      lng: -73.9969
    }
  },
  {
    id: "ny-pod",
    name: "Pod Hotel Times Square",
    description: "Modern budget-friendly hotel in the heart of Times Square with contemporary design.",
    location: "Times Square, New York",
    rating: 4.2,
    reviews: 512,
    price: 189,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Times Square Location', 'Modern Design', 'Rooftop Bar', '24/7 Front Desk'],
    coordinates: {
      lat: 40.7580,
      lng: -73.9855
    }
  },
  {
    id: "ny-arlo",
    name: "Arlo SoHo",
    description: "Boutique hotel in trendy SoHo with industrial-chic design and artistic atmosphere.",
    location: "SoHo, New York",
    rating: 4.5,
    reviews: 687,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Industrial Design', 'Art Gallery', 'Rooftop Terrace', 'Pet Friendly'],
    coordinates: {
      lat: 40.7230,
      lng: -74.0030
    }
  },
  {
    id: "ny-washington",
    name: "Washington Square Hotel",
    description: "Historic boutique hotel in Greenwich Village near Washington Square Park.",
    location: "Greenwich Village, New York",
    rating: 4.3,
    reviews: 456,
    price: 259,
    images: [
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Building', 'Village Location', 'Restaurant', 'Business Center'],
    coordinates: {
      lat: 40.7315,
      lng: -73.9990
    }
  },

  // Miami Hotels (7 total)
  {
    id: "2",
    name: "Ocean View Resort",
    description: "Beachfront resort with stunning ocean views and tropical paradise atmosphere.",
    location: "Miami Beach, Florida",
    rating: 4.6,
    reviews: 892,
    price: 429,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2070"
    ],
    amenities: ['Free WiFi', 'Ocean Views', 'Private Beach', 'Pool & Spa', 'Beachfront Dining', 'Water Sports'],
    coordinates: {
      lat: 25.7907,
      lng: -80.1300
    }
  },
  {
    id: "miami-setai",
    name: "The Setai Miami Beach",
    description: "Ultra-luxury resort with three infinity pools and pristine beachfront location in South Beach.",
    location: "South Beach, Miami",
    rating: 4.8,
    reviews: 1432,
    price: 789,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Three Infinity Pools', 'Direct Beach Access', 'Luxury Spa', 'Fine Dining', 'Butler Service', 'Valet Parking'],
    coordinates: {
      lat: 25.7743,
      lng: -80.1337
    }
  },
  {
    id: "miami-1hotel",
    name: "1 Hotel South Beach",
    description: "Eco-luxury hotel with sustainable design and rooftop pool overlooking the Atlantic Ocean.",
    location: "South Beach, Miami",
    rating: 4.7,
    reviews: 1156,
    price: 549,
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Eco-Friendly', 'Rooftop Pool', 'Beach Access', 'Organic Restaurant', 'Spa Services', 'Fitness Center'],
    coordinates: {
      lat: 25.7804,
      lng: -80.1373
    }
  },
  {
    id: "miami-ritz",
    name: "The Ritz-Carlton Key Biscayne",
    description: "Tropical paradise resort on a private island with pristine beaches and world-class amenities.",
    location: "Key Biscayne, Miami",
    rating: 4.8,
    reviews: 987,
    price: 689,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Private Beach', 'Multiple Pools', 'Golf Course', 'Spa & Wellness', 'Tennis Courts', 'Kids Club'],
    coordinates: {
      lat: 25.6942,
      lng: -80.1558
    }
  },
  {
    id: "miami-standard",
    name: "The Standard Miami",
    description: "Hip waterfront hotel with vibrant nightlife and stunning Biscayne Bay views.",
    location: "Downtown Miami",
    rating: 4.5,
    reviews: 743,
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Waterfront Location', 'Rooftop Bar', 'Spa Services', 'Pool & Jacuzzi', 'Marina Access', 'Restaurant'],
    coordinates: {
      lat: 25.7743,
      lng: -80.1925
    }
  },
  {
    id: "miami-fourseasons",
    name: "Four Seasons Hotel Miami",
    description: "Luxury downtown hotel with panoramic bay and city views, featuring world-class dining and spa.",
    location: "Brickell, Miami",
    rating: 4.9,
    reviews: 1289,
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Panoramic Views', 'Luxury Spa', 'Multiple Restaurants', 'Infinity Pool', 'Concierge Service', 'Valet Parking'],
    coordinates: {
      lat: 25.7657,
      lng: -80.1918
    }
  },
  {
    id: "miami-fontainebleau",
    name: "Fontainebleau Miami Beach",
    description: "Iconic luxury resort with multiple pools, world-class dining, and vibrant nightlife.",
    location: "Mid-Beach, Miami",
    rating: 4.6,
    reviews: 2143,
    price: 459,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Multiple Pools', 'Beach Access', 'Nightclub', 'Spa Services', 'Multiple Restaurants'],
    coordinates: {
      lat: 25.8098,
      lng: -80.1214
    }
  },

  // Los Angeles Hotels (7 total)
  {
    id: "la-beverly",
    name: "The Beverly Hills Hotel",
    description: "Legendary pink palace with classic Hollywood glamour and lush tropical gardens.",
    location: "Beverly Hills, Los Angeles",
    rating: 4.8,
    reviews: 1876,
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Glamour', 'Tropical Gardens', 'Celebrity Hotspot', 'Luxury Spa', 'Fine Dining', 'Pool Cabanas'],
    coordinates: {
      lat: 34.0901,
      lng: -118.4065
    }
  },
  {
    id: "la-chateau",
    name: "Chateau Marmont",
    description: "Iconic bohemian luxury hotel with rock star history and exclusive atmosphere.",
    location: "West Hollywood, Los Angeles",
    rating: 4.7,
    reviews: 1234,
    price: 749,
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Castle', 'Celebrity Haven', 'Garden Pool', 'Restaurant', 'Bar', 'Privacy & Discretion'],
    coordinates: {
      lat: 34.0969,
      lng: -118.3886
    }
  },
  {
    id: "la-standard",
    name: "The Standard Downtown LA",
    description: "Modern hotel with rooftop bar and stunning city views in the heart of downtown.",
    location: "Downtown, Los Angeles",
    rating: 4.4,
    reviews: 892,
    price: 289,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Rooftop Pool', 'City Views', 'Modern Design', 'Fitness Center', 'Restaurant & Bar', 'Business Center'],
    coordinates: {
      lat: 34.0479,
      lng: -118.2584
    }
  },
  {
    id: "la-erwin",
    name: "Hotel Erwin Venice Beach",
    description: "Beachfront boutique hotel with colorful murals and vibrant Venice Beach atmosphere.",
    location: "Venice Beach, Los Angeles",
    rating: 4.3,
    reviews: 656,
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Beachfront Location', 'Rooftop Bar', 'Artistic Design', 'Beach Access', 'Restaurant', 'Pet Friendly'],
    coordinates: {
      lat: 33.9850,
      lng: -118.4695
    }
  },
  {
    id: "la-line",
    name: "The Line Hotel LA",
    description: "Contemporary hotel in Koreatown with Korean-inspired design and rooftop pool.",
    location: "Koreatown, Los Angeles",
    rating: 4.6,
    reviews: 745,
    price: 319,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Korean-Inspired Design', 'Rooftop Pool', 'Multiple Restaurants', 'Nightclub', 'Spa Services', 'Fitness Center'],
    coordinates: {
      lat: 34.0586,
      lng: -118.3086
    }
  },
  {
    id: "la-griffith",
    name: "Griffith Observatory Hotel",
    description: "Boutique hotel near Griffith Observatory with astronomical theme and city views.",
    location: "Los Feliz, Los Angeles",
    rating: 4.2,
    reviews: 523,
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Observatory Views', 'Astronomical Theme', 'Rooftop Deck', 'Fitness Center'],
    coordinates: {
      lat: 34.1184,
      lng: -118.3004
    }
  },
  {
    id: "la-sunset",
    name: "Sunset Tower Hotel",
    description: "Art Deco landmark on the Sunset Strip with old Hollywood glamour and modern luxury.",
    location: "West Hollywood, Los Angeles",
    rating: 4.5,
    reviews: 834,
    price: 459,
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Art Deco Design', 'Sunset Strip Location', 'Pool & Fitness', 'Fine Dining'],
    coordinates: {
      lat: 34.0898,
      lng: -118.3851
    }
  },

  // Colorado Hotels (7 total)
  {
    id: "3",
    name: "Mountain Lodge",
    description: "Cozy mountain retreat with stunning alpine views and world-class skiing nearby.",
    location: "Aspen, Colorado",
    rating: 4.7,
    reviews: 567,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070"
    ],
    amenities: ['Free WiFi', 'Mountain Views', 'Ski Access', 'Spa Services', 'Fine Dining', 'Fireplace Lounge'],
    coordinates: {
      lat: 39.1911,
      lng: -106.8175
    }
  },
  {
    id: "co-broadmoor",
    name: "The Broadmoor",
    description: "Legendary luxury resort in Colorado Springs with golf courses, spa, and mountain adventures.",
    location: "Colorado Springs, Colorado",
    rating: 4.9,
    reviews: 2134,
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Golf Courses', 'Luxury Spa', 'Fine Dining', 'Adventure Activities', 'Tennis Courts', 'Multiple Pools'],
    coordinates: {
      lat: 38.7946,
      lng: -104.8653
    }
  },
  {
    id: "co-jerome",
    name: "Hotel Jerome Aspen",
    description: "Historic luxury hotel in the heart of Aspen with Victorian elegance and modern amenities.",
    location: "Aspen, Colorado",
    rating: 4.8,
    reviews: 1456,
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1597589022928-bb4002c099ec?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Victorian', 'Ski Access', 'Luxury Spa', 'Fine Dining', 'Bar & Lounge', 'Concierge Service'],
    coordinates: {
      lat: 39.1911,
      lng: -106.8175
    }
  },
  {
    id: "co-sebastian",
    name: "The Sebastian Vail",
    description: "Sophisticated alpine resort with direct access to Vail Mountain and luxury amenities.",
    location: "Vail, Colorado",
    rating: 4.7,
    reviews: 987,
    price: 649,
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Ski-in/Ski-out', 'Mountain Views', 'Spa & Wellness', 'Restaurant', 'Fitness Center', 'Pet Friendly'],
    coordinates: {
      lat: 39.6403,
      lng: -106.3742
    }
  },
  {
    id: "co-cheyenne",
    name: "Cheyenne Mountain Resort",
    description: "Mountain resort with golf course, lake, and stunning views of Colorado Springs.",
    location: "Colorado Springs, Colorado",
    rating: 4.5,
    reviews: 743,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Golf Course', 'Lake Activities', 'Mountain Views', 'Spa Services', 'Multiple Restaurants', 'Tennis Courts'],
    coordinates: {
      lat: 38.7334,
      lng: -104.8214
    }
  },
  {
    id: "co-oxford",
    name: "The Oxford Hotel Denver",
    description: "Historic luxury boutique hotel in downtown Denver with Victorian elegance and modern comfort.",
    location: "Downtown, Denver",
    rating: 4.6,
    reviews: 892,
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Boutique', 'Spa & Wellness', 'Fine Dining', 'Business Center', 'Fitness Center', 'Valet Parking'],
    coordinates: {
      lat: 39.7525,
      lng: -105.0008
    }
  },
  {
    id: "co-steamboat",
    name: "Steamboat Grand Hotel",
    description: "Ski-in/ski-out luxury hotel in Steamboat Springs with mountain views and hot springs access.",
    location: "Steamboat Springs, Colorado",
    rating: 4.4,
    reviews: 634,
    price: 459,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Ski Access', 'Hot Springs', 'Mountain Views', 'Pool & Spa', 'Restaurant'],
    coordinates: {
      lat: 40.4850,
      lng: -106.8319
    }
  },

  // Chicago Hotels (7 total)
  {
    id: "chi-ritz",
    name: "The Ritz-Carlton Chicago",
    description: "Luxury hotel on the Magnificent Mile with stunning city and lake views.",
    location: "Magnificent Mile, Chicago",
    rating: 4.8,
    reviews: 1567,
    price: 689,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Magnificent Mile', 'Lake Views', 'Luxury Spa', 'Fine Dining', '24/7 Fitness Center', 'Concierge Service'],
    coordinates: {
      lat: 41.8955,
      lng: -87.6219
    }
  },
  {
    id: "chi-theatre",
    name: "The Chicago Theatre Hotel",
    description: "Historic hotel in the Loop with classic architecture and modern amenities.",
    location: "The Loop, Chicago",
    rating: 4.5,
    reviews: 923,
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Theatre District', 'Business Center', 'Restaurant', 'Fitness Center', 'Meeting Rooms', 'Valet Parking'],
    coordinates: {
      lat: 41.8827,
      lng: -87.6278
    }
  },
  {
    id: "chi-gray",
    name: "Kimpton Gray Hotel",
    description: "Boutique hotel in the Financial District with contemporary design and rooftop bar.",
    location: "Financial District, Chicago",
    rating: 4.7,
    reviews: 786,
    price: 379,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Rooftop Bar', 'Modern Design', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Business Center'],
    coordinates: {
      lat: 41.8796,
      lng: -87.6272
    }
  },
  {
    id: "chi-blackstone",
    name: "The Blackstone Hotel",
    description: "Historic luxury hotel in the South Loop with classic elegance and modern amenities.",
    location: "South Loop, Chicago",
    rating: 4.6,
    reviews: 654,
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Landmark', 'Classic Ballroom', 'Fine Dining', 'Spa Services', 'Fitness Center', 'Business Center'],
    coordinates: {
      lat: 41.8676,
      lng: -87.6251
    }
  },
  {
    id: "chi-zachary",
    name: "Hotel Zachary",
    description: "Modern hotel adjacent to Wrigley Field with sports-themed design and rooftop views.",
    location: "Wrigleyville, Chicago",
    rating: 4.4,
    reviews: 567,
    price: 289,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Wrigley Field Views', 'Sports Bar', 'Rooftop Terrace', 'Fitness Center', 'Restaurant', 'Meeting Rooms'],
    coordinates: {
      lat: 41.9484,
      lng: -87.6553
    }
  },
  {
    id: "chi-palmer",
    name: "The Palmer House Hilton",
    description: "Historic landmark hotel in the Loop with grand architecture and classic luxury.",
    location: "The Loop, Chicago",
    rating: 4.3,
    reviews: 1245,
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Landmark', 'Grand Ballroom', 'Multiple Restaurants', 'Fitness Center'],
    coordinates: {
      lat: 41.8799,
      lng: -87.6270
    }
  },
  {
    id: "chi-peninsula",
    name: "The Peninsula Chicago",
    description: "Luxury hotel on the Magnificent Mile with elegant Asian-inspired service and amenities.",
    location: "Magnificent Mile, Chicago",
    rating: 4.7,
    reviews: 987,
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Asian-Inspired Service', 'Luxury Spa', 'Rooftop Terrace', 'Fine Dining'],
    coordinates: {
      lat: 41.8957,
      lng: -87.6244
    }
  },

  // Palm Springs Hotels (7 total)
  {
    id: "ps-twopalms",
    name: "Two Bunch Palms Resort & Spa",
    description: "Historic desert spa resort with natural hot springs and wellness focus.",
    location: "Desert Hot Springs, California",
    rating: 4.7,
    reviews: 1234,
    price: 449,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Natural Hot Springs', 'Spa & Wellness', 'Desert Views', 'Grotto Pool', 'Restaurant', 'Yoga Classes'],
    coordinates: {
      lat: 33.9614,
      lng: -116.5011
    }
  },
  {
    id: "ps-parker",
    name: "The Parker Palm Springs",
    description: "Whimsical luxury resort with colorful design by Jonathan Adler and multiple pools.",
    location: "Palm Springs, California",
    rating: 4.8,
    reviews: 1456,
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Designer Decor', 'Multiple Pools', 'Spa Services', 'Tennis Courts', 'Fine Dining', 'Pet Friendly'],
    coordinates: {
      lat: 33.8214,
      lng: -116.5420
    }
  },
  {
    id: "ps-laquinta",
    name: "La Quinta Resort & Club",
    description: "Spanish-style resort with golf courses, spa, and mountain views in the Coachella Valley.",
    location: "La Quinta, California",
    rating: 4.6,
    reviews: 987,
    price: 529,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Golf Courses', 'Spanish Architecture', 'Mountain Views', 'Spa Services', 'Tennis Courts', 'Multiple Pools'],
    coordinates: {
      lat: 33.6634,
      lng: -116.3100
    }
  },
  {
    id: "ps-azure",
    name: "Azure Palm Hot Springs Resort",
    description: "Adults-only clothing-optional resort with hot springs and desert tranquility.",
    location: "Desert Hot Springs, California",
    rating: 4.5,
    reviews: 432,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Adults Only', 'Natural Hot Springs', 'Clothing Optional', 'Spa Services', 'Desert Views', 'Wellness Programs'],
    coordinates: {
      lat: 33.9586,
      lng: -116.5008
    }
  },
  {
    id: "ps-miramonte",
    name: "Miramonte Indian Wells Resort & Spa",
    description: "Mediterranean-style resort with championship golf and luxury spa in Indian Wells.",
    location: "Indian Wells, California",
    rating: 4.7,
    reviews: 876,
    price: 579,
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Championship Golf', 'Mediterranean Style', 'Luxury Spa', 'Multiple Restaurants', 'Tennis Courts', 'Fitness Center'],
    coordinates: {
      lat: 33.7175,
      lng: -116.3414
    }
  },
  {
    id: "ps-ace",
    name: "Ace Hotel & Swim Club",
    description: "Hip desert hotel with vintage Americana design and legendary pool parties.",
    location: "Palm Springs, California",
    rating: 4.4,
    reviews: 892,
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Vintage Design', 'Pool Parties', 'Live Music', 'Restaurant', 'Pet Friendly'],
    coordinates: {
      lat: 33.8203,
      lng: -116.5453
    }
  },
  {
    id: "ps-saguaro",
    name: "The Saguaro Palm Springs",
    description: "Colorful boutique hotel with vibrant rainbow design and poolside fun.",
    location: "Palm Springs, California",
    rating: 4.2,
    reviews: 634,
    price: 279,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Colorful Design', 'Pool Complex', 'Spa Services', 'Restaurant', 'Fitness Center'],
    coordinates: {
      lat: 33.8303,
      lng: -116.5419
    }
  },

  // San Francisco Hotels (7 total)
  {
    id: "4",
    name: "Golden Gate Inn",
    description: "Boutique hotel near Golden Gate Park with modern amenities and city charm.",
    location: "San Francisco, California",
    rating: 4.4,
    reviews: 723,
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2070"
    ],
    amenities: ['Free WiFi', 'Golden Gate Views', 'Modern Design', 'Fitness Center', 'Business Center', 'Pet Friendly'],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: "sf-fairmont",
    name: "Fairmont San Francisco",
    description: "Iconic luxury hotel atop Nob Hill with stunning city views and historic grandeur.",
    location: "Nob Hill, San Francisco",
    rating: 4.8,
    reviews: 1789,
    price: 649,
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Historic Landmark', 'City Views', 'Luxury Spa', 'Fine Dining', 'Business Center', 'Valet Parking'],
    coordinates: {
      lat: 37.7923,
      lng: -122.4103
    }
  },
  {
    id: "sf-stregis",
    name: "The St. Regis San Francisco",
    description: "Ultra-luxury hotel in SOMA with contemporary design and world-class amenities.",
    location: "SOMA, San Francisco",
    rating: 4.9,
    reviews: 1234,
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Butler Service', 'Modern Luxury', 'Spa Services', 'Fine Dining', 'Business Center', 'Valet Parking'],
    coordinates: {
      lat: 37.7857,
      lng: -122.4011
    }
  },
  {
    id: "sf-zephyr",
    name: "Hotel Zephyr",
    description: "Nautical-themed boutique hotel at Fishermans Wharf with unique maritime design.",
    location: "Fishermans Wharf, San Francisco",
    rating: 4.4,
    reviews: 892,
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Nautical Theme', 'Waterfront Location', 'Pet Friendly', 'Fitness Center', 'Restaurant', 'Game Room'],
    coordinates: {
      lat: 37.8087,
      lng: -122.4156
    }
  },
  {
    id: "sf-ritz",
    name: "The Ritz-Carlton San Francisco",
    description: "Luxury hotel on Nob Hill with classic elegance and panoramic city views.",
    location: "Nob Hill, San Francisco",
    rating: 4.8,
    reviews: 1456,
    price: 729,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Nob Hill Location', 'City Views', 'Luxury Spa', 'Club Level', 'Fine Dining', 'Concierge Service'],
    coordinates: {
      lat: 37.7919,
      lng: -122.4094
    }
  },
  {
    id: "sf-nikko",
    name: "Hotel Nikko San Francisco",
    description: "Modern Japanese-inspired hotel in Union Square with zen aesthetics and city convenience.",
    location: "Union Square, San Francisco",
    rating: 4.6,
    reviews: 967,
    price: 389,
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Japanese Design', 'Indoor Pool', 'Fitness Center', 'Restaurant', 'Business Center', 'Pet Friendly'],
    coordinates: {
      lat: 37.7863,
      lng: -122.4078
    }
  },
  {
    id: "sf-phoenix",
    name: "The Phoenix Hotel",
    description: "Rock and roll boutique hotel with poolside bar and music history.",
    location: "Tenderloin, San Francisco",
    rating: 4.3,
    reviews: 543,
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Rock & Roll History', 'Poolside Bar', 'Music Venue', 'Pet Friendly', 'Restaurant', 'Unique Decor'],
    coordinates: {
      lat: 37.7834,
      lng: -122.4195
    }
  },

  // India Hotels (7 new hotels)
  {
    id: "india-oberoi-delhi",
    name: "The Oberoi New Delhi",
    description: "Luxury hotel in the diplomatic enclave with contemporary Indian design and world-class amenities.",
    location: "New Delhi, India",
    rating: 4.8,
    reviews: 1654,
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Contemporary Indian Design', 'Luxury Spa', 'Multiple Restaurants', 'Business Center', 'Fitness Center', 'Concierge Service'],
    coordinates: {
      lat: 28.5935,
      lng: 77.2334
    }
  },
  {
    id: "india-leela-mumbai",
    name: "The Leela Palace Mumbai",
    description: "Opulent palace hotel overlooking the Arabian Sea with royal Indian hospitality and modern luxury.",
    location: "Mumbai, India",
    rating: 4.9,
    reviews: 2134,
    price: 520,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Arabian Sea Views', 'Royal Indian Design', 'Luxury Spa', 'Multiple Restaurants', 'Butler Service', 'Business Center'],
    coordinates: {
      lat: 19.0330,
      lng: 72.8619
    }
  },
  {
    id: "india-itc-chennai",
    name: "ITC Grand Chola Chennai",
    description: "Magnificent hotel inspired by Chola architecture with luxury amenities and traditional South Indian hospitality.",
    location: "Chennai, India",
    rating: 4.7,
    reviews: 1432,
    price: 380,
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Chola Architecture', 'Multiple Pools', 'Spa & Wellness', 'Traditional Restaurants', 'Business Center', 'Cultural Activities'],
    coordinates: {
      lat: 12.9886,
      lng: 80.2150
    }
  },
  {
    id: "india-oberoi-bengaluru",
    name: "The Oberoi Bengaluru",
    description: "Contemporary luxury hotel in the Garden City with modern amenities and exceptional service.",
    location: "Bengaluru, India",
    rating: 4.8,
    reviews: 1156,
    price: 420,
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Garden City Views', 'Contemporary Design', 'Spa Services', 'Fine Dining', 'Business Center', 'Fitness Center'],
    coordinates: {
      lat: 12.9698,
      lng: 77.6124
    }
  },
  {
    id: "india-hyatt-kolkata",
    name: "Hyatt Regency Kolkata",
    description: "Elegant hotel in the cultural capital with Bengali heritage and modern luxury amenities.",
    location: "Kolkata, India",
    rating: 4.6,
    reviews: 987,
    price: 340,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Bengali Heritage', 'Cultural Proximity', 'Spa Services', 'Multiple Restaurants', 'Business Center', 'Fitness Center'],
    coordinates: {
      lat: 22.5448,
      lng: 88.3426
    }
  },
  {
    id: "india-jw-jaipur",
    name: "JW Marriott Jaipur Resort & Spa",
    description: "Royal Rajasthani palace resort with traditional architecture and luxury amenities in the Pink City.",
    location: "Jaipur, India",
    rating: 4.9,
    reviews: 1567,
    price: 480,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Royal Rajasthani Architecture', 'Luxury Spa', 'Multiple Pools', 'Traditional Restaurants', 'Cultural Activities', 'Business Center'],
    coordinates: {
      lat: 26.8492,
      lng: 75.8056
    }
  },
  {
    id: "india-vivanta-goa",
    name: "Vivanta Goa Panaji",
    description: "Boutique hotel in the heart of Goa with Portuguese colonial charm and modern amenities.",
    location: "Panaji, Goa, India",
    rating: 4.5,
    reviews: 743,
    price: 290,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: ['Free WiFi', 'Portuguese Colonial', 'River Views', 'Rooftop Pool', 'Goan Cuisine', 'Spa Services', 'Cultural Tours'],
    coordinates: {
      lat: 15.4989,
      lng: 73.8278
    }
  }
];
