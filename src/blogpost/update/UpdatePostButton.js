import React, { Component, PropTypes } from 'react'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './updateSelectors'

@connect(updatePostButtonSelector)
export default class UpdatePostButton extends Component {
  render() {
    const { actions, pid, postDraft, idToShow, showButton } = this.props
    if (!showButton) return null
    return (
      <div className="update-button">
        <PostEditorPopUp
          show={idToShow === pid}
          closePopUp={() => actions.hideUpdatePostEditor(pid)}
          postDraft={postDraft}
          updatePostDraft={post => actions.updatePostEditDraft(pid, post)}
          submitChange={post => actions.postUpdateRequested(pid, post)}
        />
        <button className="edit-button" onClick={() => actions.showUpdatePostEditor(pid)}>
          <svg viewBox="0 0 24 24">
            <path d="M21.635,6.366c-0.467-0.772-1.043-1.528-1.748-2.229c-0.713-0.708-1.482-1.288-2.269-1.754L19,1C19,1,21,1,22,2S23,5,23,5  L21.635,6.366z M10,18H6v-4l0.48-0.48c0.813,0.385,1.621,0.926,2.348,1.652c0.728,0.729,1.268,1.535,1.652,2.348L10,18z M20.48,7.52  l-8.846,8.845c-0.467-0.771-1.043-1.529-1.748-2.229c-0.712-0.709-1.482-1.288-2.269-1.754L16.48,3.52  c0.813,0.383,1.621,0.924,2.348,1.651C19.557,5.899,20.097,6.707,20.48,7.52z M4,4v16h16v-7l3-3.038V21c0,1.105-0.896,2-2,2H3  c-1.104,0-2-0.895-2-2V3c0-1.104,0.896-2,2-2h11.01l-3.001,3H4z" />
          </svg>
        </button>
      </div>
    )
  }
}

UpdatePostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  postDraft: PropTypes.object,
  idToShow: PropTypes.number,
  showButton: PropTypes.bool,
}
