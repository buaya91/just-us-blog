import React, { Component, PropTypes } from 'react'
import TagGroup from '../tag/TagGroup'
import marked from 'marked'

export default class BlogPostContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false,
    }
  }

  render() {
    const { title, content, tags } = this.props
    const { showAll } = this.state
    const html = marked(content)
    const toShow = showAll ? html : html.split('\n').slice(0, 8).join('\n')
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: toShow }}></div>
        {!showAll &&
          <div className="collapse-button" onClick={() => this.setState({ showAll: true })}>
            Show more
          </div>}
        {showAll &&
          <div className="collapse-button" onClick={() => this.setState({ showAll: false })}>Show less</div>}
        <TagGroup tags={tags} />
      </div>
    )
  }
}

BlogPostContent.propTypes = {
  compact: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

BlogPostContent.defaultProps = {
  title: '',
  content: '',
  tags: [],
}
