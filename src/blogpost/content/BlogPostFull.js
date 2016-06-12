import React, { Component, PropTypes } from 'react'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'
import TagGroup from '../tag/TagGroup'
import marked from 'marked'
import HighLight from 'react-highlight'
import DisqusThread from 'react-disqus-thread'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import Snackbar from 'material-ui/Snackbar'

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
  constructor(props) {
    super(props)
    this.state = {
      showSnackbar: false,
    }
  }

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

    const fontFamily = author == 'Suhui' ? 'Comic Sans MS, sans-serif' : 'Roboto, sans-serif'
    const cardStyle = Object.assign({ fontFamily }, style.content)

    return (
      <div>
        <UpdatePostButton {...this.props} pid={pid} />
        <Card style={cardStyle}>
          <CardTitle
            title={title}
            subtitle={subtitle}
            titleStyle={style.title}
          />
          <CardText>
            <HighLight className="post-content scala js" innerHTML>
              {html}
            </HighLight>
            <TagGroup tags={tags} />
            <DisqusThread
              shortname="just-usxyz"
              identifier={`post${pid}`}
              title={title}
              onNewComment={() => this.setState({ showSnackbar: true })}
            />
          </CardText>
          <CardActions>
            <SharePanel style={style.sharePanel} url={`${location.host}/post/${pid}`} title="Just Us Blog" />
          </CardActions>
        </Card>
        <Snackbar
          open={this.state.showSnackbar}
          message="Comment added"
          autoHideDuration={2000}
          onRequestClose={() => this.setState({ showSnackbar: false })}
        />
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
