import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PopUp from '../../container/popup/PopUp'
import PostEditor from '../editor/PostEditor'


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
    const { actions, pid, postDraft } = this.props
    const { showDraft } = this.state
    return (
      <div>
        <PopUp show={showDraft} closePopUp={::this.closeDraft}>
          <PostEditor
            postDraft={postDraft}
            updatePostDraft={post => actions.updatePostEditDraft(pid, post)}
          />
        </PopUp>
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
