import {
  CREATE_POST,
  DELETE_POST,
  RECEIVE_POSTS
} from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case CREATE_POST:
      return state
    case DELETE_POST:
      return {
        ...state.filter(item => item.id !== action.id)
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    default:
      return state
  }
}
