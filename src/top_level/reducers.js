import { combineReducers } from 'redux';
import blogPosts from '../blogpost/BlogPostReducer'
import postDrafts from '../blogpost/editor/PostDraftsReducer'

export default combineReducers({
  blogPosts,
  postDrafts,
})
