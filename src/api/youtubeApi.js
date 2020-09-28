async function MakeRequest(method, path, params) {
  try {
    const response = await window.gapi.client.request({ method, path, params });
    return response.result;
  } catch (e) {
    throw new Error(`Error: ${e.result.error.message}`);
  }
}

function mapVideos(video) {
  return {
    ...video,
    id: video.id.videoId || video.id,
  };
}

export async function getVideos(query, maxResults = 20) {
  const request = await MakeRequest('GET', '/youtube/v3/search', {
    q: query,
    maxResults,
    part: 'snippet',
    type: 'video',
    fields: 'items(id(videoId),snippet(title, description, thumbnails))',
  });

  return request.items.map(mapVideos);
}

export async function getVideo(videoId) {
  const request = await MakeRequest('GET', '/youtube/v3/videos', {
    id: videoId,
    part: 'snippet',
    type: 'video',
    fields: 'items(id,snippet(title, description, thumbnails))',
  });

  return request.items.map(mapVideos)[0] || null;
}

export async function getRelatedVideos(videoId, maxResults = 20) {
  const request = await MakeRequest('GET', '/youtube/v3/search', {
    relatedToVideoId: videoId,
    maxResults,
    part: 'snippet',
    type: 'video',
    fields: 'items(id(videoId),snippet(title, description, thumbnails))',
  });

  return request.items.map(mapVideos);
}
