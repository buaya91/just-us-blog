import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BlogPostList from './BlogPostList'
import { blogPostListSelector } from './blogPostListSelectors'
import TagList from '../tag/TagList'

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
    const { posts, location, tags } = this.props
    const filtered = filter(posts, location.query)
    return (
      <div>
        <div id="side-bar-container" className="page-content">
          <div id="directory">
            <TagList tags={tags} />
          </div>
          <div id="post-list">
            {posts && <BlogPostList {...this.props} posts={filtered} />}
          </div>
        </div>
      </div>
    )
  }
}

FilteredBlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  posts: PropTypes.object,
  postDrafts: PropTypes.object,
  tags: PropTypes.array,
}
