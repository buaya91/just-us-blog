// Action type
export const POST_ADDED = 'POST_ADDED'
export const ALL_POST_REQUESTED = 'ALL_POST_REQUESTED'

export const allPostRequested = () => ({
    type: ALL_POST_REQUESTED,
})

export const addPost = post => ({
    type: POST_ADDED,
    payload: post,
})
