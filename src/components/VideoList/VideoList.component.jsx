import React from 'react';
import { Grid } from 'semantic-ui-react';

import VideoCard from '../VideoCard';

function VideoList({ videos }) {
  return (
    <Grid columns={3}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Grid>
  );
}

export default VideoList;
