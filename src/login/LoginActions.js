export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const SHOW_LOGIN_POPUP = 'SHOW_LOGIN_POPUP'
export const CLOSE_LOGIN_POPUP = 'CLOSE_LOGIN_POPUP'

export const loginRequested = (username, password) => ({
  type: LOGIN_REQUESTED,
  payload: {
    username,
    password,
  },
})

export const loginSuccess = session => ({
  type: LOGIN_SUCCEEDED,
  payload: session,
})

export const loginFailed = err => ({
  type: LOGIN_FAILED,
  payload: err,
})

export const showLoginPopUp = () => ({
  type: SHOW_LOGIN_POPUP,
})

export const closeLoginPopUp = () => ({
  type: CLOSE_LOGIN_POPUP,
})
