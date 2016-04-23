import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { propsToJS } from '../../common/utils'
import { allBlogPostSelector } from './AllBlogPostSelector'
import AllBlogPost from './AllBlogPost'

@connect(allBlogPostSelector)
export default class AllBlogPostContainer extends Component {
  render() {
    return (
      <AllBlogPost {...propsToJS(this.props)} />
    )
  }
}

