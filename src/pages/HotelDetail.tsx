
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HOTELS_DATA, Hotel } from "@/data/hotels";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar as CalendarIcon, Users, Wifi, Coffee, Car, Tv, Dumbbell, Utensils, Heart } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/context/FavoritesContext";

const amenityIcons: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi className="h-5 w-5" />,
  "Breakfast": <Coffee className="h-5 w-5" />,
  "Parking": <Car className="h-5 w-5" />,
  "TV": <Tv className="h-5 w-5" />,
  "Fitness": <Dumbbell className="h-5 w-5" />,
  "Restaurant": <Utensils className="h-5 w-5" />,
};

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");
  
  const { isFavorite, toggleFavorite } = useFavorites();
  
  useEffect(() => {
    // Find hotel by ID
    const foundHotel = HOTELS_DATA.find(h => h.id === id);
    
    if (foundHotel) {
      setHotel(foundHotel);
      setMainImage(foundHotel.images[0]);
    }
    
    setLoading(false);
  }, [id]);

  const handleBookNow = (roomTypeId: string) => {
    // In a real app, this would navigate to a booking form with the selected room
    if (!hotel) return;
    
    navigate(`/booking?hotelId=${hotel.id}&roomId=${roomTypeId}${checkIn ? `&checkIn=${checkIn.toISOString()}` : ''}${checkOut ? `&checkOut=${checkOut.toISOString()}` : ''}&guests=${guests}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Hotel Not Found</h1>
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pb-12">
        {/* Hotel Header */}
        <div className="bg-primary text-white py-8">
          <div className="container">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">{hotel.name}</h1>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center">
                  <StarRating rating={hotel.rating} />
                  <span className="ml-2">({hotel.reviews} reviews)</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={() => id && toggleFavorite(id)}
              >
                <Heart className={`h-5 w-5 ${id && isFavorite(id) ? "fill-white" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-grow">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden mb-3 h-[400px]">
                  <img 
                    src={mainImage} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {hotel.images.map((img, index) => (
                    <div 
                      key={index}
                      className={`rounded-lg overflow-hidden h-20 cursor-pointer ${img === mainImage ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setMainImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${hotel.name} - image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="rooms">Rooms</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">About {hotel.name}</h2>
                  <p className="text-gray-700 mb-6">{hotel.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Key Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {hotel.amenities.slice(0, 6).map((amenity, index) => {
                      const iconKey = Object.keys(amenityIcons).find(key => 
                        amenity.toLowerCase().includes(key.toLowerCase())
                      );
                      
                      const icon = iconKey ? amenityIcons[iconKey] : null;
                      
                      return (
                        <div key={index} className="flex items-center gap-2">
                          {icon || <div className="w-5 h-5 rounded-full bg-primary/10" />}
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button variant="outline" onClick={() => setActiveTab("amenities")}>
                    View All Amenities
                  </Button>
                </TabsContent>
                
                <TabsContent value="rooms" className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
                  <div className="space-y-6">
                    {hotel.roomTypes.map(room => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-[200px] md:h-auto">
                            <img 
                              src={room.image} 
                              alt={room.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-grow p-6">
                            <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                            <p className="text-gray-700 mb-3">{room.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {room.features.map((feature, index) => (
                                <div key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                                  {feature}
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xl font-semibold text-primary">
                                  ${room.price} <span className="text-sm text-gray-500 font-normal">/ night</span>
                                </div>
                                <div className="text-sm text-gray-500">Excluding taxes and fees</div>
                              </div>
                              <Button onClick={() => handleBookNow(room.id)}>
                                Book Now
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Hotel Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity, index) => {
                      const iconKey = Object.keys(amenityIcons).find(key => 
                        amenity.toLowerCase().includes(key.toLowerCase())
                      );
                      
                      const icon = iconKey ? amenityIcons[iconKey] : null;
                      
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                          {icon || <div className="w-5 h-5 rounded-full bg-primary/10" />}
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Location</h2>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium">{hotel.location}</span>
                    </div>
                    <p className="text-gray-700">
                      Coordinates: {hotel.coordinates.lat}, {hotel.coordinates.lng}
                    </p>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Map placeholder - In a real app, this would show Google Maps or similar.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Booking Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Book Your Stay</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Check-in</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-in"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="check-out">Check-out</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-out"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <Input
                          id="guests"
                          type="number"
                          min={1}
                          max={10}
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                        />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between font-medium mb-1">
                        <span>Price per night</span>
                        <span>${hotel.price}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        Excluding taxes and fees
                      </div>
                      <Button 
                        className="w-full bg-accent hover:bg-accent/90"
                        onClick={() => setActiveTab("rooms")}
                      >
                        Check Availability
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Contact our customer support for any assistance with your booking.
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="text-sm px-3 py-1 h-auto">
                    Chat With Us
                  </Button>
                  <Button variant="outline" className="text-sm px-3 py-1 h-auto">
                    Call Support
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

export default HotelDetail;
