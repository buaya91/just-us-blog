import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { newPostButtonSelector } from './updateSelectors'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const style = {
  position: 'fixed',
  right: '2em',
  bottom: '2em',
}

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
        <FloatingActionButton style={style} onClick={actions.showNewPostEditor}>
          <ContentAdd />
        </FloatingActionButton>
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

