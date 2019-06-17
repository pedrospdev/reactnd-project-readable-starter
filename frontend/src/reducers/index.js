// Redux
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import app from './app';
import categories from './categories';
import posts from './posts';

export default combineReducers ({
  loadingBar: loadingBarReducer,
  app,
  categories,
  posts
})
