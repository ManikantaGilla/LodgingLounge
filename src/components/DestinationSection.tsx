
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Destination {
  name: string;
  image: string;
  propertyCount: number;
}

const destinations: Destination[] = [
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop",
    propertyCount: 532,
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?q=80&w=1000&auto=format&fit=crop",
    propertyCount: 421,
  },
  {
    name: "Miami",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1000&auto=format&fit=crop",
    propertyCount: 327,
  },
  {
    name: "Las Vegas",
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1000&auto=format&fit=crop",
    propertyCount: 289,
  },
  {
    name: "Chicago",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop", 
    propertyCount: 315,
  },
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop",
    propertyCount: 267,
  },
];

const DestinationSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link 
              key={destination.name}
              to={`/search?location=${encodeURIComponent(destination.name)}`}
              className="relative group overflow-hidden rounded-lg h-64 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p className="text-sm">{destination.propertyCount} properties</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/search">Explore All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
