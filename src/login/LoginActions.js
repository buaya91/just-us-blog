export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'

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
