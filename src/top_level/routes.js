import HomepageContainer from '../homepage/HomepageContainer'
import ShowLoginPopUp from '../login/ShowLoginPopUp'
import FilteredBlogPostList from '../blogpost/list/FilteredBlogPostList'
import StreamDemo from '../demo/fetch-streaming-demo/StreamDemo'

export default [
  { path: '/', component: HomepageContainer },
  { path: '/login', component: ShowLoginPopUp },
  { path: '/post', component: FilteredBlogPostList },
  { path: '/demo/stream', component: StreamDemo },
]
