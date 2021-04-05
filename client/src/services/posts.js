import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const getAllPostsFromCharacter = async (charID) => {
  const resp = await api.get(`/characters/${charID}/posts/`);
  return resp.data;
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const postPost = async (postData, charID) => {
  const resp = await api.post(`/characters/${charID}/posts/`, { post: postData });
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}

export const upvotePost = async (id) => {
  const resp = await api.put(`/${id}/upvote`);
  return resp.data;
}

export const downvotePost = async (id) => {
  const resp = await api.put(`/${id}/downvote`);
  return resp.data;
}