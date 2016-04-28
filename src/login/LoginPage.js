import React, { Component, PropTypes } from 'react'
import HomepageContainer from '../homepage/HomepageContainer'

export default class LoginPage extends Component {
  render() {
    return <HomepageContainer {...this.props} showLogin />
  }
}
