import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';

function VideoCard({ video }) {
  return (
    <Grid.Column>
      <Card>
        <Link to={`/${video.id.videoId}`}>
          <Image src={video.snippet.thumbnails.medium.url} />
        </Link>
        <Card.Content>
          <Card.Header textAlign="left">{video.snippet.title}</Card.Header>
          <Card.Description textAlign="left">
            {video.snippet.description}
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default VideoCard;
