import React, { Component, PropTypes } from 'react'
import PopUp from '../../container/popup/PopUp'
import PostEditor from '../editor/PostEditor'

export default class PostEditorPopUp extends Component {
  render() {
    const { postDraft, closePopUp, show, updatePostDraft } = this.props
    return (
      <PopUp show={show} closePopUp={closePopUp}>
        <PostEditor
          postDraft={postDraft}
          updatePostDraft={updatePostDraft}
        />
      </PopUp>
    )
  }
}

PostEditorPopUp.propTypes = {
  closePopUp: PropTypes.func,
  postDraft: PropTypes.object,
  show: PropTypes.bool,
  submitChange: PropTypes.func,
  updatePostDraft: PropTypes.func,
}
