export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export const SHOW_LOGIN_POPUP = 'SHOW_LOGIN_POPUP'
export const CLOSE_LOGIN_POPUP = 'CLOSE_LOGIN_POPUP'

export const loginRequested = (username, password) => ({
  type: LOGIN_REQUESTED,
  payload: {
    username,
    password,
  },
})

export const loginSuccess = (session, name) => ({
  type: LOGIN_SUCCEEDED,
  payload: {
    session,
    name,
  },
})

export const logout = () => ({
  type: LOGOUT,
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
