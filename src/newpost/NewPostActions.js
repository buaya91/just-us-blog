export const UPDATE_NEW_POST_DRAFT = 'UPDATE_NEW_POST_DRAFT'
export const UPDATE_POST_EDIT_DRAFT = 'UPDATE_POST_EDIT_DRAFT'

export const updateNewPostDraft = draft => ({
  type: UPDATE_NEW_POST_DRAFT,
  payload: draft,
})

export const updatePostEditDraft = (pid, draft) => ({
  type: UPDATE_POST_EDIT_DRAFT,
  payload: {
    pid,
    draft,
  },
})
