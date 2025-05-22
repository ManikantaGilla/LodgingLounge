
import React from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import StarRating from "./StarRating";

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const HotelCard = ({
  id,
  name,
  location,
  rating,
  reviews,
  price,
  image,
  isFavorite = false,
  onToggleFavorite,
}: HotelCardProps) => {
  return (
    <Card className="hotel-card overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
        {onToggleFavorite && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 h-8 w-8"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(id);
            }}
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`}
            />
          </Button>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="flex items-center mb-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500 ml-2">({reviews} reviews)</span>
        </div>
        <div className="text-lg font-semibold text-primary">
          ${price} <span className="text-sm text-gray-500 font-normal">/ night</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/hotel/${id}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
