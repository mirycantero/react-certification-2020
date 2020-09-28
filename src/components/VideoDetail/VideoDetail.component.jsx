import React from 'react';
import { Container, Embed } from 'semantic-ui-react';

function VideoDetail({ video }) {
  return (
    <Container>
      <Embed
        id={video.id}
        placeholder={video.snippet.thumbnails.high.url}
        source="youtube"
      />
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </Container>
  );
}

export default VideoDetail;
