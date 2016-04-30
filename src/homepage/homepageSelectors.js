import { List } from 'immutable'
import { createSelector, createStructuredSelector } from 'reselect'

const tagsSelector = createSelector(
  state => state.blogPosts,
  posts => {
    const s = posts.valueSeq()
      .reduce((a, b) => a.concat(b.get('tags')), List.of())
      .toSet()
    return s
  }
)

const showLoginPopUpSelector = createSelector(
  state => state.login,
  login => login.get('showPopUp')
)

const loggedSelector = createSelector(
  state => state.login,
  login => login.get('status') === 'success'
)

const loginErrorSelector = createSelector(
  state => state.login,
  login => login.get('error')
)

export default createStructuredSelector({
  logged: loggedSelector,
  loginError: loginErrorSelector,
  posts: state => state.blogPosts,
  postDrafts: state => state.postDrafts,
  tags: tagsSelector,
  showLoginPopUp: showLoginPopUpSelector,
  username: state => state.login.get('name'),
})
