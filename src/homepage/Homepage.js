import React, { Component, PropTypes } from 'react'

export default class Homepage extends Component {
  render() {
    const { actions, showLoginPopUp } = this.props
    return (
      <div>
        
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
