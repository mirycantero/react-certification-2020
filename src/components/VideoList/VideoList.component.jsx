import React from 'react';
import { Grid } from 'semantic-ui-react';

import VideoCard from '../VideoCard';

function VideoList({ videos }) {
  return (
    <Grid stackable columns={5}>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </Grid>
  );
}

export default VideoList;
