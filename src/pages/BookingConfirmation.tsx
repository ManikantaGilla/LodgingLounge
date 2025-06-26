
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, CalendarCheck, FileClock, ChevronRight } from "lucide-react";
import { format } from "date-fns";

interface BookingDetails {
  bookingId: string;
  hotel: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  total: number;
}

const BookingConfirmation = () => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  
  useEffect(() => {
    // Retrieve booking details from sessionStorage
    const storedBooking = sessionStorage.getItem('lastBooking');
    if (storedBooking) {
      try {
        const booking = JSON.parse(storedBooking);
        setBookingDetails(booking);
      } catch (error) {
        console.error('Error parsing booking details:', error);
      }
    }
  }, []);

  const bookingNumber = bookingDetails?.bookingId || "BK" + Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">Booking Confirmed!</h1>
                <p className="text-gray-600">
                  Your reservation has been successfully processed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Booking Reference</p>
                    <p className="font-semibold">{bookingNumber}</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href={`#download-${bookingNumber}`}>
                      Download Receipt
                    </a>
                  </Button>
                </div>
              </div>

              {bookingDetails && (
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">Booking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Hotel</p>
                      <p className="font-medium">{bookingDetails.hotel}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Room</p>
                      <p className="font-medium">{bookingDetails.room}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Check-in</p>
                      <p className="font-medium">{format(new Date(bookingDetails.checkIn), "MMM d, yyyy")}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Check-out</p>
                      <p className="font-medium">{format(new Date(bookingDetails.checkOut), "MMM d, yyyy")}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Guests</p>
                      <p className="font-medium">{bookingDetails.guests}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Amount</p>
                      <p className="font-medium">${bookingDetails.total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">What's Next?</h2>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <CalendarCheck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Confirmation Email Sent</h3>
                        <p className="text-gray-600 text-sm">
                          We've sent a confirmation email with all your booking details. Please check your inbox.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <FileClock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Prepare for Your Stay</h3>
                        <p className="text-gray-600 text-sm">
                          Review your booking details and ensure all information is correct. You can manage your booking from your account page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h2 className="text-lg font-semibold mb-3">Helpful Links</h2>
                  <div className="space-y-3">
                    <Link 
                      to="/search" 
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition"
                    >
                      <span>Explore More Hotels</span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                    <Link 
                      to="/login" 
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition"
                    >
                      <span>Sign In to Manage Bookings</span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  </div>
                </div>
                
                <div className="border-t pt-6 text-center">
                  <p className="text-gray-600 mb-4">
                    Thank you for choosing LodgingLounge for your accommodation.
                  </p>
                  <Button asChild>
                    <Link to="/">Return to Homepage</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
