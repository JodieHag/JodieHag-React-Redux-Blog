import axios from 'axios';

export const UPDATE_STORE_POSTS = 'UPDATE_STORE_POSTS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function loadPosts() {
  return {
    type: LOAD_POSTS,
    payload: {
      promise: axios.get('/api/post')
    }
  };
}
export function updateStatePosts(posts) {
  return {
    type: UPDATE_STORE_POSTS,
    posts
  };
}
export function addPost(data) {
  return {
    type: ADD_POST,
    payload: {
      promise: axios.post('/api/post', data)
    }
  };
}

export function getPost(url) {
  return {
    type: GET_POST,
    payload: {
      promise: axios.get(`/api/post/${url.url}`)
    }
  };
}

export function updatePost(data) {
  return {
    type: UPDATE_POST,
    payload: {
      promise: axios.put(`/api/post/${data.id}`, data)
    }
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: {
      promise: axios.delete(`/api/post/${id.id}`)
    }
  };
}
