import App from '../AppContent'
import SingleBlogPost from '../blogpost/content/SingleBlogPost'
import WSPushExamplePage from '../demo/ws-push/WSPushExamplePage'

export default [
  { path: '/', component: App },
  { path: '/ws-push', component: WSPushExamplePage },
  { path: '/post/:pid', component: SingleBlogPost },
  { path: '*', component: App },
]
