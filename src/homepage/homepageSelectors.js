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

export default createStructuredSelector({
  posts: state => state.blogPosts,
  postDrafts: state => state.postDrafts,
  tags: tagsSelector,
  showLoginPopUp: showLoginPopUpSelector,
})
