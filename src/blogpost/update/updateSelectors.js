import { createStructuredSelector, createSelector } from 'reselect'

export const newPostButtonSelector = createStructuredSelector({
  postDraft: state => state.postDrafts.get('new').toJS(),
  showEditor: state => state.uiState.get('showNewPopUp'),
  showButton: state => state.login.get('session'),
})

export const idToShow = createSelector(
  state => state.uiState,
  uiState => uiState.get('showUpdatePopUp'),
)

const postDraftForUpdate = createSelector(
  [idToShow, state => state.postDrafts],
  (id, postDrafts) => postDrafts.get(id),
)

export const updatePostButtonSelector = createStructuredSelector({
  idToShow,
  showButton: state => state.login.get('session'),
  postDraft: postDraftForUpdate,
})
