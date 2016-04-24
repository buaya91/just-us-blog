import React, { Component, PropTypes } from 'react';
import PopUp from '../../container/popup/PopUp'
import PostEditor from './PostEditor'

export default class NewPostButton extends Component {
  render() {
    const { actions, postDraft, showDraft } = this.props
    return (
      <div>
        <PopUp show={showDraft}>
          <PostEditor postDraft={postDraft} />
        </PopUp>
        <button onClick={() => actions.showPostDraft('new')}></button>
      </div>
    )
  }
}

NewPostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  postDraft: PropTypes.string,
  showDraft: PropTypes.bool,
}
