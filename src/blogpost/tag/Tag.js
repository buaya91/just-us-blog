import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {
  render() {
    const { onClick, tag } = this.props;
    return <button onClick={() => onClick(tag)} className="tag">{tag}</button>
  }
}

Tag.propTypes = {
  onClick: PropTypes.func,
  tag: PropTypes.string.isRequired,
}
