import { POST_ADDED } from './BlogActions'
import { fromJS } from 'immutable'

const initialState = fromJS({})

export default (state = initialState, action) => {
    switch (action.type) {
    case POST_ADDED: return state.set(action.post.pid, action.payload)
    default: return state
    }
}
