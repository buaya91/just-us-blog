import React, { Component, PropTypes } from 'react';
import PopUp from '../../container/popup/PopUp'
import PostEditor from './PostEditor'

export default class UpdatePostButton extends Component {
  render() {
    const { actions, pid, postDraft, showDraft } = this.props
    return (
      <div>
        <PopUp show={showDraft} closePopUp={() => actions.showPostDraft(undefined)}>
          <PostEditor
            postDraft={postDraft}
            updatePostDraft={e => actions.updatePostEditDraft(pid, e.target.value)}
          />
        </PopUp>
        <button onClick={() => actions.showPostDraft(pid)}>Update post</button>
      </div>
    )
  }
}

UpdatePostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.number.isRequired,
  postDraft: PropTypes.string,
  showDraft: PropTypes.bool,
}
