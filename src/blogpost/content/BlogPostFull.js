import React, { Component, PropTypes } from 'react'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'
import TagGroup from '../tag/TagGroup'
import marked from 'marked'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

const style = {
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '3.5rem',
  },
  content: {
    paddingLeft: '12rem',
    paddingRight: '12rem',
    paddingBottom: '2rem',
  },
  sharePanel: {
    position: 'fixed',
    right: '2em',
    bottom: '2em',
    size: 45,         // will be passed to share icon size
  },
}

export default class BlogPostFull extends Component {
  componentWillMount() {
    const { actions, post, pid } = this.props
    actions.updatePostEditDraft(pid, post)
  }

  render() {
    const { post, pid } = this.props
    const { title, author, postAt, tags, content } = post;
    const html = marked(content)
    const subtitle = (
      <span>
        <div>Post at: {postAt}</div>
        <div>Author: {author}</div>
      </span>
    )

    return (
      <div>
        <UpdatePostButton {...this.props} pid={pid} />
        <Card style={style.content}>
          <CardTitle
            title={title}
            subtitle={subtitle}
            titleStyle={style.title}
          />
          <CardText>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
            <TagGroup tags={tags} />
          </CardText>
          <CardActions>
            <SharePanel style={style.sharePanel} url={`${location.host}/post?pid=${pid}`} title="Just Us Blog" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

BlogPostFull.propTypes = {
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
