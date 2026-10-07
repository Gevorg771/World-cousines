import { useState, useEffect } from 'react';


const STORAGE_KEY = 'world_cuisines_favorites_v1';


export function getFavorites() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch {
    return [];
  }
}


export function toggleFavorite(recipeId) {
  try {
    const currentList = getFavorites();
    const isAlreadySaved = currentList.includes(recipeId);

    let updatedList = [];
    if (isAlreadySaved) {
  
      updatedList = currentList.filter((id) => id !== recipeId);
    } else {
      
      updatedList = [...currentList, recipeId];
    }

   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

    
    window.dispatchEvent(new Event('favorites-updated'));

    return updatedList;
  } catch {
    return [];
  }
}


export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    return getFavorites();
  });


  useEffect(() => {
    const handleUpdate = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener('favorites-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('favorites-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId);
  };

  const toggle = (recipeId) => {
    const updated = toggleFavorite(recipeId);
    setFavorites(updated);
  };

  return { favorites, isFavorite, toggle };
}
