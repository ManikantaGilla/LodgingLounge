
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import HotelCard from "./HotelCard";
import { fetchHotels } from "@/services/hotelService";
import { useFavorites } from "@/context/FavoritesContext";

const FeaturedHotels = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const { data: hotels = [], isLoading, error } = useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });

  // Get 4 featured hotels
  const featuredHotels = hotels.slice(0, 4);

  if (isLoading) {
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
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Hotels</h2>
            <Link to="/search">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-600">Unable to load hotels. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
              image={hotel.images?.[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'}
              isFavorite={isFavorite(hotel.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
