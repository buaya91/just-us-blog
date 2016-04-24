import React, { Component, PropTypes } from 'react';
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import PopUp from '../../container/popup/PopUp'
import { markdown } from 'markdown'

export default class PostEditor extends Component {
  render() {
    const { postDraft } = this.props
    const inputView = <textarea className="editor-panel" value={postDraft}></textarea>
    const previewView =
      (<div
        className="editor-panel"
        dangerouslySetInnerHTML={{ __html: markdown.toHTML(postDraft) }}
      />)
    const views = [
      { component: inputView, name: 'Edit' },
      { component: previewView, name: 'Preview' },
    ]
    return (
      <PopUp>
        <NavBarContainer
          id="editor"
          views={views}
        />
      </PopUp>
    )
  }
}

PostEditor.propTypes = {
  postDraft: PropTypes.string,
  updatePostDraft: PropTypes.func,
}

PostEditor.defaultProps = {
  postDraft: '',
}
