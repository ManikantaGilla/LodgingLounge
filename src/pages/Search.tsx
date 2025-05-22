
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import HotelCard from "@/components/HotelCard";
import Footer from "@/components/Footer";
import { HOTELS_DATA, Hotel } from "@/data/hotels";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, SortAsc, SortDesc } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

const amenitiesOptions = [
  "Free WiFi",
  "Swimming Pool",
  "Spa",
  "Fitness Center",
  "Restaurant",
  "Bar",
  "Room Service",
  "Parking",
  "Pet Friendly",
  "Beach Access"
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating-desc">("rating-desc");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const location = searchParams.get("location") || "";
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");
  const guestsParam = searchParams.get("guests");

  const checkIn = checkInParam ? new Date(checkInParam) : undefined;
  const checkOut = checkOutParam ? new Date(checkOutParam) : undefined;
  const guests = guestsParam ? parseInt(guestsParam) : 1;

  useEffect(() => {
    // Improved location-based filtering
    const filtered = HOTELS_DATA.filter(hotel => {
      if (location && !hotel.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
      return true;
    });
    
    setHotels(filtered);
    setFilteredHotels(filtered);
    
    // Set initial price range based on data
    if (filtered.length > 0) {
      const minPrice = Math.min(...filtered.map(hotel => hotel.price));
      const maxPrice = Math.max(...filtered.map(hotel => hotel.price));
      setPriceRange([minPrice, maxPrice]);
    }
  }, [location, checkInParam, checkOutParam, guestsParam]); // Added dependencies to re-filter when search params change

  useEffect(() => {
    let result = [...hotels];
    
    // Filter by price
    result = result.filter(hotel => 
      hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    );
    
    // Filter by amenities
    if (selectedAmenities.length > 0) {
      result = result.filter(hotel => 
        selectedAmenities.every(amenity => 
          hotel.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
        )
      );
    }
    
    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    
    setFilteredHotels(result);
  }, [hotels, priceRange, selectedAmenities, sortBy]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Search Bar */}
        <div className="bg-primary py-6">
          <div className="container">
            <SearchBar />
          </div>
        </div>
        
        {/* Results Section */}
        <div className="container py-8">
          {/* Search Summary */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">
              {location ? `Hotels in ${location}` : "All Hotels"}
            </h1>
            <p className="text-gray-600">
              {filteredHotels.length} properties found
              {checkIn && checkOut && (
                <span>
                  {" "}• {format(checkIn, "MMM d")} - {format(checkOut, "MMM d")}
                </span>
              )}
              {guests > 1 && <span> • {guests} guests</span>}
            </p>
          </div>
          
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters & Sort
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <aside className={`lg:block lg:w-64 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="space-y-2">
                    {amenitiesOptions.map(amenity => (
                      <div key={amenity} className="flex items-center">
                        <Checkbox 
                          id={`amenity-${amenity}`} 
                          checked={selectedAmenities.includes(amenity)}
                          onCheckedChange={() => toggleAmenity(amenity)}
                        />
                        <Label 
                          htmlFor={`amenity-${amenity}`}
                          className="ml-2 text-sm font-normal cursor-pointer"
                        >
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sort Options */}
                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <div className="space-y-2">
                    <Button 
                      variant={sortBy === "rating-desc" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSortBy("rating-desc")}
                    >
                      <SortDesc className="h-4 w-4 mr-2" />
                      Rating (High to Low)
                    </Button>
                    <Button 
                      variant={sortBy === "price-asc" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSortBy("price-asc")}
                    >
                      <SortAsc className="h-4 w-4 mr-2" />
                      Price (Low to High)
                    </Button>
                    <Button 
                      variant={sortBy === "price-desc" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSortBy("price-desc")}
                    >
                      <SortDesc className="h-4 w-4 mr-2" />
                      Price (High to Low)
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Results */}
            <div className="flex-grow">
              {filteredHotels.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h2 className="text-xl font-semibold mb-2">No hotels found</h2>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters to find more options.
                  </p>
                  <Button onClick={() => {
                    setSelectedAmenities([]);
                    setPriceRange([0, 1000]);
                  }}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredHotels.map(hotel => (
                    <HotelCard
                      key={hotel.id}
                      id={hotel.id}
                      name={hotel.name}
                      location={hotel.location}
                      rating={hotel.rating}
                      reviews={hotel.reviews}
                      price={hotel.price}
                      image={hotel.images[0]}
                      isFavorite={isFavorite(hotel.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
