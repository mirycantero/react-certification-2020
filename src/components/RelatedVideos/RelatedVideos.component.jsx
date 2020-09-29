import React from 'react';
import { useHistory } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import styled from 'styled-components';

function handleOnclick(history, videoId) {
  return (event) => {
    event.preventDefault();
    history.push(`/${videoId}`);
  };
}

const StyledRelatedVideos = styled(Item.Group)`
  max-height: 100vh;
  overflow-y: scroll;
`;

function RelatedVideos({ videos }) {
  const history = useHistory();

  return (
    <StyledRelatedVideos divided>
      {videos.map((video) => (
        <Item key={video.id} onClick={handleOnclick(history, video.id)}>
          <Item.Image size="small" src={video.snippet.thumbnails.medium.url} />
          <Item.Content content={video.snippet.title} verticalAlign="middle" />
        </Item>
      ))}
    </StyledRelatedVideos>
  );
}

export default RelatedVideos;
