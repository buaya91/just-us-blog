import React, { Component, PropTypes } from 'react'
import Directory from '../directory/Directory'
import BlogPostList from '../blogpost/list/BlogPostList'
import LoginPopUp from '../login/LoginPopUp'

export default class Homepage extends Component {
  render() {
    const { showLogin, history } = this.props
    return (
      <div id="homepage">
        <LoginPopUp {...this.props} show={showLogin} closeLoginPopUp={() => history.pushState('/')} />
        <Directory {...this.props} />
        <BlogPostList {...this.props} />
      </div>
    )
  }
}

Homepage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  showLogin: PropTypes.bool,
}
