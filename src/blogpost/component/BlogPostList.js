import React, { Component, PropTypes } from 'react';
import BlogPost from './BlogPost'
import { arrayOverlap } from '../../common/utils'

const blogpostsFilter = (blogposts, query) => {
  return blogposts.filter(p => {
    const { pid, author, tags } = query
    const tagsArr = tags && (Array.isArray(tags) ? tags : [tags])
    const pidMatched = pid ? p.pid === +pid : true
    const authorMatched = pid ? pidMatched : (author ? p.author === author : true)
    const tagsMatched = pid ? pidMatched : (tagsArr ? arrayOverlap(tagsArr, p.tags) : true)

    return pidMatched && authorMatched && tagsMatched
  })
}

export default class BlogPostList extends Component {
  render() {
    const { blogposts, location } = this.props
    const filteredPost = blogpostsFilter(blogposts, location.query || {})
    return (
      <div>
        {filteredPost.map((p, k) => <BlogPost post={p} key={k} />)}
      </div>
    )
  }
}

BlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  blogposts: PropTypes.array.isRequired,
  location: PropTypes.object,
}

BlogPostList.defaultProps = {
  blogposts: [],
}
