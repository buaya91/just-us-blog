import { blogPostsSelector, postDraftsSelector } from '../common/selectors'
import { createSelector, createStructuredSelector } from 'reselect'

const blogpostsArray = createSelector(
  blogPostsSelector,
  blogposts => blogposts.valueSeq()
)

export const allBlogPostSelector = createStructuredSelector({
  blogPosts: blogpostsArray,
  postDrafts: postDraftsSelector,
})

