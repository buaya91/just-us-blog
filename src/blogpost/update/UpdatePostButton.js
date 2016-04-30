import React, { Component, PropTypes } from 'react'
import PostEditorPopUp from '../editor/PostEditorPopUp'

export default class UpdatePostButton extends Component {
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
    const { showDraft } = this.state
    const { actions, pid, postDraft } = this.props
    return (
      <div>
        <PostEditorPopUp
          show={showDraft}
          closePopUp={::this.closeDraft}
          postDraft={postDraft}
          updatePostDraft={post => actions.updatePostEditDraft(pid, post)}
          submitChange={post => actions.postUpdateRequested(pid, post)}
        />
        <button onClick={::this.showDraft}>Update post</button>
      </div>
    )
  }
}

UpdatePostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.number.isRequired,
  postDraft: PropTypes.object,
}
