import React, { Component, PropTypes } from 'react'
import BlogPostContent from './BlogPostContent'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'
import * as colors from 'material-ui/styles/colors'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

const style = {
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '3.5rem',
    color: colors.pink500,
  },
}

export default class BlogPost extends Component {
  componentWillMount() {
    const { actions, post, pid } = this.props
    actions.updatePostEditDraft(pid, post)
  }

  render() {
    const { post, pid } = this.props
    const { title, author, postAt } = post;
    const subtitle = (
      <span>
        <div>Post at: {postAt}</div>
        <div>Author: {author}</div>
      </span>
    )

    return (
      <div>
        <UpdatePostButton {...this.props} pid={pid} />
        <Card>
          <CardTitle
            title={title}
            subtitle={subtitle}
            titleStyle={style.title}
          />
          <CardText>
            <BlogPostContent {...post} />
          </CardText>
          <CardActions>
            <SharePanel url={`${location.host}/post?pid${pid}`} title="Just Us Blog" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

BlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  pid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  postDraft: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
}
