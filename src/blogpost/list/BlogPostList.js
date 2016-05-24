import React, { Component, PropTypes } from 'react'
import BlogPostSummary from '../content/BlogPostSummary'

import { List, ListItem } from 'material-ui/List'

const style = {
  display: 'flex',
  flexDirection: 'column-reverse',
}

export default class BlogPostList extends Component {
  render() {
    const { actions, posts, postDrafts } = this.props
    return (
      <div>
        <List style={style}>
          {Object.keys(posts).map(pid => {
            const { title, author, content } = posts[pid]
            return (
              <ListItem
                key={pid}
                title={title}
                subtitle={<span>by <b>{author}</b></span>}
              >
                <BlogPostSummary
                  key={pid}
                  actions={actions}
                  pid={pid}
                  post={posts[pid]}
                  postDraft={postDrafts[pid]}
                />
              </ListItem>
            )}
          )}
        </List>
      </div>
    )
  }
}

BlogPostList.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
}
