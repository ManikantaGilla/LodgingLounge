
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";
import { useAuth } from './AuthContext';

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

  // For now, we'll use localStorage until the database types are properly updated
  useEffect(() => {
    const loadFavorites = () => {
      setIsLoading(true);
      try {
        // Load favorites from localStorage for now
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (hotelId: string) => {
    try {
      if (favorites.includes(hotelId)) {
        // Remove from favorites
        setFavorites(prev => prev.filter(id => id !== hotelId));
        toast('Removed from favorites');
      } else {
        // Add to favorites
        setFavorites(prev => [...prev, hotelId]);
        toast('Added to favorites');
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast.error('An error occurred. Please try again.');
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
