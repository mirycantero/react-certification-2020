import React, { useContext, useEffect, useReducer } from 'react';

import FavoritesReducer from './Favorites.reducer';

const FavoritesContext = React.createContext(null);

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without a FavoritesContext!`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(FavoritesReducer, {
    favorites: [],
  });

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, []);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { useFavorites };
export default FavoritesProvider;
