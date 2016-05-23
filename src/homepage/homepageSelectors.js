import { List } from 'immutable'
import { createSelector, createStructuredSelector } from 'reselect'

export const tagsSelector = createSelector(
  state => state.blogPosts,
  posts => {
    const s = posts.valueSeq()
      .reduce((a, b) => a.concat(b.get('tags')), List.of())
      .toSet()
    return s
  }
)

const showLoginPopUpSelector = createSelector(
  state => state.uiState,
  uiState => uiState.get('showLoginPopUp')
)

const mostRecent2Posts = createSelector(
  state => state.blogPosts,
  allPosts => allPosts.toList().takeLast(2)
)

export default createStructuredSelector({
  posts: mostRecent2Posts,
  postDrafts: state => state.postDrafts,
  tags: tagsSelector,
  showLoginPopUp: showLoginPopUpSelector,
})
