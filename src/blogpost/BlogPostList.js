import React, { Component, PropTypes } from 'react';
import BlogPost from './BlogPost'

export default class BlogPostList extends Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map((p, k) => <BlogPost post={p} key={k} />)}
      </div>
    )
  }
}

BlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

BlogPostList.defaultProps = {
  posts: [],
}
