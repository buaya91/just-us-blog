import React, { Component, PropTypes } from 'react';
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import { markdown } from 'markdown'

export default class PostEditor extends Component {
  render() {
    const { postDraft, updatePostDraft } = this.props
    const inputView =
      (<textarea
        className="editor-panel"
        placeholder="Draft your post here ... (#Markdown supported)"
        onChange={updatePostDraft}
        onClick={e => e.stopPropagation()}
        value={postDraft}
      />)
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
        <NavBarContainer
          id="editor"
          views={views}
        />
    )
  }
}

PostEditor.propTypes = {
  postDraft: PropTypes.string.isRequired,
  updatePostDraft: PropTypes.func,
}

PostEditor.defaultProps = {
  postDraft: '',
}
