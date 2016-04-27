import React, { Component, PropTypes } from 'react'
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import BlogPostContent from '../content/BlogPostContent'

export default class PostEditor extends Component {

  updateTitle(title) {
    const { postDraft, updatePostDraft } = this.props
    const { content, tags } = postDraft
    updatePostDraft({
      title,
      content,
      tags,
    })
  }

  updateContent(content) {
    const { postDraft, updatePostDraft } = this.props
    const { title, tags } = postDraft
    updatePostDraft({
      title,
      content,
      tags,
    })
  }

  updateTags(tags) {
    const { postDraft, updatePostDraft } = this.props
    const { content, title } = postDraft
    updatePostDraft({
      title,
      content,
      tags,
    })
  }

  render() {
    const { postDraft } = this.props
    const { title, content, tags } = postDraft

    const inputView =
      (<div className="editor-panel">
        <input
          type="text"
          value={title}
          onChange={e => this.updateTitle(e.target.value)}
          placeholder="Title here ..."
        />
        <textarea
          placeholder="Draft your post here ... (#Markdown supported)"
          onChange={e => this.updateContent(e.target.value)}
          onClick={e => e.stopPropagation()}
          value={content}
        />
      </div>)

    const previewView =
      (<div className="editor-panel">
        {postDraft && <BlogPostContent {...postDraft} />}
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
