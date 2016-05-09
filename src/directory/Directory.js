import React, { Component, PropTypes } from 'react'
import TagGroup from '../blogpost/tag/TagGroup'

export default class Directory extends Component {
  render() {
    const { imgSrc, tags } = this.props
    return (
      <div id="directory">
        <img src={imgSrc} />
        <TagGroup tags={tags} />
      </div>
    )
  }
}

Directory.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

Directory.defaultProps = {
  imgSrc: 'https://s-media-cache-ak0.pinimg.com/236x/e2/e5/31/e2e5315aa1abafb41a600ba2fba6652f.jpg',
}
