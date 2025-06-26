
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export interface HotelData {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
}

export interface BookingData {
  id?: string;
  hotel_id: string;
  user_id: string;
  room_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  guest_info: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  payment_info: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
  };
  total_amount: number;
  status: string;
  created_at?: string;
}

export const saveToFavorites = async (userId: string, hotelId: string): Promise<boolean> => {
  try {
    // In a real implementation, you would save to a favorites table
    console.log(`Saving hotel ${hotelId} to favorites for user ${userId}`);
    return true;
  } catch (error) {
    console.error('Error saving to favorites:', error);
    toast('Failed to save to favorites. Please try again.');
    return false;
  }
};

export const removeFromFavorites = async (userId: string, hotelId: string): Promise<boolean> => {
  try {
    // In a real implementation, you would remove from a favorites table
    console.log(`Removing hotel ${hotelId} from favorites for user ${userId}`);
    return true;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    toast('Failed to remove from favorites. Please try again.');
    return false;
  }
};

export const getFavorites = async (userId: string): Promise<string[]> => {
  try {
    // In a real implementation, you would fetch from a favorites table
    console.log(`Getting favorites for user ${userId}`);
    return [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    toast('Failed to load favorites. Please try again.');
    return [];
  }
};

export const searchHotels = async (
  location: string, 
  checkIn?: Date, 
  checkOut?: Date, 
  guests?: number
): Promise<HotelData[]> => {
  try {
    const { data: hotels, error } = await supabase
      .from('hotels')
      .select('*')
      .ilike('location', `%${location}%`);

    if (error) {
      throw error;
    }

    return (hotels || []).map(hotel => ({
      id: hotel.id,
      name: hotel.name,
      location: hotel.location,
      description: hotel.description || '',
      price: hotel.price,
      rating: hotel.rating,
      reviews: hotel.reviews,
      images: hotel.images
    }));
  } catch (error) {
    console.error('Error searching hotels:', error);
    toast('Failed to search hotels. Please try again.');
    return [];
  }
};

export const bookHotel = async (
  hotelId: string,
  userId: string,
  roomId: string,
  checkIn: Date,
  checkOut: Date,
  guests: number,
  guestInfo: any,
  paymentInfo: any,
  totalAmount: number
): Promise<{ success: boolean; bookingId?: string }> => {
  try {
    console.log('Booking hotel with data:', {
      hotelId,
      userId,
      roomId,
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      guests,
      guestInfo,
      totalAmount
    });

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        user_id: userId,
        room_id: roomId,
        check_in: checkIn.toISOString().split('T')[0],
        check_out: checkOut.toISOString().split('T')[0],
        status: 'confirmed'
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase booking error:', error);
      throw error;
    }

    toast('Booking confirmed successfully!');
    return { 
      success: true, 
      bookingId: data.id 
    };
  } catch (error) {
    console.error('Error booking hotel:', error);
    toast('Failed to book hotel. Please try again.');
    return { success: false };
  }
};

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    console.log(`Subscribing email ${email} to newsletter`);
    toast('Successfully subscribed to newsletter!');
    return true;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    toast('Failed to subscribe. Please try again.');
    return false;
  }
};

export default async function connectToMongoDB() {
  // This function is no longer needed since we're using Supabase
  console.log("Using Supabase instead of MongoDB");
}
