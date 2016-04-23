import React, { Component, PropTypes } from 'react';
import BlogPostList from '../BlogPostList'

export default class AllBlogPost extends Component {
  render() {
    return (
      <BlogPostList {...this.props} posts={this.props.blogposts} />
    )
  }
}

AllBlogPost.propTypes = {
  blogposts: PropTypes.array.isRequired,
}
