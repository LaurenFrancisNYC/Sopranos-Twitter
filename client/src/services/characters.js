import api from './api-config';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
}

export const addCharacter = async (postId, characterId) => {
  const resp = await api.post(`/posts/${postId}/characters/${characterId}`);
  return resp.data;
}