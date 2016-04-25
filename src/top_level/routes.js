import PostEditor from '../postdraft/component/PostEditor'
import AllBlogPost from '../blogpost/component/BlogPostContainer'

export default [
  { path: '/', component: AllBlogPost },
  { path: '/post/edit/:pid', component: PostEditor },
  { path: '/post/new', component: PostEditor },
  { path: '/login', component: PostEditor },
]
