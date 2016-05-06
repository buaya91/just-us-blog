import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import selector from './topbarSelectors'

@connect(selector)
export default class TopBar extends Component {
  render() {
    const { actions, logged, username } = this.props
    return (
      <div id="top-bar">
        {
          logged ?
            <span>
              <span>{`Hi ${username || ''}, have a great day !!`}</span>
              <span className="link" onClick={actions.logout}>Log out</span>
            </span> :
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
