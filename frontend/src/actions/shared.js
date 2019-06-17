import { getInitialData } from '../api';
import { receiveCategories } from './categories';
import { receivePosts } from './posts';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}
