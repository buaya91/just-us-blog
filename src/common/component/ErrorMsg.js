import React, { Component, PropTypes } from 'react'

export default class ErrorMsg extends Component {
  render() {
    return (
      <div className="err-msg">{this.props.children}</div>
    )
  }
}

ErrorMsg.propTypes = {
  children: PropTypes.any,
}
