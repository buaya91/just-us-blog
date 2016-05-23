import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { tagsSelector } from '../homepage/homepageSelectors'
import Tag from '../blogpost/tag/Tag'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

@connect(state => ({ tags: tagsSelector(state).toJS() }))
export default class SideMenu extends Component {
  render() {
    const { tags } = this.props
    return (
      <Menu>
        <MenuItem onClick={() => browserHistory.push('/post')}>
          <Tag tag="All" />
        </MenuItem>
        {tags.map(tg => (
            <MenuItem key={tg} onClick={() => browserHistory.push(`/post?tag=${tg}`)}>
              <Tag tag={tg} />
            </MenuItem>
          )
        )}
      </Menu>
    )
  }
}

SideMenu.propTypes = {
  tags: PropTypes.array.isRequired,
}
