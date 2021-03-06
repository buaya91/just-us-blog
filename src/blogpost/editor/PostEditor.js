import React, { Component, PropTypes } from 'react'
import NavBarContainer from '../../container/navbar/HorizontalNavContainer'
import TagGroup from '../tag/TagGroup'
import marked from 'marked'
import HighLight from 'react-highlight'

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

  updateTags(tagsInStr) {
    const { postDraft, updatePostDraft } = this.props
    const { content, title } = postDraft
    const tags = tagsInStr.split(',')
    updatePostDraft({
      title,
      content,
      tags,
    })
  }

  render() {
    const { postDraft, submitChange } = this.props
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
        <input type="text" value={tags.join(',')} onChange={e => this.updateTags(e.target.value)} placeholder="tags" />
      </div>)

    const previewView =
      (<div className="editor-panel">
        {postDraft && (
          <div>
            <HighLight innerHTML className="scala post-content">
              {marked(content)}
            </HighLight>
            <TagGroup tags={tags} />
          </div>
        )}
      </div>)

    const views = [
      { component: inputView, name: 'Edit' },
      { component: previewView, name: 'Preview' },
    ]

    return (
      <div>
        <NavBarContainer
          id="editor"
          views={views}
        />
        <button onClick={() => submitChange(postDraft)}>Submit</button>
      </div>
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
  submitChange: PropTypes.func,
}
