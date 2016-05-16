import React, { Component, PropTypes } from 'react'
import BlogPostContent from './BlogPostContent'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'

export default class BlogPost extends Component {
  componentWillMount() {
    const { actions, post, pid } = this.props
    actions.updatePostEditDraft(pid, post)
  }

  render() {
    const { post, pid } = this.props
    const { author, postAt } = post;

    return (
      <div className="blogpost" data-author={author}>
        <UpdatePostButton {...this.props} pid={pid} />
        <BlogPostContent {...post} />
        <div className="post-footer">
          <span className="author">{`Author: ${author}`}</span>
          <span className="updated-time">{`Post at: ${postAt}`}</span>
        </div>
        <SharePanel url={`${location.host}/post?pid${pid}`} title="Just Us Blog" />
      </div>
    )
  }
}

BlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  post: PropTypes.shape({
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
