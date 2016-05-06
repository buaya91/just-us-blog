import HomepageContainer from '../homepage/HomepageContainer'
import FilteredBlogPostList from '../blogpost/list/FilteredBlogPostList'

export default [
  { path: '/', component: HomepageContainer },
  { path: '/post', component: FilteredBlogPostList },
]
