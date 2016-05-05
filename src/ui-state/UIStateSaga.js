import { takeEvery } from 'redux-saga'
import { hideNewPostEditor, hideUpdatePostEditor } from './UIStateActions'
import {
  POST_UPDATE_SUCCESS,
  POST_CREATE_SUCCESS,
} from '../blogpost/BlogActions'
import { put } from 'redux-saga/effects'

function* hideNew() {
  yield put(hideNewPostEditor())
}

function* hideUpdate(action) {
  const { pid } = action.payload
  yield put(hideUpdatePostEditor(pid))
}

export function* watchUIState() {
  yield [
    takeEvery(POST_CREATE_SUCCESS, hideNew),
    takeEvery(POST_UPDATE_SUCCESS, hideUpdate),
  ]
}
