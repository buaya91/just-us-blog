import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

import FlatButton from 'material-ui/FlatButton'

const style = {
  textAlign: 'left',
  label: {
    paddingLeft: '0.3rem',
  },
}

export default class Tag extends Component {
  render() {
    const { onClick, tag } = this.props;
    return (
      <FlatButton
        style={style}
        labelStyle={style.label}
        onClick={() => onClick(tag)}
        label={tag}
        icon={<i className="material-icons">label</i>}
        secondary
      />
    )
  }
}

Tag.propTypes = {
  onClick: PropTypes.func,
  tag: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  onClick: tg => browserHistory.push(`/post?tag=${tg}`),
}
