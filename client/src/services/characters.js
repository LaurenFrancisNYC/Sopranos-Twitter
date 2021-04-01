import api from './api-config';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
}

