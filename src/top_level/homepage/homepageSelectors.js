import { blogpostsSelector } from '../../common/selectors'
import { createStructuredSelector } from 'reselect'

export const homepageSelector = createStructuredSelector({
  blogposts: blogpostsSelector,
})
