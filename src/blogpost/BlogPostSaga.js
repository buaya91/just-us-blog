import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import {
  addPosts,
  ALL_POST_REQUESTED,
  postCreateFailed,
  postCreateSuccess,
  POST_CREATE_REQUESTED,
  postUpdateFailed,
  postUpdateSuccess,
  POST_UPDATE_REQUESTED,
} from './BlogActions'
import { updatePostEditDraft } from './editor/PostDraftActions'
import { fetchWithSessionAndJson } from '../common/sagaHelpers'
import config from '../config'

const postUrl = `${config.api}/post`

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
  try {
    const { update, pid } = action.payload
    const updateAttempt = yield call(
      fetchWithSessionAndJson,
      window.fetch,
      `${postUrl}/${pid}`,
      { method: 'post', body: JSON.stringify(update) }
    )
    if (updateAttempt.ok) {
      const author = yield select(state => state.login.get('name'))
      const postAt = (new Date()).toDateString()
      const updatedPost = Object.assign(update, { author, postAt })
      yield put(postUpdateSuccess(pid, updatedPost))
      yield put(updatePostEditDraft(pid, updatedPost))
    } else {
      const { error } = updateAttempt.json()
      yield put(postUpdateFailed(pid, error))
    }
  } catch (err) {

  }
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
      const { pid } = yield createAttempt.json()
      const author = yield select(state => state.login.get('name'))
      const postAt = (new Date()).toDateString()
      const createdPost = Object.assign(post, { author, postAt })
      yield put(postCreateSuccess(pid, createdPost))
    }
  } catch (err) {
    console.log(`Create attempt failed: ${err}`)
  }
}

export function* watchPostActions() {
  yield [
    takeEvery(ALL_POST_REQUESTED, fetchAllPost),
    takeLatest(POST_CREATE_REQUESTED, createPost),
    takeLatest(POST_UPDATE_REQUESTED, updatePost),
  ]
}
