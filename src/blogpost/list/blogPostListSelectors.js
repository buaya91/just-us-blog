import { createStructuredSelector } from 'reselect'

export const blogPostListSelector = createStructuredSelector({
  posts: state => state.blogPosts.toJS(),
  postDrafts: state => state.postDrafts.toJS(),
})
