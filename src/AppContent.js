import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './blogpost/update/updateSelectors'
import { Tabs, Tab } from 'material-ui/Tabs';

import Homepage from './homepage/HomepageContainer'
import NewPostButton from './blogpost/update/NewPostButton'
import BlogPostList from './blogpost/list/FilteredBlogPostList'
import LoginPopUp from './login/LoginPopUp'
import PostEditorPopUp from './blogpost/editor/PostEditorPopUp'
import SwipeableViews from 'react-swipeable-views'

const pathToIndexMapper = {
  '/login': 0,
  '/': 0,
  '/post': 1,
}

const style = {
  inkBar: {
    height: '.3rem',
  },
}

@connect(updatePostButtonSelector)
export default class AppContent extends Component {
  render() {
    const { actions, location, idToShow, postDraft } = this.props
    const { pathname } = location
    return (
      <div>
        <LoginPopUp actions={actions} show={pathname === '/login'} closeLoginPopUp={() => browserHistory.push('/')} />
        <PostEditorPopUp
          show={idToShow}
          closePopUp={() => actions.hideUpdatePostEditor(idToShow)}
          postDraft={postDraft && postDraft.toJS()}
          updatePostDraft={post => actions.updatePostEditDraft(idToShow, post)}
          submitChange={post => actions.postUpdateRequested(idToShow, post)}
        />
        <Tabs value={pathname === '/login' ? '/' : pathname} inkBarStyle={style.inkBar} >
          <Tab label="Home" value="/" onActive={() => browserHistory.push('/')} />
          <Tab label="Writing" value="/post" onActive={() => browserHistory.push('/post')} />
        </Tabs>
        <SwipeableViews
          index={pathToIndexMapper[pathname]}
          resistance
        >
          <Homepage actions={actions} />
          <BlogPostList actions={actions} location={location} />
        </SwipeableViews>
        <NewPostButton actions={actions} />
      </div>
    )
  }
}

AppContent.propTypes = {
  actions: PropTypes.object.isRequired,
  idToShow: PropTypes.number,
  location: PropTypes.object.isRequired,
  postDraft: PropTypes.object,
}
