// Action type
export const POSTS_ADDED = 'POSTS_ADDED'
export const ALL_POST_REQUESTED = 'ALL_POST_REQUESTED'

export const POST_UPDATE_REQUESTED = 'POST_UPDATE_REQUESTED'
export const POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS'
export const POST_UPDATE_FAILED = 'POST_UPDATE_FAILED'

export const POST_CREATE_REQUESTED = 'POST_CREATE_REQUESTED'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILED = 'POST_CREATE_FAILED'

export const allPostRequested = () => ({
  type: ALL_POST_REQUESTED,
})

export const addPosts = posts => ({
  type: POSTS_ADDED,
  payload: posts,
})

export const postUpdateRequested = (pid, update) => ({
  type: POST_UPDATE_REQUESTED,
  payload: {
    pid,
    update,
  },
})

export const postUpdateSuccess = (pid, updatedPost) => ({
  type: POST_UPDATE_SUCCESS,
  paylod: {
    pid,
    updatedPost,
  },
})

export const postUpdateFailed = (pid, err) => ({
  type: POST_UPDATE_FAILED,
  payload: {
    pid,
    err,
  },
})

export const createPostRequested = post => ({
  type: POST_CREATE_REQUESTED,
  payload: post,
})

export const postCreateSuccess = post => ({
  type: POST_CREATE_SUCCESS,
  payload: post,
})

export const postCreateFailed = () => ({
  type: POST_CREATE_FAILED,
})
