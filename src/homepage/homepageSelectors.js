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

export default createStructuredSelector({
  posts: state => state.blogPosts,
  postDrafts: state => state.postDrafts,
  tags: tagsSelector,
  showLoginPopUp: state => state.login.get('showPopUp'),
})