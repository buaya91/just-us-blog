import React, { Component, PropTypes } from 'react';
import Tag from './Tag'

export default class TagGroup extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tag-group">
        {tags.map(t => <Tag tag={t} />)}
      </div>
    )
  }
}

TagGroup.propTypes = {
  tags: PropTypes.array.isRequired,
}

TagGroup.defaultProp = {
  tags: [],
}
