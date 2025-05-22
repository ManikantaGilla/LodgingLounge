
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HotelCard from "./HotelCard";
import { HOTELS_DATA } from "@/data/hotels";
import { toast } from "sonner";

const FeaturedHotels = () => {
  // Get 4 featured hotels
  const featuredHotels = HOTELS_DATA.slice(0, 4);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (hotelId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(hotelId)) {
        toast('Removed from favorites');
        return prevFavorites.filter(id => id !== hotelId);
      } else {
        toast('Added to favorites');
        return [...prevFavorites, hotelId];
      }
    });
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Hotels</h2>
          <Link to="/search">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              rating={hotel.rating}
              reviews={hotel.reviews}
              price={hotel.price}
              image={hotel.images[0]}
              isFavorite={favorites.includes(hotel.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
