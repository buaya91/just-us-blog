import React, { Component, PropTypes } from 'react'
import Tag from './Tag'
import AllTag from './AllTag'

export default class TagList extends Component {
  render() {
    const { tags } = this.props

    return (
      <ul className="tag-list">
        <li><AllTag /></li>
        {tags.map(tg =>
          <li>
            <Tag tag={tg} />
          </li>)}
      </ul>
    )
  }
}

TagList.propTypes = {
  tags: PropTypes.array,
}
