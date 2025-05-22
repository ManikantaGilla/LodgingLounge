
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Users, ArrowLeft, Phone, Mail, AlertCircle } from "lucide-react";
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
    confirmation: "BK12345678",
    contactInfo: {
      phone: "+1 (212) 555-1234",
      email: "reservations@grandplaza.com",
    },
    policies: {
      checkInTime: "3:00 PM",
      checkOutTime: "11:00 AM",
      cancellation: "Free cancellation until 48 hours before check-in.",
    }
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
    confirmation: "BK23456789",
    contactInfo: {
      phone: "+1 (305) 555-2345",
      email: "reservations@oceanviewresort.com",
    },
    policies: {
      checkInTime: "4:00 PM",
      checkOutTime: "10:00 AM",
      cancellation: "Free cancellation until 72 hours before check-in.",
    }
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
    confirmation: "BK34567890",
    contactInfo: {
      phone: "+1 (970) 555-3456",
      email: "reservations@mountainlodge.com",
    },
    policies: {
      checkInTime: "3:00 PM",
      checkOutTime: "11:00 AM",
      cancellation: "Free cancellation until 7 days before check-in.",
    }
  },
];

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

const BookingDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }
  
  // Find booking by ID - In a real app, fetch from API
  const booking = mockBookings.find(b => b.id === id);
  
  if (!booking) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="container max-w-4xl">
            <Link to="/bookings" className="flex items-center text-primary mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to bookings
            </Link>
            
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-xl font-medium mb-2">Booking Not Found</h2>
              <p className="text-gray-500 mb-6">
                Sorry, we couldn't find the booking you're looking for.
              </p>
              <Button asChild>
                <Link to="/bookings">View All Bookings</Link>
              </Button>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const totalNights = Math.ceil((booking.checkOut.getTime() - booking.checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = booking.price * totalNights;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <Link to="/bookings" className="flex items-center text-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to bookings
          </Link>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Booking Details</h1>
            <Badge className={getBookingStatusStyle(booking.status)}>
              {booking.status === "upcoming" ? "Upcoming" : "Completed"}
            </Badge>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <div className="h-48 w-full">
                  <img 
                    src={booking.image} 
                    alt={booking.hotelName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{booking.hotelName}</h2>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{booking.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-6">
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>Check-in</span>
                      </div>
                      <p className="font-medium">{format(booking.checkIn, "EEEE, MMM d, yyyy")}</p>
                      <p className="text-sm text-gray-500">From {booking.policies.checkInTime}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>Check-out</span>
                      </div>
                      <p className="font-medium">{format(booking.checkOut, "EEEE, MMM d, yyyy")}</p>
                      <p className="text-sm text-gray-500">Until {booking.policies.checkOutTime}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Guests</span>
                      </div>
                      <p className="font-medium">{booking.guests} {booking.guests === 1 ? "Person" : "People"}</p>
                    </div>
                    
                    <div>
                      <div className="text-gray-500 mb-1">Room Type</div>
                      <div className="font-medium">{booking.roomType}</div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Booking Policies</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Cancellation policy:</span> {booking.policies.cancellation}
                    </p>
                  </div>
                  
                  {booking.status === "upcoming" && (
                    <div className="flex mt-6">
                      <Button variant="outline" className="mr-2">Modify Booking</Button>
                      <Button variant="destructive">Cancel Booking</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-gray-500" />
                      <span>{booking.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-gray-500" />
                      <span>{booking.contactInfo.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Room charge</span>
                      <span>${booking.price} × {totalNights} nights</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg pt-2">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Reservation Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-gray-500 text-sm">Confirmation Number</div>
                      <div className="font-mono font-medium">{booking.confirmation}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Booked On</div>
                      <div>{format(new Date(), "MMM d, yyyy")}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button asChild className="w-full">
                <Link to={`/hotel/${booking.hotelId}`}>
                  View Hotel Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingDetailsPage;
