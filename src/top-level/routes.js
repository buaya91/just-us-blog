import StreamDemo from '../demo/fetch-streaming-demo/StreamDemo'
import App from '../AppContent'
import SingleBlogPost from '../blogpost/content/SingleBlogPost'

export default [
  { path: '/', component: App },
  { path: '/post/:pid', component: SingleBlogPost },
  { path: '/demo/stream', component: StreamDemo },
  { path: '*', component: App },
]
