import React from 'react';
import { Button, Embed } from 'semantic-ui-react';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';
import { useFavorites } from '../../providers/Favorites';

const StyledEmbed = styled(Embed)`
  margin-bottom: 16px;
`;

const StyledButtonWrapper = styled('div')`
  display: flex;
  flex-direction: row-reverse;
`;

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
      <StyledEmbed
        id={video.id}
        placeholder={video.snippet.thumbnails.medium.url}
        source="youtube"
      />
      <div>
        {authenticated && (
          <StyledButtonWrapper>
            {!isFavorite && (
              <Button onClick={onAddFavoritesClick}>Add to favorites</Button>
            )}
            {isFavorite && (
              <Button onClick={onRemoveFavoritesClick}>Remove from favorites</Button>
            )}
          </StyledButtonWrapper>
        )}
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
