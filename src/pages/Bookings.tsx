
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, ChevronRight, Search } from "lucide-react";
import { format } from "date-fns";

// Mock booking data - In a real app, this would come from an API
const mockBookings = [
  {
    id: "booking-1",
    hotelId: "hotel-1",
    hotelName: "Grand Plaza Hotel",
    location: "New York, NY",
    checkIn: new Date("2025-05-10"),
    checkOut: new Date("2025-05-13"),
    guests: 2,
    roomType: "Deluxe King",
    price: 349,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "booking-2",
    hotelId: "hotel-2",
    hotelName: "Ocean View Resort",
    location: "Miami, FL",
    checkIn: new Date("2025-06-21"),
    checkOut: new Date("2025-06-28"),
    guests: 4,
    roomType: "Ocean Suite",
    price: 529,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "booking-3",
    hotelId: "hotel-3",
    hotelName: "Mountain Lodge",
    location: "Aspen, CO",
    checkIn: new Date("2024-12-21"),
    checkOut: new Date("2024-12-27"),
    guests: 2,
    roomType: "Cabin Suite",
    price: 419,
    status: "completed",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070",
  },
];

// Helper function for styling booking status badges
const getBookingStatusStyle = (status: string) => {
  switch (status) {
    case "upcoming":
      return "bg-green-100 text-green-800";
    case "completed":
      return "bg-gray-100 text-gray-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const BookingsPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [bookings, setBookings] = useState(mockBookings);
  
  useEffect(() => {
    // In a real app, fetch bookings from API
    console.log("Fetching bookings for user...");
  }, []);
  
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }
  
  const upcomingBookings = bookings.filter(booking => booking.status === "upcoming");
  const pastBookings = bookings.filter(booking => booking.status === "completed");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-6">My Bookings</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList>
              <TabsTrigger value="upcoming">
                Upcoming
                {upcomingBookings.length > 0 && (
                  <Badge className="ml-2 bg-primary">{upcomingBookings.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="past">Past Stays</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-6">
              {upcomingBookings.length > 0 ? (
                <div className="space-y-6">
                  {upcomingBookings.map(booking => (
                    <BookingCard 
                      key={booking.id} 
                      booking={booking} 
                      getBookingStatusStyle={getBookingStatusStyle}
                    />
                  ))}
                </div>
              ) : (
                <EmptyBookingState />
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-6">
              {pastBookings.length > 0 ? (
                <div className="space-y-6">
                  {pastBookings.map(booking => (
                    <BookingCard 
                      key={booking.id} 
                      booking={booking} 
                      getBookingStatusStyle={getBookingStatusStyle}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">You don't have any past bookings yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface BookingCardProps {
  booking: typeof mockBookings[0];
  getBookingStatusStyle: (status: string) => string;
}

const BookingCard = ({ booking, getBookingStatusStyle }: BookingCardProps) => {
  const totalNights = Math.ceil((booking.checkOut.getTime() - booking.checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = booking.price * totalNights;
  
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-40 md:h-auto">
          <img 
            src={booking.image} 
            alt={booking.hotelName} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex-grow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-1">{booking.hotelName}</h3>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{booking.location}</span>
              </div>
            </div>
            <Badge className={getBookingStatusStyle(booking.status)}>
              {booking.status === "upcoming" ? "Upcoming" : "Completed"}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="flex items-center text-gray-500 mb-1">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>Check-in</span>
              </div>
              <p className="font-medium">{format(booking.checkIn, "MMM d, yyyy")}</p>
            </div>
            
            <div>
              <div className="flex items-center text-gray-500 mb-1">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>Check-out</span>
              </div>
              <p className="font-medium">{format(booking.checkOut, "MMM d, yyyy")}</p>
            </div>
            
            <div>
              <div className="flex items-center text-gray-500 mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span>Guests</span>
              </div>
              <p className="font-medium">{booking.guests} {booking.guests === 1 ? "Person" : "People"}</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-gray-500">Room Type</div>
              <div className="font-medium">{booking.roomType}</div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="text-gray-500 mb-1">Total Price</div>
              <div className="text-xl font-semibold text-primary">${totalPrice}</div>
              <div className="text-sm text-gray-500">${booking.price} × {totalNights} nights</div>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button asChild variant="outline" className="mr-2">
              <Link to={`/hotel/${booking.hotelId}`}>View Hotel</Link>
            </Button>
            
            {booking.status === "upcoming" && (
              <Button asChild>
                <Link to={`/booking-details/${booking.id}`}>
                  Manage Booking <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const EmptyBookingState = () => (
  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
      <CalendarDays className="h-8 w-8 text-gray-400" />
    </div>
    <h2 className="text-xl font-medium mb-2">No Upcoming Bookings</h2>
    <p className="text-gray-500 mb-6 max-w-md mx-auto">
      You don't have any upcoming hotel reservations at the moment. Start by exploring available hotels.
    </p>
    <Button asChild>
      <Link to="/search">
        <Search className="h-4 w-4 mr-2" />
        Find Hotels
      </Link>
    </Button>
  </div>
);

export default BookingsPage;
