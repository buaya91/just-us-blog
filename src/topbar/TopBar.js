import React, { Component, PropTypes } from 'react'

export default class TopBar extends Component {
  render() {
    const { actions, logged, username } = this.props
    return (
      <div id="top-bar">
        {
          logged ?
            <span>{`Hi ${username || ''}, have a great day !!`}</span> :
            <span className="link" onClick={actions.showLoginPopUp}>Login</span>
        }
      </div>
    )
  }
}

TopBar.propTypes = {
  actions: PropTypes.object.isRequired,
  logged: PropTypes.bool,
  username: PropTypes.string,
}
