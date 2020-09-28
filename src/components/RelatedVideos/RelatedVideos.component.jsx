import React from 'react';
import { useHistory } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

function handleOnclick(history, videoId) {
  return (event) => {
    event.preventDefault();
    history.push(`/${videoId}`);
  };
}

function RelatedVideos({ videos }) {
  const history = useHistory();

  return (
    <Item.Group divided>
      {videos.map((video) => (
        <Item key={video.id} onClick={handleOnclick(history, video.id)}>
          <Item.Image size="small" src={video.snippet.thumbnails.medium.url} />
          <Item.Content content={video.snippet.title} verticalAlign="middle" />
        </Item>
      ))}
    </Item.Group>
  );
}

export default RelatedVideos;
