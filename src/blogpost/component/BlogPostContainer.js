import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { propsToJS } from '../../common/utils'
import { allBlogPostSelector } from './../BlogPostSelector'
import BlogPostList from './BlogPostList'

@connect(allBlogPostSelector)
export default class BlogPostContainer extends Component {
  render() {
    return (
      <BlogPostList {...propsToJS(this.props)} />
    )
  }
}

