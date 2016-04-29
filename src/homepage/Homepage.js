import React, { Component, PropTypes } from 'react'
import Directory from '../directory/Directory'
import BlogPostList from '../blogpost/list/BlogPostList'
import LoginPopUp from '../login/LoginPopUp'

export default class Homepage extends Component {
  render() {
    const { actions, showLoginPopUp } = this.props
    return (
      <div id="homepage">
        <LoginPopUp {...this.props} show={showLoginPopUp} closeLoginPopUp={actions.closeLoginPopUp} />
        <Directory {...this.props} />
        <BlogPostList {...this.props} />
      </div>
    )
  }
}

Homepage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  postDrafts: PropTypes.object.isRequired,
  showLoginPopUp: PropTypes.bool,
  tags: PropTypes.array.isRequired,
}
