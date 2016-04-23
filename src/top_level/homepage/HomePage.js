import React, { Component, PropTypes } from 'react';
import BlogPostList from '../../blogpost/BlogPostList'

export default class HomePage extends Component {
  render() {
    const { blogposts } = this.props
    return (
      <BlogPostList {...this.props} posts={blogposts} />
    )
  }
}

HomePage.propTypes = {
  blogposts: PropTypes.array.isRequired,
}
