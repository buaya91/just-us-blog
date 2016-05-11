import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BlogPostList from './BlogPostList'
import { blogPostListSelector } from './blogPostListSelectors'
import TopBar from '../../topbar/TopBar'

const filter = (posts, params) => {
  const { pid, tag } = params
  const result = {}
  if (pid) {
    result[pid] = posts[pid] || {}
    return result
  }

  if (tag) {
    Object.keys(posts).forEach(k => {
      if (posts[k].tags.includes(tag)) {
        result[k] = posts[k]
      }
    })
    return result
  }

  return posts
}

@connect(blogPostListSelector)
export default class FilteredBlogPostList extends Component {
  render() {
    const { posts, location } = this.props
    const filtered = filter(posts, location.query)
    return (
      <div>
        <TopBar {...this.props} />
        <div className="page-content">
          <BlogPostList {...this.props} posts={filtered} />
        </div>
      </div>
    )
  }
}

FilteredBlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
}
