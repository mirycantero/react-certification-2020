import React from 'react';
import { Grid } from 'semantic-ui-react';

import VideoCard from '../../components/VideoCard';
import { useFavorites } from '../../providers/Favorites';

function Favorites() {
  const { state } = useFavorites();

  return (
    <Grid columns={3}>
      {state.favorites.map(({ video }) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Grid>
  );
}

export default Favorites;
