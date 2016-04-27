import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import TagGroup from '../blogpost/tag/TagGroup'

export default class Directory extends Component {
  render() {
    const { links, searchTerms, tags } = this.props
    return (
      <div id="directory">
        {links.map((l, k) => React.cloneElement(l, { key: k }))}
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

Directory.defaultProps = {
  links: [
    <Link className="link" to="/">Home</Link>,
    <Link className="link" to="aboutus">About Us</Link>,
  ],
}
