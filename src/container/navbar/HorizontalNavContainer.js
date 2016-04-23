import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar'

export default class HorizontalNavContainer extends Component {
  render() {
    const { views, activeView, changeActiveView } = this.props
    const activeComponent = views[activeView].component
    return (
      <div>
        <NavBar
          navs={views.map(v => ({ name: v.name, onClick: changeActiveView }))}
          selected={activeView}
        />
        {activeComponent}
      </div>
    )
  }
}

HorizontalNavContainer.propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
  })),
  activeView: PropTypes.number,
  changeActiveView: PropTypes.func,
}
