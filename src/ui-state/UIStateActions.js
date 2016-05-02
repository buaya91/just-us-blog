export const SHOW_NEW_POST_EDITOR = 'SHOW_NEW_POST_EDITOR'
export const HIDE_NEW_POST_EDITOR = 'HIDE_NEW_POST_EDITOR'
export const SHOW_UPDATE_POST_EDITOR = 'SHOW_UPDATE_POST_EDITOR'
export const HIDE_UPDATE_POST_EDITOR = 'HIDE_UPDATE_POST_EDITOR'

export const showNewPostEditor = () => ({
  type: SHOW_NEW_POST_EDITOR,
})

export const hideNewPostEditor = () => ({
  type: HIDE_NEW_POST_EDITOR,
})

export const showUpdatePostEditor = pid => ({
  type: SHOW_UPDATE_POST_EDITOR,
  payload: pid,
})

export const hideUpdatePostEditor = pid => ({
  type: HIDE_UPDATE_POST_EDITOR,
  payload: pid,
})
