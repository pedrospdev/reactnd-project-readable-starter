export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function createPost (post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}
