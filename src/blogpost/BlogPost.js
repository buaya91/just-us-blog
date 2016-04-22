import React, { Component, PropTypes } from 'react'
import TagList from '../tag/TagList'

export default class BlogPost extends Component {
  render() {
    const { title, content, postAt, tags } = this.props.post;

    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
