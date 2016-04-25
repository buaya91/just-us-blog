import React, { Component, PropTypes } from 'react'
import TagList from '../../common/components/tag/TagList'
import UpdatePostButton from '../../postdraft/component/UpdatePostButton'

export default class BlogPost extends Component {
  render() {
    const { post } = this.props
    const { author, title, content, pid, postAt, tags } = post;

    return (
      <div className="blogpost">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <div>{`Author: ${author}`}</div>
        <div>{`Post at: ${postAt}`}</div>
        <TagList tags={tags} />
        <UpdatePostButton
          {...this.props}
          pid={pid}
        />
      </div>
    )
  }
}

BlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.shape({
    pid: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
  postDraft: PropTypes.string,
  showDraft: PropTypes.bool,
}
