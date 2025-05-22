
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";
import { useAuth } from './AuthContext';
import { saveToFavorites, removeFromFavorites, getFavorites } from '@/services/mongoService';

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (hotelId: string) => void;
  isFavorite: (hotelId: string) => boolean;
  isLoading: boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();

  // Load favorites from localStorage or MongoDB based on authentication state
  useEffect(() => {
    const loadFavorites = async () => {
      setIsLoading(true);
      try {
        if (user) {
          // User is logged in, load favorites from MongoDB
          const userFavorites = await getFavorites(user.id);
          setFavorites(userFavorites);
        } else {
          // User is not logged in, load favorites from localStorage
          const storedFavorites = localStorage.getItem('favorites');
          if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
          }
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  // Save favorites to localStorage when they change (for non-authenticated users)
  useEffect(() => {
    if (!user) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const toggleFavorite = async (hotelId: string) => {
    try {
      if (favorites.includes(hotelId)) {
        // Remove from favorites
        if (user) {
          // User is logged in, remove from MongoDB
          const success = await removeFromFavorites(user.id, hotelId);
          if (success) {
            setFavorites(prev => prev.filter(id => id !== hotelId));
            toast('Removed from favorites');
          }
        } else {
          // User is not logged in, only update local state
          setFavorites(prev => prev.filter(id => id !== hotelId));
          toast('Removed from favorites');
        }
      } else {
        // Add to favorites
        if (user) {
          // User is logged in, save to MongoDB
          const success = await saveToFavorites(user.id, hotelId);
          if (success) {
            setFavorites(prev => [...prev, hotelId]);
            toast('Added to favorites');
          }
        } else {
          // User is not logged in, only update local state
          setFavorites(prev => [...prev, hotelId]);
          toast('Added to favorites');
        }
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast('An error occurred. Please try again.');
    }
  };

  const isFavorite = (hotelId: string) => favorites.includes(hotelId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, isLoading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
