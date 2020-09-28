const FavoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = state.favorites.concat(action.payload);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(
        (favorite) => favorite.video.id !== action.payload.video.id
      );
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'RESET_FAVORITES': {
      localStorage.setItem('favorites', JSON.stringify([]));
      return {
        ...state,
        favorites: [],
      };
    }
    case 'LOAD_FROM_STORAGE': {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return {
        ...state,
        favorites,
      };
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
