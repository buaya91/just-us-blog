import React, { Component, PropTypes } from 'react';
import BlogPost from './BlogPost'
import { arrayOverlap } from '../../common/utils'

const blogpostsFilter = (blogposts, query) => (
  blogposts.filter(p => {
    const { pid, author, tags } = query
    const tagsArr = tags && (Array.isArray(tags) ? tags : [tags])
    const pidMatched = pid ? p.pid === +pid : true
    const authorMatched = pid ? pidMatched : (author ? p.author === author : true)
    const tagsMatched = pid ? pidMatched : (tagsArr ? arrayOverlap(tagsArr, p.tags) : true)

    return pidMatched && authorMatched && tagsMatched
  })
)

export default class BlogPostList extends Component {
  render() {
    const { actions, blogPosts, postDrafts, location } = this.props
    const filteredPost = blogpostsFilter(blogPosts, location.query || {})
    return (
      <div>
        {
          filteredPost.map((p, k) =>
            <BlogPost
              actions={actions}
              post={p}
              postDraft={postDrafts[p.pid]}
              showDraft={postDrafts.show === p.pid}
              key={k}
            />)
        }
      </div>
    )
  }
}

BlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  blogPosts: PropTypes.array.isRequired,
  postDrafts: PropTypes.object.isRequired,
  location: PropTypes.object,
}

BlogPostList.defaultProps = {
  blogPosts: [],
}
