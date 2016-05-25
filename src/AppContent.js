import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './blogpost/update/updateSelectors'
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views'
import Drawer from 'material-ui/Drawer'

import SideMenu from './side-menu/SideMenu'
import NewPostButton from './blogpost/update/NewPostButton'
import BlogPostList from './blogpost/list/FilteredBlogPostList'
import LoginPopUp from './login/LoginPopUp'
import PostEditorPopUp from './blogpost/editor/PostEditorPopUp'
import FontIcon from 'material-ui/FontIcon'

const pathToIndexMapper = {
  '/': 0,
  '/login': 0,
  '/post': 0,
  '/project': 1,
}

const style = {
  drawer: {
    width: '25vw',
  },
  mainContent: {
    width: '75vw',
    position: 'relative',
    left: '25vw',
  },
  inkBar: {
    height: '.3rem',
  },
}

@connect(updatePostButtonSelector)
export default class AppContent extends Component {
  render() {
    const { actions, location, idToShow, postDraft } = this.props
    const { pathname } = location
    const pathIndex = pathToIndexMapper[pathname] || 0

    return (
      <div>
        <LoginPopUp
          actions={actions}
          show={pathname === '/login'}
          closeLoginPopUp={() => browserHistory.push('/post')}
        />
        <PostEditorPopUp
          show={idToShow}
          closePopUp={() => actions.hideUpdatePostEditor(idToShow)}
          postDraft={postDraft && postDraft.toJS()}
          updatePostDraft={post => actions.updatePostEditDraft(idToShow, post)}
          submitChange={post => actions.postUpdateRequested(idToShow, post)}
        />
        <Drawer containerStyle={style.drawer}>
          <SideMenu />
        </Drawer>
        <Tabs value={pathIndex} inkBarStyle={style.inkBar} style={style.mainContent} >
          <Tab
            label="Writing"
            icon={<i className="demo-icon icon-book"></i>}
            value={0}
            onActive={() => browserHistory.push('/post')}
          />
          <Tab
            label="Projects"
            value={1}
            onActive={() => browserHistory.push('/project')}
          />
        </Tabs>
        <SwipeableViews
          index={pathToIndexMapper[pathname]}
          resistance
          style={style.mainContent}
        >
          <BlogPostList actions={actions} location={location} />
          <div style={{ textAlign: 'center' }}>Under Construction ...</div>
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
