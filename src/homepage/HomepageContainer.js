import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Homepage from './Homepage'
import { propsToJS } from '../common/utils'
import HomePageSelector from './homepageSelectors'

@connect(HomePageSelector)
export default class HomepageContainer extends Component {
  render() {
    return <Homepage {...propsToJS(this.props)} />
  }
}
