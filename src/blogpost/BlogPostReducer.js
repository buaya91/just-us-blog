import { POSTS_ADDED } from './BlogActions'
import { fromJS } from 'immutable'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
  case POSTS_ADDED: {
    return action.payload.reduce((a, b) => a.set(b.pid, fromJS(b)), state)
  }
  default: return state
  }
}
