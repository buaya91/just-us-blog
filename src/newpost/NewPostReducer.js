import { fromJS } from 'immutable'
import { UPDATE_NEW_POST_DRAFT, UPDATE_POST_EDIT_DRAFT } from './NewPostActions'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_NEW_POST_DRAFT: return state.set('new', action.payload)
  case UPDATE_POST_EDIT_DRAFT: {
    const { pid, draft } = action.paylod
    return state.set(pid, draft)
  }
  default: return state
  }
}
