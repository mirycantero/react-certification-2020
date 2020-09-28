import React from 'react';
import { Button, Embed } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { useFavorites } from '../../providers/Favorites';

function VideoDetail({ video }) {
  const { authenticated } = useAuth();
  const {
    dispatch,
    state: { favorites },
  } = useFavorites();

  const isFavorite = favorites.find(({ video: { id } }) => id === video.id);

  const onAddFavoritesClick = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_FAVORITE', payload: { video } });
  };

  const onRemoveFavoritesClick = (event) => {
    event.preventDefault();
    dispatch({ type: 'REMOVE_FAVORITE', payload: { video } });
  };

  return (
    <div>
      <Embed
        id={video.id}
        placeholder={video.snippet.thumbnails.medium.url}
        source="youtube"
      />
      <div>
        {authenticated && (
          <div>
            {!isFavorite && (
              <Button onClick={onAddFavoritesClick}>Add to favorites</Button>
            )}
            {isFavorite && (
              <Button onClick={onRemoveFavoritesClick}>Remove from favorites</Button>
            )}
          </div>
        )}
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
