import React, { Component, PropTypes } from 'react'
import BlogPost from '../content/BlogPost'

export default class BlogPostList extends Component {
  render() {
    const { actions, posts, postDrafts } = this.props
    return (
      <div>
        {
          Object.keys(posts).map(pid =>
            <BlogPost key={pid} actions={actions} post={posts[pid]} postDraft={postDrafts[pid]} />)
        }
      </div>
    )
  }
}

BlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
}
