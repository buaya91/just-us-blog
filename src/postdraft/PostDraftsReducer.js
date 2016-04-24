import { fromJS } from 'immutable'
import { UPDATE_NEW_POST_DRAFT, UPDATE_POST_EDIT_DRAFT, SHOW_POST_DRAFT } from './PostDraftActions'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_NEW_POST_DRAFT: return state.set('new', action.payload)
  case UPDATE_POST_EDIT_DRAFT: {
    const { pid, draft } = action.paylod
    return state.set(pid, draft)
  }
  case SHOW_POST_DRAFT: {
    if (state.get(action.payload)) {
      return state.set('show', action.payload)
    }
    return state.set(action.payload, '').set('show', action.payload)
  }
  default: return state
  }
}
