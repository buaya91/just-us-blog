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
      <div id="new-post-button">
        <PostEditorPopUp
          show={showEditor}
          closePopUp={actions.hideNewPostEditor}
          postDraft={postDraft}
          updatePostDraft={actions.updateNewPostDraft}
          submitChange={actions.createPostRequested}
        />
        <button {...this.props} onClick={actions.showNewPostEditor}>
          <svg viewBox="0 0 32 32">
            <path className="plus-button" d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
          </svg>
        </button>
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

