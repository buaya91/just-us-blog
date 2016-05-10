import {
  SHOW_NEW_POST_EDITOR,
  SHOW_UPDATE_POST_EDITOR,
  HIDE_NEW_POST_EDITOR,
  HIDE_UPDATE_POST_EDITOR,
  SHOW_LOGIN_POPUP,
  CLOSE_LOGIN_POPUP,
} from './UIStateActions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  showNewPopUp: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEW_POST_EDITOR: {
      return state.set('showNewPopUp', true)
    }
    case HIDE_NEW_POST_EDITOR: {
      return state.set('showNewPopUp', false)
    }
    case SHOW_UPDATE_POST_EDITOR: {
      return state.set('showUpdatePopUp', action.payload)
    }
    case HIDE_UPDATE_POST_EDITOR: {
      return state.delete('showUpdatePopUp')
    }
    case SHOW_LOGIN_POPUP: {
      return state.set('showLoginPopUp', true)
    }
    case CLOSE_LOGIN_POPUP: {
      return state.set('showLoginPopUp', false)
    }
    default: return state
  }
}
