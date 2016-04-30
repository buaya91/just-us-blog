import { select } from 'redux-saga/effects'

export function* fetchWithSession(fetch, url, payload) {
  const session = yield select(state => state.login.get('session'))
  const headers = payload.headers || new Headers()
  headers.set('Authorization', `Bearer ${session}`)
  const authPayload = Object.assign({ headers }, payload)

  return fetch(url, authPayload)
}

export function* fetchWithJson(fetch, url, payload) {
  const headers = payload.headers || new Headers()
  headers.set('Content-Type', 'application/json');
  const jsonMediaType = Object.assign({ headers }, payload)

  return fetch(url, jsonMediaType)
}

export function* fetchWithSessionAndJson(fetch, url, payload) {
  const session = yield select(state => state.login.get('session'))
  const headers = payload.headers || new Headers()
  headers.set('Authorization', `Bearer ${session}`)
  headers.set('Content-Type', 'application/json');
  const finalPayload = Object.assign({ headers }, payload)

  return fetch(url, finalPayload)
}
