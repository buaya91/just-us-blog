import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import BlogPostList from './BlogPostList'
import { blogPostListSelector } from './blogPostListSelectors'
import Tag from '../tag/Tag'

import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

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

const style = {
  display: 'flex',
  paper1: {
    flex: '0 0 200px',
  },
  paper2: {
    flex: '5 2 auto',
  },
}

@connect(blogPostListSelector)
export default class FilteredBlogPostList extends Component {
  render() {
    const { posts, location, tags } = this.props
    const filtered = filter(posts, location.query)
    return (
      <div style={style}>
        <Paper style={style.paper2}>
          {posts && <BlogPostList {...this.props} posts={filtered} />}
        </Paper>
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
