import { fromJS } from 'immutable'
import { LOGIN_SUCCEEDED } from './LoginActions'

const initialState = fromJS({})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
      return state.set('session', action.payload)
    }
    default: return state
  }
}
