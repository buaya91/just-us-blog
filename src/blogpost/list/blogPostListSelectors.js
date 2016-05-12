import { createStructuredSelector } from 'reselect'
import { tagsSelector } from '../../homepage/homepageSelectors'

export const blogPostListSelector = createStructuredSelector({
  posts: state => state.blogPosts.toJS(),
  postDrafts: state => state.postDrafts.toJS(),
  tags: state => tagsSelector(state).toJS(),
})
