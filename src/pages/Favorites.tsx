
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";
import { HOTELS_DATA } from "@/data/hotels";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteHotels = HOTELS_DATA.filter(hotel => favorites.includes(hotel.id));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-6">Your Favorite Hotels</h1>
          
          {favoriteHotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  location={hotel.location}
                  rating={hotel.rating}
                  reviews={hotel.reviews}
                  price={hotel.price}
                  image={hotel.images[0]}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-medium mb-2">No Favorite Hotels Yet</h2>
              <p className="text-gray-500 mb-6">
                Browse our selection of hotels and add some to your favorites.
              </p>
              <Button asChild>
                <Link to="/search">Explore Hotels</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
