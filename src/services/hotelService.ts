
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

    return (data || []).map(hotel => ({
      ...hotel,
      coordinates: typeof hotel.coordinates === 'string' 
        ? JSON.parse(hotel.coordinates) 
        : hotel.coordinates
    }));
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

    if (!data) return null;

    return {
      ...data,
      coordinates: typeof data.coordinates === 'string' 
        ? JSON.parse(data.coordinates) 
        : data.coordinates
    };
  } catch (error) {
    console.error('Error in fetchHotelById:', error);
    return null;
  }
};

export const fetchRoomTypesByHotelId = async (hotelId: string): Promise<RoomType[]> => {
  try {
    const { data, error } = await supabase
      .from('room_types')
      .select('*')
      .eq('hotel_id', hotelId)
      .order('price', { ascending: true });

    if (error) {
      console.error('Error fetching room types:', error);
      // If no room types exist in DB, return mock data
      const mockRoomTypes = [
        {
          id: "deluxe",
          hotel_id: hotelId,
          name: "Deluxe Room",
          description: "Comfortable deluxe room with city views",
          price: 199,
          features: ["King Bed", "City View", "Air Conditioning", "Mini Bar", "Free WiFi"],
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
        },
        {
          id: "suite",
          hotel_id: hotelId,
          name: "Premium Suite",
          description: "Spacious suite with premium amenities",
          price: 299,
          features: ["King Bed", "Separate Living Area", "Premium View", "Luxury Amenities"],
          image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
        }
      ];
      return mockRoomTypes;
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchRoomTypesByHotelId:', error);
    // Return mock data on error
    const mockRoomTypes = [
      {
        id: "deluxe",
        hotel_id: hotelId,
        name: "Deluxe Room",
        description: "Comfortable deluxe room with city views",
        price: 199,
        features: ["King Bed", "City View", "Air Conditioning", "Mini Bar", "Free WiFi"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: "suite",
        hotel_id: hotelId,
        name: "Premium Suite",
        description: "Spacious suite with premium amenities",
        price: 299,
        features: ["King Bed", "Separate Living Area", "Premium View", "Luxury Amenities"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
      }
    ];
    return mockRoomTypes;
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

    if (filters.minPrice !== undefined) {
      query = query.gte('price', filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      query = query.lte('price', filters.maxPrice);
    }

    const { data, error } = await query.order('rating', { ascending: false });

    if (error) {
      console.error('Error searching hotels:', error);
      throw error;
    }

    let results = (data || []).map(hotel => ({
      ...hotel,
      coordinates: typeof hotel.coordinates === 'string' 
        ? JSON.parse(hotel.coordinates) 
        : hotel.coordinates
    }));

    // Filter by amenities if provided
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
