import React, { Component, PropTypes } from 'react';

export default class PopUp extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="full-overlay">
        <div className="overlay-content">{children}</div>
      </div>
    )
  }
}

PopUp.propTypes = {
  children: PropTypes.object,
}
