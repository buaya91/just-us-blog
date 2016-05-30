import { POSTS_ADDED, POST_CREATE_SUCCESS, POST_UPDATE_SUCCESS } from './BlogActions'
import { fromJS } from 'immutable'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_ADDED: {
      return action.payload.reduce((a, b) => a.set(b.pid.toString(), fromJS(b)), state)
    }
    case POST_CREATE_SUCCESS: {
      const { pid, post } = action.payload
      return state.set(pid.toString(), fromJS(post))
    }
    case POST_UPDATE_SUCCESS: {
      const { pid, update } = action.payload
      return state.set(pid.toString(), fromJS(update))
    }
    default: return state
  }
}
