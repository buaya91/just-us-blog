import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { LOGIN_REQUESTED, loginSuccess, loginFailed } from './LoginActions'
import { closeLoginPopUp } from '../ui-state/UIStateActions'
import { fetchWithJson } from '../common/sagaHelpers'
import config from '../config'

const loginUrl = `${config.api}/login`

function* login(action) {
  try {
    const { username, password } = action.payload

    const loginAttempt = yield call(
      fetchWithJson,
      window.fetch,
      loginUrl,
      {
        method: 'post',
        body: JSON.stringify({ username, password }),
      },
    )

    if (!loginAttempt.ok) {
      const err = yield loginAttempt.text()
      yield put(loginFailed(err))
    } else {
      const session = yield loginAttempt.headers.get('Set-Authorization')
      const body = yield loginAttempt.json()
      yield put(loginSuccess(session, body.name))
      yield put(closeLoginPopUp())
    }
  } catch (err) {
    alert(`Login failed: ${err}`)
  }
}

export function* watchLoginRequest() {
  yield* takeEvery(LOGIN_REQUESTED, login)
}
