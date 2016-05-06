import { createStructuredSelector } from 'reselect'

export const newPostButtonSelector = createStructuredSelector({
  showEditor: state => state.uiState.get('showNewPopUp'),
  showButton: state => state.login.get('session'),
})

export const updatePostButtonSelector = createStructuredSelector({
  idToShow: state => state.uiState.get('showUpdatePopUp'),
  showButton: state => state.login.get('session'),
})
