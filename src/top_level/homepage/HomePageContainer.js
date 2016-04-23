import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { homepageSelector } from './homepageSelectors'
import HomePage from './HomePage'
import { propsToJS } from '../../common/utils'

@connect(homepageSelector)
export default class HomePageContainer extends Component {
  render() {
    return (
      <HomePage {...propsToJS(this.props)} />
    )
  }
}
