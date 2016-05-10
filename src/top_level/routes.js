import HomepageContainer from '../homepage/HomepageContainer'
import ShowLoginPopUp from '../login/ShowLoginPopUp'
import FilteredBlogPostList from '../blogpost/list/FilteredBlogPostList'

export default [
  { path: '/', component: HomepageContainer },
  { path: '/login', component: ShowLoginPopUp },
  { path: '/post', component: FilteredBlogPostList },
]
