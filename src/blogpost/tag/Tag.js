import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class Tag extends Component {
  render() {
    const { onClick, tag } = this.props;
    return <a onClick={() => onClick(tag)} className="tag">{`#${tag}`}</a>
  }
}

Tag.propTypes = {
  onClick: PropTypes.func,
  tag: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  onClick: tg => browserHistory.push(`/post?tag=${tg}`),
}
