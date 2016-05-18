import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { updatePostButtonSelector } from './blogpost/update/updateSelectors'
import PostEditorPopUp from './blogpost/editor/PostEditorPopUp'
import { Tabs, Tab } from 'material-ui/Tabs';

import Homepage from './homepage/HomepageContainer'
import BlogPostList from './blogpost/list/FilteredBlogPostList'
import LoginPopUp from './login/LoginPopUp'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

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
        <Tabs value={pathname === '/login' ? '/' : pathname}>
          <Tab label="Home" value="/" onActive={() => browserHistory.push('/')} >
            <Homepage actions={actions} />
          </Tab>
          <Tab label="Posts" value="/post" onActive={() => browserHistory.push('/post')} >
            <BlogPostList actions={actions} location={location} />
          </Tab>
        </Tabs>
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
