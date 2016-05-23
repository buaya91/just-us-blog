import React, { Component, PropTypes } from 'react'
import AboutUs from './AboutUsCard'
import AllTagsMenu from './AllTagsMenu'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

export default class SideMenu extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <AboutUs />
        </ListItem>
        <Divider />
        <ListItem>
          <AllTagsMenu />
        </ListItem>
      </List>
    )
  }
}
