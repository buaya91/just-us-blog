import { combineReducers } from 'redux';
import blogPosts from '../blogpost/BlogPostReducer'
import postDrafts from '../blogpost/editor/PostDraftsReducer'
import login from '../login/LoginReducer'
import uiState from '../ui-state/UIStateReducer'

export default combineReducers({
  blogPosts,
  postDrafts,
  login,
  uiState,
})
