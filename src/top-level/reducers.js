import { combineReducers } from 'redux'
import { reducer } from 'redux-storage'
import merger from 'redux-storage-merger-immutablejs'
import blogPosts from '../blogpost/BlogPostReducer'
import postDrafts from '../blogpost/editor/PostDraftsReducer'
import login from '../login/LoginReducer'
import uiState from '../ui-state/UIStateReducer'

const allReducer = combineReducers({
  blogPosts,
  postDrafts,
  login,
  uiState,
})

export default reducer(allReducer, merger)
