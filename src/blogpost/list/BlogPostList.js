import React, { Component, PropTypes } from 'react'
import BlogPost from '../content/BlogPost'

import { List, ListItem } from 'material-ui/List'

export default class BlogPostList extends Component {
  render() {
    const { actions, posts, postDrafts } = this.props
    return (
      <div>
        <List>
          {Object.keys(posts).map(pid => {
            const { title, author, content } = posts[pid]
            return (
              <ListItem
                key={pid}
                title={title}
                subtitle={<span>by <b>{author}</b></span>}
              >
                <BlogPost
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
