
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

const StarRating = ({ rating, max = 5, size = "md" }: StarRatingProps) => {
  const roundedRating = Math.round(rating * 2) / 2;
  
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };
  
  const starClass = sizeClasses[size];

  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, i) => {
        const starFill = i + 0.5 === roundedRating 
          ? "text-yellow-400/50" // half star
          : i < roundedRating 
            ? "text-yellow-400" // full star
            : "text-gray-300"; // empty star
          
        return (
          <Star
            key={i}
            className={`${starClass} ${starFill} ${i + 0.5 === roundedRating ? "half-star" : ""}`}
            fill={i < roundedRating ? "currentColor" : "none"}
          />
        );
      })}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
