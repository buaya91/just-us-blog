import { createStructuredSelector } from 'reselect'

export const newPostButtonSelector = createStructuredSelector({
  show: state => state.uiState.get('showNewPopUp'),
})

export const updatePostButtonSelector = createStructuredSelector({
  idToShow: state => state.uiState.get('showUpdatePopUp'),
})
