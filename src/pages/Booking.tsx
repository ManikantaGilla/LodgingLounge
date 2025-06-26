
import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import { hotelsData } from "@/data/hotels";
import { Hotel } from "@/services/hotelService";
import { bookHotel } from "@/services/mongoService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, CreditCard } from "lucide-react";
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
        toast({
          title: "Booking Confirmed!",
          description: "Your reservation has been successfully processed",
        });
        
        // Store booking details in sessionStorage for confirmation page
        sessionStorage.setItem('lastBooking', JSON.stringify({
          bookingId: result.bookingId,
          hotel: hotel.name,
          room: room.name,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          guests,
          total: grandTotal
        }));
        
        // Redirect to confirmation page
        navigate("/booking-confirmation");
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
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    {/* Guest Information */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name*</Label>
                          <Input 
                            id="first-name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name*</Label>
                          <Input 
                            id="last-name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input 
                            id="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Information */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                        <span>Secure payment processing</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card*</Label>
                          <Input 
                            id="card-name" 
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number*</Label>
                          <Input 
                            id="card-number" 
                            placeholder="XXXX XXXX XXXX XXXX"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date*</Label>
                            <Input 
                              id="expiry" 
                              placeholder="MM/YY"
                              value={expiry}
                              onChange={(e) => setExpiry(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV*</Label>
                            <Input 
                              id="cvv" 
                              type="password" 
                              placeholder="XXX"
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : `Complete Booking - $${grandTotal.toFixed(2)}`}
                      </Button>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        By clicking this button, you agree to our terms and conditions.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Booking Summary */}
            <div className="lg:w-80 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                  
                  <div className="mb-4">
                    <img 
                      src={hotel.images[0]} 
                      alt={hotel.name} 
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-medium">{hotel.name}</h4>
                    <p className="text-gray-600 text-sm">{hotel.location}</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3 text-sm">
                    <div className="font-medium">Your Stay</div>
                    <div className="flex justify-between">
                      <span>Room Type:</span>
                      <span>{room.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span>{checkIn ? format(checkIn, "MMM d, yyyy") : "Not specified"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span>{checkOut ? format(checkOut, "MMM d, yyyy") : "Not specified"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Length of stay:</span>
                      <span>{nights} {nights === 1 ? "night" : "nights"}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Room Rate:</span>
                      <span>${room.price} / night</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{nights} {nights === 1 ? "night" : "nights"}:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxes & Fees:</span>
                      <span>${taxesAndFees.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                    <div className="flex">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      <div className="text-sm">
                        <p className="font-medium">Free cancellation</p>
                        <p className="text-gray-600">Until 48 hours before check-in</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
