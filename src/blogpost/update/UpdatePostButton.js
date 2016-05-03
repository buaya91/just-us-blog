import React, { Component, PropTypes } from 'react'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './updateSelectors'

@connect(updatePostButtonSelector)
export default class UpdatePostButton extends Component {
  render() {
    const { actions, pid, postDraft, idToShow } = this.props
    return (
      <div>
        <PostEditorPopUp
          show={idToShow === pid}
          closePopUp={() => actions.hideUpdatePostEditor(pid)}
          postDraft={postDraft}
          updatePostDraft={post => actions.updatePostEditDraft(pid, post)}
          submitChange={post => actions.postUpdateRequested(pid, post)}
        />
        <button onClick={() => actions.showUpdatePostEditor(pid)}>Update post</button>
      </div>
    )
  }
}

UpdatePostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  postDraft: PropTypes.object,
  idToShow: PropTypes.number,
}
