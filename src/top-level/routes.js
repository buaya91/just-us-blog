import HomepageContainer from '../homepage/HomepageContainer'
import ShowLoginPopUp from '../login/ShowLoginPopUp'
import FilteredBlogPostList from '../blogpost/list/FilteredBlogPostList'
import StreamDemo from '../demo/fetch-streaming-demo/StreamDemo'
import App from '../AppContent'

export default [
  { path: '/', component: App },
  { path: '/demo/stream', component: StreamDemo },
  { path: '*', component: App },
]
