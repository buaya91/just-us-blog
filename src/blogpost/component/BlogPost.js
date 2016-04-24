import React, { Component, PropTypes } from 'react'
import TagList from '../../tag/TagList'

export default class BlogPost extends Component {
  render() {
    const { author, title, content, postAt, tags } = this.props.post;

    return (
      <div className="blogpost">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <div>{`Author: ${author}`}</div>
        <div>{`Post at: ${postAt}`}</div>
        <TagList tags={tags} />
      </div>
    )
  }
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
}
