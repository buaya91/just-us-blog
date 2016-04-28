import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { LOGIN_REQUESTED, loginSuccess } from './LoginActions'

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
    const session = yield loginAttempt.json()
    yield put(loginSuccess(session))
  } catch (err) {
    console.log(`Login failed: ${err}`)
  }
}

export function* watchLoginRequest() {
  yield* takeEvery(LOGIN_REQUESTED, login)
}
