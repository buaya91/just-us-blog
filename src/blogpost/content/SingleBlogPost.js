import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import BlogPostFull from './BlogPostFull'
import PostEditorPopUp from '../editor/PostEditorPopUp'
import { propsToJS } from '../../common/utils'
import { blogPostListSelector } from '../list/blogPostListSelectors'

import AppBar from 'material-ui/AppBar'

const style = {
  homeIcon: {
    color: 'white',
    fontSize: '2.5rem',
    paddingLeft: '12rem',
    cursor: 'pointer',
  },
}

@connect(blogPostListSelector)
export default class SingleBlogPost extends Component {
  render() {
    const { actions, posts, postDrafts, params, idToShow } = propsToJS(this.props)
    const { pid } = params
    const post = posts[pid]
    if (!post) return null

    const postDraft = postDrafts[pid]

    return (
      <div>
        <AppBar
          title="Home"
          titleStyle={{ cursor: 'pointer' }}
          onTitleTouchTap={() => browserHistory.push('/')}
          onLeftIconButtonTouchTap={() => browserHistory.push('/')}
          iconElementLeft={<i className="material-icons" style={style.homeIcon}>home</i>}
        />
        <PostEditorPopUp
          show={idToShow}
          closePopUp={() => actions.hideUpdatePostEditor(idToShow)}
          postDraft={postDraft}
          updatePostDraft={p => actions.updatePostEditDraft(idToShow, p)}
          submitChange={p => actions.postUpdateRequested(idToShow, p)}
        />
        <BlogPostFull actions={actions} post={post} pid={pid} postDraft={postDraft} />
      </div>
    )
  }
}

SingleBlogPost.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object,
  postDrafts: PropTypes.object,
  params: PropTypes.object.isRequired,
}
