import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import { getVideo, getRelatedVideos } from '../../api/youtubeApi';
import VideoDetail from '../../components/VideoDetail';
import RelatedVideos from '../../components/RelatedVideos';

function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    getVideo(id).then((response) => {
      setVideo(response);
    });
    getRelatedVideos(id).then((response) => {
      setRelatedVideos(response);
    });
  }, [id]);

  if (!video || !relatedVideos) {
    return null;
  }

  return (
    <Grid>
      <Grid.Column width={11}>
        <VideoDetail video={video} />
      </Grid.Column>
      <Grid.Column width={5}>
        <RelatedVideos videos={relatedVideos} />
      </Grid.Column>
    </Grid>
  );
}

export default VideoDetails;
