import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';

import { getVideos } from '../../api/youtubeApi';
import { useSearch } from '../../providers/Search';
import './Home.styles.css';

const VideoList = lazy(() => import('../../components/VideoList'));

function HomePage() {
  const [videos, setVideos] = useState(null);
  const { query } = useSearch();

  useEffect(() => {
    getVideos(query).then((response) => {
      setVideos(response);
    });
  }, [query]);

  if (!videos) {
    return null;
  }

  return (
    <Suspense fallback={<Loader active inline="centered" />}>
      <div className="homepage">
        <h1>Welcome to the Challenge!</h1>
        <VideoList videos={videos} />
      </div>
    </Suspense>
  );
}

export default HomePage;
