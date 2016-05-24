import { createStructuredSelector } from 'reselect'
import { idToShow } from '../update/updateSelectors'

export const blogPostListSelector = createStructuredSelector({
  idToShow,
  posts: state => state.blogPosts.toJS(),
  postDrafts: state => state.postDrafts.toJS(),
})
