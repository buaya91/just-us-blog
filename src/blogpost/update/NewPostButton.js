import React, { Component, PropTypes } from 'react'
import PostEditorPopUp from '../editor/PostEditorPopUp'

export default class NewPostButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDraft: false,
    }
  }

  showDraft() {
    this.setState({ showDraft: true })
  }

  closeDraft() {
    this.setState({ showDraft: false })
  }

  render() {
    const { actions, postDraft } = this.props
    const { showDraft } = this.state
    return (
      <div>
        <PostEditorPopUp
          show={showDraft}
          closePopUp={::this.closeDraft}
          postDraft={postDraft}
          updatePostDraft={actions.updateNewPostDraft}
        />
        <button onClick={::this.showDraft}>New post</button>
      </div>
    )
  }
}

NewPostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  postDraft: PropTypes.object,
}

