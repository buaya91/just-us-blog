import { combineReducers } from 'redux';
import blogPosts from '../blogpost/BlogPostReducer'
import postDrafts from '../blogpost/editor/PostDraftsReducer'
import login from '../login/LoginReducer'

export default combineReducers({
  blogPosts,
  postDrafts,
  login,
})
