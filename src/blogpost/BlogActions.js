// Action type
export const POSTS_ADDED = 'POSTS_ADDED'
export const ALL_POST_REQUESTED = 'ALL_POST_REQUESTED'

export const allPostRequested = () => ({
  type: ALL_POST_REQUESTED,
})

export const addPosts = posts => ({
  type: POSTS_ADDED,
  payload: posts,
})
