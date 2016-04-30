import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import {
  addPosts,
  ALL_POST_REQUESTED,
  postCreateFailed,
  postCreateSuccess,
  POST_CREATE_REQUESTED,
} from './BlogActions'
import { fetchWithSessionAndJson } from '../common/sagaHelpers'

const postUrl = 'http://localhost:9000/post'

export function* fetchAllPost() {
  try {
    const fetchAttempt = yield call(window.fetch, postUrl, { method: 'get' })
    const responseJson = yield fetchAttempt.json()
    yield put(addPosts(responseJson))
  } catch (err) {
    console.log(`Fetch post failed: ${err}`)
  }
}

export function* updatePost(action) {

}

export function* createPost(action) {
  try {
    const post = action.payload
    const createAttempt = yield call(
      fetchWithSessionAndJson,
      window.fetch,
      postUrl,
      { method: 'post', body: JSON.stringify(post) }
    )
    if (!createAttempt.ok) {
      yield put(postCreateFailed())
    } else {
      yield put(postCreateSuccess(post))
    }
  } catch (err) {
    console.log(`Create attempt failed: ${err}`)
  }
}

export function* watchPostActions() {
  yield [
    takeEvery(ALL_POST_REQUESTED, fetchAllPost),
    takeLatest(POST_CREATE_REQUESTED, createPost),
  ]
}
