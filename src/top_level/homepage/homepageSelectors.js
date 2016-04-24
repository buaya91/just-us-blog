import { blogPostsSelector } from '../../common/selectors'
import { createSelector, createStructuredSelector } from 'reselect'

const blogpostsArray = createSelector(
  blogPostsSelector,
  blogposts => blogposts.valueSeq()
)

export const homepageSelector = createStructuredSelector({
  blogposts: blogpostsArray,
})
