import { fromJS } from 'immutable'
import {
  UPDATE_NEW_POST_DRAFT,
  UPDATE_POST_EDIT_DRAFT,
  SHOW_POST_DRAFT,
  HIDE_POST_DRAFT,
} from './PostDraftActions'

const initialState = fromJS({
  new: {
    title: '',
    content: '',
    tags: [],
  },
})

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_DRAFT: return state.set('new', action.payload)
    case UPDATE_POST_EDIT_DRAFT: {
      const { pid, draft } = action.payload
      return state.set(pid, draft)
    }
    default: return state
  }
}
