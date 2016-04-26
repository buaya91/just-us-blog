import React, { Component, PropTypes } from 'react'
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import BlogPostContent from '../content/BlogPostContent'
import { markdown } from 'markdown'

export default class PostEditor extends Component {
  render() {
    const { postDraft, updatePostDraft } = this.props
    const { title, content, tags } = postDraft
    const inputView =
      (<div className="editor-panel">
        <input type="text" value={title} placeholder="Title here ..." />
        <textarea
          placeholder="Draft your post here ... (#Markdown supported)"
          onChange={updatePostDraft}
          onClick={e => e.stopPropagation()}
          value={content}
        />
      </div>)
    const previewView =
      (<div className="editor-panel">
        <BlogPostContent {...postDraft} />
      </div>)
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
  postDraft: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
  updatePostDraft: PropTypes.func,
}
