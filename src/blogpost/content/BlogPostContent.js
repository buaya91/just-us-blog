import React, { Component, PropTypes } from 'react'
import TagList from '../tag/TagList'
import { markdown } from 'markdown'

export default class BlogPostContent extends Component {
  render() {
    const { title, content, tags } = this.props

    return (
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(content) }}></div>
        <TagList tags={tags} />
      </div>
    )
  }
}

BlogPostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}
