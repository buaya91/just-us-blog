import React, { Component, PropTypes } from 'react'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './updateSelectors'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
  position: 'relative',
  float: 'right',
  top: '-5.2em',
  right: '1.2em',
}

@connect(updatePostButtonSelector)
export default class UpdatePostButton extends Component {
  render() {
    const { actions, pid, postDraft, idToShow, showButton } = this.props
    if (!showButton) return null
    return (
      <div style={style}>
        <PostEditorPopUp
          show={idToShow === pid}
          closePopUp={() => actions.hideUpdatePostEditor(pid)}
          postDraft={postDraft}
          updatePostDraft={post => actions.updatePostEditDraft(pid, post)}
          submitChange={post => actions.postUpdateRequested(pid, post)}
        />
        <RaisedButton
          icon={<i className="material-icons">edit</i>}
          onClick={() => actions.showUpdatePostEditor(pid)}
        />
      </div>
    )
  }
}

UpdatePostButton.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  postDraft: PropTypes.object,
  idToShow: PropTypes.number,
  showButton: PropTypes.bool,
}
