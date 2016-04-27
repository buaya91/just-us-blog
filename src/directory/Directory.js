import React, { Component, PropTypes } from 'react'
import TagGroup from '../blogpost/tag/TagGroup'

export default class Directory extends Component {
  render() {
    const { links, searchTerms, tags } = this.props
    return (
      <div id="directory">
        {links}
        <TagGroup tags={tags} />
      </div>
    )
  }
}

Directory.propTypes = {
  links: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  searchTerms: PropTypes.array,
  onTagClick: PropTypes.func,
}
