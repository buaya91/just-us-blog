import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import { Tabs, Tab } from 'material-ui/Tabs';

import Homepage from './homepage/HomepageContainer'
import BlogPostList from './blogpost/list/FilteredBlogPostList'
import LoginPopUp from './login/LoginPopUp'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

export default class AppContent extends Component {
  render() {
    const { actions, location } = this.props
    const { pathname } = location
    return (
      <div>
        <LoginPopUp actions={actions} show={pathname === '/login'} closeLoginPopUp={() => browserHistory.push('/')} />
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
  location: PropTypes.object.isRequired,
}
