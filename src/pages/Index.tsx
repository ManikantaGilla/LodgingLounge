
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import FeaturedHotels from "@/components/FeaturedHotels";
import DestinationSection from "@/components/DestinationSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Building, Star, Timer, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury hotel"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Stay in Style and Comfort
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl animate-fade-in">
              Discover amazing hotels, resorts, and vacation rentals at the best prices.
            </p>
            
            <div className="w-full max-w-5xl animate-fade-in">
              <SearchBar className="bg-white/95 backdrop-blur-sm shadow-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              Why Book With LodgingLounge
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Best Selection</h3>
                <p className="text-gray-600">
                  From luxury hotels to cozy apartments, find the perfect accommodation for your needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-600">
                  Our price match guarantee ensures you always get the best available rate.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Timer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Confirmation</h3>
                <p className="text-gray-600">
                  Book with confidence and receive instant confirmation for your reservation.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer service team is available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Hotels Section */}
        <FeaturedHotels />
        
        {/* Destinations Section */}
        <DestinationSection />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Get Exclusive Deals
              </h2>
              <p className="mb-6">
                Subscribe to our newsletter and be the first to receive special offers and travel inspiration.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
