import React, { Component, PropTypes } from 'react';
import Tag from './Tag'

export default class TagList extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tag-list">
        {tags.map((t, k) => <Tag key={`tag${k}`} tag={t} />)}
      </div>
    )
  }
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

TagList.defaultProps = {
  tags: [],
}
