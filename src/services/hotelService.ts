
import { supabase } from "@/integrations/supabase/client";

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
  coordinates: {
    lat: number;
    lng: number;
  };
  created_at?: string;
  updated_at?: string;
}

export interface RoomType {
  id: string;
  hotel_id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  created_at?: string;
}

// Fallback data for hotels to ensure they work with the interface
const getHotelFallbackData = (hotel: any): Hotel => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop'
  ];

  const defaultAmenities = ['Free WiFi', 'Room Service', 'Parking'];

  return {
    id: hotel.id,
    name: hotel.name || 'Hotel',
    description: hotel.description || 'A comfortable hotel',
    location: hotel.location || 'Unknown Location',
    rating: 4.5, // Default rating
    reviews: 150, // Default review count
    price: 199, // Default price
    images: defaultImages,
    amenities: defaultAmenities,
    coordinates: { lat: 40.7128, lng: -74.0060 }, // Default to NYC
    created_at: hotel.created_at,
    updated_at: hotel.updated_at
  };
};

export const fetchHotels = async (): Promise<Hotel[]> => {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching hotels:', error);
      throw error;
    }

    return (data || []).map(hotel => getHotelFallbackData(hotel));
  } catch (error) {
    console.error('Error in fetchHotels:', error);
    throw error;
  }
};

export const fetchHotelById = async (id: string): Promise<Hotel | null> => {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching hotel by id:', error);
      return null;
    }

    return data ? getHotelFallbackData(data) : null;
  } catch (error) {
    console.error('Error in fetchHotelById:', error);
    return null;
  }
};

export const fetchRoomTypesByHotelId = async (hotelId: string): Promise<RoomType[]> => {
  try {
    // Since room_types table doesn't exist yet, return mock data for now
    const mockRoomTypes: RoomType[] = [
      {
        id: `room-${hotelId}-1`,
        hotel_id: hotelId,
        name: 'Standard Room',
        description: 'Comfortable room with modern amenities',
        price: 199,
        features: ['Queen Bed', 'City View', '25m²', 'Air Conditioning'],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
        created_at: new Date().toISOString()
      },
      {
        id: `room-${hotelId}-2`,
        hotel_id: hotelId,
        name: 'Deluxe Suite',
        description: 'Spacious suite with premium amenities',
        price: 299,
        features: ['King Bed', 'Ocean View', '45m²', 'Balcony', 'Minibar'],
        image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop',
        created_at: new Date().toISOString()
      }
    ];

    return mockRoomTypes;
  } catch (error) {
    console.error('Error in fetchRoomTypesByHotelId:', error);
    throw error;
  }
};

export const searchHotels = async (filters: {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
}): Promise<Hotel[]> => {
  try {
    let query = supabase.from('hotels').select('*');

    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching hotels:', error);
      throw error;
    }

    let results = (data || []).map(hotel => getHotelFallbackData(hotel));

    // Apply client-side filtering for price and amenities since database doesn't have these fields yet
    if (filters.minPrice !== undefined) {
      results = results.filter(hotel => hotel.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      results = results.filter(hotel => hotel.price <= filters.maxPrice!);
    }

    if (filters.amenities && filters.amenities.length > 0) {
      results = results.filter(hotel => 
        filters.amenities!.every(amenity => 
          hotel.amenities.some((a: string) => a.toLowerCase().includes(amenity.toLowerCase()))
        )
      );
    }

    return results;
  } catch (error) {
    console.error('Error in searchHotels:', error);
    throw error;
  }
};
