import React, { Component, PropTypes } from 'react';
import Tag from './Tag'

export default class TagGroup extends Component {
  render() {
    const { tags, onTagClick } = this.props;
    return (
      <div className="tag-group">
        Tags:
        {tags.map((t, k) => <Tag key={`tag${k}`} tag={t} onClick={onTagClick} />)}
      </div>
    )
  }
}

TagGroup.propTypes = {
  tags: PropTypes.array.isRequired,
  onTagClick: PropTypes.func,
}
