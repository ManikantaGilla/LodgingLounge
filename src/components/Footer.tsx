
import React from "react";
import { Link } from "react-router-dom";
import { Hotel, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="h-6 w-6" />
              <span className="font-poppins font-semibold text-xl">LodgingLounge</span>
            </div>
            <p className="text-gray-300 mb-4">
              Find your perfect stay with our curated selection of hotels, villas, and apartments around the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white transition">Search</Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-300 hover:text-white transition">Favorites</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition">Register</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/search?location=New+York" className="text-gray-300 hover:text-white transition">New York</Link>
              </li>
              <li>
                <Link to="/search?location=Los+Angeles" className="text-gray-300 hover:text-white transition">Los Angeles</Link>
              </li>
              <li>
                <Link to="/search?location=Miami" className="text-gray-300 hover:text-white transition">Miami</Link>
              </li>
              <li>
                <Link to="/search?location=Las+Vegas" className="text-gray-300 hover:text-white transition">Las Vegas</Link>
              </li>
              <li>
                <Link to="/search?location=Chicago" className="text-gray-300 hover:text-white transition">Chicago</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">support@lodginglounge.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LodgingLounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
