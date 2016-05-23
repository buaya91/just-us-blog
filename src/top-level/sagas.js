import * as blogpost from '../blogpost/BlogPostSaga'
import * as login from '../login/LoginSaga'
import * as uiState from '../ui-state/UIStateSaga'

export default Object.assign(blogpost, login, uiState)
