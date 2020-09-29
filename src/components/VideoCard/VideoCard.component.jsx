import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 360px;
  width: 280px;
  overflow: hidden;
`;

const StyledDescription = styled(Card.Description)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

function VideoCard({ video }) {
  const history = useHistory();

  function handleOnclick(event) {
    event.preventDefault();
    history.push(`/${video.id}`);
  }

  return (
    <Grid.Column>
      <StyledCard onClick={handleOnclick}>
        <Image src={video.snippet.thumbnails.medium.url} />
        <StyledCard.Content>
          <StyledCard.Header textAlign="left">{video.snippet.title}</StyledCard.Header>
          <StyledDescription textAlign="left">
            {video.snippet.description}
          </StyledDescription>
        </StyledCard.Content>
      </StyledCard>
    </Grid.Column>
  );
}

export default VideoCard;
