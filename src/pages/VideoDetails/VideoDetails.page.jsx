import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getVideo } from '../../api/youtubeApi';
import VideoDetail from '../../components/VideoDetail';

function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideo(id).then((response) => {
      setVideo(response);
    });
  }, [id]);

  if (!video) {
    return null;
  }

  return <VideoDetail video={video} />;
}

export default VideoDetails;
