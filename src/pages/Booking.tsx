
import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { hotelsData } from "@/data/hotels";
import { Hotel } from "@/services/hotelService";
import { bookHotel } from "@/services/mongoService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking/BookingForm";
import BookingSummary from "@/components/booking/BookingSummary";
import { useToast } from "@/hooks/use-toast";

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
}

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const hotelId = searchParams.get("hotelId");
  const roomId = searchParams.get("roomId");
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");
  const guestsParam = searchParams.get("guests");
  
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [room, setRoom] = useState<RoomType | null>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Parse query parameters
    if (checkInParam) setCheckIn(new Date(checkInParam));
    if (checkOutParam) setCheckOut(new Date(checkOutParam));
    if (guestsParam) setGuests(parseInt(guestsParam) || 1);
    
    // Find hotel and room
    const foundHotel = hotelsData.find(h => h.id === hotelId);
    
    if (foundHotel) {
      setHotel(foundHotel);
      
      // Create mock room types since they're not in the static data
      const mockRoomTypes = [
        {
          id: "deluxe",
          name: "Deluxe Room",
          description: "Comfortable deluxe room with city views",
          price: foundHotel.price,
          features: ["King Bed", "City View", "Air Conditioning", "Mini Bar", "Free WiFi"],
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
        },
        {
          id: "suite",
          name: "Premium Suite",
          description: "Spacious suite with premium amenities",
          price: foundHotel.price + 200,
          features: ["King Bed", "Separate Living Area", "Premium View", "Luxury Amenities"],
          image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop"
        }
      ];

      if (roomId) {
        const foundRoom = mockRoomTypes.find(r => r.id === roomId);
        if (foundRoom) setRoom(foundRoom);
      } else {
        // Default to first room
        setRoom(mockRoomTypes[0]);
      }
    }
    
    // Calculate number of nights
    if (checkInParam && checkOutParam) {
      const start = new Date(checkInParam);
      const end = new Date(checkOutParam);
      const daysStay = differenceInDays(end, start);
      setNights(daysStay > 0 ? daysStay : 1);
    }
  }, [hotelId, roomId, checkInParam, checkOutParam, guestsParam]);

  const totalPrice = room ? room.price * nights : 0;
  const taxesAndFees = totalPrice * 0.12; // 12% taxes and fees
  const grandTotal = totalPrice + taxesAndFees;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!firstName || !lastName || !email || !phone || !cardName || !cardNumber || !expiry || !cvv) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!hotel || !room || !checkIn || !checkOut) {
      toast({
        title: "Booking Error",
        description: "Missing booking details. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Generate a mock user ID for demo purposes
      const mockUserId = "demo-user-" + Math.random().toString(36).substr(2, 9);
      
      const guestInfo = {
        firstName,
        lastName,
        email,
        phone
      };
      
      const paymentInfo = {
        cardName,
        cardNumber: cardNumber.slice(-4), // Store only last 4 digits
        expiry,
        cvv: "***" // Never store actual CVV
      };
      
      const result = await bookHotel(
        hotel.id,
        mockUserId,
        room.id,
        checkIn,
        checkOut,
        guests,
        guestInfo,
        paymentInfo,
        grandTotal
      );
      
      if (result.success) {
        // Generate a booking reference
        const bookingReference = result.bookingId || "BK" + Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
        
        // Store booking details in sessionStorage for confirmation page
        const bookingDetails = {
          bookingId: bookingReference,
          hotel: hotel.name,
          room: room.name,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          guests,
          total: grandTotal,
          guestInfo: {
            firstName,
            lastName,
            email,
            phone
          }
        };
        
        console.log('Storing booking details:', bookingDetails);
        sessionStorage.setItem('lastBooking', JSON.stringify(bookingDetails));
        
        toast({
          title: "Booking Confirmed!",
          description: "Your reservation has been successfully processed",
        });
        
        // Small delay to ensure sessionStorage is set before navigation
        setTimeout(() => {
          navigate("/booking-confirmation");
        }, 100);
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hotel || !room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Booking Details Not Found</h1>
            <Button asChild>
              <Link to="/search">Back to Search</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">Complete Your Booking</h1>
            <p className="text-gray-600">
              You're just a few steps away from confirming your stay at {hotel.name}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Booking Form */}
            <div className="flex-grow">
              <BookingForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                cardName={cardName}
                setCardName={setCardName}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                expiry={expiry}
                setExpiry={setExpiry}
                cvv={cvv}
                setCvv={setCvv}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                grandTotal={grandTotal}
              />
            </div>
            
            {/* Booking Summary */}
            <div className="lg:w-80 flex-shrink-0">
              <BookingSummary
                hotel={hotel}
                room={room}
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                nights={nights}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
