import { combineReducers } from 'redux';
import blogPosts from './../blogpost/BlogPostReducer'
import postDrafts from '../postdraft/PostDraftsReducer'

export default combineReducers({
  blogPosts,
  postDrafts,
})
