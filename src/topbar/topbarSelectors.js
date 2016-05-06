import { createSelector, createStructuredSelector } from 'reselect'

const loggedSelector = createSelector(
  state => state.login,
  login => login.get('status') === 'success'
)

const loginErrorSelector = createSelector(
  state => state.login,
  login => login.get('error')
)

export default createStructuredSelector({
  logged: loggedSelector,
  loginError: loginErrorSelector,
  username: state => state.login.get('name'),
})
