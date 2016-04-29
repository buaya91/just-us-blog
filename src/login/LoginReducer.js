import { fromJS } from 'immutable'
import { LOGIN_SUCCEEDED, LOGIN_FAILED, LOGIN_REQUESTED, SHOW_LOGIN_POPUP, CLOSE_LOGIN_POPUP } from './LoginActions'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
      return state.set('session', action.payload).set('status', 'success')
    }
    case LOGIN_FAILED: {
      return state.set('status', 'fail').set('error', action.payload)
    }
    case LOGIN_REQUESTED: {
      return state.delete('status')
    }
    case SHOW_LOGIN_POPUP: {
      return state.set('showPopUp', true)
    }
    case CLOSE_LOGIN_POPUP: {
      return state.set('showPopUp', false)
    }
    default: return state
  }
}
