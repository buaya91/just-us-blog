import App from '../AppContent'
import SingleBlogPost from '../blogpost/content/SingleBlogPost'

export default [
  { path: '/', component: App },
  { path: '/post/:pid', component: SingleBlogPost },
  { path: '*', component: App },
]
