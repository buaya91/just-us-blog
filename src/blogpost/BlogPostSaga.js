import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { addPost } from './BlogActions'

const allPostUrl = 'http://localhost:9000/post'

export default function* fetchAllPost(action) {
    window.fetch(allPostUrl, { method: 'get' }).then(posts => {
        addPost(posts)
    })
}
