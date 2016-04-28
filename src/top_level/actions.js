import * as blogPosts from '../blogpost/BlogActions'
import * as postDrafts from '../blogpost/editor/PostDraftActions'
import * as login from '../login/LoginActions'

export default Object.assign(blogPosts, postDrafts, login)
