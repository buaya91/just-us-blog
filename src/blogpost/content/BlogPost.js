import React, { Component, PropTypes } from 'react'
import BlogPostContent from './BlogPostContent'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'

export default class BlogPost extends Component {
  render() {
    const { post } = this.props
    const { pid, author, postAt } = post;

    return (
      <div className="blogpost">
        <BlogPostContent {...post} />
        <div>{`Author: ${author}`}</div>
        <div>{`Post at: ${postAt}`}</div>
        <UpdatePostButton
          {...this.props}
          pid={pid}
        />
        <SharePanel url={`${location.host}/post/${pid}`} title="Just Us Blog" />
      </div>
    )
  }
}

BlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.shape({
    pid: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  postDraft: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
}
