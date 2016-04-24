import React, { Component, PropTypes } from 'react';

export default class PopUp extends Component {
  closeWhenClickOutside(e) {
    const { closePopUp } = this.props
    closePopUp()
    e.stopPropagation()
  }

  render() {
    const { show, children } = this.props
    if (!show) return null;
    return (
      <div className="full-overlay" onClick={::this.closeWhenClickOutside}>
        <div className="overlay-content">{children}</div>
      </div>
    )
  }
}

PopUp.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.object,
  closePopUp: PropTypes.func,
}
