import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { addPosts, ALL_POST_REQUESTED } from './BlogActions'

const allPostUrl = 'http://localhost:9000/post'

export function* fetchAllPost() {
  const fetchResponse = yield window.fetch(allPostUrl, { method: 'get' })
  const responseJson = yield fetchResponse.json()
  yield put(addPosts(responseJson))
}

export function* watchAllPostRequested() {
  yield* takeEvery(ALL_POST_REQUESTED, fetchAllPost)
}
