import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class AllTag extends Component {
  render() {
    return <span onClick={() => browserHistory.push('/post')} className="tag link">#ALL</span>
  }
}
