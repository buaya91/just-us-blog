import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { newPostButtonSelector } from './updateSelectors'

@connect(newPostButtonSelector)
export default class NewPostButton extends Component {
  render() {
    const { actions, postDraft, showEditor, showButton } = this.props
    if (!showButton) return null
    return (
      <div>
        <PostEditorPopUp
          show={showEditor}
          closePopUp={actions.hideNewPostEditor}
          postDraft={postDraft}
          updatePostDraft={actions.updateNewPostDraft}
          submitChange={actions.createPostRequested}
        />
        <button {...this.props} onClick={actions.showNewPostEditor}>New post</button>
      </div>
    )
  }
}

NewPostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  postDraft: PropTypes.object,
  showEditor: PropTypes.bool,
  showButton: PropTypes.bool,
}

