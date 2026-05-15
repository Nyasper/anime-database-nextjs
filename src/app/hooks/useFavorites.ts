import { useState, useEffect } from 'react';
import { Anime } from '@/app/utils/types';

export const useFavorites = (mediaInfo?: Anime) => {
  const [favorites, setFavorites] = useState<Anime[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const loadFavorites = () => {
    if (typeof window === 'undefined') return [];
    const favoritesJSON = localStorage.getItem('favorites') || '[]';
    const parsedFavorites: Anime[] = JSON.parse(favoritesJSON);
    return parsedFavorites;
  };

  useEffect(() => {
    setFavorites(loadFavorites());

    const handleUpdate = () => {
      setFavorites(loadFavorites());
    };

    window.addEventListener('favoritesUpdated', handleUpdate);
    // Listen for changes from other tabs too
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('favoritesUpdated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (mediaInfo) {
      const favoriteFound = favorites.some((fav) => fav.id === mediaInfo.id);
      setIsFavorite(favoriteFound);
    }
  }, [favorites, mediaInfo?.id]);

  const toggleFavorite = (item?: Anime) => {
    const targetItem = item || mediaInfo;
    if (!targetItem) return;

    const currentFavorites = loadFavorites();
    let updatedFavorites: Anime[];
    const exists = currentFavorites.some((fav) => fav.id === targetItem.id);

    if (!exists) {
      updatedFavorites = [...currentFavorites, targetItem];
    } else {
      updatedFavorites = currentFavorites.filter(
        (fav) => fav.id !== targetItem.id
      );
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
    // Notify other hook instances in the same tab
    window.dispatchEvent(new Event('favoritesUpdated'));
    
    setFavorites(updatedFavorites);
    if (targetItem.id === mediaInfo?.id) {
      setIsFavorite(!exists);
    }
  };

  return { favorites, isFavorite, toggleFavorite };
};
