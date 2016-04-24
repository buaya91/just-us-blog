import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar'

export default class HorizontalNavContainer extends Component {
  render() {
    const { id, views, activeView, changeActiveView } = this.props
    const activeComponent = views[activeView].component
    return (
      <div id={id} className="nav-bar-container">
        <NavBar
          navs={views.map(v => ({ name: v.name, onClick: changeActiveView }))}
          selected={activeView}
        />
        <div className="nav-bar-content">
          {activeComponent}
        </div>
      </div>
    )
  }
}

HorizontalNavContainer.propTypes = {
  id: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
  })),
  activeView: PropTypes.number,
  changeActiveView: PropTypes.func,
}

HorizontalNavContainer.defaultProps = {
  activeView: 0,
}
