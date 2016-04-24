import { blogpostsSelector } from '../common/selectors'
import { createSelector, createStructuredSelector } from 'reselect'

const blogpostsArray = createSelector(
  blogpostsSelector,
  blogposts => blogposts.valueSeq()
)

export const allBlogPostSelector = createStructuredSelector({
  blogposts: blogpostsArray,
})

