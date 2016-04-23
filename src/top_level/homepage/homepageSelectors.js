import { blogpostsSelector } from '../../common/selectors'
import { createSelector, createStructuredSelector } from 'reselect'

const blogpostsArray = createSelector(
  blogpostsSelector,
  blogposts => blogposts.valueSeq()
)

export const homepageSelector = createStructuredSelector({
  blogposts: blogpostsArray,
})
