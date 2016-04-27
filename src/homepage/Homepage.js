import React, { Component, PropTypes } from 'react'
import Directory from '../directory/Directory'
import BlogPostList from '../blogpost/list/BlogPostList'

export default class Homepage extends Component {
  render() {
    return (
      <div id="homepage">
        <Directory {...this.props} />
        <BlogPostList {...this.props} />
      </div>
    )
  }
}

Homepage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
}
