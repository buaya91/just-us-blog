import PostEditor from '../postdraft/component/PostEditor'
import AllBlogPost from '../blogpost/component/BlogPostContainer'

export default [
  { path: '/', component: AllBlogPost },
  { path: '/edit', component: PostEditor },
]
