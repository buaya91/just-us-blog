import React, { Component, PropTypes } from 'react'
import PopUp from '../container/popup/PopUp'
import LoginForm from './LoginForm'

export default class LoginPopUp extends Component {
  render() {
    const { actions, show, closeLoginPopUp } = this.props
    return (
      <PopUp show={show} closePopUp={closeLoginPopUp}>
        <LoginForm {...this.props} login={actions.loginRequested} />
      </PopUp>
    )
  }
}

LoginPopUp.propTypes = {
  show: PropTypes.bool,
  actions: PropTypes.object.isRequired,
  closeLoginPopUp: PropTypes.func,
}
