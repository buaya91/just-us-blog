import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { LOGIN_REQUESTED, loginSuccess, loginFailed, closeLoginPopUp } from './LoginActions'

const loginUrl = 'http://localhost:9000/login'

function* login(action) {
  try {
    const { username, password } = action.payload
    const headers = new Headers()
    headers.set('Content-Type', 'application/json');

    const loginAttempt = yield call(window.fetch, loginUrl, {
      method: 'post',
      headers,
      body: JSON.stringify({ username, password }),
    })

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
    // network error
    console.log(err)
  }
}

export function* watchLoginRequest() {
  yield* takeEvery(LOGIN_REQUESTED, login)
}
