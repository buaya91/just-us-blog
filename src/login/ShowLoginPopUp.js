import React, { Component, PropTypes } from 'react'
import HomePageContainer from '../homepage/HomepageContainer'

export default class ShowLoginPopUp extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.showLoginPopUp()
  }
  render() {
    return <HomePageContainer {...this.props} />
  }
}

ShowLoginPopUp.propTypes = {
  actions: PropTypes.object.isRequired,
}
