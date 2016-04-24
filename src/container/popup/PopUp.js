import React, { Component, PropTypes } from 'react';

export default class PopUp extends Component {
  render() {
    const { show, children } = this.props
    if (!show) return null;
    return (
      <div className="full-overlay">
        <div className="overlay-content">{children}</div>
      </div>
    )
  }
}

PopUp.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.object,
}
