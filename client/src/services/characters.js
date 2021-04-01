import api from './api-config';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
}

export const addCharacter = async (postId, flavorId) => {
  const resp = await api.post(`/characters/${foodId}/flavors/${flavorId}`);
  return resp.data;
}