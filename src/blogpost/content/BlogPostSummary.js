import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import UpdatePostButton from '../update/UpdatePostButton'
import SharePanel from './../share/SharePanel'
import TagGroup from '../tag/TagGroup'
import marked from 'marked'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import { darkBlack } from 'material-ui/styles/colors'

const style = {
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '3.5rem',
    hover: {
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: '3.5rem',
      textDecoration: 'underline',
      color: darkBlack,
    },
  },
  content: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1rem',
  },
}

const toPost = pid => browserHistory.push(`/post/${pid}`)

export default class BlogPostSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleHover: false,
    }
  }

  componentWillMount() {
    const { actions, post, pid } = this.props
    actions.updatePostEditDraft(pid, post)
  }

  render() {
    const { post, pid } = this.props
    const { title, author, postAt, tags, content } = post;
    const html = marked(content).split('\n').slice(0, 8).join('\n')
    const { titleHover } = this.state

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
            onMouseEnter={() => this.setState({ titleHover: true })}
            onMouseLeave={() => this.setState({ titleHover: false })}
            onClick={() => toPost(pid)}
            titleStyle={titleHover ? style.title.hover : style.title}
          />
          <CardText>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
            <div className="collapse-button" onClick={() => toPost(pid)}>Read more ...</div>
            <TagGroup tags={tags} />
          </CardText>
          <CardActions>
            <SharePanel url={`${location.host}/post?pid=${pid}`} title="Just Us Blog" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

BlogPostSummary.propTypes = {
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

