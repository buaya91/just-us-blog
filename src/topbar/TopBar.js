import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import NewPostButton from '../blogpost/update/NewPostButton'
import selector from './topbarSelectors'

@connect(selector)
export default class TopBar extends Component {
  render() {
    const { logged } = this.props
    return (
      <div id="top-bar">
        <span className="link" onClick={() => browserHistory.push('/')}>Home</span>
        <span className="link" onClick={() => browserHistory.push('/about-us')}>About Us</span>
        <NewPostButton {...this.props} showButton={logged} />
      </div>
    )
  }
}

TopBar.propTypes = {
  actions: PropTypes.object.isRequired,
  logged: PropTypes.bool,
  username: PropTypes.string,
}
