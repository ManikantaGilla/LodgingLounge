
import React from "react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Hotel } from "@/services/hotelService";

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
}

interface BookingSummaryProps {
  hotel: Hotel;
  room: RoomType;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  nights: number;
}

const BookingSummary = ({
  hotel,
  room,
  checkIn,
  checkOut,
  guests,
  nights,
}: BookingSummaryProps) => {
  const totalPrice = room.price * nights;
  const taxesAndFees = totalPrice * 0.12;
  const grandTotal = totalPrice + taxesAndFees;

  return (
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
  );
};

export default BookingSummary;
