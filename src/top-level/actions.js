import * as blogPosts from '../blogpost/BlogActions'
import * as postDrafts from '../blogpost/editor/PostDraftActions'
import * as login from '../login/LoginActions'
import * as uiState from '../ui-state/UIStateActions'

export default Object.assign(blogPosts, postDrafts, login, uiState)
